/*
  SystemJS 0.6.6
  Served for jspm from https://jspm.io/system@0.6.js
*/
!function(__$global){function __eval(__source,__global,__address,__sourceMap){try{__source=(__global!=__$global?"with(__global) { (function() { "+__source+" \n }).call(__global); }":__source)+"\n//# sourceURL="+__address+(__sourceMap?"\n//# sourceMappingURL="+__sourceMap:""),eval(__source)}catch(e){throw"SyntaxError"==e.name&&(e.message="Evaluating "+__address+"\n	"+e.message),System.trace&&0==System.execute&&console.log("Execution error for "+__address+": "+e.stack||e),e}}__$global.upgradeSystemLoader=function(){function e(e){var t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function t(t,a){function r(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}return a=e(a||""),t=e(t||""),a&&t?(a.protocol||t.protocol)+(a.protocol||a.authority?a.authority:t.authority)+r(a.protocol||a.authority||"/"===a.pathname.charAt(0)?a.pathname:a.pathname?(t.authority&&!t.pathname?"/":"")+t.pathname.slice(0,t.pathname.lastIndexOf("/")+1)+a.pathname:t.pathname)+(a.protocol||a.authority||a.pathname?a.search:a.search||t.search)+a.hash:null}function a(e){"undefined"==typeof p&&(p=Array.prototype.indexOf);var t=document.getElementsByTagName("head")[0];e.onScriptLoad=function(){},e.fetch=function(a){return new Promise(function(r,n){function o(){i.readyState&&"loaded"!=i.readyState&&"complete"!=i.readyState||(l(),e.onScriptLoad(a),r(""))}function s(e){l(),n(e)}function l(){i.detachEvent?i.detachEvent("onreadystatechange",o):(i.removeEventListener("load",o,!1),i.removeEventListener("error",s,!1)),t.removeChild(i)}var i=document.createElement("script");i.async=!0,i.attachEvent&&i.attachEvent("onreadystatechange",o),i.addEventListener("load",o,!1),i.addEventListener("error",s,!1),i.src=a.address,t.appendChild(i)})},e.scriptLoader=!0}function r(e){function t(e,t){var a=e.meta&&e.meta[t.name];if(a)for(var r in a)t.metadata[r]=t.metadata[r]||a[r]}var a=/^(\s*\/\*.*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,r=/\/\*.*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;e.meta={};var n=e.locate;e.locate=function(e){return t(this,e),n.call(this,e)};var o=e.translate;e.translate=function(e){var n=e.source.match(a);if(n)for(var s=n[0].match(r),l=0;l<s.length;l++){var i=s[l].length,d=s[l].substr(0,1);if(";"==s[l].substr(i-1,1)&&i--,'"'==d||"'"==d){var u=s[l].substr(1,s[l].length-3),c=u.substr(0,u.indexOf(" "));if(c){var f=u.substr(c.length+1,u.length-c.length-1);e.metadata[c]instanceof Array?e.metadata[c].push(f):e.metadata[c]=f}}}return t(this,e),o.call(this,e)}}function n(e){function a(e){var a=this;"@traceur"==e.name&&(f=g,m=Module);var r,n=e.source.lastIndexOf("\n");-1!=n&&"//# sourceMappingURL="==e.source.substr(n+1,21)&&(r=e.source.substr(n+22,e.source.length-n-22),"undefined"!=typeof t&&(r=t(e.address,r))),__eval(e.source,a.global,e.address,r),"@traceur"==e.name&&(a.global.traceurSystem=a.global.System,a.global.System=f)}function r(e){for(var t=[],a=0;a<e.length;a++)-1==p.call(t,e[a])&&t.push(e[a]);return t}function n(t,a,r,n){"string"!=typeof t&&(n=r,r=a,a=t,t=null),v=!0;var o;if("boolean"==typeof r)o={declarative:!1,deps:a,execute:n,executingRequire:r};else{if(a.length>0&&1!=r.length)throw"Invalid System.register form for "+t+". Declare function must take one argument.";o={declarative:!0,deps:a,declare:r}}if(t)e.defined[t]||(e.defined[t]=o);else if(o.declarative){if(h)throw"Multiple anonymous System.register calls in the same module file.";h=o}}function o(e){if(!e.register){e.register=n,e.defined||(e.defined={});var t=e.onScriptLoad;e.onScriptLoad=function(e){t(e),h&&(e.metadata.entry=h),(h||v)&&(e.metadata.format=e.metadata.format||"register"),v&&(e.metadata.registered=!0)}}}function s(e,t,a){if(a[e.groupIndex]=a[e.groupIndex]||[],-1==p.call(a[e.groupIndex],e)){a[e.groupIndex].push(e);for(var r=0;r<e.normalizedDeps.length;r++){var n=e.normalizedDeps[r],o=t.defined[n];if(o&&!o.evaluated){var l=e.groupIndex+(o.declarative!=e.declarative);if(void 0===o.groupIndex||o.groupIndex<l){if(o.groupIndex&&(a[o.groupIndex].splice(a[o.groupIndex].indexOf(o),1),0==a[o.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");o.groupIndex=l}s(o,t,a)}}}}function l(e,t){var a=t.defined[e];a.groupIndex=0;var r=[];s(a,t,r);for(var n=!!a.declarative==r.length%2,o=r.length-1;o>=0;o--){for(var l=r[o],d=0;d<l.length;d++){var c=l[d];n?i(c,t):u(c,t)}n=!n}}function i(e,t){if(!e.module){var a=[],r=e.declare.call(t.global,a);e.module=r.exports,e.exportStar=r.exportStar,e.execute=r.execute;for(var n=e.module,o=0;o<e.normalizedDeps.length;o++){var s=e.normalizedDeps[o],l=t.defined[s];l?l.module?depModule=l.module:(i(l,t),depModule=l.module):depModule=t.get(s),e.exportStar&&-1!=p.call(e.exportStar,e.normalizedDeps[o])&&!function(e){for(var t in e)(function(t){Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]},set:function(a){e[t]=a}})})(t)}(depModule),a[o]=depModule}}}function d(e,t){var a,r=t.defined[e];if(r)r.declarative?c(e,[],t):r.evaluated||u(r,t),a=r.module;else if(a=t.get(e),!a)throw"System Register: The module requested "+e+" but this was not declared as a dependency";return a?a.__useDefault?a["default"]:a:""}function u(e,t){if(!e.module){if(e.module={"default":{},__useDefault:!0},!e.executingRequire)for(var a=0;a<e.normalizedDeps.length;a++){var r=e.normalizedDeps[a],n=t.defined[r];n&&u(n,t)}var o;for(var s in t.defined)if(t.defined[s]==e){o=s;break}try{e.evaluated=!0;var l=e.execute.call(t.global,function(a){for(var r=0;r<e.deps.length;r++)if(e.deps[r]==a)return d(e.normalizedDeps[r],t)},e.module["default"],o)}catch(i){throw i}l&&l.__esModule?e.module=l:l&&(e.module["default"]=l)}}function c(e,t,a){var r=a.defined[e];if(!r.evaluated&&r.declarative){t.push(e);for(var n=0;n<r.normalizedDeps.length;n++){var o=r.normalizedDeps[n];-1==p.call(t,o)&&(a.defined[o]?c(o,t,a):a.get(o))}r.evaluated||(r.evaluated=!0,r.execute.call(a.global))}}"undefined"==typeof p&&(p=Array.prototype.indexOf),"undefined"==typeof __eval&&(__eval=0||eval);var f,m;e.__exec=a;var h,v;o(e);var b=/System\.register/,_=e.fetch;e.fetch=function(e){var t=this;return o(t),t.defined[e.name]?(e.metadata.format="defined",""):(h=null,v=!1,_.call(t,e))};var y=e.translate;e.translate=function(e){return this.register=n,this.__exec=a,e.metadata.deps=e.metadata.deps||[],Promise.resolve(y.call(this,e)).then(function(t){return(e.metadata.init||e.metadata.exports)&&(e.metadata.format=e.metadata.format||"global"),("register"==e.metadata.format||!e.metadata.format&&e.source.match(b))&&(e.metadata.format="register"),t})};var x=e.instantiate;e.instantiate=function(e){var t,a=this;if(a.defined[e.name])t=a.defined[e.name];else if(e.metadata.entry)t=e.metadata.entry;else if(e.metadata.execute)t={declarative:!1,deps:e.metadata.deps||[],execute:e.metadata.execute,executingRequire:e.metadata.executingRequire};else if("register"==e.metadata.format&&(h=null,v=!1,a.__exec(e),h&&(t=h),!v&&!e.metadata.registered))throw e.name+" detected as System.register but didn't execute.";if(!t&&"es6"!=e.metadata.format)return{deps:[],execute:function(){return Module({})}};if(!t)return x.call(this,e);a.defined[e.name]=t,t.deps=r(t.deps);for(var n=[],o=0;o<t.deps.length;o++)n.push(Promise.resolve(a.normalize(t.deps[o],e.name)));return Promise.all(n).then(function(r){return t.normalizedDeps=r,t.depMap=[],{deps:t.deps,execute:function(){if(t.esmodule)return delete a.defined[e.name],t.esmodule;l(e.name,a),c(e.name,[],a),delete a.defined[e.name];var r=Module(t.module);for(var n in a.defined)t.declarative&&a.defined[n].execute!=t.execute||!t.declarative&&a.defined[n].declare!=t.declare;return r}}})}}function o(e){var a=e["import"];e["import"]=function(e,t){return a.call(this,e,t).then(function(e){return e.__useDefault?e["default"]:e})},e.set("@empty",Module({})),e.config=function(e){for(var t in e){var a=e[t];if("object"==typeof a){this[t]=this[t]||{};for(var r in a)this[t][r]=a[r]}else this[t]=a}};var r;if("undefined"==typeof window)r=process.cwd()+"/";else if(r=document.baseURI,!r){var n=document.getElementsByTagName("base");r=n[0]&&n[0].href||window.location.href}var o,s=e.locate;e.locate=function(e){return this.baseURL!=o&&(o=t(r,this.baseURL),"/"!=o.substr(o.length-1,1)&&(o+="/"),this.baseURL=o),Promise.resolve(s.call(this,e))};var l=/^\s*export\s*\*\s*from\s*(?:'([^']+)'|"([^"]+)")/,i=/(?:^\s*|[}{\(\);,\n]\s*)(import\s+['"]|(import|module)\s+[^"'\(\)\n;]+\s+from\s+['"]|export\s+(\*|\{|default|function|var|const|let|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*))/,d=e.translate;e.translate=function(e){var t=this;if("@traceur"==e.name)return d.call(t,e);var a;if("es6"!=e.metadata.format&&e.metadata.format||!(a=e.source.match(l))){if(("es6"==e.metadata.format||!e.metadata.format&&e.source.match(i))&&(e.metadata.format="es6",!t.global.traceur))return t["import"]("@traceur").then(function(){return d.call(t,e)})}else e.metadata.format="cjs",e.source='module.exports = require("'+(a[1]||a[2])+'");\n';return d.call(t,e)};var u=e.instantiate;e.instantiate=function(e){var t=this;return"@traceur"==e.name?(t.__exec(e),{deps:[],execute:function(){return Module({})}}):u.call(t,e)}}function s(e){function t(e){if(!e.has("@@global-helpers")){var t,a,r=e.global.hasOwnProperty,n={};e.set("@@global-helpers",Module({prepareGlobal:function(o,s){for(var l=0;l<s.length;l++){var i=n[s[l]];if(i)for(var d in i)e.global[d]=i[d]}t={},a=["indexedDB","sessionStorage","localStorage","clipboardData","frames"];for(var u in e.global)if(!r||e.global.hasOwnProperty(u))try{t[u]=e.global[u]}catch(c){a.push(u)}},retrieveGlobal:function(o,s,l){var i,d={};if(l){for(var u=[],c=0;c<deps.length;c++)u.push(require(deps[c]));i=l.apply(e.global,u)}if(s&&!i){var f=s.split(".")[0];i=eval.call(e.global,s),d[f]=e.global[f]}else for(var p in e.global)~a.indexOf(p)||r&&!e.global.hasOwnProperty(p)||p==e.global||t[p]==e.global[p]||(d[p]=e.global[p],i?i!==e.global[p]&&(i=void 0):i!==!1&&(i=e.global[p]));return n[o]=d,"undefined"!=typeof i?i:d}}))}}t(e);var a=e.instantiate;e.instantiate=function(e){var r=this;t(r);var n=e.metadata.exports;return e.metadata.format||(e.metadata.format="global"),"global"==e.metadata.format&&(e.metadata.execute=function(t,a,o){r.get("@@global-helpers").prepareGlobal(o,e.metadata.deps),n&&(e.source+='\nthis["'+n+'"] = '+n+";");var s=r.global.define;return r.global.define=void 0,r.global.module=void 0,r.global.exports=void 0,r.__exec(e),r.global.define=s,r.get("@@global-helpers").retrieveGlobal(o,n,e.metadata.init)}),a.call(r,e)}}function l(e){function t(e){a.lastIndex=0,r.lastIndex=0;for(var t,o=[],e=e.replace(n,"");t=r.exec(e);)o.push(t[2]||t[3]);return o}var a=/(?:^\s*|[}{\(\);,\n=:\?\&]\s*|module\.)(exports\s*\[\s*('[^']+'|"[^"]+")\s*\]|\exports\s*\.\s*[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*|exports\s*\=)/,r=/(?:^\s*|[}{\(\);,\n=:\?\&]\s*)require\s*\(\s*("([^"]+)"|'([^']+)')\s*\)/g,n=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,o=function(){},s={nextTick:function(e){setTimeout(e,7)},browser:"undefined"!=typeof window,env:{},argv:[],on:o,once:o,off:o,emit:o,cwd:function(){return"/"}};e._getCJSDeps=t,e.has("@@nodeProcess")||e.set("@@nodeProcess",Module({"default":s,__useDefault:!0}));var l=e.translate;e.translate=function(e){var a=this;return a.has("@@nodeProcess")||a.set("@@nodeProcess",Module({"default":s,__useDefault:!0})),a._getCJSDeps||(a._getCJSDeps=t),l.call(a,e)};var i=e.instantiate;e.instantiate=function(n){return n.metadata.format||(a.lastIndex=0,r.lastIndex=0,(r.exec(n.source)||a.exec(n.source))&&(n.metadata.format="cjs")),"cjs"==n.metadata.format&&(n.metadata.deps=n.metadata.deps?n.metadata.deps.concat(t(n.source)):n.metadata.deps,n.metadata.executingRequire=!0,n.metadata.execute=function(t,a){var r=n.address.split("/");r.pop(),r=r.join("/");var o=e.global._g={global:e.global,exports:a,module:{exports:a},process:s,require:t,__filename:n.address,__dirname:r},l="";for(var i in o)l+="var "+i+" = _g."+i+";";n.source=l+n.source;var d=e.global.define;return e.global.define=void 0,e.__exec(n),e.global.define=d,e.global._g=void 0,o.module.exports}),i.call(this,n)}}function i(e){function t(e,a,r,n){var o=this;if("object"==typeof e&&!(e instanceof Array))return t.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if(!(e instanceof Array)){if("string"==typeof e){var s=o.get(e);return s.__useDefault?s["default"]:s}throw"Invalid require"}Promise.all(e.map(function(e){return o["import"](e,n)})).then(function(e){a.apply(null,e)},r)}function a(e,a,r){return function(n,o,s){return"string"==typeof n?a(n):t.call(r,n,o,s,{name:e})}}function r(e){if(s=null,l=null,e.global.module=void 0,e.global.exports=void 0,!e.global.define||e.global.define.loader!=e){var t=e.onScriptLoad;e.onScriptLoad=function(e){t(e),(s||l)&&(e.metadata.format="defined"),s&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(s.deps):s.deps,e.metadata.execute=s.execute)},e.global.define=function(t,r,n){if("string"!=typeof t&&(n=r,r=t,t=null),!(r instanceof Array)){if(n=r,!e._getCJSDeps)throw"AMD extension needs CJS extension for AMD CJS support";r=["require","exports","module"].concat(e._getCJSDeps(n.toString()))}"function"!=typeof n&&(n=function(e){return function(){return e}}(n));var o,i,d;-1!=(o=p.call(r,"require"))&&r.splice(o,1),-1!=(i=p.call(r,"exports"))&&r.splice(i,1),-1!=(d=p.call(r,"module"))&&r.splice(d,1);var u={deps:r,execute:function(t,s,l){for(var u=[],c=0;c<r.length;c++)u.push(t(r[c]));var f;-1!=d&&u.splice(d,0,s,f={id:l,uri:e.baseURL+l,config:function(){return{}},exports:s}),-1!=i&&u.splice(i,0,s),-1!=o&&u.splice(o,0,a(l,t,e));var p=n.apply(e.global,u);return"undefined"==typeof p&&f&&(p=f.exports),"undefined"!=typeof p?p:void 0}};if(t)s=0!=r.length||s||l?null:u,l=!0,e.register(t,u.deps,!1,u.execute);else{if(s)throw"Multiple defines for anonymous module";s=u}},e.global.define.amd={},e.global.define.loader=e}}var n="undefined"!=typeof module&&module.exports,o=/(?:^\s*|[}{\(\);,\n\?\&]\s*)define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*("[^"]+"|'[^']+')\s*,)*(\s*("[^"]+"|'[^']+')\s*)?\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;e.require=t;var s,l;if(n||e.amdDefine===!1||r(e),e.scriptLoader){var i=e.fetch;e.fetch=function(t){return e.amdDefine!==!1&&r(this),i.call(this,t)}}var d=e.instantiate;e.instantiate=function(e){var t=this;if("amd"==e.metadata.format||!e.metadata.format&&e.source.match(o)){if(e.metadata.format="amd",r(t),t.__exec(e),n&&(t.global.define=void 0),!s&&!l&&!n)throw"AMD module "+e.name+" did not define";s&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(s.deps):s.deps,e.metadata.execute=s.execute)}return d.call(t,e)}}function d(e){function t(e,t){var a=t.split("/"),r=e.split("/");if(a.length>r.length)return 0;for(var n=0;n<a.length;n++)if(r[n]!=a[n])return 0;return a.length}function a(e,a,r){var n,o,s,l,i=0,d=0;if(a)for(var u in r.map){var c=r.map[u];if("object"==typeof c&&!(t(a,u)<=d))for(var f in c)t(e,f)<=i||(n=f,i=f.split("/").length,o=u,d=u.split("/").length)}n&&(l=e.split("/"),s=l.splice(i,l.length-i).join("/"),e=r.map[o][n]+(s?"/"+s:""),i=0);for(var u in r.map){var c=r.map[u];"string"==typeof c&&(t(e,u)<=i||(n=u,i=u.split("/").length))}return i?(l=e.split("/"),s=l.splice(i,l.length-i).join("/"),r.map[n]+(s?"/"+s:"")):e}e.map=e.map||{};var r=e.normalize;e.normalize=function(e,t,n){var o=this;o.map||(o.map={});var s=!1;return"/"==e.substr(e.length-1,1)&&(s=!0,e+="#"),Promise.resolve(r.call(o,e,t,n)).then(function(e){if(e=a(e,t,o),s){var r=e.split("/");r.pop();var n=r.pop();r.push(n),r.push(n),e=r.join("/")}return e})}}function u(e){"undefined"==typeof p&&(p=Array.prototype.indexOf),e.bundles=e.bundles||{};var t=e.fetch;e.fetch=function(e){var a=this;if(a.trace)return t.call(this,e);a.bundles||(a.bundles={});for(var r in a.bundles)if(-1!=p.call(a.bundles[r],e.name))return Promise.resolve(a.normalize(r)).then(function(e){return a.bundles[e]=a.bundles[e]||a.bundles[r],a.meta=a.meta||{},a.meta[e]=a.meta[e]||{},a.meta[e].bundle=!0,a.load(e)}).then(function(){return""});return t.call(this,e)}}function c(e){"undefined"==typeof p&&(p=Array.prototype.indexOf);var t=/^(\d+)(?:\.(\d+)(?:\.(\d+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?)?)?$/,a=function(e,t){var a,r=e.split("."),n=t.split(".");r[2]&&-1!=(a=p.call(r[2],"-"))&&r.splice(2,1,r[2].substr(0,a),r[2].substr(a+1)),n[2]&&-1!=(a=p.call(n[2],"-"))&&n.splice(2,1,n[2].substr(0,a),n[2].substr(a+1));for(var o=0;o<Math.max(r.length,n.length);o++){if(!r[o])return 1;if(!n[o])return-1;if(r[o]!=n[o])return parseInt(r[o])>parseInt(n[o])?1:-1}return 0};e.versions=e.versions||{};var r=e.normalize;e.normalize=function(n,o,s){e.versions||(e.versions={});var l,i,d=this.versions;if(n.indexOf("@")>0){var u=n.lastIndexOf("@"),c=n.substr(u+1,n.length-u-1).split("/");l=c[0],i=c.length,n=n.substr(0,u)+n.substr(u+l.length+1,n.length-u-l.length-1)}return Promise.resolve(r.call(this,n,o,s)).then(function(e){var r,n,o,s,u=e.indexOf("@");if(l&&(-1==u||0==u)){var c=e.split("/");c[c.length-i]+="@"+l,e=c.join("/"),u=e.indexOf("@")}if(-1==u||0==u){for(var f in d)if(s=d[f],e.substr(0,f.length)==f&&(o=e.substr(f.length,1),!o||"/"==o))return f+"@"+("string"==typeof s?s:s[s.length-1])+e.substr(f.length);return e}r=e.substr(u+1).split("/")[0];var m,g=r.length;if("^"==r.substr(0,1)&&(r=r.substr(1),m=!0),n=r.match(t),!n)return e;m&&(n[2]||(m=!1),n[3]||(n[2]>0?n[3]="0":m=!1)),m&&(n[1]>0?(n[2]||(r=n[1]+".0.0"),n[3]||(r=n[1]+".0"),m=r,n=[n[1]]):n[2]>0?(m=r,n=[0,n[2]]):(m=!1,n=[0,0,n[3]]),r=n.join("."));var h=e.substr(0,u);if(s=d[h]||[],"string"==typeof s&&(s=[s]),!n[3]||m)for(var v=s.length-1;v>=0;v--){var b=s[v];if(b.substr(0,r.length)==r&&b.substr(r.length,1).match(/^[\.\-]?$/)&&(!m||m&&-1!=a(b,m)))return h+"@"+b+e.substr(h.length+g+1)}return-1==p.call(s,r)&&(s.push(r),s.sort(a),e=h+"@"+r+e.substr(h.length+g+1),n[3]&&-1!=(u=p.call(s,n[1]+"."+n[2]))&&s.splice(u,1),n[2]&&-1!=(u=p.call(s,n[1]))&&s.splice(u,1),d[h]=1==s.length?s[0]:s),e})}}function f(e){e.depCache=e.depCache||{},loaderLocate=e.locate,e.locate=function(e){var t=this;t.depCache||(t.depCache={});var a=t.depCache[e.name];if(a)for(var r=0;r<a.length;r++)t.load(a[r]);return loaderLocate.call(t,e)}}__$global.upgradeSystemLoader=void 0;var p=Array.prototype.indexOf||function(e){for(var t=0,a=this.length;a>t;t++)if(this[t]===e)return t;return-1},m=__$global.System,g=__$global.System=new LoaderPolyfill(m);g.baseURL=m.baseURL,g.paths={"*":"*.js"},g.originalSystem=m,g.noConflict=function(){__$global.SystemJS=g,__$global.System=g.originalSystem},a(g),r(g),n(g),o(g),s(g),l(g),i(g),d(g),u(g),c(g),f(g),g.paths["@traceur"]||(g.paths["@traceur"]=__$curScript&&__$curScript.getAttribute("data-traceur-src")||(__$curScript&&__$curScript.src?__$curScript.src.substr(0,__$curScript.src.lastIndexOf("/")+1):g.baseURL+(g.baseURL.lastIndexOf("/")==g.baseURL.length-1?"":"/"))+"traceur@0.0.43.js")};var __$curScript;!function(e){if("undefined"!=typeof window){var t=document.getElementsByTagName("script");if(__$curScript=t[t.length-1],e.System&&e.LoaderPolyfill)e.upgradeSystemLoader();else{var a=__$curScript.src,r=a.substr(0,a.lastIndexOf("/")+1);document.write('<script type="text/javascript" src="'+r+'es6-module-loader@0.6.1.js" data-init="upgradeSystemLoader"></script>')}}else{var n=require("es6-module-loader");e.System=n.System,e.Loader=n.Loader,e.Module=n.Module,e.upgradeSystemLoader(),module.exports=e.System}}(__$global)}("undefined"!=typeof window?window:global),function(e){var t=e.upgradeSystemLoader;e.upgradeSystemLoader=function(){t&&t(),System.config({paths:{"*":"https://registry.jspm.io/*.js","~/*":"*.js","npm:*":"https://npm.jspm.io/*.js","github:*":"https://github.jspm.io/*.js"}}),e.upgradeSystemLoader=void 0},t||e.upgradeSystemLoader()}("undefined"!=typeof window?window:global);