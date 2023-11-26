function parseXML(node) {
    if (!node) return null;
    var txt = '', obj = null, att = null;
    var nt = node.nodeType, nn = node.localName || node.nodeName || '';
    var nv = node.content || node.nodeValue || '';
    if (node.childNodes && node.childNodes.length > 0) {
        node.childNodes.forEach((cn, n) => {
            var cnt = cn.nodeType,
                cnn = cn.localName || cn.nodeName || '',
                cnv = cn.content || cn.nodeValue || '';
            if (cnt == 8) {
                return; // ignore comment node
            } else if (cnt == 3 || cnt == 4 || !cnn) {
                // ignore white-space in between tags
                txt += cnv.trim();
            } else {
                obj = obj || {};
                if (obj[cnn]) {
                    if (!Array.isArray(obj[cnn])) {
                        obj[cnn] =[obj[cnn]];
                    }
                    obj[cnn].push(parseXML(cn));

                } else {
                    obj[cnn] = parseXML(cn);
                }
            }
        });
    }
    if (node.attributes) {
        if (node.attributes.length > 0) {
            att = {};
            obj = obj || {};
            var a, atn, at, atv;
            for (a = 0; a < node.attributes; a++) {
                at = node.attributes[a];
                atn = '@' + (at.name || ''), atv = at.value;
                att[atn] = atv;
                if (obj[atn]) {
                    obj[atn].push(atv);
                }
                else {
                    obj[atn] = atv;
                }
            }
        }
    }
    if (obj && txt) {
        obj = {...(obj || {}), ...(att || {})};
        txt = (obj.content) ? (typeof(obj.content) == 'object' ? obj.content : [obj.content || '']).concat([txt]) : txt;
        if (txt) obj.content = txt;
        txt = '';
    }
    var out = obj || txt;
    return out;
}

function xmlStr2json(xml) {
    if (!xml) return {};
    if (typeof xml == 'string') xml = parseXml(xml);
    if (!xml.nodeType) return;
    if (xml.nodeType == 3 || xml.nodeType == 4) return xml.nodeValue;
    var root = xml;
    var out = parseXML(root);
    xml = null;
    root = null;
    return out;
}

function parseXml(xml) {
	if (!xml || typeof xml !== "string") {
		return null;
	}
	var parser =  new DOMParser(), domNode = null, parsererrorNS = null;
	var isIEParser = "ActiveXObject" in window;
	// IE9+ now is here
	if (!isIEParser) {
		try {
			parsererrorNS = (<Element>parser.parseFromString("INVALID", "text/xml").childNodes[0]).namespaceURI;
		} catch (err) {
			parsererrorNS = null;
		}
	}
	try {
		domNode = parser.parseFromString(xml, "text/xml");
		if (parsererrorNS !== null && domNode.getElementsByTagNameNS(parsererrorNS, "parsererror").length > 0) {
			domNode = null;
		}
	} catch (err) {
		domNode = null;
	}
	return domNode;
}

export let ApperyioXMLHelper = {
    xmlStr2json
}
