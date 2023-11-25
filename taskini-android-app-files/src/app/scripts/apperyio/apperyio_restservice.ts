import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import * as X2js from 'x2js';
import { ApperyioXMLHelper } from './apperyio_xml2js';
import { ApperyioConfigService } from './config_service';
import { EntityApiService } from './entityapi_service';
import { IGNORED_VALUE } from '../constants';

var xmlStr2json = ApperyioXMLHelper.xmlStr2json;

var inst = new X2js({});
var json2xmlStr = inst.js2xml.bind(inst);

function parsePath(path, data) {
  let parts = path.split(".");
  let res = data[parts[0]];
  let i = 1;
  while (res && i < parts.length) {
    res = res[parts[i]];
    i++;
  }
  return res;
}

function transform2form(obj) {
  var str = [];
  for (var key in obj) {
    if (obj[key] instanceof Array) {
      for (var idx in obj[key]) {
        var subObj = obj[key][idx];
        for (var subKey in subObj) {
          str.push(encodeURIComponent(key) + "[" + idx + "][" + encodeURIComponent(subKey) +
            "]=" + encodeURIComponent(subObj[subKey]));
        }
      }
    } else {
      str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
  }
  return str.join("&");
};

/**
 * Check is there any files for upload
 * @param  {Object} request Request object
 *
 * @return {Boolean}         Result of checking. `True` if request contain files.
 */
function filesInRequest(request) {
  var result = request.aio_config && request.aio_config.requestType && request.aio_config
    .requestType.toLowerCase() == 'data';
  var data = request.data || {};
  if (Array.isArray(data)) {
    for (var i = 0, l = data.length; i < l; i++) {
      result = data[i] instanceof Blob;
      if (result) break;
    }
  } else {
    result = data instanceof Blob || data instanceof FormData || data instanceof FileList;
  }
  return result;
};

/**
 * Add File to FormData variable
 *
 * @param  {FormData} formData FormData instance
 * @param  {File|FileList} item File instance or FileList
 */
function appendItem(formData, item) {
  if (item) {
    if (item instanceof FileList) {
      for (var i = 0; i < item.length; i++) {
        appendItem(formData, item[i]);
      }
      return;
    }
    var name;
    if (item.name) {
      name = item.name;
    }
    formData.append(name, item);
  }
};

/**
 * Adjust request for uploading files.
 * For multiple files, also set (define) Content-Type to undefined
 *
 * @param  {Object} r request object (method modify argument)
 */
function adjustRequest4Files(r) {
  if (r.data instanceof FormData) {
    // If Content-Type was set, then use it, otherwise init property with undefined
    r.headers['Content-Type'] = r.headers['Content-Type'];
    return;
  }

  var formData = new FormData();

  if (r.data instanceof File) {
    r.data = [r.data];
  }

  if (Array.isArray(r.data) || r.data instanceof FileList) {
    r.headers['Content-Type'] = undefined;
    for (var i = 0, l = r.data.length; i < l; i++) {
      appendItem(formData, r.data[i]);
    }
  } else {
    r.headers['Content-Type'] = r.headers['Content-Type'] || r.data.type;
    return;
  }
  r.data = formData;
}

/**
  * Generate URL after parsing {template.entities} from system settings
  * @param  {String} template URL-template
  * @return {String}          URL-string
  */
/**
 * Generate URL after running {template.entities} as function
 * @param  {Function} template URL-template function
 * @return {String}          URL-string
 */
function url(template: string | Function, options: object, allConfigData: object) {
  options = options ? { ...options, ...allConfigData } : { ...allConfigData }; //clone( arguments[ 1 ] || {}, true ),
  var R = /\{([\w\d_\$\.]+?)\}/,
    m = [],
    tmp = '',
    value;
  if (typeof template === "function") {
    return template.call(this, options);
  }
  m = template.match(R);
  tmp = template;
  while (m) {
    value = parsePath(m[1], options);
    if (value != undefined) {
      template = template.replace(m[0], value);
      tmp = template;
    } else {
      tmp = template.replace(m[0], m[0].replace('}', '\t\t}')); // mark processed bad expression
      template = tmp.concat('');
    }
    m = tmp.match(R);
  }
  if (value && value.toString() == template && ['number', 'boolean'].indexOf(typeof value) > -1) {
    template = value;
  } else if (typeof template == 'string') {
    template = template.replace(/\t\t\}/g, '}');
  }

  return template;
}
/**
 * Recursive parser for settings-objects. Invoke object properties and expand templates entries in value
 * @param  {Object} obj Settings object
 * @param  {Object} options OPTIONAL argument as additional dictionary for searching replaces
 * @return {Object}     Settings object
 */
export function paramsParse(obj, options, allConfigData) {
  var options = arguments[1] || {},
    result = {};
  if (typeof obj === "string" || typeof obj === "function") {
    return url(obj, options, allConfigData)
  }
  if (typeof obj === "boolean" || obj === null ||
    obj instanceof File || obj instanceof FileList || obj instanceof FormData ||
    obj instanceof Blob || obj instanceof ArrayBuffer || typeof obj === "number" ||
    typeof obj === "undefined") {
    result = obj;
  } else {
    if (Array.isArray(obj)) {
      result = [];
    }
    var props = Object.keys(obj);
    props = props.filter(function (k) {
      return obj[k] !== IGNORED_VALUE
    })
    props.forEach(function (k) {
      result[k] = paramsParse(obj[k], options, allConfigData)
    })
  }
  return result;
}


