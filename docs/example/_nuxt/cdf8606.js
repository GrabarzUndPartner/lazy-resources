(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{314:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(t){return r[String(t)]}},318:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return f}));var r=n(129);var o,c=!(!(o=t.document.createElement("canvas")).getContext||!o.getContext("2d"))&&0===o.toDataURL("image/webp").indexOf("data:image/webp");function f(){if(Object(r.a)())return!1;var e=t.document.createElement("link").relList;return function(element,e){var n={};t.document&&(n=t.document.createElement(element));if(e in n)return!0;return!1}("link","imageSrcset")&&!!(e&&e.supports&&e.supports("preload"))}}).call(this,n(16))},319:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(30),n(26),n(115),n(10),n(31),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(40);var r=n(114),o=function(){function t(){this.map=new Map}return t.prototype.getPromise=function(t,e){if(!this.map.has(t)){var n=new r.a;this.map.set(t,n.promise),e(n.resolve,n.reject)}return this.map.get(t)},t}()},338:function(t,e,n){var content=n(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("6e178917",content,!0,{sourceMap:!1})},344:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));n(131),n(30),n(26),n(32),n(10),n(31),n(40),n(41);var r=n(7);function o(t,e,n){return Promise.all(t.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(source){var r,o,c,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(source);case 2:return r=t.sent,o=r[0].url,c=r[1],m=r[2].placeholder,t.abrupt("return",Object.assign(f(o,l(c)),{dataURI:n&&m}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then(m)}function c(t,e){return Promise.all(t.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(source){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(source);case 2:return n=t.sent,r=n[0].url,o=n[1],t.abrupt("return",f(r,l(o)));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then(m)}function f(t,e){var n=e.min;return{size:e,media:n.media,breakpoint:n.breakpoint,width:e.max.width,url:t}}function l(t){var e=Array.from(t).sort((function(a,b){return a.width>b.width?1:-1})),n=e.shift();return{min:n,max:e.pop()||n}}function m(t){return t.sort((function(a,b){return a.width<b.width?1:-1}))}},347:function(t,e,n){"use strict";n(338)},348:function(t,e,n){var r=n(14)(!1);r.push([t.i,".component-stage[data-v-0aa7fe9f]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim[data-v-0aa7fe9f]{display:block;font-size:25px;line-height:50px;text-transform:none}.component-stage .headline[data-v-0aa7fe9f]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.component-stage .headline[data-v-0aa7fe9f]{font-size:40px;line-height:80px}}.component-stage h1[data-v-0aa7fe9f]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.component-stage h1[data-v-0aa7fe9f]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}",""]),t.exports=r},394:function(t,e,n){"use strict";n.r(e);var r={components:{SpeedkitPicture:n(346).a},props:{picture:{type:Object,default:function(){return{}}},headline:{type:String,default:function(){return"Headline"}},claim:{type:String,default:function(){return"Claim"}}}},o=(n(347),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-stage"},[t.picture?n("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1)):t._e(),t._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),t.$getFont("Merriweather",300,"italic",{selector:".claim"})],expression:"[\n      $getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n      $getFont('Merriweather', 300, 'italic', {selector: '.claim'})\n    ]"}]},[n("span",{staticClass:"headline"},[t._v(t._s(t.headline))]),t._v(" "),n("span",{staticClass:"claim"},[t._v(t._s(t.claim))])])],1)}),[],!1,null,"0aa7fe9f",null);e.default=component.exports}}]);