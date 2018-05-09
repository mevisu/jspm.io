/*
  SystemJS 0.4.4
  Served for jspm from https://jspm.io/system@0.4.js
*/
!function(e){e.upgradeSystemLoader=function(){delete e.upgradeSystemLoader,function(){if("undefined"==typeof System)throw"System not defined. Include the `es6-module-loader@0.4.3.js` polyfill before SystemJS.";var e=function(t){if(!(t instanceof Module)){for(var r=[],n=0;n<t.length;n++)r[n]=e(t[n]);return r}return t.__defaultOnly?t["default"]:t};System.getModule=function(t){return e(System.get(t))},System.set("@empty",Module({}));var t=System.import;System.import=function(r,n){return new Promise(function(e){e(System.normalize.call(this,r,n&&n.name,n&&n.address))}).then(function(r){return Promise.resolve(t.call(System,r,n)).then(function(t){return e(t)})})}}(),function(){System.format={},System.formats=[];var t=/(?:^\s*|[}{\(\);,\n]\s*)(import\s+['"]|(import|module)\s+[^"'\(\)\n;]+\s+from\s+['"]|export\s+(\*|\{|default|function|var|const|let|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*))/,r=/^(\s*(\/\*.*\*\/)|(\/\/[^\n]*))*(["']use strict["'];?)?["'](format )?([^'"]+)["'][;\n]/,n=System.instantiate;System.instantiate=function(s){function a(){try{Function("global","with(global) { "+s.source+" \n }"+(s.address&&!s.source.match(/\/\/[@#] ?(sourceURL|sourceMappingURL)=([^\n]+)/)?"\n//# sourceURL="+s.address:"")).call(e,e)}catch(t){throw"SyntaxError"==t.name&&(t.message="Evaluating "+s.address+"\n	"+t.message),t}}var o=s.name||"";if(!s.source||"traceur"==o)return n.call(this,s);var i=s.metadata.format;if(!i){var u=s.source.match(r);u&&(i=s.metadata.format=u[6])}if("es6"==i||!i&&s.source.match(t))return s.metadata.es6=!0,n.call(System,s);if(System.shim&&System.shim[s.name]&&(i="global"),!i||!this.format[i])for(var l=0;l<this.formats.length;l++){var m=this.formats[l],d=this.format[m];if(d.detect(s)){i=m;break}}var d=this.format[i];if(!i||!d)throw new TypeError("No format found for "+(i?i:s.address));for(var f=d.deps(s,e,a),l=0;l<f.length;l++)f.lastIndexOf(f[l])!=l&&f.splice(l--,1);return{deps:f,execute:function(){var t=d.execute.call(this,Array.prototype.splice.call(arguments,0),s,e,a);return t instanceof e.Module?t:new e.Module(t&&t.__transpiledModule?(delete t.__transpiledModule,t):{__defaultOnly:!0,"default":t})}}}}("undefined"!=typeof window?window:e),function(){function e(e,t,r){return function(n,a,o){return"string"==typeof n&&-1!=t.indexOf(n)?System.getModule(r[t.indexOf(n)]):s(n,a,o,{name:e})}}function t(e,t){for(var r=0;r<e.length;r++)e.lastIndexOf(e[r])!=r&&e.splice(r--,1);var n;return-1!=(n=e.indexOf("require"))&&(t.requireIndex=n,e.splice(n,1)),-1!=(n=e.indexOf("exports"))&&(t.exportsIndex=n,e.splice(n,1)),-1!=(n=e.indexOf("module"))&&(t.moduleIndex=n,e.splice(n,1)),e}function r(t,r,n){for(var s=n&&r.source&&r.source.match(/__transpiledModule/),a=r.metadata,o=[],i=0;i<t.length;i++)o[i]=s?System.get(t[i]):System.getModule(t[i]);var u,l;return void 0!==a.moduleIndex&&o.splice(a.moduleIndex,0,l={},u={id:r.name,uri:r.address,config:function(){return{}},exports:l}),void 0!==a.exportsIndex&&o.splice(a.exportsIndex,0,l=l||{}),void 0!==a.requireIndex&&o.splice(a.requireIndex,0,e(r.name,a.deps,t)),{deps:o,module:u||l&&{exports:l}}}System.formats.push("amd");var n=/(?:^\s*|[}{\(\);,\n\?\&]\s*)define\s*\(\s*("[^"]+"\s*,|'[^']+'\s*,\s*)?(\[(\s*("[^"]+"|'[^']+')\s*,)*(\s*("[^"]+"|'[^']+')\s*)?\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/,s=System.requirejs=function(e,t,r,n){if("object"==typeof e&&!(e instanceof Array))return s.apply(null,Array.prototype.splice.call(arguments,1));if(!(e instanceof Array)){if("string"==typeof e)return System.getModule(e);throw"Invalid require"}Promise.all(e.map(function(e){return System.import(e,n)})).then(function(e){t.apply(null,e)},r)};System.format.amd={detect:function(e){return!!e.source.match(n)},deps:function(e,n,s){var a,o=e.metadata,i=!1;return n.define=function(s,u,l){if(!i){if("string"!=typeof s?(l=u,u=s,s=null):o.bundle||(s=null),s||(i=!0),!(u instanceof Array)){l=u;var m=e.source;e.source=l.toString(),u=["require","exports","module"].concat(System.format.cjs.deps(e,n)),e.source=m}if("function"!=typeof l&&(l=function(e){return function(){return e}}(l)),s&&s!=e.name){var d={name:s,address:s,metadata:{}};u=t(u,d.metadata),System.defined[s]={deps:u,execute:function(){var e=r(Array.prototype.splice.call(arguments,0),d,n.$traceurRuntime),t=l.apply(n,e.deps)||e.module&&e.module.exports;return t instanceof n.Module?t:new n.Module(t&&t.__transpiledModule?(delete t.__transpiledModule,t):{__defaultOnly:!0,"default":t})}}}else a=u,o.factory=l}},n.define.amd={},delete n.module,delete n.exports,s(),a=a||[],a=t(a,o),delete n.define,o.deps=a,a},execute:function(e,t,n){if(t.metadata.factory){var s=r(e,t,n.$traceurRuntime);return t.metadata.factory.apply(n,s.deps)||s.module&&s.module.exports}}}}(),function(){System.formats.push("cjs");var e=/(?:^\s*|[}{\(\);,\n=:\?\&]\s*|module\.)(exports\s*\[\s*('[^']+'|"[^"]+")\s*\]|\exports\s*\.\s*[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*|exports\s*\=)/,t=/(?:^\s*|[}{\(\);,\n=:\?\&]\s*)require\s*\(\s*("([^"]+)"|'([^']+)')\s*\)/g,r=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,n={nextTick:function(e){setTimeout(e,7)}};System.format.cjs={detect:function(r){return e.lastIndex=0,t.lastIndex=0,!(!t.exec(r.source)&&!e.exec(r.source))},deps:function(n){e.lastIndex=0,t.lastIndex=0;for(var s,a=[],o=n.source.replace(r,"");s=t.exec(o);)a.push(s[2]||s[3]);return n.metadata.deps=a,a},execute:function(e,t,r,s){var a=t.address.split("/");a.pop(),a=a.join("/");var o=t.metadata.deps,i=r._g={global:r,exports:{},process:n,require:function(t){var r=o.indexOf(t);return-1!=r?System.getModule(e[r]):void 0},__filename:t.address,__dirname:a};i.module={exports:i.exports};var u="";for(var l in i)u+="var "+l+" = _g."+l+";";return t.source=u+t.source,s(),delete r._g,i.module.exports}}}(),function(){System.formats.push("global");var e=/(["'](format )?global["'];\s*)((['"](import|deps) [^'"]+['"];\s*)*)(['"]exports? ([^'"]+)["'])?/,t=/(["'](import|deps) [^'"]+)+/g,r={};System.shim={},System.format.global={detect:function(){return!0},deps:function(r){var n,s;if(n=r.source.match(e)){if(s=n[3].match(t))for(var a=0;a<s.length;a++)s[a]=s[a].substr("i"==s[a].substr(1,1)?8:6);r.metadata.globalExport=n[7]}s=s||[];var o;return(o=System.shim[r.name])&&("object"==typeof o&&(o.exports&&(r.metadata.globalExport=o.exports),(o.deps||o.imports)&&(o=o.deps||o.imports)),o instanceof Array&&(s=s.concat(o))),s},execute:function(e,t,n,s){for(var a=t.metadata.globalExport,o=0;o<e.length;o++){var i=r[e[o]];if(i)for(var u in i)n[u]=i[u]}var l={};for(var m in n)n.hasOwnProperty(m)&&(l[m]=n[m]);a&&(t.source+='\nthis["'+a+'"] = '+a),s();var d,i;if(a){var f=a.split(".")[0];d=eval.call(n,a),i={},i[f]=n[f]}else{i={};for(var m in n)n.hasOwnProperty(m)&&m!=n&&l[m]!=n[m]&&(i[m]=n[m],d?d!==n[m]&&(d=!1):d!==!1&&(d=n[m]))}return r[t.name]=i,d?d:new Module(i)}}}(),function(){function e(e,t){var r=t.split("/"),n=e.split("/");if(r.length>n.length)return 0;for(var s=0;s<r.length;s++)if(n[s]!=r[s])return 0;return r.length}function t(t,r){var n,s,a=0,o=0;if(r){for(var i in System.map){var u=System.map[i];if("object"==typeof u&&!(e(r,i)<=o))for(var l in u)e(t,l)<=a||(n=l,a=l.split("/").length,s=i,o=i.split("/").length)}if(n){var m=t.split("/").splice(a).join("/");return System.map[s][n]+(m?"/"+m:"")}}for(var i in System.map){var u=System.map[i];"string"==typeof u&&(e(t,i)<=a||(n=i,a=i.split("/").length))}if(!n)return t;var m=t.split("/").splice(a).join("/");return System.map[n]+(m?"/"+m:"")}System.map=System.map||{};var r=System.normalize.bind(System);System.normalize=function(e,n,s){return Promise.resolve(r(e,n,s)).then(function(e){return t(e,n)})}}(),function(){var e=System.normalize;System.normalize=function(t,r,n){var s;return r&&-1!=(s=r.indexOf("!"))&&(r=r.substr(0,s)),Promise.resolve("#"==t.substr(0,1)?t:e(t,r,n)).then(function(e){e=e.trim();var t=e.lastIndexOf("!");if(-1!=t){var s=e.substr(0,t),a=e.substr(t+1)||s.substr(s.lastIndexOf(".")+1);return new Promise(function(e){e(System.normalize(a,r,n))}).then(function(e){return a=e,System.normalize(s,r,n)}).then(function(e){return e+"!"+a})}return e})};var t=System.locate;System.locate=function(e){var r=e.name,n=r.lastIndexOf("!");if(-1!=n){var s=r.substr(n+1);return e.name=r.substr(0,n),System.load(s).then(function(){var t=System.get(s);return t=t.default||t,e.metadata.plugin=t,e.metadata.pluginName=s,e.metadata.pluginArgument=e.name,t.locate?t.locate.call(System,e):new Promise(function(t){t(System.locate(e))}).then(function(e){return e.substr(0,e.length-3)})})}return t.call(this,e)};var r=System.fetch;System.fetch=function(e){var t=this;return"function"==typeof e.metadata.plugin?new Promise(function(n,s){e.metadata.plugin(e.metadata.pluginArgument,e.address,function(n,s,a){r.call(t,{name:e.name,address:n,metadata:{}}).then(s,a)},n,s)}):(e.metadata.plugin&&e.metadata.plugin.fetch||r).call(this,e)};var n=System.translate;System.translate=function(e){var t=e.metadata.plugin;return t&&t.translate?t.translate.call(this,e):n.call(this,e)};var s=System.instantiate;System.instantiate=function(e){return e.metadata.plugin&&e.metadata.plugin.instantiate?Promise.resolve(e.metadata.plugin.instantiate.call(System,e)).then(function(t){return t?{deps:[],execute:function(){return Module({"default":t,__defaultOnly:!0})}}:s.call(System,e)}):s.call(this,e)}}(),function(){System.bundles=System.bundles||{},System.defined=System.defined||{};var e=System.fetch;System.fetch=function(t){if(System.defined[t.name])return"";for(var r in System.bundles)if(-1!=System.bundles[r].indexOf(t.name))return Promise.resolve(System.normalize(r)).then(function(e){return System.bundles[e]=System.bundles[e]||System.bundles[r],System.load(e)});return e.apply(this,arguments)};var t=System.locate;System.locate=function(e){return System.bundles[e.name]&&(e.metadata.bundle=!0),t.call(this,e)};var r=System.instantiate;System.instantiate=function(e){if(System.defined[e.name]){var t=System.defined[e.name];return delete System.defined[e.name],t}return e.metadata.bundle?{deps:[],execute:function(){return new Module({})}}:r.apply(this,arguments)}}(),function(){var e=/^(\d+)(?:\.(\d+)(?:\.(\d+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?)?)?$/,t=function(e,t){var r,n=e.split("."),s=t.split(".");n[2]&&-1!=(r=n[2].indexOf("-"))&&n.splice(2,1,n[2].substr(0,r),n[2].substr(r+1)),s[2]&&-1!=(r=s[2].indexOf("-"))&&s.splice(2,1,s[2].substr(0,r),s[2].substr(r+1));for(var a=0;a<Math.max(n.length,s.length);a++){if(!n[a])return 1;if(!s[a])return-1;if(n[a]!=s[a])return parseInt(n[a])>parseInt(s[a])?1:-1}return 0},r=System.normalize;System.versions=System.versions||{},System.normalize=function(n,s,a){var o=System.versions;return Promise.resolve(r.call(this,n,s,a)).then(function(r){var n,s,a,i,u=r.indexOf("@");if(-1==u){for(var l in o)if(i=o[l],"string"==typeof i&&(i=[i]),r.substr(0,l.length)==l&&(a=r.charAt(l.length),!a||"/"==a))return l+"@"+i[i.length-1]+r.substr(l.length);return r}n=r.substr(u+1).split("/")[0];var m;if("^"==n.substr(0,1)&&(n=n.substr(1),m=!0),s=n.match(e),m&&(s[1]>0?(m=n,s=[s[1]]):s[2]>0?(m=n,s=[0,s[2]]):(m=!1,s=[0,0,s[3]]),n=s.join("."),r=r.substr(0,u+1)+n),!s)return r;var d=r.substr(0,u);if(i=o[d]||[],"string"==typeof i&&(i=[i]),!s[3]||m)for(var f=i.length-1;f>=0;f--){var c=i[f];if(c.substr(0,n.length)==n&&c.charAt(n.length).match(/^[\.\-]?$/)&&(!m||m&&-1!=t(c,m)))return d+"@"+c+r.substr(d.length+n.length+1)}return-1==i.indexOf(n)&&(i.push(n),i.sort(t),o[d]=1==i.length?i[0]:i),r})}}()},function(){if(!e.System||e.System.registerModule)if("undefined"!=typeof window){var t=document.getElementsByTagName("script"),r=t[t.length-1].src,n=r.substr(0,r.lastIndexOf("/")+1);document.write('<script type="text/javascript" src="'+n+'es6-module-loader@0.4.3.js" data-init="upgradeSystemLoader"></script>')}else{var s=require("es6-module-loader");e.System=s.System,e.Loader=s.Loader,e.Module=s.Module,module.exports=e.System,e.upgradeSystemLoader()}else e.upgradeSystemLoader()}()}("undefined"!=typeof window?window:global),function(e){var t=e.upgradeSystemLoader;e.upgradeSystemLoader=function(){t&&t(),System.paths={"*":"https://registry.jspm.io/*.js","~/*":"*.js","npm:*":"https://npm.jspm.io/*.js","github:*":"https://github.jspm.io/*.js","cdnjs:*":"https://cdnjs.cloudflare.com/ajax/libs/*.js"},e.upgradeSystemLoader=void 0},t||e.upgradeSystemLoader()}("undefined"!=typeof window?window:global);