@Injectable()
export class ApperyioRestService {
  constructor(private http: HttpClient, private ConfigService: ApperyioConfigService, private EntityAPI: EntityApiService) {
  }

  private prepareRequestData(exec_request) {
    var request: any = {},
      props,
      allConfigData = this.ConfigService.all() || {};

    request = exec_request;

    var $$request = paramsParse(request, request, allConfigData);

    var url = request.url;
    if (request.hasOwnProperty('headers') && request.headers && request.headers.hasOwnProperty('appery-proxy-url')) {
      url = request.headers['appery-proxy-url'];
    }
    if (request.hasOwnProperty('data') && request.data) {
      $$request = paramsParse($$request, request.data, allConfigData);
      props = Object.keys(request.data);
      props.forEach(function (k) {
        if (url.indexOf('{' + k + '}') > -1) {
          delete $$request.data[k];
        }
      })
    }
    if (request.hasOwnProperty('params') && request.params) {
      props = Object.keys(request.params);
      props.forEach(function (k) {
        if (url.indexOf('{' + k + '}') > -1) {
          delete $$request.params[k];
        }
      })
      $$request = paramsParse($$request, request.params, allConfigData);
    }
    if (request.hasOwnProperty('query') && request.query) {
      props = Object.keys(request.query);
      props.forEach(function (k) {
        if (url.indexOf('{' + k + '}') > -1) {
          delete $$request.query[k];
        }
      })
      $$request = paramsParse($$request, request.query, allConfigData);
    }

    if (filesInRequest($$request)) {
      adjustRequest4Files($$request);
    }

    return $$request;
  }

  private sendRequest(request) {
    var reqOpts: any = {};
    if (request.params) {
      reqOpts.params = new HttpParams({ fromObject: request.params });
    }
    if (request.headers) {
      var headers = {};
      for (var key in request.headers) {
        if (request.headers[key] !== undefined) {
          headers[key] = request.headers[key];
        }
      }
      reqOpts.headers = new HttpHeaders(headers);
    }
    if (request.aio_config && request.aio_config.responseType) {
      switch (request.aio_config.responseType.toLowerCase()) {
        case "xml":
          reqOpts.responseType = "text"
          break;
        case "binary":
          reqOpts.responseType = "arraybuffer"
          break;
      }
    }
    if (request.aio_config && request.aio_config.requestType) {
      switch (request.aio_config.requestType.toLowerCase()) {
        case 'xml':
          {
            request.data = json2xmlStr(request.data);
            break;
          }
        case 'x-www-form-urlencoded':
          {
            request.data = transform2form(request.data);
            break;
          }
      }
    }
    if (request.aio_config.responseType === 'jsonp') {
        let url = request.url.indexOf("?") === -1 ? request.url + "?" : request.url;
        return this.http.jsonp(url + reqOpts.params.toString(), "callback");
    }
    switch (request.method.toLowerCase()) {
      case "post":
        return this.http.post(request.url, request.data || {}, reqOpts);
      case "put":
        return this.http.put(request.url, request.data || {}, reqOpts);
      case "patch":
        return this.http.patch(request.url, request.data || {}, reqOpts);
      case "delete":
        if ((request.data === 0 || request.data === false) 
            || (request.data && request.data.constructor !== Object)
            || (request.data && request.data.constructor === Object && Object.keys(request.data).length > 0)
          ) {
          reqOpts.body = request.data
        }
        return this.http.delete(request.url, reqOpts);
      default:
        return this.http.get(request.url, reqOpts);
    }
  }

  run(request?: any) {
    var aioConfig: any;

    if (request.hasOwnProperty('aio_config') && request.aio_config) {
      aioConfig = request.aio_config;
    }

    if (request.hasOwnProperty('echo') && request.echo) {
      var echo_data = request.echo;
      try {
        if (aioConfig) {
          if (aioConfig.responseType && aioConfig.responseType.toLowerCase() == 'xml') {
            echo_data = xmlStr2json(request.echo);
          }
          if (aioConfig.responseType && aioConfig.responseType.toLowerCase() == 'json') {
            echo_data = JSON.parse(request.echo);
          }
        }
      } catch (e) {
        echo_data = "Error while parsing echo data";
      }
      if (request.hasOwnProperty('transformResponse') && typeof request.transformResponse === "function") {
        echo_data = request.transformResponse.call(null, echo_data) || echo_data;
      }
      return new Observable((observer) => {
        observer.next(echo_data);
        observer.complete();
      })
    }

    var $$request = this.prepareRequestData(request);
    return this.sendRequest($$request).map((res:any) => {
      if (request.hasOwnProperty('aio_config') && request.aio_config && request.aio_config.hasOwnProperty('responseType')) {
        if (request.aio_config.responseType === 'xml') {
          res = xmlStr2json(res);
          if (request.aio_config.hasOwnProperty('serviceName')) {
            var response_model_name = request.aio_config.serviceName + '.response.body';
            var res = this.EntityAPI.get(response_model_name, res);
            return res[Object.keys(res)[0]];
          }
        }
        if (request.aio_config.responseType === 'binary') {
          var uarr = new Uint8Array(res)
          var strings = [], chunksize = 0xffff;
          var len = uarr.length;
          for (var i = 0; i * chunksize < len; i++) {
            strings.push(String.fromCharCode.apply(null, uarr.subarray(i * chunksize, (i + 1) * chunksize)));
          }
          return strings.join('');
        }
      }
      return res;
    });
  }

}
