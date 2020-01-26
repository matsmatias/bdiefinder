!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var r=function(t,e){return this instanceof r?t instanceof r?t:("string"==typeof t&&(t=this.select(t,e)),t&&t.nodeName&&(t=[t]),void(this.nodes=this.slice(t))):new r(t,e)};r.prototype={get length(){return this.nodes.length}},r.prototype.nodes=[],r.prototype.addClass=function(){return this.eacharg(arguments,(function(t,e){t.classList.add(e)}))},r.prototype.adjacent=function(t,e,n){return"number"==typeof e&&(e=0===e?[]:new Array(e).join().split(",").map(Number.call,Number)),this.each((function(o,s){var c=document.createDocumentFragment();r(e||{}).map((function(e,n){var c="function"==typeof t?t.call(this,e,n,o,s):t;return"string"==typeof c?this.generate(c):r(c)})).each((function(t){this.isInPage(t)?c.appendChild(r(t).clone().first()):c.appendChild(t)})),n.call(this,o,c)}))},r.prototype.after=function(t,e){return this.adjacent(t,e,(function(t,e){t.parentNode.insertBefore(e,t.nextSibling)}))},r.prototype.append=function(t,e){return this.adjacent(t,e,(function(t,e){t.appendChild(e)}))},r.prototype.args=function(t,e,n){return"function"==typeof t&&(t=t(e,n)),"string"!=typeof t&&(t=this.slice(t).map(this.str(e,n))),t.toString().split(/[\s,]+/).filter((function(t){return t.length}))},r.prototype.array=function(t){t=t;var e=this;return this.nodes.reduce((function(n,o,s){var c;return t?((c=t.call(e,o,s))||(c=!1),"string"==typeof c&&(c=r(c)),c instanceof r&&(c=c.nodes)):c=o.innerHTML,n.concat(!1!==c?c:[])}),[])},r.prototype.attr=function(t,e,n){return n=n?"data-":"",this.pairs(t,e,(function(t,e){return t.getAttribute(n+e)}),(function(t,e,r){t.setAttribute(n+e,r)}))},r.prototype.before=function(t,e){return this.adjacent(t,e,(function(t,e){t.parentNode.insertBefore(e,t)}))},r.prototype.children=function(t){return this.map((function(t){return this.slice(t.children)})).filter(t)},r.prototype.clone=function(){return this.map((function(t,e){var n=t.cloneNode(!0),r=this.getAll(n);return this.getAll(t).each((function(t,e){for(var n in this.mirror)this.mirror[n]&&this.mirror[n](t,r.nodes[e])})),n}))},r.prototype.getAll=function(t){return r([t].concat(r("*",t).nodes))},r.prototype.mirror={},r.prototype.mirror.events=function(t,e){if(t._e)for(var n in t._e)t._e[n].forEach((function(t){r(e).on(n,t)}))},r.prototype.mirror.select=function(t,e){r(t).is("select")&&(e.value=t.value)},r.prototype.mirror.textarea=function(t,e){r(t).is("textarea")&&(e.value=t.value)},r.prototype.closest=function(t){return this.map((function(e){do{if(r(e).is(t))return e}while((e=e.parentNode)&&e!==document)}))},r.prototype.data=function(t,e){return this.attr(t,e,!0)},r.prototype.each=function(t){return this.nodes.forEach(t.bind(this)),this},r.prototype.eacharg=function(t,e){return this.each((function(n,r){this.args(t,n,r).forEach((function(t){e.call(this,n,t)}),this)}))},r.prototype.empty=function(){return this.each((function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}))},r.prototype.filter=function(t){var e=function(e){return e.matches=e.matches||e.msMatchesSelector||e.webkitMatchesSelector,e.matches(t||"*")};return"function"==typeof t&&(e=t),t instanceof r&&(e=function(e){return-1!==t.nodes.indexOf(e)}),r(this.nodes.filter(e))},r.prototype.find=function(t){return this.map((function(e){return r(t||"*",e)}))},r.prototype.first=function(){return this.nodes[0]||!1},r.prototype.generate=function(t){return/^\s*<tr[> ]/.test(t)?r(document.createElement("table")).html(t).children().children().nodes:/^\s*<t(h|d)[> ]/.test(t)?r(document.createElement("table")).html(t).children().children().children().nodes:/^\s*</.test(t)?r(document.createElement("div")).html(t).children().nodes:document.createTextNode(t)},r.prototype.handle=function(){var t=this.slice(arguments).map((function(t){return"function"==typeof t?function(e){e.preventDefault(),t.apply(this,arguments)}:t}),this);return this.on.apply(this,t)},r.prototype.hasClass=function(){return this.is("."+this.args(arguments).join("."))},r.prototype.html=function(t){return void 0===t?this.first().innerHTML||"":this.each((function(e){e.innerHTML=t}))},r.prototype.is=function(t){return 0<this.filter(t).length},r.prototype.isInPage=function(t){return t!==document.body&&document.body.contains(t)},r.prototype.last=function(){return this.nodes[this.length-1]||!1},r.prototype.map=function(t){return t?r(this.array(t)).unique():this},r.prototype.not=function(t){return this.filter((function(e){return!r(e).is(t||!0)}))},r.prototype.off=function(t){return this.eacharg(t,(function(t,e){r(t._e?t._e[e]:[]).each((function(n){t.removeEventListener(e,n)}))}))},r.prototype.on=function(t,e,n){if("string"==typeof e){var o=e;e=function(t){var e=arguments;r(t.currentTarget).find(o).each((function(r){if(r===t.target||r.contains(t.target)){try{Object.defineProperty(t,"currentTarget",{get:function(){return r}})}catch(r){}n.apply(r,e)}}))}}var s=function(t){return e.apply(this,[t].concat(t.detail||[]))};return this.eacharg(t,(function(t,e){t.addEventListener(e,s),t._e=t._e||{},t._e[e]=t._e[e]||[],t._e[e].push(s)}))},r.prototype.pairs=function(t,e,n,r){if(void 0!==e){var o=t;(t={})[o]=e}return"object"==typeof t?this.each((function(e){for(var n in t)r(e,n,t[n])})):this.length?n(this.first(),t):""},r.prototype.param=function(t){return Object.keys(t).map(function(e){return this.uri(e)+"="+this.uri(t[e])}.bind(this)).join("&")},r.prototype.parent=function(t){return this.map((function(t){return t.parentNode})).filter(t)},r.prototype.prepend=function(t,e){return this.adjacent(t,e,(function(t,e){t.insertBefore(e,t.firstChild)}))},r.prototype.remove=function(){return this.each((function(t){t.parentNode&&t.parentNode.removeChild(t)}))},r.prototype.removeClass=function(){return this.eacharg(arguments,(function(t,e){t.classList.remove(e)}))},r.prototype.replace=function(t,e){var n=[];return this.adjacent(t,e,(function(t,e){n=n.concat(this.slice(e.children)),t.parentNode.replaceChild(e,t)})),r(n)},r.prototype.scroll=function(){return this.first().scrollIntoView({behavior:"smooth"}),this},r.prototype.select=function(t,e){return t=t.replace(/^\s*/,"").replace(/\s*$/,""),/^</.test(t)?r().generate(t):(e||document).querySelectorAll(t)},r.prototype.serialize=function(){var t=this;return this.slice(this.first().elements).reduce((function(e,n){return!n.name||n.disabled||"file"===n.type?e:/(checkbox|radio)/.test(n.type)&&!n.checked?e:"select-multiple"===n.type?(r(n.options).each((function(r){r.selected&&(e+="&"+t.uri(n.name)+"="+t.uri(r.value))})),e):e+"&"+t.uri(n.name)+"="+t.uri(n.value)}),"").slice(1)},r.prototype.siblings=function(t){return this.parent().children(t).not(this)},r.prototype.size=function(){return this.first().getBoundingClientRect()},r.prototype.slice=function(t){return t&&0!==t.length&&"string"!=typeof t&&"[object Function]"!==t.toString()?t.length?[].slice.call(t.nodes||t):[t]:[]},r.prototype.str=function(t,e){return function(n){return"function"==typeof n?n.call(this,t,e):n.toString()}},r.prototype.text=function(t){return void 0===t?this.first().textContent||"":this.each((function(e){e.textContent=t}))},r.prototype.toggleClass=function(t,e){return!!e===e?this[e?"addClass":"removeClass"](t):this.eacharg(t,(function(t,e){t.classList.toggle(e)}))},r.prototype.trigger=function(t){var e=this.slice(arguments).slice(1);return this.eacharg(t,(function(t,n){var r,o={bubbles:!0,cancelable:!0,detail:e};try{r=new window.CustomEvent(n,o)}catch(t){(r=document.createEvent("CustomEvent")).initCustomEvent(n,!0,!0,e)}t.dispatchEvent(r)}))},r.prototype.unique=function(){return r(this.nodes.reduce((function(t,e){return null!=e&&!1!==e&&-1===t.indexOf(e)?t.concat(e):t}),[]))},r.prototype.uri=function(t){return encodeURIComponent(t).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},r.prototype.wrap=function(t){return this.map((function(e){return r(t).each((function(t){(function(t){for(;t.firstElementChild;)t=t.firstElementChild;return r(t)})(t).append(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)}))}))},t.exports&&(t.exports=r,t.exports.u=r)},function(t,e,n){t.exports=n.p+"index.html"},function(t,e,n){t.exports=n.p+"main.css"},function(t,e,n){t.exports=n.p+"normalize.css"},function(t,e,n){t.exports=n.p+"icon.png"},function(t,e,n){"use strict";function r(t){return t.sort(),t}function o(t){return Array.from(new Set(t))}n.r(e);const s=["AX4U460038G19-DRZ","AX4U400038G19-BR40","AX4U460038G19-BT41","AX4U413338G19-BR80","AX4U413338G19-SR80","AX4U413338G19-DR80","AX4U413338G19-DT60","EK.16GA5.GGBK2","EK.16GA4.GFAK2","AVD4UZ136001708G-2BZ1RR","AVD4UZ136001708G-4BZ1RR","AVD4UZ136001808G-2BZ1RR","AVD4UZ136001808G-4BZ1RR","AVD4UZ136001708G-4BZ1GY","AVD4UZ136001708G-2BZ1SW","AVD4UZ136001708G-4BZ1SW","CMD16GX4M2B3600C18","CMD32GX4M4B3600C16","CMD32GX4M2C3466C16W","CMD16GX4M2B3733C17","CMD32GX4M4B3733C17","CMD16GX4M2E4000C19","CMD32GX4M4E4000C19","CMD16GX4M2F4133C19","CMD32GX4M4C3200C14C","CMD32GX4M4C3200C14M","CMD32GX4M4C3200C14T","CMD32GX4M2C3200C14C","CMD32GX4M2C3200C14M","CMD32GX4M2C3200C14T","CMU32GX4M4B3400C16","CMK32GX4M4B3600C16","CMK16GX4M2B3600C18","CMR16GX4M2C3600C18","CMR16GX4M2C3600C18W","CMK16GX4M2B3600C18R","CMK16GX4M2E4133C19R","CMK16GX4M2K4133C19R","CMK16GX4M2K4333C19","CMK16GX4M2K4400C19","CMK16GX4M2K4500C19","CMK32GX4M4B3600C16R","CMK32GX4M4K4133C19R","CMK64GX4M4K3733C17R","CMR64GX4M4K3733C17R","CMK16GX4M2K4600C19","CMK32GX4M4B3600C18","CMR32GX4M4C3600C18","CMR32GX4M2F3600C18","CMR64GX4M4K3600C18","CMK64GX4M8X3600C18","CMK64GX4M4B3600C18","CMK128GX4M8X3600C18","CMR128GX4M8X3600C18","CMK16GX4M2B3733C17R","CMK32GX4M4B3733C17R","CMK64GX4M4K3733C17","CMR64GX4M4K3733C17","CMK64GX4M8B4000C19","CMR128GX4M8X3800C19","CMK64GX4M8X3800C18","CMK128GX4M8X3800C19","CMK32GX4M4B3866C18R","CMK16GX4M2B4000C19R","CMK16GX4M2E4000C19R","CMK32GX4M4B4000C19R","CMK32GX4M4B4000C19","CMR16GX4M2F4000C19","CMK32GX4M2F4000C19","CMK16GX4M2F4133C19","CMK32GX4M4E4133C19R","CMK64GX4M8X4133C19","CMK32GX4M2F4133C19","CMK64GX4M8X4200C19","CMK16GX4M2B4266C19R","CMK32GX4M4K4266C19","CMR16GX4M2E4266C19","CMK16GX4M2E4333C19R","CMK32GX4M4K4333C19","CMK16GX4M2E4400C19R","CMK16GX4M2F4400C19","CMK16GX4M2F4500C19","CMK16GX4M2F4600C19","CMT16GX4M2C3200C14","CMT16GX4M2K3600C16","CMT16GX4M2K4800C18","CMT32GX4M4C3200C14","CMT32GX4M4K3600C16","CMW16GX4M2C3200C14","CMW16GX4M2K3600C16","CMW16GX4M2K4000C19","CMW16GX4M2K4700C19","CMW32GX4M4C3200C14","CMW32GX4M4K4266C19","GEX416GB4000C19DC","GEX416GB4000C19SC","GEX416GB4133C19DC","GEX416GB4133C19SC","GEX432GB4000C19DC","GEX432GB4133C19DC","GEX48GB4000C19SC","GEX48GB4133C19SC","GEXB416GB4000C19DC","GEXB416GB4000C19SC","GEXB416GB4133C19DC","GEXB416GB4133C19SC","GEXB432GB4000C19DC","GEXB432GB4133C19DC","GEXB48GB4000C19SC","GEXB48GB4133C19SC","GEXG16GB4133C19SC","GEXG416GB4000C19DC","GEXG416GB4000C19SC","GEXG416GB4000C19SC","GEXG416GB4133C19DC","GEXG416GB4133C19SC","GEXG48GB4000C19SC","GEXG48GB4133C19SC","GEXW32GB4133C19DC","GEXW416GB4000C19DC","GEXW416GB4133C19DC","GEXW432GB4000C19DC","GEXW432GB4000C19DC","GEXW432GB4133C19DC","GEXW48GB4000C19SC","GEXW48GB4133C19SC","GFR416GB3600C17DC","GFR416GB3866C18DC","GFR432GB3600C17DC","GFR432GB3600C17QC","GFR432GB3866C18DC","GFR432GB3866C18QC","GFR464GB3600C17QC","GFR464GB3866C18QC","GLS416GB3200C14DC","GLS416GB3600C16ADC","GLS416GB4133C19DC","GPR48GB4000C19SC","GWW416GB4000C19DC","BLE2C8G4D36AEEAK","BLE2K8G4D36AEEAK","BLE4C8G4D36AEEAK","BLE4K8G4D36AEEAK","BLE8G4D36AEEAK","HOF4CRL1CST3600M17LD162C","HOF4CRL1CST4000M19SF162C","HOF4CRL4BST3600U17LD162CL","HOF4CRL4BST4000M19SF162CL","HOF4CXL1BS4000M19SF162C","HOF4CXL1BST4000M19SF162C","HOF4CXLBS3200H14HD162C","HOF4CXLBS3600K17LD162C","HOF4CXLBS4000M19SF162C","HOF4KXL1BST4133N19OD162C","HOF4KXL1BST4600S19TC081CZGG","HOF4CXLBS3600K17LD162K","HOF4CXL1BST4000M19SF162K","HOF4CRL1CST3600K17LD162K","HOF4CRL1CST4000M19SF162K","HOF4CXLBS3200H14HD162K","HOF4CXLBS4000M19SF162K","RCX2-16G3600R","RCX2-16G3600A","RCX2-16G4000R","RCX2-16G4000A","HX413C19PB3/8","HX413C19PB3K2/16","HX436C17PB3/8","HX436C17PB3A/8","HX436C17PB3AK2/16","HX436C17PB3AK4/32","HX440C19PB3/8","HX436C17PB3K2/16","HX436C17PB3K4/32","HX440C19PB3K2/16","HX440C19PB3AK2/16","PV416G360C6K","PVE416G360C6KGY","PVLW416G360C6K","PVR416G360C6K","PVR416G413C9K","PVS416G400C9K","PVS416G413C9K","PVS416G440C9K","PVB416G400C9K","TXD416G3600HC18ADC01","TXD416G3733HC18ADC01","TXD416G3866HC18EDC01","TXD416G4000HC18EDC01","TXBD432G3200HC14BQC01","TXBD432G3600HC16AQC01","TXBD416G4000HC18GDC01","TXBD432G4000HC18FQC01","TXBD416G4133HC18EDC01","TXBD432G4133HC18FQC01","TXBD416G4500HC18EDC01","TDPRD416G3200HC14ADC01","TDPGD416G3200HC14ADC01","TDPGD416G3600HC16ADC01","TDPGD416G3866HC18GDC01","TXGD416G3600HC18ADC01","TXGD416G3733HC18ADC01","TXGD416G3866HC18EDC01","TXGD416G4000HC18EDC01","TF1D416G4000HC18EDC01","TF2D416G4000HC18EDC01","TF5D416G4000HC18EDC01","TF6D416G4000HC18EDC01","TF7D416G3200HC14ADC01","TXOBD416G4133HC18FDC01","TXKD416G3866HC18EDC01","TXKD416G4133HC18FDC01","M378A1K43BB2-CPB","M378A1K43BB2-CRC","M378A1K43BB2-CTD","M378A2K43BB1-CPB","M378A2K43BB1-CRC","M378A2K43BB1-CTD","M391A1K43BB0-CPB","M391A1K43BB1-CRC","M391A2K43BB1-CPB","M391A2K43BB1-CRC","F3600UA8G","F3600UX16G","F3733UA8G","F3733UX16G","F3600UB16G","F4-3200C14D-16GFX","F4-3200C14Q-32GFX","F4-3200C14D-32GFX","F4-3200C14Q-64GFX","F4-3000C14D-16GVK","F4-3000C14D-16GVR","F4-3000C14D-32GVK","F4-3000C14D-32GVR","F4-3000C14Q-64GVK","F4-3000C14Q-64GVR","F4-3000C14Q2-128GVK","F4-3000C14Q2-128GVKD","F4-3000C14Q2-128GVR","F4-3000C14Q2-128GVRD","F4-3200C15D-32GVK","F4-3200C15D-32GVR","F4-3200C15D-64GVK","F4-3200C15D-64GVR","F4-3200C14D-16GVK","F4-3200C14D-16GVR","F4-3200C14D-32GVK","F4-3200C14D-32GVR","F4-3200C14Q-32GVR","F4-3200C14Q-32GVK","F4-3200C14Q-64GVK","F4-3200C14Q-64GVR","F4-3200C14Q2-64GVK","F4-3400C16D-32GVK","F4-3400C16Q-64GVK","F4-3400C16D-32GVR","F4-3400C16Q-64GVR","F4-3466C16D-16GVK","F4-3466C16D-16GVR","F4-3600C17D-16GVK","F4-3600C16D-16GVK","F4-3600C17Q-32GVK","F4-3000C14D-16GTZ","F4-3000C14D-16GTZR","F4-3000C14D-32GTZ","F4-3000C14D-32GTZR","F4-3000C14Q-64GTZR","F4-3000C14Q2-128GTZR","F4-3200C16D-32GTZA","F4-3200C15D-16GTZ","F4-3200C15D-16GTZKW","F4-3200C15D-16GTZKY","F4-3200C15D-16GTZSK","F4-3200C15D-16GTZSW","F4-3200C15D-32GTZ","F4-3200C15D-32GTZKO","F4-3200C15D-32GTZKW","F4-3200C15D-32GTZKY","F4-3200C15D-32GTZSK","F4-3200C15D-32GTZSW","F4-3200C15Q-32GTZKY","F4-3200C15Q-32GTZSW","F4-3200C15Q-64GTZ","F4-3200C15Q-64GTZSW","F4-3200C14D-16GTZ","F4-3200C14D-16GTZKO","F4-3200C14D-16GTZKW","F4-3200C14D-16GTZKY","F4-3200C14D-16GTZR","F4-3200C14D-16GTZRX","F4-3200C14D-16GTZSK","F4-3200C14D-16GTZSW","F4-3200C14D-32GTZ","F4-3200C14D-32GTZKO","F4-3200C14D-32GTZKW","F4-3200C14D-32GTZKY","F4-3200C14D-32GTZR","F4-3200C14D-32GTZSK","F4-3200C14D-32GTZSW","F4-3200C14Q-32GTZ","F4-3200C14Q-32GTZR","F4-3200C14Q-32GTZRX","F4-3200C14Q-32GTZSW","F4-3200C14Q2-64GTZ","F4-3200C14Q2-64GTZR","F4-3200C14Q2-64GTZSW","F4-3200C14Q-64GTZ","F4-3200C14Q-64GTZR","F4-3200C14Q-64GTZSW","F4-3200C14Q2-128GTZ","F4-3200C14Q2-128GTZR","F4-3200C14Q2-128GTZSW","F4-3400C16D-32GTZ","F4-3400C16Q-64GTZ","F4-3466C16Q-64GTZKK","F4-3600C17D-16GTZ","F4-3600C17D-16GTZKW","F4-3600C17D-16GTZR","F4-3600C17D-16GTZSW","F4-3600C17Q-32GTZ","F4-3600C17Q-32GTZR","F4-3600C17D-32GTZ","F4-3600C17D-32GTZKW","F4-3600C17D-32GTZR","F4-3600C17D-32GTZSW","F4-3600C17Q-64GTZ","F4-3600C17Q-64GTZKK","F4-3600C17Q-64GTZKW","F4-3600C17Q-64GTZR","F4-3600C17Q-64GTZSW","F4-3600C17Q2-128GTZKK","F4-3600C17Q2-128GTZR","F4-3600C17Q2-128GTZSW","F4-3600C16D-16GTZ","F4-3600C16D-16GTZKW","F4-3600C16D-16GTZR","F4-3600C16D-16GTZSW","F4-3600C15D-16GTZ","F4-3600C16Q-32GTZR","F4-3600C16Q-32GTZKK","F4-3600C16Q-32GTZSW","F4-3600C16Q2-64GTZR","F4-3600C16Q2-64GTZKK","F4-3600C16Q2-64GTZSW","F4-3733C17D-16GTZA","F4-3733C17D-16GTZKW","F4-3733C17D-16GTZSW","F4-3733C17D-32GTZKK","F4-3733C17D-32GTZR","F4-3733C17D-32GTZSW","F4-3733C17Q-32GTZR","F4-3733C17Q-32GTZKK","F4-3733C17Q-32GTZSW","F4-3733C17Q-64GTZKK","F4-3733C17Q-64GTZR","F4-3733C17Q-64GTZSW","F4-3733C17Q2-64GTZKK","F4-3733C17Q2-64GTZR","F4-3733C17Q2-64GTZSW","F4-3866C19Q2-128GTZKK","F4-3866C19Q2-128GTZSW","F4-3866C18D-16GTZ","F4-3866C18D-16GTZKW","F4-3866C18D-16GTZR","F4-3866C18D-16GTZSW","F4-3866C18D-32GTZR","F4-3866C18Q-32GTZ","F4-3866C18Q-32GTZKW","F4-3866C18Q-32GTZR","F4-3866C18Q-32GTZSW","F4-3866C18Q-64GTZR","F4-4000C17D-16GTZR","F4-4000C17Q-32GTZR","F4-4000C18D-16GTZ","F4-4000C18D-16GTZKW","F4-4000C18D-16GTZR","F4-4000C18D-16GTZSW","F4-4000C18Q-32GTZ","F4-4000C18Q-32GTZKW","F4-4000C18Q-32GTZR","F4-4000C18Q-32GTZSW","F4-4000C18Q2-64GTZR","F4-4000C18Q2-64GTZKK","F4-4000C18Q2-64GTZSW","F4-4000C19D-16GTZ","F4-4000C19D-16GTZKW","F4-4000C19D-16GTZSW","F4-4000C19D-32GTZKK","F4-4000C19D-32GTZSW","F4-4133C17D-16GTZR","F4-4133C17Q-32GTZR","F4-4133C19D-16GTZA","F4-4133C19D-16GTZC","F4-4133C19D-16GTZR","F4-4133C19D-16GTZKW","F4-4133C19D-16GTZKWC","F4-4133C19D-16GTZSWC","F4-4133C19Q-32GTZRF","F4-4133C19Q-32GTZKKF","F4-4133C19Q-32GTZSWF","F4-4200C19Q2-64GTZKK","F4-4200C19Q2-64GTZSW","F4-4266C17Q-32GTZR","F4-4266C19D-16GTZ","F4-4266C19D-16GTZA","F4-4266C19D-16GTZKW","F4-4266C19D-16GTZSW","F4-4266C19D-16GTZR","F4-4400C19D-16GTZSW","F4-4400C19D-16GTZKK","F4-4500C19D-16GTZKKE","F4-4500C19D-16GTZSWE","F4-4600C19D-16GTZKKC","F4-4600C19D-16GTZSWC","F4-4700C19D-16GTZR","F4-3000C14D-64GTZDC","F4-3000C14Q2-128GVD","F4-3200C14D-16GTRG","F4-3200C14D-16GTRS","F4-3200C14D-32GTRG","F4-3200C14D-32GTRS","F4-3200C14D-32GTZKS","F4-3200C14D-64GTZDC","F4-3200C14D-64GTZDCB","F4-3200C14Q2-128GTRG","F4-3200C14Q2-128GTRS","F4-3200C14Q2-64GTRG","F4-3200C14Q2-64GTRS","F4-3200C14Q-32GTRG","F4-3200C14Q-32GTRS","F4-3200C14Q-64GTRG","F4-3200C14Q-64GTRS","F4-3333C16D-16GTZKW","F4-3600C16D-16GTRG","F4-3600C16D-16GTRS","F4-3600C16Q-32GTRG","F4-3600C16Q-32GTRS","F4-3600C17D-16GTRG","F4-3600C17D-16GTRS","F4-4000C17D-16GTRG","F4-4000C17D-16GTRS","F4-4000C17Q-32GTRG","F4-4000C17Q-32GTRS","F4-4000C19D-32GTZR","F4-4266C19D-16GTRG","F4-4266C19D-16GTRS","F4-4266C19Q-32GTZR","F4-4400C18D-16GTRG","F4-4400C18D-16GTRS","F4-4400C18D-16GTZR","F4-4400C19Q-32GTZKK","F4-4600C18D-16GTRG","F4-4600C18D-16GTRS","F4-4600C18D-16GTZR","F4-4800C18D-16GTRS","F4-3200C14D-16GTZN","F4-3200C14Q-32GTZN","F4-3600C16D-16GTZN","F4-3600C16Q-32GTZN","F4-3600C14D-16GTZN","F4-3600C14Q-32GTZN","F4-3800C14D-16GTZN","F4-3800C14Q-32GTZN","F4-4000C16Q2-64GTRG","F4-4300C19Q2-64GTRG","F4-3200C14D-32GTZN","F4-3200C14Q-64GTZN","F4-3600C16Q-64GTZN","F4-3600C14D-16GTZNB","F4-3600C14Q-32GTZNB","F4-3200C14Q-32GTRSU","F4-3600C16Q2-64GTRS","F4-3600C16Q2-64GTRG","F4-3600C14D-16GTRSB","F4-3600C14Q-32GTRSB","F4-3600C14D-16GTRGB","F4-3600C14Q-32GTRGB","F4-4000C17Q-32GTRSU","F4-3600C16D-32GTZR","F4-3600C16Q-64GTZR","F4-3600C16D-32GTRS","F4-3600C16Q-64GTRS","F4-3600C16D-32GTRG","F4-3600C16Q-64GTRG","F4-4000C19D-32GTRS"],c=[{country:"AU",name:"PCPartPicker Australia",url:"https://au.pcpartpicker.com/search/?q=%s"},{country:"BR",name:"Kabum",url:"https://www.kabum.com.br/cgi-local/site/listagem/listagem.cgi?string=%s&btnG="},{country:"CA",name:"Amazon",url:"https://www.amazon.ca/s/k=%s"},{country:"CA",name:"Canada Computers",url:"https://www.canadacomputers.com/search/results_details.php?language=en&keywords=%s"},{country:"CA",name:"Memory Express",url:"https://www.memoryexpress.com/Search/Products?Search=%s"},{country:"CA",name:"Newegg Canada",url:"https://www.newegg.ca/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=%s"},{country:"CA",name:"PCPartPicker Canada",url:"https://ca.pcpartpicker.com/search/?q=%s"},{country:"DK",name:"Komplett",url:"https://www.komplett.dk/search?q=%s"},{country:"DK",name:"Proshop",url:"https://www.proshop.dk/?s=%s"},{country:"DK",name:"Computersalg",url:"https://www.computersalg.dk/l/0/s?sq=%s"},{country:"DK",name:"Alternate",url:"https://www.alternate.dk/html/search.html?query=%s"},{country:"DK",name:"Elgiganten",url:"https://www.elgiganten.dk/search?SearchTerm=%s"},{country:"DK",name:"Prisjagt",url:"https://prisjagt.dk//search?search=%s"},{country:"EE",name:"Hinnavaatlus",url:"https://www.hinnavaatlus.ee/search/?query=%s"},{country:"FI",name:"Jimm's",url:"https://www.jimms.fi/fi/Product/Search2?q=%s"},{country:"FI",name:"Hintaopas",url:"https://hintaopas.fi/search?search=%s"},{country:"FR",name:"Amazon France",url:"https://www.amazon.fr/s?k=%s"},{country:"FR",name:"Hardware.fr",url:"https://shop.hardware.fr/search/+ftxt-%s"},{country:"FR",name:"Materiel.net",url:"https://www.materiel.net/recherche/%s"},{country:"FR",name:"leDénicheur",url:"https://ledenicheur.fr/search?search=%s"},{country:"FR",name:"Rue du commerce",url:"https://www.rueducommerce.fr/recherche/%s"},{country:"FR",name:"Top Achat",url:"https://www.topachat.com/pages/recherche.php?mc=%s"},{country:"DE",name:"Amazon Germany",url:"https://www.amazon.de/s?k=%s"},{country:"DE",name:"Alternate",url:"https://www.alternate.de/html/search.html?query=%s"},{country:"DE",name:"Caseking",url:"https://www.caseking.de/search?sSearch=%s"},{country:"DE",name:"Geizhals",url:"https://geizhals.de/?fs=%s"},{country:"DE",name:"Mindfactory",url:"https://www.mindfactory.de/search_result.php?search_query=%s"},{country:"GR",name:"Skroutz",url:"https://skroutz.gr/search?keyphrase=%s"},{country:"GR",name:"Bestprice",url:"https://www.bestprice.gr/cat/2609/memory.html?q=%s"},{country:"IE",name:"PriceSpy",url:"https://pricespy.ie/search?search=%s"},{country:"IT",name:"Amazon Italy",url:"https://www.amazon.it/s/?k=%s"},{country:"IT",name:"ePrice",url:"https://www.eprice.it/search/qs=%s"},{country:"NZ",name:"PCPartPicker NZ",url:"https://nz.pcpartpicker.com/search/?q=%s"},{country:"NO",name:"Prisjakt",url:"https://www.prisjakt.no/search?search=%s"},{country:"PL",name:"x-kom",url:"https://www.x-kom.pl/szukaj?q=%s"},{country:"PL",name:"morele.net",url:"https://www.morele.net/wyszukiwarka/0/0/,,,,,,,,,,,,/1/?q=%s"},{country:"PL",name:"Proline",url:"https://proline.pl/?qp=%s"},{country:"PL",name:"emag",url:"https://www.emag.pl/search/%s"},{country:"PT",name:"PC Diga",url:"https://www.pcdiga.com/catalogsearch/result/?q=%s"},{country:"PT",name:"Global Data",url:"https://www.globaldata.pt/shop/advancedsearch/result/?q=%s"},{country:"PT",name:"Chiptec",url:"https://www.chiptec.net/catalogsearch/result/?cat=0&q=%s"},{country:"PT",name:"Alientech",url:"https://www.alientech.pt/?s=%s&post_type=product"},{country:"PT",name:"Novo Atalho",url:"https://www.novoatalho.pt/pt-PT/pesquisa.html?txton=products&txtsearch=%s"},{country:"RO",name:"Price.ro",url:"https://www.price.ro/index.php?action=q&text=%s"},{country:"RO",name:"Compari",url:"https://www.compari.ro/CategorySearch.php?st=%s"},{country:"ES",name:"Amazon Spain",url:"https://www.amazon.es/s?k=%s"},{country:"ES",name:"PC Componentes",url:"https://www.pccomponentes.com/buscar/?query=%s"},{country:"SE",name:"Komplett",url:"https://www.komplett.se/search?q=%s"},{country:"SE",name:"Prisjakt",url:"https://www.prisjakt.nu/search?search=%s"},{country:"CH",name:"Digitec",url:"https://www.digitec.ch/de/Search?q=%s"},{country:"CH",name:"Brack",url:"https://www.brack.ch/search?query=%s"},{country:"CH",name:"Microspot",url:"https://www.microspot.ch/de/search?search=%s"},{country:"CH",name:"Alternate.ch",url:"https://www.alternate.ch/html/search.html?query=%s"},{country:"CH",name:"Steg",url:"https://www.steg-electronics.ch/de/article/articleSearch.aspx?TXTSEARCH=%s"},{country:"CH",name:"Techmania",url:"https://www.techmania.ch/Search/DoSearch?suche=%s"},{country:"CH",name:"Ricardo",url:"https://www.ricardo.ch/de/s/%s"},{country:"CH",name:"toppreise.ch",url:"https://www.toppreise.ch/index.php?search=%s"},{country:"UK",name:"Amazon UK",url:"https://www.amazon.co.uk/s?k=%s"},{country:"UK",name:"Overclockers UK",url:"https://www.overclockers.co.uk/search?sSearch=%s"},{country:"UK",name:"Scan",url:"https://www.scan.co.uk/search?q==%s"},{country:"UK",name:"PriceSpy",url:"https://pricespy.co.uk/search?search=%s"},{country:"UK",name:"PCPartPicker UK",url:"https://uk.pcpartpicker.com/search/?q=%s"},{country:"USA",name:"Amazon",url:"https://www.amazon.com/s?k=%s"},{country:"USA",name:"Newegg US",url:"https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Description=%s"},{country:"USA",name:"PCPartPicker",url:"https://pcpartpicker.com/search/?cc=us&q=%s"},{country:"WWW",name:"PCPartPicker",url:"https://pcpartpicker.com/search/?q=%s"},{country:"WWW",name:"Google",url:"https://www.google.com/search?source=hp&q=%s"}],i={AU:"Australia",BR:"Brazil",CA:"Canada",CH:"Switzerland",DE:"Germany",DK:"Denmark",EE:"Estonia",ES:"Spain",FI:"Finland",FR:"France",GR:"Greece",IE:"Ireland",IT:"Italy",NZ:"New Zealand",NO:"Norway",PL:"Poland",PT:"Portugal",RO:"Romania",SE:"Sweden",UK:"UK",USA:"USA",WWW:"World-wide"};function a(t){return!["3000","3200","3400","3600"].includes(t.speed)||(!["16","32"].includes(t.size)||(!["Corsair","Crucial","G.Skill","Kingston","Patriot","Team Group"].includes(t.brand)||!!t.ecc))}function C(t,e,n,r,o,s,c,i,a){return{brand:t,series:e,sku:n,speed:r,cas:o,latency:String(Math.round(10*function(t,e){return 1/(parseInt(t)/1e3/2)*parseInt(e)}(r,o))/10),size:s,sticks:c,rank:parseInt(s)/parseInt(c)==16?"2":"1",color:i,ecc:a}}const u={products:[]};function G(t){const e=/AX4U(\d{4})3(\d)G(\d{2})-([BSDQ])([\w]{1,2}[\d]{0,2})/g.exec(t),n=e[5],r=e[2],o="Q"===e[4]?"4":"D"===e[4]?"2":"1";let s="";return""===n||"RS"===n||"R40"===n?s="Spectrix D40":"R41"===n||"T41"===n?s="Spectrix D41":"R80"===n?s="Spectrix D80":"RZ"===n&&(s="XPG Z1"),C("ADATA",s,t,e[1],e[3],r,o,null,!1)}function l(t){return{"EK.16GA5.GGBK2":C("Apacer","Blade",t,"4133","18","16","2",null,!1),"EK.16GA4.GFAK2":C("Apacer","Commando",t,"3600","17","16","2",null,!1)}[t]}function p(t){const e=/AVD4UZ1([\d]{4})([\d]{2})[0]?([1,3,6]?[2,4,6,8])G-([\d])([\w]{3})([\w]{2})/g.exec(t),n=e[5],r=(parseInt(e[3])*parseInt(e[4])).toString(),o=e[1],s=e[2],c=e[4];let i="";"BZ1"===n&&(i="Blitz");let a=e[6];return"RR"===a?a="Red":"GY"===a?a="Gold":"SW"===n&&(a="White"),C("Avexir",i,t,o,s,r,c,a,!1)}const d={null:"black",C:"chrome",M:"black",T:"torque",R:"red",W:"white"};function h(t){const e=/C([A-Z]{2})(\d{2,3})GX(\d)M(\d)[A-Z](\d{4})C(\d{2})([A-Z])?/g.exec(t),n=e[1],r=e[2],o=e[4];let s="";return"MD"===n?s="Dominator":"MT"===n?s="Dominator RGB":"MK"===n||"MU"===n?s="Vengeance":"MR"===n?s="Vengeance RGB":"MW"===n&&(s="Vengeance RGB Pro"),C("Corsair",s,t,e[5],e[6],r,o,d[e[7]],!1)}function F(t){const e=/T([\w]{1,3})D4(\d{2})G(\d{4})HC(\d{2})\w([DQ])C01/g.exec(t),n=e[1],r=e[2],o=e[3],s=e[4],c="Q"===e[5]?"4":"2";let i="",a=null;return"DP"===n.slice(0,2)?(i="Xtreem Dark Pro",a="R"===n[2]?"red":"grey"):"X"===n?(i="T-Force Xtreem",a="silver"):"XK"===n?(i="T-Force Xtreem",a="black"):"XB"===n?i="T-Force Xtreem":"XG"===n?i="T-Force Xtreem":"XOB"===n?i="T-Force Xtreem":"L"===n?i="T-Force Vulcan":"F"===n[0]&&(i="T-Force Night Hawk RGB"),C("Team Group",i,t,o,s,r,c,a,!1)}const f={"":"silver-red",A:"silver-red",B:"silver-red",KK:"black-black",KKE:"black-black",KKF:"black-black",KW:"black-white",KO:"black-orange",KY:"black-yellow",R:"rgb",RF:"rgb",RX:"rgb",SK:"silver-black",SW:"silver-white",SWE:"silver-white",SWF:"silver-white"},T={S:"silver",G:"gold"},D={G:"black",K:"black",KD:"black",R:"red",RD:"red",S:"silver"};function m(t){const e=/F4-(\d{4})C(\d{2})([DQ2]{1,2})-(\d{2,3})G([A-Z]{2,6})/g.exec(t),n=e[1],r=e[2],o="Q2"===e[3]?"8":"Q"===e[3]?"4":"2",s=e[4],c=e[5];let i="",a=null;return 0===c.indexOf("TZN")?(i="Trident Z Neo",a="rgb"):0===c.indexOf("TZ")?(i="Trident Z",a=f[c.replace("TZ","")]):0===c.indexOf("TR")?(i="Trident Z Royal",a=T[c.replace("TR","")]):0===c.indexOf("FX")?i="Flare X":0===c.indexOf("SX")?i="Sniper X":"V"===c[0]?(i="Ripjaws V",a=D[c[1]]):0===c.indexOf("RS")&&(i="Ripjaws so-dimm"),C("G.Skill",i,t,n,r,s,o,a,!1)}function K(t){const e=/M3(\d{2})A(\d{1})K43(BB\d{1})-(C[A-Z]{2})/g.exec(t),n=e[4],r="2"===e[2]?"16":"8",o="91"===e[1];let s="",c="";return"CPB"===n?(s="2133",c="15"):"CRC"===n?(s="2400",c="17"):"CTD"===n&&(s="2666",c="19"),C("Samsung",o?"ECC":"NON-ECC",t,s,c,r,"1",null,o)}const R={EX:"EVO X",EXB:"EVO X",EXG:"EVO X",EXW:"EVO X",FR:"EVO Forza",PR:"EVO Potenza",WW:"White Dragon",LS:"Super Luce RGB Sync"};function y(t){const e=/G([A-Z]{2,6})\w(\d{1,2})GB(\d{4})C(\d{2})A?(\w)C/g.exec(t),n=R[e[1]]||"das",r=e[3],o=e[4],s=e[2],c="Q"===e[5]?"4":"2";let i="";return t.indexOf("EXG")>0||t.indexOf("EXW")>0?i="white":(t.indexOf("EX4")>0||t.indexOf("EXB")>0)&&(i="black"),C("GEiL",n,t,r,o,s,c,i,!1)}function Z(t){const e=/([A-Z]{3,6})4([A-Z]{3})[1,4]?([A-Z]{2,3})(\d{4})[A-Z](\d{2})[A-Z]{2}(\d{2})(\d)([CK])/g.exec(t),n="K"===e[8]?"KFA2":"Galax",r=e[3],o=e[2],s=e[4],c=e[5];let i=e[6];let a="";return"BS"===r?a="Hall of Fame":"BST"===r&&"CXL"===o?a="Hall of Fame Extreme":"BST"===r&&"CRL"===o?a="Hall of Fame OC Lab Arduino":"CST"===r&&(a="Hall of Fame II"),"HOF4KXL1BST4600S19TC081CZGG"===t&&(i="16"),C(n,a,t,s,c,i,e[7],null,!1)}const X={PB3:"Hyper X Predator",PB3A:"Hyper X Predator RGB"};function S(t){const e=/HX4(\d{2})C(\d{2})(PB3A?)K?([\d]?)\/(\d{1,2})/g.exec(t);return C("Kingston",X[e[3]],t,"13"===e[1]?"4133":`${e[1]}00`,e[2],e[5],e[4]||"1",null,!1)}const B={V:"Viper 4",VE:"Viper 4 Elite",VLW:"Viper LED",VR:"Viper RGB",VS:"Viper Steel",VB:"Viper Blackout"};function M(t){const e=/P([BVELWRS]*)4(\d{2})G(\d{3})C(\d{1})K/g.exec(t);return C("Patriot",B[e[1]],t,`${e[3]}${e[3][2]}`,`1${e[4]}`,e[2],"2",null,!1)}function w(t){const e=/F(\d{4})U([ABX])(\d{1,2})G/g.exec(t);return C("Super Talent","Project X",t,e[1],"17",e[3],"X"===e[2]?"2":"1",null,!1)}function g(t){const e=/BLE([\d]?)\w?([\d])G4D(\d{2})AEEAK/g.exec(t),n=`${e[3]}00`,r=""===e[1]?"1":e[1];return C("Crucial","Ballistix Elite",t,n,"17",(parseInt(e[2])*parseInt(r)).toString(),r,null,!1)}function E(t){const e=/RCX([\d])-([\d]{2})G(\d{4})([A|R])/g.exec(t),n=e[3],r=e[1],o=e[2];let s=null;"3600"===n?s="17":"4000"===n&&(s="19");let c=e[4];return"A"===c?c="Aura Sync":"R"===c&&(c="RGB"),C("Inno3d","iChill RGB",t,n,s,o,r,c,!1)}function A(t){const e=/ZD4-SH[C|K]([\d]{4})C([\d]{2})-([\d]{2})G/g.exec(t);return C("Zadak","Shield",t,e[1],e[2],"08"===e[3]?"16":e[3],"2",null,!1)}function Q(t){return{AV:p,AX:G,BL:g,CM:h,EK:l,F3:w,F4:m,GE:y,GF:y,GL:y,GP:y,GW:y,HO:Z,HX:S,M3:K,PV:M,RC:E,TD:F,TF:F,TL:F,TX:F,ZD:A}[t.slice(0,2)](t)}n(1),n(2),n(3),n(4);const k=n(0).u;function v(){return k("#skus").first().value.split("\n").filter(t=>t.length>0)}function W(){const t=v();k("#sku-count").text(t?t.length:0),V()}function P(t){const e=t?c.filter(e=>e.country===t):[];k("#sites").first().value=e.map(t=>t.url).join("\n"),V()}function b(t){const e=t.match(new RegExp("^https?://([^/?#]+)(?:[/?#]|$)","i"));return e&&e[1]}function H(t,e,n){let r;try{const t=Q(e),n=t.color?` <small>(${t.color})</small>`:"";r=k(`<tr>\n    <td>${t.brand} ${t.series} ${n}</td>\n    <td>${t.sku}</td>\n    <td>${t.speed}C${t.cas} / ${t.latency}ns</td>\n    <td>${t.sticks}x${t.size/t.sticks}GB / ${"1"===t.rank?"SR":"DR"}</td>\n    </tr>`)}catch(t){r=k(`<tr>\n    <td></td>\n    <td>${e}</td>\n    <td></td>\n    <td></td>\n    </tr>`)}t.append(r);const o=k("<td></td>");for(const t of n)o.append(k(`<a target="_blank" href="${t.replace("%s",e)}">${b(t)}</a>`));r.append(o)}function V(){const t=k("#results");t.html("");const e=v();if(!e.length)return void t.append('<div class="warning">No SKU => no links</div>');const n=k("#sites").first().value.split("\n").filter(t=>b(t));for(const r of e)H(t,r,n)}function x(t,e,n,r){const o=k('<button type="button" class="toggle">');return o.attr("value",e).text(t),r&&o.attr("title",r),n.append(o),o.on("click",()=>{o.toggleClass("active"),o.siblings().removeClass("active")}),o}function L(){const t=[];function e(t){var e;(e=t.skus()).sort(),k("#skus").first().value=e.join("\n"),W()}function n(r){let o=u.products;r=r||{displays:"Common kits"};for(const e of t){if(e.values in r)e.value=r[e.values];else{const t=e.container.find("button.active").first();e.value=t?t.value:null}o=o[e.filter](e.value)}!function(e){for(const r of t){r.container.html("");for(const t of e[r.values]()){const e=x(t,t,r.container);e.on("click",t=>n(t)),t===r.value&&e.addClass("active")}}}(o),e(o);const s=o.skus().length<u.products.skus().length;return k("#reset").first().style.display=s?"initial":"none",o}return{add:function(e,n,r){t.push({container:e,values:n,value:null,filter:r})},reset:function(){for(const e of t)e.container.find("button.active").removeClass("active");n()},apply:n}}var O;u.products=function t(e){return{skus:function(){return r(o(e.map(t=>t.sku)))},display:function(n){return t(e.filter(t=>!n||"All kits"===n||!a(t)))},displays:function(){return e.some(t=>!a(t))?["Common kits","All kits"]:["All kits"]},brand:function(n){return t(e.filter(t=>!n||t.brand===n))},brands:function(){return r(o(e.map(t=>t.brand)))},series:function(n){return t(e.filter(t=>!n||t.series===n))},seriess:function(){return r(o(e.map(t=>t.series)))},speed:function(n){return t(e.filter(t=>!n||t.speed===n))},speeds:function(){return r(o(e.map(t=>t.speed)))},cas:function(n){return t(e.filter(t=>!n||t.cas===n))},cass:function(){return r(o(e.map(t=>t.cas)))},sticks:function(n){return t(e.filter(t=>!n||t.sticks===n))},stickss:function(){return r(o(e.map(t=>t.sticks)))},rank:function(n){return t(e.filter(t=>!n||t.rank===n))},ranks:function(){return r(o(e.map(t=>t.rank)))},latency:function(n){return t(e.filter(t=>!n||t.latency===n))},latencies:function(){const t=o(e.map(t=>t.latency));return t.sort((t,e)=>parseFloat(t)>parseFloat(e)),t},size:function(n){return t(e.filter(t=>!n||t.size===n))},sizes:function(){const t=o(e.map(t=>t.size));return t.sort((t,e)=>parseInt(t)>parseInt(e)),t}}}(s.map(t=>Q(t))),O=function(){const t=L();t.add(k("#display-filters"),"displays","display"),t.add(k("#model-filters"),"brands","brand"),t.add(k("#series-filters"),"seriess","series"),t.add(k("#speed-filters"),"speeds","speed"),t.add(k("#cas-filters"),"cass","cas"),t.add(k("#latency-filters"),"latencies","latency"),t.add(k("#size-filters"),"sizes","size"),t.add(k("#sticks-filters"),"stickss","sticks"),t.add(k("#rank-filters"),"ranks","rank"),t.apply(),k("#reset").on("click",t.reset),k("#advanced").on("click",()=>{k("#advanced").toggleClass("active"),k(".advanced").each(t=>function(t){const e="false"===(t=k(t)).attr("aria-hidden")?"true":"false";t.attr("aria-hidden",e)}(t))});const e=k("#country-presets"),n=r(o(c.map(t=>t.country)));for(const t of n){const n=x(t,t,e,i[t]);n.on("click",()=>P(t)),"WWW"===t&&n.addClass("active")}P("WWW"),function(t){const e=k(t),n=e.find("input"),r=e.find("div.results");n.on("change click blur paste",(function(){const t=n.first().value;if(t){r.first().style.display="block";try{const e=Q(t);s.includes(e.sku)?r.html("<b>B-Die guaranteed!</b><br>").addClass("isbdie"):r.html("<b>SKU not found!</b> It's either not B-Die or unknown to us just yet. <br>It might be: ").removeClass("isbdie"),r.append(`\n          ${e.brand}\n          ${e.series}\n          ${e.color?e.color:""} /\n          ${e.speed}C${e.cas}\n          ${e.latency}ns /\n          ${e.size}GB\n          ${e.sticks} sticks\n          ${"1"===e.rank?"SR":"DR"}`)}catch(t){r.html("<b>SKU not found!</b> It's either not B-Die or unknown to us just yet.").removeClass("isbdie")}}else r.first().style.display="none"}))}("#identifier");const a=k("#refresh");a.on("click",W),k("textarea").on("hange click blur paste",()=>a.first().style.display="block")},(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?O():document.addEventListener("DOMContentLoaded",O)}]);