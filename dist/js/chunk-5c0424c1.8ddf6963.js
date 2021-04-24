(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c0424c1"],{"0591":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"campaign-detail"}},[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full mb-base"},[i("vx-card",{staticClass:"overflow-hidden",attrs:{title:t.campaignName}},[i("vs-button",{attrs:{color:"primary",type:"border",icon:"keyboard_backspace"},on:{click:function(e){return t.goBack()}}},[t._v("Back")])],1)],1)]),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full lg:w-1/2 sm:w-1/2 mb-base"},[i("vx-card",{staticClass:"overflow-hidden",attrs:{title:"Ad size"}},[i("apexchart",{attrs:{width:"380",type:"donut",options:t.adSizeOptions,series:t.adSizeSeries}})],1)],1),i("div",{staticClass:"vx-col w-full lg:w-1/2 sm:w-1/2 mb-base"},[i("vx-card",{staticClass:"overflow-hidden",attrs:{title:"Exchanges"}},[i("apexchart",{attrs:{width:"380",type:"donut",options:t.exchangeOptions,series:t.exchangeSeries}})],1)],1),i("div",{staticClass:"vx-col w-full mb-base"},[i("vx-card",{staticClass:"overflow-hidden"},[i("vs-list",[i("vs-list-header",{attrs:{title:"Total Delivery"}}),i("vs-list-item",{attrs:{title:"Impression: "+t.formatNumber(t.impression)}}),i("vs-list-item",{attrs:{title:"Click: "+t.formatNumber(t.click)}}),i("vs-list-item",{attrs:{title:"CTR: "+parseFloat(t.ctr).toFixed(3)+"%"}})],1)],1)],1),i("div",{staticClass:"vx-col w-full lg:w-1/1 sm:w-1/1 mb-base"},[i("vx-card",{staticClass:"overflow-hidden"},[i("vs-table",{attrs:{stripe:"","max-items":"10",search:"",pagination:"",data:t.dailyDelivery},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return t._l(r,(function(e,n){return i("vs-tr",{key:n,attrs:{data:e}},[i("vs-td",{attrs:{data:r[n].time}},[t._v("\n                "+t._s(r[n].time.substring(0,4)+"-"+r[n].time.substring(4,6)+"-"+r[n].time.substring(6,8))+"\n              ")]),i("vs-td",{attrs:{data:r[n].impression}},[t._v("\n                "+t._s(r[n].impression)+"\n              ")]),i("vs-td",{attrs:{data:r[n].click}},[t._v("\n                "+t._s(r[n].click)+"\n              ")]),i("vs-td",{attrs:{data:r[n].ctr}},[t._v("\n                "+t._s(null==r[n].ctr?0:r[n].ctr.toFixed(3))+"%\n              ")]),i("vs-td",{attrs:{data:r[n].view}},[t._v("\n                "+t._s(r[n].view)+"\n              ")]),i("vs-td",{attrs:{data:r[n].completed_view}},[t._v("\n                "+t._s(r[n].completed_view)+"\n              ")])],1)}))}}])},[i("template",{slot:"header"},[i("h3",{staticClass:"mr-5"},[t._v("Daily Delivery")]),i("vs-icon",{staticStyle:{cursor:"pointer"},attrs:{icon:"get_app",size:"25px"},on:{click:function(e){return t.downloadDailyDeliveryAsCSV()}}})],1),i("template",{slot:"thead"},[i("vs-th",{attrs:{"sort-key":"time"}},[t._v(" Day ")]),i("vs-th",{attrs:{"sort-key":"impression"}},[t._v(" Impression ")]),i("vs-th",{attrs:{"sort-key":"click"}},[t._v(" Click ")]),i("vs-th",{attrs:{"sort-key":"ctr"}},[t._v(" CTR ")]),i("vs-th",{attrs:{"sort-key":"view"}},[t._v(" View ")]),i("vs-th",{attrs:{"sort-key":"completed_view"}},[t._v(" Completed View ")])],1)],2),i("vs-table",{attrs:{stripe:"","max-items":"10",search:"",pagination:"",data:t.creatives},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return t._l(r,(function(e,n){return i("vs-tr",{key:n,attrs:{data:e}},[i("vs-td",{attrs:{data:r[n].creative_name}},[t._v("\n                "+t._s(r[n].creative_name)+"\n              ")]),i("vs-td",{attrs:{data:r[n].impression}},[t._v("\n                "+t._s(r[n].impression)+"\n              ")]),i("vs-td",{attrs:{data:r[n].click}},[t._v("\n                "+t._s(r[n].click)+"\n              ")]),i("vs-td",{attrs:{data:r[n].ctr}},[t._v("\n                "+t._s(parseFloat(r[n].ctr).toFixed(3))+"%\n              ")]),i("vs-td",{attrs:{data:r[n].view}},[t._v("\n                "+t._s(r[n].view)+"\n              ")]),i("vs-td",{attrs:{data:r[n].completed_view}},[t._v("\n                "+t._s(r[n].completed_view)+"\n              ")])],1)}))}}])},[i("template",{slot:"header"},[i("h3",{staticClass:"mr-5"},[t._v("Creative")]),i("vs-icon",{staticStyle:{cursor:"pointer"},attrs:{icon:"get_app",size:"25px"},on:{click:function(e){return t.downloadCreativeAsCSV()}}})],1),i("template",{slot:"thead"},[i("vs-th",{attrs:{"sort-key":"creative_name"}},[t._v(" Name ")]),i("vs-th",{attrs:{"sort-key":"impression"}},[t._v(" Impression ")]),i("vs-th",{attrs:{"sort-key":"click"}},[t._v(" Click ")]),i("vs-th",{attrs:{"sort-key":"ctr"}},[t._v(" CTR ")]),i("vs-th",{attrs:{"sort-key":"view"}},[t._v(" View ")]),i("vs-th",{attrs:{"sort-key":"completed_view"}},[t._v(" Completed View ")])],1)],2),i("vs-table",{attrs:{stripe:"","max-items":"10",search:"",pagination:"",data:t.inventory},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return t._l(r,(function(e,n){return i("vs-tr",{key:n,attrs:{data:e}},[i("vs-td",{attrs:{data:r[n].inventory_name}},[t._v("\n                "+t._s(r[n].inventory_name)+"\n              ")]),i("vs-td",{attrs:{data:r[n].impression}},[t._v("\n                "+t._s(r[n].impression)+"\n              ")]),i("vs-td",{attrs:{data:r[n].click}},[t._v("\n                "+t._s(r[n].click)+"\n              ")]),i("vs-td",{attrs:{data:r[n].ctr}},[t._v("\n                "+t._s(parseFloat(r[n].ctr).toFixed(3))+"%\n              ")]),i("vs-td",{attrs:{data:r[n].view}},[t._v("\n                "+t._s(r[n].view)+"\n              ")]),i("vs-td",{attrs:{data:r[n].completed_view}},[t._v("\n                "+t._s(r[n].completed_view)+"\n              ")])],1)}))}}])},[i("template",{slot:"header"},[i("h3",{staticClass:"mr-5"},[t._v("Inventory")]),i("vs-icon",{staticStyle:{cursor:"pointer"},attrs:{icon:"get_app",size:"25px"},on:{click:function(e){return t.downloadInventoryAsCSV()}}})],1),i("template",{slot:"thead"},[i("vs-th",{attrs:{"sort-key":"inventory_name"}},[t._v(" Name ")]),i("vs-th",{attrs:{"sort-key":"impression"}},[t._v(" Impression ")]),i("vs-th",{attrs:{"sort-key":"click"}},[t._v(" Click ")]),i("vs-th",{attrs:{"sort-key":"ctr"}},[t._v(" CTR ")]),i("vs-th",{attrs:{"sort-key":"view"}},[t._v(" View ")]),i("vs-th",{attrs:{"sort-key":"completed_view"}},[t._v(" Completed View ")])],1)],2)],1)],1)])])},n=[],s=(i("ac6a"),i("f3e2"),i("6d67"),i("1321")),a=i.n(s),o=i("bb36"),c=i("369b"),l=i.n(c),d={components:{apexchart:a.a},data:function(){return{creatives:[],inventory:[],dailyDelivery:[],campaignName:"",impression:0,click:0,ctr:0,winrate:0,adSizeOptions:{labels:[]},adSizeSeries:[],exchangeOptions:{labels:[]},exchangeSeries:[],dailyImpression:[{name:"DailyImpression",data:[]}],dailyImpressionOption:{height:"200px",chart:{id:"daily-impression"},xaxis:{categories:[]}},dailyClick:[{name:"DailyClick",data:[]}],dailyClickOption:{height:"200px",chart:{id:"daily-click"},xaxis:{categories:[]}}}},computed:{},methods:{formatNumber:function(t){var e=new Intl.NumberFormat("en-US");return e.format(parseInt(t))},goBack:function(){return this.$router.go(-1)},downloadDailyDeliveryAsCSV:function(){var t=this,e=this.dailyDelivery.map((function(e){return[t.campaignName,e.campaign_id,e.impression,e.click,e.ctr,e.win_rate,e.view,e.completed_view,"".concat(e.time.substring(0,4),"-").concat(e.time.substring(4,6),"-").concat(e.time.substring(6,8))]})),i=["Campaign","Campaign ID","Impression","Click","CTR","Win Rate","View","Completed View","Time"],r=new Blob([l.a.unparse({fields:i,data:e})],{type:"text/csv;charset=utf-8;"}),n=document.createElement("a"),s=URL.createObjectURL(r);n.setAttribute("href",s),n.setAttribute("download","Certis_".concat(this.campaignName,"_Daily Delivery.csv")),n.style.visibility="hidden",document.body.appendChild(n),n.click(),document.body.removeChild(n)},downloadInventoryAsCSV:function(){var t=this.inventory.map((function(t){return[t.inventory_name,t.impression,t.click,t.ctr,t.win_rate,t.view,t.completed_view]})),e=["Inventory Name","Impression","Click","CTR","Win Rate","View","Completed View"],i=new Blob([l.a.unparse({fields:e,data:t})],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a"),n=URL.createObjectURL(i);r.setAttribute("href",n),r.setAttribute("download","Certis_".concat(this.campaignName,"_Inventory.csv")),r.style.visibility="hidden",document.body.appendChild(r),r.click(),document.body.removeChild(r)},downloadCreativeAsCSV:function(){var t=this.creatives.map((function(t){return[t.creative_name,t.impression,t.click,t.ctr,t.win_rate,t.view,t.completed_view]})),e=["Creative Name","Impression","Click","CTR","Win Rate","View","Completed View"],i=new Blob([l.a.unparse({fields:e,data:t})],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a"),n=URL.createObjectURL(i);r.setAttribute("href",n),r.setAttribute("download","Certis_".concat(this.campaignName,"_Creative.csv")),r.style.visibility="hidden",document.body.appendChild(r),r.click(),document.body.removeChild(r)},fetchAdditionalInformation:function(){var t=this,e=this.$route.query.campaign,i=this.$route.query.id,r=this.$store.state.AppActiveUser.email;o["a"].get("Reporting/getCampaignInformation/".concat(e,"/").concat(i),{params:{email:r}}).then((function(e){var i=0;e.data[0].forEach((function(e){var r=e.ctr;if(null===r)return 0;i+=r,t.ctr=i,t.campaignName=e.campaign_name,t.click+=parseInt(e.click),t.impression+=parseInt(e.impression),t.winrate+=parseInt(e.winrate),t.creatives.push({creative_name:e.creative_name,impression:e.impression,click:e.click,ctr:r,view:e.view,completed_view:e.completed_view})})),e.data[1].forEach((function(e){var i=e.ctr;if(null===i)return 0;t.inventory.push({inventory_name:e.inventory_name,impression:e.impression,click:e.click,ctr:i,view:e.view,completed_view:e.completed_view})})),t.dailyDelivery=e.data[5],e.data[4].map((function(e){t.adSizeOptions.labels.push(e.creative_size),t.adSizeSeries.push(parseInt(e.total))})),e.data[3].map((function(e){t.exchangeOptions.labels.push(e.exchange_name),t.exchangeSeries.push(parseInt(e.total))}))}))}},mounted:function(){this.fetchAdditionalInformation()}},u=d,h=i("2877"),f=Object(h["a"])(u,r,n,!1,null,null,null);e["default"]=f.exports},"369b":function(t,e,i){var r,n,s;
/* @license
Papa Parse
v5.3.0
https://github.com/mholt/PapaParse
License: MIT
*/!function(i,a){n=[],r=a,s="function"===typeof r?r.apply(e,n):r,void 0===s||(t.exports=s)}(0,(function t(){"use strict";var e="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{},i=!e.document&&!!e.postMessage,r=i&&/blob:/i.test((e.location||{}).protocol),n={},s=0,a={parse:function(i,r){var o=(r=r||{}).dynamicTyping||!1;if(w(o)&&(r.dynamicTypingFunction=o,o={}),r.dynamicTyping=o,r.transform=!!w(r.transform)&&r.transform,r.worker&&a.WORKERS_SUPPORTED){var c=function(){if(!a.WORKERS_SUPPORTED)return!1;var i,r,o=(i=e.URL||e.webkitURL||null,r=t.toString(),a.BLOB_URL||(a.BLOB_URL=i.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),c=new e.Worker(o);return c.onmessage=v,c.id=s++,n[c.id]=c}();return c.userStep=r.step,c.userChunk=r.chunk,c.userComplete=r.complete,c.userError=r.error,r.step=w(r.step),r.chunk=w(r.chunk),r.complete=w(r.complete),r.error=w(r.error),delete r.worker,void c.postMessage({input:i,config:r,workerId:c.id})}var f=null;return a.NODE_STREAM_INPUT,"string"==typeof i?f=r.download?new l(r):new u(r):!0===i.readable&&w(i.read)&&w(i.on)?f=new h(r):(e.File&&i instanceof File||i instanceof Object)&&(f=new d(r)),f.stream(i)},unparse:function(t,e){var i=!1,r=!0,n=",",s="\r\n",o='"',c=o+o,l=!1,d=null,u=!1;!function(){if("object"==typeof e){if("string"!=typeof e.delimiter||a.BAD_DELIMITERS.filter((function(t){return-1!==e.delimiter.indexOf(t)})).length||(n=e.delimiter),("boolean"==typeof e.quotes||"function"==typeof e.quotes||Array.isArray(e.quotes))&&(i=e.quotes),"boolean"!=typeof e.skipEmptyLines&&"string"!=typeof e.skipEmptyLines||(l=e.skipEmptyLines),"string"==typeof e.newline&&(s=e.newline),"string"==typeof e.quoteChar&&(o=e.quoteChar),"boolean"==typeof e.header&&(r=e.header),Array.isArray(e.columns)){if(0===e.columns.length)throw new Error("Option columns is empty");d=e.columns}void 0!==e.escapeChar&&(c=e.escapeChar+o),"boolean"==typeof e.escapeFormulae&&(u=e.escapeFormulae)}}();var h=new RegExp(p(o),"g");if("string"==typeof t&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return m(null,t,l);if("object"==typeof t[0])return m(d||f(t[0]),t,l)}else if("object"==typeof t)return"string"==typeof t.data&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:f(t.data[0])),Array.isArray(t.data[0])||"object"==typeof t.data[0]||(t.data=[t.data])),m(t.fields||[],t.data||[],l);throw new Error("Unable to serialize unrecognized input");function f(t){if("object"!=typeof t)return[];var e=[];for(var i in t)e.push(i);return e}function m(t,e,i){var a="";"string"==typeof t&&(t=JSON.parse(t)),"string"==typeof e&&(e=JSON.parse(e));var o=Array.isArray(t)&&0<t.length,c=!Array.isArray(e[0]);if(o&&r){for(var l=0;l<t.length;l++)0<l&&(a+=n),a+=v(t[l],l);0<e.length&&(a+=s)}for(var d=0;d<e.length;d++){var u=o?t.length:e[d].length,h=!1,f=o?0===Object.keys(e[d]).length:0===e[d].length;if(i&&!o&&(h="greedy"===i?""===e[d].join("").trim():1===e[d].length&&0===e[d][0].length),"greedy"===i&&o){for(var p=[],m=0;m<u;m++){var _=c?t[m]:m;p.push(e[d][_])}h=""===p.join("").trim()}if(!h){for(var g=0;g<u;g++){0<g&&!f&&(a+=n);var y=o&&c?t[g]:g;a+=v(e[d][y],g)}d<e.length-1&&(!i||0<u&&!f)&&(a+=s)}}return a}function v(t,e){if(null==t)return"";if(t.constructor===Date)return JSON.stringify(t).slice(1,25);!0===u&&"string"==typeof t&&null!==t.match(/^[=+\-@].*$/)&&(t="'"+t);var r=t.toString().replace(h,c),s="boolean"==typeof i&&i||"function"==typeof i&&i(t,e)||Array.isArray(i)&&i[e]||function(t,e){for(var i=0;i<e.length;i++)if(-1<t.indexOf(e[i]))return!0;return!1}(r,a.BAD_DELIMITERS)||-1<r.indexOf(n)||" "===r.charAt(0)||" "===r.charAt(r.length-1);return s?o+r+o:r}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!i&&!!e.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=f,a.NetworkStreamer=l,a.FileStreamer=d,a.StringStreamer=u,a.ReadableStreamStreamer=h,e.jQuery){var o=e.jQuery;o.fn.parse=function(t){var i=t.config||{},r=[];return this.each((function(t){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!e.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)r.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},i)})})),n(),this;function n(){if(0!==r.length){var e,i,n,c,l=r[0];if(w(t.before)){var d=t.before(l.file,l.inputElem);if("object"==typeof d){if("abort"===d.action)return e="AbortError",i=l.file,n=l.inputElem,c=d.reason,void(w(t.error)&&t.error({name:e},i,n,c));if("skip"===d.action)return void s();"object"==typeof d.config&&(l.instanceConfig=o.extend(l.instanceConfig,d.config))}else if("skip"===d)return void s()}var u=l.instanceConfig.complete;l.instanceConfig.complete=function(t){w(u)&&u(t,l.file,l.inputElem),s()},a.parse(l.file,l.instanceConfig)}else w(t.complete)&&t.complete()}function s(){r.splice(0,1),n()}}}function c(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(t){var e=y(t);e.chunkSize=parseInt(e.chunkSize),t.step||t.chunk||(e.chunkSize=null),this._handle=new f(e),(this._handle.streamer=this)._config=e}.call(this,t),this.parseChunk=function(t,i){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(t);void 0!==n&&(t=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+t;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var c=o.meta.cursor;this._finished||(this._partialLine=s.substring(c-this._baseIndex),this._baseIndex=c),o&&o.data&&(this._rowCount+=o.data.length);var l=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)e.postMessage({results:o,workerId:a.WORKER_ID,finished:l});else if(w(this._config.chunk)&&!i){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!l||!w(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),l||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(t){w(this._config.error)?this._config.error(t):r&&this._config.error&&e.postMessage({workerId:a.WORKER_ID,error:t,finished:!1})}}function l(t){var e;(t=t||{}).chunkSize||(t.chunkSize=a.RemoteChunkSize),c.call(this,t),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(t){this._input=t,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),i||(e.onload=k(this._chunkLoaded,this),e.onerror=k(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var t=this._config.downloadRequestHeaders;for(var r in t)e.setRequestHeader(r,t[r])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{e.send(this._config.downloadRequestBody)}catch(t){this._chunkError(t.message)}i&&0===e.status&&this._chunkError()}},this._chunkLoaded=function(){4===e.readyState&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(t){var e=t.getResponseHeader("Content-Range");return null===e?-1:parseInt(e.substring(e.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(t){var i=e.statusText||t;this._sendError(new Error(i))}}function d(t){var e,i;(t=t||{}).chunkSize||(t.chunkSize=a.LocalChunkSize),c.call(this,t);var r="undefined"!=typeof FileReader;this.stream=function(t){this._input=t,i=t.slice||t.webkitSlice||t.mozSlice,r?((e=new FileReader).onload=k(this._chunkLoaded,this),e.onerror=k(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var t=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);t=i.call(t,this._start,n)}var s=e.readAsText(t,this._config.encoding);r||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(t){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(t.target.result)},this._chunkError=function(){this._sendError(e.error)}}function u(t){var e;c.call(this,t=t||{}),this.stream=function(t){return e=t,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var t,i=this._config.chunkSize;return i?(t=e.substring(0,i),e=e.substring(i)):(t=e,e=""),this._finished=!e,this.parseChunk(t)}}}function h(t){c.call(this,t=t||{});var e=[],i=!0,r=!1;this.pause=function(){c.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){c.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(t){this._input=t,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===e.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):i=!0},this._streamData=k((function(t){try{e.push("string"==typeof t?t:t.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(t){this._streamError(t)}}),this),this._streamError=k((function(t){this._streamCleanUp(),this._sendError(t)}),this),this._streamEnd=k((function(){this._streamCleanUp(),r=!0,this._streamData("")}),this),this._streamCleanUp=k((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function f(t){var e,i,r,n=Math.pow(2,53),s=-n,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,c=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,l=this,d=0,u=0,h=!1,f=!1,v=[],_={data:[],errors:[],meta:{}};if(w(t.step)){var g=t.step;t.step=function(e){if(_=e,C())b();else{if(b(),0===_.data.length)return;d+=e.data.length,t.preview&&d>t.preview?i.abort():(_.data=_.data[0],g(_,l))}}}function k(e){return"greedy"===t.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function b(){if(_&&r&&(S("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),r=!1),t.skipEmptyLines)for(var e=0;e<_.data.length;e++)k(_.data[e])&&_.data.splice(e--,1);return C()&&function(){if(_)if(Array.isArray(_.data[0])){for(var e=0;C()&&e<_.data.length;e++)_.data[e].forEach(i);_.data.splice(0,1)}else _.data.forEach(i);function i(e,i){w(t.transformHeader)&&(e=t.transformHeader(e,i)),v.push(e)}}(),function(){if(!_||!t.header&&!t.dynamicTyping&&!t.transform)return _;function e(e,i){var r,n=t.header?{}:[];for(r=0;r<e.length;r++){var s=r,a=e[r];t.header&&(s=r>=v.length?"__parsed_extra":v[r]),t.transform&&(a=t.transform(a,s)),a=x(s,a),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(a)):n[s]=a}return t.header&&(r>v.length?S("FieldMismatch","TooManyFields","Too many fields: expected "+v.length+" fields but parsed "+r,u+i):r<v.length&&S("FieldMismatch","TooFewFields","Too few fields: expected "+v.length+" fields but parsed "+r,u+i)),n}var i=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(e),i=_.data.length):_.data=e(_.data,0),t.header&&_.meta&&(_.meta.fields=v),u+=i,_}()}function C(){return t.header&&0===v.length}function x(e,i){return r=e,t.dynamicTypingFunction&&void 0===t.dynamicTyping[r]&&(t.dynamicTyping[r]=t.dynamicTypingFunction(r)),!0===(t.dynamicTyping[r]||t.dynamicTyping)?"true"===i||"TRUE"===i||"false"!==i&&"FALSE"!==i&&(function(t){if(o.test(t)){var e=parseFloat(t);if(s<e&&e<n)return!0}return!1}(i)?parseFloat(i):c.test(i)?new Date(i):""===i?null:i):i;var r}function S(t,e,i,r){var n={type:t,code:e,message:i};void 0!==r&&(n.row=r),_.errors.push(n)}this.parse=function(n,s,o){var c=t.quoteChar||'"';if(t.newline||(t.newline=function(t,e){t=t.substring(0,1048576);var i=new RegExp(p(e)+"([^]*?)"+p(e),"gm"),r=(t=t.replace(i,"")).split("\r"),n=t.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(n,c)),r=!1,t.delimiter)w(t.delimiter)&&(t.delimiter=t.delimiter(n),_.meta.delimiter=t.delimiter);else{var l=function(e,i,r,n,s){var o,c,l,d;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var u=0;u<s.length;u++){var h=s[u],f=0,p=0,v=0;l=void 0;for(var _=new m({comments:n,delimiter:h,newline:i,preview:10}).parse(e),g=0;g<_.data.length;g++)if(r&&k(_.data[g]))v++;else{var y=_.data[g].length;p+=y,void 0!==l?0<y&&(f+=Math.abs(y-l),l=y):l=y}0<_.data.length&&(p/=_.data.length-v),(void 0===c||f<=c)&&(void 0===d||d<p)&&1.99<p&&(c=f,o=h,d=p)}return{successful:!!(t.delimiter=o),bestDelimiter:o}}(n,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);l.successful?t.delimiter=l.bestDelimiter:(r=!0,t.delimiter=a.DefaultDelimiter),_.meta.delimiter=t.delimiter}var d=y(t);return t.preview&&t.header&&d.preview++,e=n,i=new m(d),_=i.parse(e,s,o),b(),h?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,i.abort(),e=w(t.chunk)?"":e.substring(i.getCharIndex())},this.resume=function(){l.streamer._halted?(h=!1,l.streamer.parseChunk(e,!0)):setTimeout(l.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,i.abort(),_.meta.aborted=!0,w(t.complete)&&t.complete(_),e=""}}function p(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(t){var e,i=(t=t||{}).delimiter,r=t.newline,n=t.comments,s=t.step,o=t.preview,c=t.fastMode,l=e=void 0===t.quoteChar?'"':t.quoteChar;if(void 0!==t.escapeChar&&(l=t.escapeChar),("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=","),n===i)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var d=0,u=!1;this.parse=function(t,a,h){if("string"!=typeof t)throw new Error("Input must be a string");var f=t.length,m=i.length,v=r.length,_=n.length,g=w(s),y=[],k=[],b=[],C=d=0;if(!t)return U();if(c||!1!==c&&-1===t.indexOf(e)){for(var x=t.split(r),S=0;S<x.length;S++){if(b=x[S],d+=b.length,S!==x.length-1)d+=r.length;else if(h)return U();if(!n||b.substring(0,_)!==n){if(g){if(y=[],L(b.split(i)),j(),u)return U()}else L(b.split(i));if(o&&o<=S)return y=y.slice(0,o),U(!0)}}return U()}for(var E=t.indexOf(i,d),R=t.indexOf(r,d),O=new RegExp(p(l)+p(e),"g"),I=t.indexOf(e,d);;)if(t[d]!==e)if(n&&0===b.length&&t.substring(d,d+_)===n){if(-1===R)return U();d=R+v,R=t.indexOf(r,d),E=t.indexOf(i,d)}else{if(-1!==E&&(E<R||-1===R)){if(!(E<I)){b.push(t.substring(d,E)),d=E+m,E=t.indexOf(i,d);continue}var D=M(E,I,R);if(D&&void 0!==D.nextDelim){E=D.nextDelim,I=D.quoteSearch,b.push(t.substring(d,E)),d=E+m,E=t.indexOf(i,d);continue}}if(-1===R)break;if(b.push(t.substring(d,R)),N(R+v),g&&(j(),u))return U();if(o&&y.length>=o)return U(!0)}else for(I=d,d++;;){if(-1===(I=t.indexOf(e,I+1)))return h||k.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:y.length,index:d}),z();if(I===f-1)return z(t.substring(d,I).replace(O,e));if(e!==l||t[I+1]!==l){if(e===l||0===I||t[I-1]!==l){-1!==E&&E<I+1&&(E=t.indexOf(i,I+1)),-1!==R&&R<I+1&&(R=t.indexOf(r,I+1));var A=F(-1===R?E:Math.min(E,R));if(t[I+1+A]===i){b.push(t.substring(d,I).replace(O,e)),t[d=I+1+A+m]!==e&&(I=t.indexOf(e,d)),E=t.indexOf(i,d),R=t.indexOf(r,d);break}var T=F(R);if(t.substring(I+1+T,I+1+T+v)===r){if(b.push(t.substring(d,I).replace(O,e)),N(I+1+T+v),E=t.indexOf(i,d),I=t.indexOf(e,d),g&&(j(),u))return U();if(o&&y.length>=o)return U(!0);break}k.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:y.length,index:d}),I++}}else I++}return z();function L(t){y.push(t),C=d}function F(e){var i=0;if(-1!==e){var r=t.substring(I+1,e);r&&""===r.trim()&&(i=r.length)}return i}function z(e){return h||(void 0===e&&(e=t.substring(d)),b.push(e),d=f,L(b),g&&j()),U()}function N(e){d=e,L(b),b=[],R=t.indexOf(r,d)}function U(t){return{data:y,errors:k,meta:{delimiter:i,linebreak:r,aborted:u,truncated:!!t,cursor:C+(a||0)}}}function j(){s(U()),y=[],k=[]}function M(r,n,s){var a={nextDelim:void 0,quoteSearch:void 0},o=t.indexOf(e,n+1);if(n<r&&r<o&&(o<s||-1===s)){var c=t.indexOf(i,o);if(-1===c)return a;o<c&&(o=t.indexOf(e,o+1)),a=M(c,o,s)}else a={nextDelim:r,quoteSearch:n};return a}},this.abort=function(){u=!0},this.getCharIndex=function(){return d}}function v(t){var e=t.data,i=n[e.workerId],r=!1;if(e.error)i.userError(e.error,e.file);else if(e.results&&e.results.data){var s={abort:function(){r=!0,_(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:g,resume:g};if(w(i.userStep)){for(var a=0;a<e.results.data.length&&(i.userStep({data:e.results.data[a],errors:e.results.errors,meta:e.results.meta},s),!r);a++);delete e.results}else w(i.userChunk)&&(i.userChunk(e.results,s,e.file),delete e.results)}e.finished&&!r&&_(e.workerId,e.results)}function _(t,e){var i=n[t];w(i.userComplete)&&i.userComplete(e),i.terminate(),delete n[t]}function g(){throw new Error("Not implemented.")}function y(t){if("object"!=typeof t||null===t)return t;var e=Array.isArray(t)?[]:{};for(var i in t)e[i]=y(t[i]);return e}function k(t,e){return function(){t.apply(e,arguments)}}function w(t){return"function"==typeof t}return r&&(e.onmessage=function(t){var i=t.data;if(void 0===a.WORKER_ID&&i&&(a.WORKER_ID=i.workerId),"string"==typeof i.input)e.postMessage({workerId:a.WORKER_ID,results:a.parse(i.input,i.config),finished:!0});else if(e.File&&i.input instanceof File||i.input instanceof Object){var r=a.parse(i.input,i.config);r&&e.postMessage({workerId:a.WORKER_ID,results:r,finished:!0})}}),(l.prototype=Object.create(c.prototype)).constructor=l,(d.prototype=Object.create(c.prototype)).constructor=d,(u.prototype=Object.create(u.prototype)).constructor=u,(h.prototype=Object.create(c.prototype)).constructor=h,a}))},f3e2:function(t,e,i){"use strict";var r=i("5ca1"),n=i("0a49")(0),s=i("2f21")([].forEach,!0);r(r.P+r.F*!s,"Array",{forEach:function(t){return n(this,t,arguments[1])}})}}]);
//# sourceMappingURL=chunk-5c0424c1.8ddf6963.js.map