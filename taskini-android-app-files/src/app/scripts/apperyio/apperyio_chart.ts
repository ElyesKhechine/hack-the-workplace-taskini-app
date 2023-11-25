import { Chart } from 'chart.js';
import _ from "lodash";

if(Chart) {
  const drawController = {
    "draw": function() {
      const meta = this.getMeta(),
        elements = meta.data || [];

      if (meta.dataset) {
        meta.dataset.draw();
      }

      elements.forEach(element => {
        const vm = element._view;

        if(vm) {
          vm.innerRadius = vm.innerRadius < 0 ? 0 : vm.innerRadius;
          vm.outerRadius = vm.outerRadius < 0 ? 0 : vm.outerRadius;
        }

        element.draw();
      });
    }
  };

  Chart.controllers.polarArea = Chart.controllers.polarArea.extend(drawController);
  Chart.controllers.pie = Chart.controllers.pie.extend(drawController);
  Chart.controllers.doughnut = Chart.controllers.doughnut.extend(drawController);
}

function generateColors(dataLength=0, alpha=0.8) {
  let iterationCount = Math.trunc(dataLength/12) || 1,
    stepCount = Math.trunc(127/iterationCount),
    stepToDown = Math.trunc(255/iterationCount),
    colorArray = [],
    colorStringGenerator = (r, g, b, alpha) => {
      return `rgba(${r} ,${g} ,${b} ,${alpha})`;
    };

  let j = 0,
    color,
    loopLevel=0,
    stepToLeft = 0,
    stepDownValue = 0;

  for (let i = 0; i < dataLength; i++) {
    if (j > 11) {
      j = 0;
      loopLevel++;
      stepToLeft = loopLevel*stepCount;
      stepDownValue = loopLevel*stepToDown;
    }

    switch (j) {
      case 0:
        color = colorStringGenerator(255, 0 + stepToLeft , 0 + stepDownValue, alpha);
        break;
      case 1:
        color = colorStringGenerator(255, 128 + stepToLeft , 0 + stepDownValue, alpha);
        break;
      case 2:
        color = colorStringGenerator(255 - stepToLeft , 255, 0 + stepDownValue, alpha);
        break;
      case 3:
        color = colorStringGenerator(128 - stepToLeft , 255 , 0 + stepDownValue, alpha);
        break;
      case 4:
        color = colorStringGenerator(0 + stepDownValue, 255, 0 + stepToLeft , alpha);
        break;
      case 5:
        color = colorStringGenerator(0 + stepDownValue, 255, 128 + stepToLeft , alpha);
        break;
      case 6:
        color = colorStringGenerator(0 + stepDownValue, 255 - stepToLeft , 255, alpha);
        break;
      case 7:
        color = colorStringGenerator(0 + stepDownValue, 128 - stepToLeft , 255, alpha);
        break;
      case 8:
        color = colorStringGenerator(0 + stepToLeft , 0 + stepDownValue, 255, alpha);
        break;
      case 9:
        color = colorStringGenerator(128 + stepToLeft , 0 + stepDownValue, 255, alpha);
        break;
      case 10:
        color = colorStringGenerator(255, 0 + stepDownValue, 255 - stepToLeft , alpha);
        break;
      case 11:
        color = colorStringGenerator(255, 0 + stepDownValue, 128 - stepToLeft , alpha);
        break;
    }

    colorArray.push(color);            
    j++;
  }

  return colorArray;
}

function generateDefaultLabels(dataLength = 0) {
  let newLabels = [];

  for (let i = 0; i < dataLength; ++i) {
    newLabels.push(i + '');
  }

  return newLabels;
}

export class ApperyioChart {
  private aioChartObject: aioChartInit = {};
  private isChartInit: boolean = false;

  constructor(aioChartElementId: string, aioChartElement: any, aioInitChartObject: aioInitChartObject, isAutoInit: boolean = true) {
    this.saveChartInitObject(aioInitChartObject, aioChartElementId, aioChartElement);
    
    if (isAutoInit) {
      this.init();
    }
  }

