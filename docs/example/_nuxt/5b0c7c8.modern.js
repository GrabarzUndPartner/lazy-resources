!function(t){function e(data){for(var e,o,l=data[0],f=data[1],d=data[2],i=0,m=[];i<l.length;i++)o=l[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(e in f)Object.prototype.hasOwnProperty.call(f,e)&&(t[e]=f[e]);for(h&&h(data);m.length;)m.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var t,i=0;i<c.length;i++){for(var e=c[i],n=!0,o=1;o<e.length;o++){var f=e[o];0!==r[f]&&(n=!1)}n&&(c.splice(i--,1),t=l(l.s=e[0]))}return t}var o={},r={2:0},c=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,l.nc&&script.setAttribute("nonce",l.nc),script.src=function(t){return l.p+""+{0:"53c94de",1:"e1ba1d5",4:"803625a",5:"f422150",6:"ffac6ac",7:"14313bf",8:"13bf9b7",9:"139857a",10:"7a1484d",11:"8d8b34c",12:"db7d6ef",13:"d2322c9",14:"ccf12a8",15:"6c3c456",16:"5db2b10",17:"dccdecb",18:"4ce94c4",19:"509312c",20:"ab3283c",21:"bbed3ce",22:"ce2986e",23:"fb22967",24:"e1a1dc1",25:"88aa97f",26:"024b6cb",27:"ebb6f53",28:"8b47ef7",29:"ae565b1",30:"7dfaf38",31:"0c26c09",33:"6154c28",34:"763bbe5",35:"6446b92",36:"7b4627a"}[t]+".modern.js"}(t);var f=new Error;c=function(e){script.onerror=script.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,n[1](f)}r[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},l.p="/example/_nuxt/",l.oe=function(t){throw console.error(t),t};var f=window.webpackJsonp=window.webpackJsonp||[],d=f.push.bind(f);f.push=e,f=f.slice();for(var i=0;i<f.length;i++)e(f[i]);var h=d;c.push([53,3,32]),n()}([,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));class o{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}},function(t,e,n){"use strict";function o(t){let e=0;if(0===t.length)return e;for(let i=0;i<t.length;i++){e=(e<<5)-e+t.charCodeAt(i),e&=e}return e}function r(t){return o(t).toString(16)}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}))},,function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));const o=new Map;const r=function(t="0%",e=[0]){if("undefined"==typeof IntersectionObserver)return null;const n=new IntersectionObserver(t=>{t.forEach(t=>{if(!(t.isIntersecting||t.intersectionRatio>0))return;const e=t.target;!function(t){o.get(t)(),o.delete(t)}(e),n.unobserve(e)})},{rootMargin:t,threshold:e});return n}("0%");function c(t,e){r&&(o.set(t,e),r.observe(t))}function l(t){o.delete(t)}},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d}));var o=n(10);const r=new Map;t.__NUXT_SPEEDKIT_RESOLVE_COMPONENTS__=l;const c={NONE:"none",VISIBLE:"visible",EVENT:"event",NAME:"name"};function l(t){let e;if(t){if(!r.has(t))return void console.error("Have no resolve with specified name "+t);e=r.get(t).map(e=>[t,e])}else e=Array.from(r).map(t=>t[1].map(e=>[t[0],e])).flat();e.forEach(([t,e])=>{r.delete(t),e()})}function f(t,e){r.set(t,(r.get(t)||[]).concat([e]))}function d(component,t=c.NONE,e={}){e=Object.assign({name:null},e);const{resolvableComponent:n,resolve:d}=function(component){const t=new o.a;return{resolvableComponent:t.promise,resolve:()=>{t.resolve("function"==typeof component?component():component)}}}(component),h=function(t,e){return Object.assign({render(e){const n=this.$el?this.$el.tagName:"div";return this.$el||t(),e(n)}},e)}(d,{mounted(){!function(component,t,e,n){switch(f(component._uid,t),e){case c.EVENT:if(!n.name)throw new Error("mode event needs a event name (e.g. click)");n.el.addEventListener(n.name,t,{capture:!0,once:!0,passive:!0});break;case c.NAME:if(!n.name)throw new Error('mode "name" needs a name (e.g. xyz)');f(n.name,t);break;case c.VISIBLE:component.$el instanceof HTMLElement?function(t,e,n){if(n=Object.assign({rootMargin:"0%",threshold:[0]},n),"undefined"==typeof IntersectionObserver)return null;const o=new IntersectionObserver(t=>{t.forEach(t=>{(t.isIntersecting||t.intersectionRatio>0)&&r.has(e)&&(o.disconnect(),l(e))})},n);o.observe(t)}(component.$el,component._uid,n):t()}}(this,d,t,Object.assign({},e,{el:this.$el}))}});return()=>({component:n,delay:0,loading:h})}}).call(this,n(3))},function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));const o={device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:500,dcl:800},lighthouseDetectionByUserAgent:!1};let r=o,c=f(r);function l(t={}){r={device:Object.assign({},o.device,t.device||{}),timing:Object.assign({},o.timing,t.timing||{}),lighthouseDetectionByUserAgent:r.lighthouseDetectionByUserAgent||o.lighthouseDetectionByUserAgent},r=Object.assign({},o,t),c=f(r)}function f(e={}){const n=t.navigator||{};return{hardwareConcurrency:n.hardwareConcurrency||e.device.hardwareConcurrency.min,deviceMemory:n.deviceMemory||e.device.deviceMemory.min,userAgent:n.userAgent||""}}function d(){return function(){if(t.performance){const t=performance.getEntriesByName("first-contentful-paint"),e=performance.getEntriesByType("resource");if(t.length)return t[0].startTime<r.timing.fcp;if(e.length)return e.reduce((t,e)=>((!t||t<e.responseEnd)&&(t=e.responseEnd),t),null)<r.timing.dcl}return!1}()&&c.hardwareConcurrency>=r.device.hardwareConcurrency.min&&c.hardwareConcurrency<=r.device.hardwareConcurrency.max&&c.deviceMemory>=r.device.deviceMemory.min&&!(r.lighthouseDetectionByUserAgent&&/(Speed Insights)|(Chrome-Lighthouse)/.test(c.userAgent))&&!0}}).call(this,n(3))},,,,,function(t,e,n){var content=n(64);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("73089ea0",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(66);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("c5304096",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(68);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("a111a1a6",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(70);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("7af26a97",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(72);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("b44de92e",content,!0,{sourceMap:!1})},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-300.a1a2f34.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-regular.37cb9c1.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-500.4738c50.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-600.3146a88.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-700.8e119b1.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300.4ac811c.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300italic.5399b46.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-regular.3c76b16.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-italic.7477896.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700.acf5c4d.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700italic.36a3d53.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300.2387319.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300italic.0a03499.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-regular.0c99547.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-italic.2a4c48d.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700.ea59e2f.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700italic.977866f.woff2"},,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(46);class r{constructor(t=[]){this.list=t.map(t=>(t.variances=t.variances.map(t=>Object.assign({style:"normal",weight:400},t)),t))}getFont(t,e=400,style="normal",n={selector:null,media:null}){const r=this.list.find(e=>e.family===t);if(!r)throw new Error(`font family ${t} not found, please define in module options`);return function(t,e,style,n={selector:null,media:null}){const{src:r,type:c}=t.variances.find(t=>t.weight===e&&t.style===style);return new o.a(t.family,e,style,{src:r,type:c,fallbackFamily:t.fallback},n)}(r,e,style,n)}}},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return d}));var o=n(47),r=n(10);function c(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var l=0;var f="__private_"+l+++"_"+"rootSelector";class d{constructor(t,e=400,style="normal",{src:n=null,type:o=null,fallbackFamily:l=null},{media:d=null,selector:h=null}){Object.defineProperty(this,f,{writable:!0,value:void 0}),this.family=t,this.style=style,this.weight=e,this.src=n,this.type="font/"+o,this.fallbackFamily=l,c(this,f)[f]="",this.selector=h||"",this.media=d||null,this.loaded=new r.a}async load(){if(!t.document.fonts.check(`${this.style} ${this.weight} 12px '${this.family}'`)){const e=Array.from(t.document.fonts.keys()).find(t=>t.family===this.family&&t.style===this.style&&t.weight===String(this.weight));await e.load()}}getKey(){const data=Object.assign({},this);return delete data.src,Object(o.a)(JSON.stringify(data))}getCSSText(){const t=function(t,e){return e.split(", ").map(e=>`[${t}] ${e.trim()}`).join(", ")}(c(this,f)[f],this.selector).trim();return style=`${t} {\n        font-family: ${this.fallbackFamily.join(", ")};\n        font-weight: ${this.weight};\n        font-style: ${this.style};\n      }\n      .font-active${t} {\n        font-family: ${[`"${this.family}"`].concat(this.fallbackFamily).join(", ")};\n      }`,(e=this.media)&&`@media ${e} { ${style} }`||style;var style,e}setRootSelector(t){c(this,f)[f]=t}}}).call(this,n(3))},function(t,e,n){"use strict";(function(t,o){function r(e){return"btoa"in t?t.btoa(e):o.from(e).toString("base64")}n.d(e,"a",(function(){return r}))}).call(this,n(3),n(93).Buffer)},,function(t,e,n){"use strict";var o={components:{SpeedkitLayer:n(50).a},data:()=>({text:"Your connection is too slow…",buttonLabel:"Anyway (OK)"})},r=(n(63),n(2)),c={speedkitComponents:{GoogleLighthouse:()=>Promise.resolve().then(n.bind(null,99)),OrganismPageHeader:()=>Promise.resolve().then(n.bind(null,100))},components:{InfoLayer:Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("speedkit-layer",{staticClass:"info_layer"},[e("div",[e("p",[this._v(this._s(this.text))]),this._v(" "),e("button",{staticClass:"info_layer__button nuxt-speedkit__speedkit-layer__button",attrs:{onclick:"window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"}},[this._v("\n      "+this._s(this.buttonLabel)+"\n    ")])])])}),[],!1,null,null,null).exports},head(){return{title:this.$route.name+" | nuxt-speedkit",meta:[{hid:"description",name:"description",content:this.$route.name+" - description"}]}}},l=(n(69),Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("google-lighthouse"),this._v(" "),e("organism-page-header",{attrs:{critical:""}}),this._v(" "),e("Nuxt"),this._v(" "),e("info-layer"),this._v(" "),e("GithubCorner")],1)}),[],!1,null,null,null));e.a=l.exports;installComponents(l,{GithubCorner:n(98).default})},,function(t,e,n){"use strict";var o=n(13),r={install(t,e){t.directive(e,{bind(t,e,n){const o=n.context.fontCollection.add(n,[].concat(e.value));t.setAttribute(""+o,!0),n.context.isCritical&&t.classList.add("font-active")},inserted(t,e,n){Object(o.a)(t,async()=>{const o=[].concat(e.value);await Promise.all(o.map(t=>t.load())),t.classList.add("font-active"),n.context.$emit("load:font",o)})},unbind(t,e,n){Object(o.b)(t)}})}},c=n(11);class l{constructor(){this.list=[]}add(t,e){const n="data-f"+function(t,e){return Object(c.b)(`${t}_${e}`).padStart(9,"-")}(t.tag,JSON.stringify(e.map(t=>t.getKey())));return this.list=[].concat(this.list).concat(e.map(t=>(t.setRootSelector(n),t))),n}getPreloadLinks(t){return Array.from(this.list.reduce((t,e)=>t,new Map).values())}getStyleTag(){if(this.list.length){const t=this.list.map(t=>t.getCSSText()).join(" ");return[{hid:Object(c.b)(t),type:"text/css",cssText:t}]}return[]}toJSON(){return this.list}}var f=n(14),d={install(t){t.mixin({provide(){return{criticalParent:this.critical||this.criticalParent}},inject:{criticalParent:{default:()=>this.critical||!1}},props:{critical:{type:Boolean,default:()=>!1}},data:()=>({fontCollection:new l}),head(){return{link:this.fontCollection.getPreloadLinks?this.fontCollection.getPreloadLinks(this.isCritical):[],style:this.fontCollection.getStyleTag?this.fontCollection.getStyleTag():[],__dangerouslyDisableSanitizers:["style"]}},computed:{isCritical(){return this.criticalParent||this.critical}},beforeCreate(){const t=Object.entries(this.$options.speedkitComponents||{}).reduce((t,[e,n])=>Object.assign(t,{[e]:Object(f.b)(()=>function(t){return t.then(component=>({functional:!0,render(t,e){const n=e.data;return n.attrs=Object.assign({},n.attrs,e.props),t(component.default||component,Object.assign({},n))}})).catch(t=>{throw t})}(n()),f.a.VISIBLE,{rootMargin:"0%"})}),{});Object.assign(this.$options.components,t)}})}};let h=!1;e.a={install(t,e){h||(h=!0,r.install(t,"font"),d.install(t))}}},,function(t,e,n){n(54),t.exports=n(55)},,,,,,,,,,function(t,e,n){"use strict";n(20)},function(t,e,n){(e=n(5)(!1)).push([t.i,".info_layer{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:rgba(0,0,0,.25);opacity:0;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-backdrop-filter:blur(.4375em);backdrop-filter:blur(.4375em);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.info_layer,.info_layer>div{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:.5s;animation-delay:.5s}.info_layer>div{padding:10px;font-family:sans-serif;font-weight:700;color:#f5f7fa;text-align:center;background-color:#2c3e50;box-shadow:0 0 .625em hsla(0,0%,100%,.6);transform:translateY(-50%);-webkit-animation-name:fall-down;animation-name:fall-down;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (prefers-color-scheme:dark){.info_layer>div{color:#2f495e;background-color:#fff;box-shadow:0 0 .625em rgba(0,0,0,.6)}}@-webkit-keyframes fade-in{to{opacity:1}}@keyframes fade-in{to{opacity:1}}@-webkit-keyframes fall-down{to{transform:translateY(0)}}@keyframes fall-down{to{transform:translateY(0)}}",""]),t.exports=e},function(t,e,n){"use strict";n(21)},function(t,e,n){(e=n(5)(!1)).push([t.i,".nuxt-speedkit__lighthouse[data-v-33cc96f6]{--pi:3.14159265358979;--score:0;position:fixed;top:0;right:0;z-index:1;display:block;width:60px;font-family:Arial,Helvetica,sans-serif;text-align:center;pointer-events:none;background-color:#fff}.nuxt-speedkit__lighthouse.ready[data-v-33cc96f6]{pointer-events:all}.nuxt-speedkit__lighthouse>svg[data-v-33cc96f6]{display:block;width:50px;height:50px;margin:5px}.nuxt-speedkit__lighthouse>svg circle[data-v-33cc96f6]{fill:transparent;stroke:var(--color-status);stroke-width:10;transform:rotate(-90deg);transform-origin:50%}.nuxt-speedkit__lighthouse>svg circle.pending[data-v-33cc96f6]{stroke-dasharray:calc(var(--pi)*1.35*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite;animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite}.nuxt-speedkit__lighthouse>svg circle.ready[data-v-33cc96f6]{fill:var(--color-status);fill-opacity:.1;stroke-dasharray:calc(var(--pi)*2*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6 var(--duration) ease-out forwards;animation:nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6 var(--duration) ease-out forwards}.nuxt-speedkit__lighthouse>svg line[data-v-33cc96f6]{stroke:var(--color-status);stroke-width:10}.nuxt-speedkit__lighthouse>svg text[data-v-33cc96f6]{font-size:32px;fill:var(--color-status)}.nuxt-speedkit__lighthouse span[data-v-33cc96f6]{font-size:12px;text-decoration:underline}.nuxt-speedkit__lighthouse svg[data-v-33cc96f6]{display:inline;width:12px;height:12px;margin-left:3px}@-webkit-keyframes nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6{to{stroke-dashoffset:var(--radian)}}@keyframes nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6{to{transform:rotate(270deg)}}",""]),t.exports=e},function(t,e,n){"use strict";n(22)},function(t,e,n){(e=n(5)(!1)).push([t.i,".page-header[data-v-779a62e4]{position:fixed;top:0;left:0;z-index:1}.page-header .overview-link[data-v-779a62e4]{display:inline-block;padding:.55556em;font-size:1.125em;color:#f5f7fa;text-decoration:none;background-color:#2c3e50;border-radius:0 0 .27778em 0;box-shadow:0 0 .27778em hsla(0,0%,100%,.6)}@media (prefers-color-scheme:dark){.page-header .overview-link[data-v-779a62e4]{color:#2f495e;background-color:#fff;box-shadow:0 0 .27778em rgba(0,0,0,.6)}}",""]),t.exports=e},function(t,e,n){"use strict";n(23)},function(t,e,n){(e=n(5)(!1)).push([t.i,"html{height:-webkit-fill-available;height:-moz-available;height:stretch}body{min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:0;font-size:5vw;color:#2f495e;background-color:#fff}@media (prefers-color-scheme:dark){body{color:#f5f7fa;background-color:#2c3e50}}@media (min-width:375px){body{font-size:4.26667vw}}@media (min-width:414px){body{font-size:3.86473vw}}@media (min-width:768px){body{font-size:2.08333vw}}@media (min-width:992px){body{font-size:16px}}",""]),t.exports=e},function(t,e,n){"use strict";n(24)},function(t,e,n){(e=n(5)(!1)).push([t.i,".atom-github-corner{position:fixed;top:0;right:0}.atom-github-corner:hover .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}@media (max-width:500px){.atom-github-corner .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}.atom-github-corner:hover .octo-arm{-webkit-animation:none;animation:none}}@-webkit-keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}",""]),t.exports=e},,,,function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-300.225df8e.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-regular.f410294.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-500.751ea22.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-600.34ecec7.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-700.20c9772.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300.7bf3d7e.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300italic.e560d0b.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-regular.b38f92c.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-italic.cb3a9d6.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700.ac901f8.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700italic.5829751.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300.cb208c2.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300italic.8191cc0.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-regular.14f9c88.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-italic.05827e5.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700.bb59602.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700italic.dd03d8e.woff"},,,,,,function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:"View source on GitHub"},url:{type:String,default:"https://github.com/GrabarzUndPartner/nuxt-speedkit"}}},r=(n(71),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"atom-github-corner",attrs:{href:this.url,"aria-label":this.title,title:this.title}},[e("svg",{staticStyle:{position:"absolute",top:"0",right:"0",color:"#fff",border:"0",fill:"#151513"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var o={components:{LighthouseWidget:()=>n.e(36).then(n.bind(null,229))},created(){this.$router.beforeEach((t,e,n)=>{!("lh"in t.query)&&"lh"in e.query&&(t.query.lh=e.query.lh,n({path:t.path,query:t.query})),n()})}},r=(n(65),n(2)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return"lh"in this.$route.query?e("lighthouse-widget",this._b({},"lighthouse-widget",this.$attrs,!1)):this._e()}),[],!1,null,"33cc96f6",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(67);var o=n(2),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"page-header"},["/"!==this.$route.path?e("nuxt-link",{staticClass:"overview-link",attrs:{to:"/"}},[e("span",[this._v("← Back")])]):this._e()],1)}),[],!1,null,"779a62e4",null);e.default=component.exports}]);