  private legendOnClick (e, legendItem) {
    const chart = this["chart"];

    if (chart) {
      let index = legendItem.index, i, ilen, meta;

      for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
        meta = chart.getDatasetMeta(i);
        // toggle visibility of index if exists
        if (meta && meta.data && Array.isArray(meta.data) && meta.data.length && meta.data[index]) {
          meta.data[index].hidden = !meta.data[index].hidden;
        }
      }

      chart.update();
    }
  }

  private generateLabels (chart) {
    const data = chart.data,
      labels = data.labels || [],
      datasets = data.datasets || [];

    if (labels.length && datasets.length) {
      let index = 0,
        length = 0,
        meta = chart.getDatasetMeta(0);
      datasets.forEach((item, i) => {
        if (Array.isArray(item.data) && item.data.length > length) {
          index = i;
          length = item.data.length; 
        }
      });
      meta = chart.getDatasetMeta(index);

      return labels.map(function(label, i) {
        const style = meta.controller.getStyle(i);
        return {
          text: label,
          fillStyle: style.backgroundColor,
          strokeStyle: style.borderColor,
          lineWidth: style.borderWidth,
          hidden: isNaN(datasets[index].data[i]) || meta.data[i].hidden,

          // Extra data used for toggling the correct item
          index: i
        };
      });
    }

    return [];
  }

  private chartLegendFilter (itemLabel: any, chartData: any) {
    const datasets = (chartData && chartData.datasets) || [];

    if (itemLabel && datasets.length && typeof itemLabel.datasetIndex === "number") {
      const datasetItem = datasets[itemLabel.datasetIndex],
      data = datasetItem ? datasetItem.data : "";

      if (Array.isArray(data) && data.length) {
        return itemLabel;
      }
    }

    return null;
  };

  private saveChartInitObject(aioInitChartObject: aioInitChartObject, aioChartElementId?: string, aioChartElement?: any) {
    if (aioChartElementId && aioChartElement) {
      this.aioChartObject.chartElementId = aioChartElementId;
      this.aioChartObject.chartElement = aioChartElement;
      this.aioChartObject.chartContex = aioChartElement.nativeElement.getContext('2d');
    }

    if (aioInitChartObject && aioInitChartObject.data) {
      let dataMaxLength = 0,
        alpha = 0.8,
        data = aioInitChartObject.data,
        isLabelsExist = data.labels && data.labels.length,
        commonType = aioInitChartObject.type;

      data.datasets.forEach((item) => {
        let dataLength = item.data.length,
          itemType = item.type || commonType;

        if (dataLength > dataMaxLength) {
          dataMaxLength = dataLength;
        }

        if (['line', 'radar'].includes(itemType)) {
          dataLength = 1;
          alpha = 0.2;

          if (!item.borderColor && !item.fill) {
            item.borderColor = "rgba(255, 0, 0 ,0.8)";
          }
        }

        if (!item.backgroundColor || Array.isArray(item.backgroundColor) && item.backgroundColor.length < dataLength) {
          item.backgroundColor = generateColors(dataLength, alpha);
        }
      });

      data.labels = isLabelsExist ? data.labels : generateDefaultLabels(dataMaxLength);
    }

    if (!this.aioChartObject.originalChartData) {
      this.aioChartObject.originalChartData = aioInitChartObject;
    }
  }

  private init(chartConfig?: aioInitChartObject) {
    let aioChartObject = this.aioChartObject,
      isRadiusElement = false;

    if (aioChartObject && aioChartObject.chartElement) {
      let element = aioChartObject.chartElement.nativeElement ,
        configurations = chartConfig || aioChartObject.originalChartData || {};

      if (this.aioChartObject.chart) {
        this.destroyChart();
      }

      if (configurations) {
        const type = configurations ? configurations.type : "",
          options = configurations["options"] || (configurations["options"] = {}),
          legend = options["legend"]  || (options["legend"] = {}),
          labels = legend["labels"]  || (legend["labels"] = {});

        isRadiusElement = ["doughnut", "pie", "polarArea"].includes(type);

        if (isRadiusElement) {
          if (!labels["generateLabels"]) {
            labels["generateLabels"] = this.generateLabels;
          }
          if (!legend["onClick"]) {
            legend["onClick"] = this.legendOnClick;
          }
        } else if (!labels["filter"]) {
          labels["filter"] = this.chartLegendFilter;
        }
      }

      this.isChartInit = true;

      const _chart = this.aioChartObject.chart = new Chart( element, _.cloneDeep(configurations)),
        scale = isRadiusElement && (_chart || {}).scale;

      if(scale && scale.getDistanceFromCenterForValue) {
        scale.getDistanceFromCenterForValue = (function() {
          const selfGetDistanceFromCenterForValue = scale.getDistanceFromCenterForValue;
          
          return function(value) {
            const result = selfGetDistanceFromCenterForValue.call(this, value);
            return result < 0 ? 0 : result;
          };
        })();
      }
    }
  }

  private aioUpdateChart () {
    if (this.isChartSet()) {
      this.aioChartObject.chart.update();
    }
  }

  private updateObjects (obj, chartFields, startIndex?: number) {
    let type = Array.isArray(obj) ? 'array' : (
      (obj && (typeof obj === 'object')) ? 'object' : ''
    );

    switch (type) {
      case 'array': {
        let length = startIndex ? chartFields.length - startIndex : chartFields.length;

        obj.forEach( (item, index) => {
          let currentIndex = startIndex ? startIndex + index : index; 
          
          if (index < length) {
            chartFields[currentIndex] = this.updateObjects( item, chartFields[currentIndex]);
          } else {
            chartFields.push(item);
          }
        });

        break;
      }

      case 'object': {
        for(let key in obj) {
          if (obj.hasOwnProperty(key) && !key.includes('_', 0)) {
            chartFields[key] = this.updateObjects(obj[key], chartFields[key]);
          }
        }

        break;
      }

      default:
        return obj;
    }

    return chartFields;
  }

  private isChartSet() {
    return (this.aioChartObject && this.aioChartObject.chart) ? true : false;
  }

  isAioIChartInit () {
    return this.isChartInit;
  }

  getElementId () {
    return this.aioChartObject ? this.aioChartObject.chartElementId : null;
  }

  getElement () {
    return this.aioChartObject ? this.aioChartObject.chartElement : null;
  }

  getChart () {
    return this.aioChartObject ? this.aioChartObject.chart : null;
  }

  getOriginalData () {
    return this.aioChartObject ? _.cloneDeep(this.aioChartObject.originalChartData) : null;
  }

  getChartObject () {
    return this.aioChartObject ? this.aioChartObject : null;
  }

  updateChart (callback) {
    if (this.isChartSet()) {
      let chart = this.aioChartObject.chart;

      if (callback) {
        callback(chart);

        this.aioUpdateChart();

        if (!this.aioChartObject || !this.aioChartObject.chart) {
          this.isChartInit = false;
        }
      }
    }
  }

  destroyChart () {
    if (this.isChartSet()) {
      this.aioChartObject.chart.destroy();

      delete this.aioChartObject.chart;

      this.isChartInit = false;
    }
  }

  initChart (chartConfig?: aioInitChartObject, joinWithConfig?:boolean) {
    if(joinWithConfig) {
      chartConfig = this.aioChartObject.originalChartData = _.merge(this.aioChartObject.originalChartData || {}, chartConfig);
    }

    this.saveChartInitObject(chartConfig);
    this.init(chartConfig);
  }

  //------------------------------------------------------------------------------------------------------
  getIndex(index, length, isFromEnd?) {
    if(_.isUndefined(index)) return;

    if(index < length) {
      return isFromEnd ? length - index -1 : index;
    } else {
      return isFromEnd ? 0 : length-1;
    }
  }
  //----------------------------------- Options -------------------------------------------------------------------
  updateChartOptions (options) {
    if (this.isChartSet()) {
      const chart = this.aioChartObject.chart.options,
        customOptions = options.customOptions;

      if(options.chartOptions) {
        _.each(options.chartOptions, (item) => {
          _.set(chart, item.path, item.value);
        });
      }

      if(customOptions) {
        this.aioChartObject.chart.options = _.merge(chart, customOptions)
      }

      //this.updateObjects(options, chart);
      this.aioUpdateChart();
    }
  }

  resetChartOptions (options) {
    if (this.isChartSet()) {
      const chart = this.aioChartObject.chart.options,
        customOptions = options.customOptions;

      _.each(options.chartOptions || [], (item) => {
        _.unset(chart, item.path);
      });

      if(customOptions) {
        _.unset(chart, _.keys(customOptions));
      }

      //this.updateObjects(options, chart);
      this.aioUpdateChart();
    }
  }
  //------------------------------------------- Labels -----------------------------------------------------------
  updateChartLabels (labels,options: aioEventOptions) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        chartLabels = chartData.labels,
        labelsLength = chartLabels.length,
        isIndex = _.isNumber(options.index),
        _index = isIndex ? options.index : labelsLength,
        labelIndex = this.getIndex(_index, labelsLength, options.isFromEnd);

      if(_.isFunction(labels)) {
        labels = labels(this.aioChartObject.chart);
      } else {
        labels = _.isArray(labels) ? _.cloneDeep(labels) : [labels];
      }

      if(isIndex && labelsLength) {
        const lastIndex = labelIndex + labels.length;
        
        chartData.labels = _.concat(chartLabels.slice(0, labelIndex), labels, chartLabels.slice(lastIndex, labelsLength));
      } else {
        chartData.labels = labels;
      }

      this.aioUpdateChart();
    }
  }

  addChartLabels (labels,options: aioEventOptions) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        chartLabels = chartData.labels,
        labelsLength = chartLabels.length,
        labelIndex = this.getIndex(options.index, labelsLength, options.isFromEnd);

      if(_.isArray(labels)) labels = _.cloneDeep(labels);

    if(_.isFunction(labels)) {
      labels = labels(this.aioChartObject.chart);
    } else if(_.isArray(labels)) {
      labels = _.cloneDeep(labels)
    }

      if (_.isNumber(labelIndex) && labelsLength) {
        chartData.labels = _.concat(chartLabels.slice(0, labelIndex), labels, chartLabels.slice(labelIndex, labelsLength));
      } else {
        chartData.labels = _.concat(chartLabels, labels);
      }

      this.aioUpdateChart();
    }
  }

  removeChartLabels (options: aioEventOptions) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        labelsLength = chartData.labels.length,
        labelIndex = this.getIndex(options.index, labelsLength, options.isFromEnd);

      if (_.isNumber(labelIndex)) {
        chartData.labels.splice(labelIndex, 1);
      } else {
        chartData.labels = [];
      }

      this.aioUpdateChart();
    }
  }
  //--------------------------------------- Datasets ---------------------------------------------------------------
  updateChartDatasets (options) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        chartDatasets = chartData.datasets,
        datasetsLength = chartDatasets.length,
        datasetOptions = options.datasetOptions,
        _index = _.isNumber(options.index) ? options.index : datasetsLength,
        datasetIndex = this.getIndex(_index, datasetsLength, options.isFromEnd);

      let datasets = options.datasets || '';

      if(_.isFunction(datasets)) {
        datasets = datasets(this.aioChartObject.chart);
      } else if(datasets) {
        datasets = _.cloneDeep(datasets);
      }

      if(datasetsLength) {
        _.each(datasetOptions || [], (item) => {
          const value = _.isFunction(item.value) ? item.value() : item.value;
          _.set(chartDatasets[datasetIndex], item.path, value);
        });

        if(datasets) {
          if(_.isArray(datasets)) {
            for(let i=datasetIndex, j=0; i<datasetsLength; ++i, ++j) {
              if(j == datasets.length) break;

              chartData.datasets[i] = _.assign(chartDatasets[i], datasets[j]);
            }
          } else {
            chartData.datasets[datasetIndex] = _.assign(chartDatasets[datasetIndex], datasets);
          }
        }
      }  

      this.aioUpdateChart();
    }
  }

  addChartDatasets (options) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        chartDatasets = chartData.datasets,
        datasetsLength = chartDatasets.length,
        datasetOptions = options.datasetOptions;

      let index = this.getIndex(options.index, datasetsLength, options.isFromEnd),
        datasets = options.datasets; 

      if(datasets || datasetOptions) {
        const datasetOptionsObj = {};
        datasets = _.isFunction(datasets) ? datasets(this.aioChartObject.chart) : datasets || {};

        _.each(datasetOptions || [], (item) => {
          const value = _.isFunction(item.value) ? item.value() : item.value;
          _.set(datasetOptionsObj, item.path, value);
        });

        if(_.isArray(datasets)) {
          datasets[0] = _.merge(datasetOptionsObj, datasets[0]);
          datasets = _.cloneDeep(datasets);
        } else {
          datasets = _.merge(datasetOptionsObj, _.cloneDeep(datasets));
        }

        if(_.isNumber(index)) {
          chartData.datasets = _.concat(chartDatasets.slice(0, index), datasets, chartDatasets.slice(index, datasetsLength));
        } else {
          chartData.datasets = _.concat(chartDatasets, datasets);
        }
      }

      this.aioUpdateChart();
    }
  }

  removeChartDatasets (options) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        datasets = chartData.datasets,
        datasetsLength = datasets.length,
        datasetOptions = options.datasetOptions,
        index = this.getIndex(options.index, datasetsLength, options.isFromEnd);

      if(datasetsLength) {
        if(datasetOptions) {
          const datasetsIndex = _.isNumber(index) ? index : datasetsLength-1;
          
          _.each(datasetOptions, (item) => {
            _.unset(datasets[datasetsIndex], item.path);
          });
        } else {
          if (_.isNumber(index)) {
            chartData.datasets.splice(index, 1);
          } else {
            chartData.datasets = [];
          }
        }
      }  

      this.aioUpdateChart();
    }
  }
  //-------------------------------------------- Multi labels ----------------------------------------------------------
  updateChartMultilineLabel (labels, options) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        chartLabels = chartData.labels,
        labelsLength = chartLabels.length,
        _index = _.isNumber(options.index) ? options.index : labelsLength,
        index = this.getIndex(_index, labelsLength, options.isFromEnd);

      if(_.isFunction(labels)) {
        labels = labels(this.aioChartObject.chart);
      } else if(_.isArray(labels)) {
        labels = _.cloneDeep(labels);
      }

      if(labelsLength && chartLabels[index].length) {
        const multiLine = chartLabels[index];

        if(_.isArray(multiLine)) {
          const multilineLength = multiLine.length,
          itemIndex = this.getIndex(options.itemIndex, multilineLength, options.isItemFromEnd);

          if(_.isNumber(itemIndex)) {
            const customLabelsLength = labels.length || 0,
              lastIndex = _.isArray(labels) && customLabelsLength ? itemIndex + customLabelsLength : itemIndex + 1;

            chartData.labels[index] = _.concat(multiLine.slice(0, itemIndex), labels, multiLine.slice(lastIndex, multilineLength));
          } else {
            chartData.labels[index] =  _.isArray(labels) ? labels : _.concat(multiLine.slice(0, multilineLength-1), labels);
          }
        } else if(_.isString(multiLine)) {
          if(options.itemIndex) {
            chartData.labels[index] = _.isArray(labels) ? _.concat(labels, multiLine)  : [labels, multiLine];
          } else {
            chartData.labels[index] = _.isArray(labels) ? labels : [labels];
          }
        }
      }

      this.aioUpdateChart();
    }
  }

  addChartMultilineLabel (labels, options) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        chartLabels = chartData.labels,
        labelsLength = chartLabels.length,
        _index = _.isNumber(options.index) ? options.index : labelsLength,
        index = this.getIndex(_index, labelsLength, options.isFromEnd);

      if(_.isFunction(labels)) {
        labels = labels(this.aioChartObject.chart);
      } else if(_.isArray(labels)) {
        labels = _.cloneDeep(labels);
      }

      if(labelsLength) {
        if(_.isArray(chartLabels[index])) {
          const multiLine = chartLabels[index],
            multilineLength = multiLine.length,
            itemIndex = this.getIndex(options.itemIndex, multilineLength, options.isItemFromEnd);

          if(_.isNumber(itemIndex)) {
            chartData.labels[index] = _.concat(multiLine.slice(0, itemIndex), labels, multiLine.slice(itemIndex, multilineLength));
          } else {
            chartData.labels[index] = _.concat(multiLine, labels)
          }
        } else if(_.isString(chartData.labels[index])) {
          chartData.labels[index] = options.itemIndex ? _.concat(labels, chartLabels[index]) : _.concat(chartLabels[index], labels);
        }
      }

      this.aioUpdateChart();
    }
  }

  removeChartMultilineLabel (options) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        labels = chartData.labels,
        labelsLength = labels.length,
        _index = _.isNumber(options.index) ? options.index : labelsLength,
        index = this.getIndex(_index, labelsLength, options.isFromEnd);

      if(labelsLength && _.isArray(chartData.labels[index])) {
        const multiLine = chartData.labels[index],
          labelsLength = multiLine.length,
          _itemIndex = _.isNumber(options.itemIndex) ? options.itemIndex : labelsLength,
          itemIndex = this.getIndex(_itemIndex, labelsLength, options.isItemFromEnd);

        multiLine.splice(itemIndex, 1);
      }

      this.aioUpdateChart();
    }
  }
  //--------------------------------------------- Dataset data ---------------------------------------------------------
  updateChartDatasetData (data, options) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        chartDatasets = chartData.datasets,
        datasetsLength = chartDatasets.length,
        _index = _.isNumber(options.index) ? options.index : datasetsLength,
        index = this.getIndex(_index, datasetsLength, options.isFromEnd);

      if(datasetsLength && chartDatasets[index].data) {
        if(_.isFunction(data)) {
          data = data(this.aioChartObject.chart);
        } else {
          data = _.cloneDeep(data);
        }

        const datasetData = chartDatasets[index].data,
          datasetDataLength = datasetData.length,
          itemIndex = this.getIndex(options.itemIndex, datasetDataLength, options.isItemFromEnd);

        if(_.isNumber(itemIndex)) {
          const customDataLength = data.length || 0,
            lastIndex = _.isArray(data) && customDataLength ? itemIndex + customDataLength : itemIndex + 1;
            
          chartDatasets[index].data = _.concat(datasetData.slice(0, itemIndex), data, datasetData.slice(lastIndex, datasetDataLength));
        } else {
          chartDatasets[index].data = _.concat([], data);
        }
      }

      this.aioUpdateChart();
    }
  }

  addChartDatasetData (data, options) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        chartDatasets = chartData.datasets,
        datasetsLength = chartDatasets.length,
        _index = _.isNumber(options.index) ? options.index : datasetsLength,
        index = this.getIndex(_index, datasetsLength, options.isFromEnd),
        datasetData = chartDatasets[index].data,
        datasetDataLength = datasetData.length,
        itemIndex = this.getIndex(options.itemIndex, datasetDataLength, options.isItemFromEnd);
      
      if(_.isFunction(data)) {
        data = data(this.aioChartObject.chart);
      } else {
        data = _.cloneDeep(data);
      }

      if(_.isNumber(itemIndex)) {
        chartDatasets[index].data = _.concat(datasetData.slice(0, itemIndex), data, datasetData.slice(itemIndex, datasetDataLength));
      } else {
        chartDatasets[index].data = _.concat(datasetData, data);
      }

      this.aioUpdateChart();
    }
  }

  removeChartDatasetData (options) {
    if (this.isChartSet()) {
      const chartData = this.aioChartObject.chart.data,
        datasets = chartData.datasets,
        datasetsLength = datasets.length,
        _index = _.isNumber(options.index) ? options.index : datasetsLength,
        index = this.getIndex(_index, datasetsLength, options.isFromEnd);

      if(datasetsLength && datasets[index].data) {
        const datasetData = datasets[index].data,
          datasetDataLength = datasetData.length,
          itemIndex = this.getIndex(options.itemIndex, datasetDataLength, options.isItemFromEnd);

        if(_.isNumber(itemIndex)) {
          datasets[index].data.splice(itemIndex, 1);
        } else {
          datasets[index].data = [];
        }
      }

      this.aioUpdateChart();
    }
  }
}

export interface aioObject {
  [propName: string]: any
}

export interface aioInitChartObject {
  type?: string,
  data?: {
    [propName: string]: any,
    datasets?: Array<chartDatasetsItem>
  },
  options?: aioObject
}

export interface chartDatasetsItem {
  __aioChartChild?: {
    id: string,
    mappingLink: aioObject
  },
  [propName: string]: any
}

export interface aioChartInit {
  chartElementId?: string,
  originalChartData?: aioInitChartObject,
  chartElement?: any,
  chartContex?: any,
  chart?: Chart 
}

export interface aioEventOptions {
  index?: number,
  isFromEnd?: boolean,
  itemIndex?: number,
  isItemFromEnd?: boolean
  datasets?: aioObject|Array<aioObject>,
  datasetOptions?: aioObject
}

export type aioLabelsType = Array<string|Array<string>>|string|Function;
export type aioDatasetType = number|Array<number>|Function;