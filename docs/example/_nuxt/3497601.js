(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{262:function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0ca7e28f",content,!0,{sourceMap:!1})},263:function(t,e,n){var content=n(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1c0f1833",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o;n(7);function r(){return o||(o=new Promise((function(e){var img=new t.Image;img.onload=function(){return e(!0)},img.onerror=function(){return e(!1)},img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}))),o}function l(element,e){var n={};return t.document&&(n=t.document.createElement(element)),e in n}}).call(this,n(14))},265:function(t,e,n){var content=n(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("dba19a4e",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";var o=n(13),r=n(4),l=n(57),c=n(16),d=n(12),h=n(38),m=n(116),f=n(77),A=n(5),w=n(56),v=n(115).f,x=n(45).f,E=n(18).f,C=n(189).trim,j="Number",M=r.Number,S=M.prototype,y=h(w(S))==j,k=function(t){var e,n,o,r,l,c,d,code,h=f(t,!1);if("string"==typeof h&&h.length>2)if(43===(e=(h=C(h)).charCodeAt(0))||45===e){if(88===(n=h.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(h.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+h}for(c=(l=h.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>r)return NaN;return parseInt(l,o)}return+h};if(l(j,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var H,Q=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof Q&&(y?A((function(){S.valueOf.call(n)})):h(n)!=j)?m(new M(k(e)),n,Q):k(e)},z=o?v(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),B=0;z.length>B;B++)d(M,H=z[B])&&!d(Q,H)&&E(Q,H,x(M,H));Q.prototype=S,S.constructor=Q,c(r,j,Q)}},267:function(t,e,n){"use strict";n(262)},268:function(t,e,n){var o=n(25)(!1);o.push([t.i,'.nuxt-speedkit__image-container[data-v-e23a632a]{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}',""]),t.exports=o},269:function(t,e,n){"use strict";n(263)},270:function(t,e,n){var o=n(25)(!1);o.push([t.i,".nuxt-speedkit__noscript[data-v-fc27cbec]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=o},271:function(t,e,n){"use strict";n(265)},272:function(t,e,n){var o=n(25)(!1);o.push([t.i,".nuxt-speedkit__custom-image[data-v-c1feaf18]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),t.exports=o},273:function(t,e,n){"use strict";n(78),n(30);var o=n(3),r=n(79),l=n(264),c=(n(7),n(20),n(27),n(188),n(17),n(117),n(118)),d=function(){function t(){this.map=new Map}return t.prototype.getEntry=function(t){return this.map.has(t)||this.map.set(t,new c.a),this.map.get(t)},t}(),h=n(58),m=new d;function f(t,e,n){var o=Object(h.a)(t.srcset),r=m.getEntry(o);return r.promise.then((function(){return e()})),Object(l.a)("link","imageSrcset")?{link:[A(t,o,r.resolve,n)]}:function(t,e,n){var img=new Image;img.onload=e,img.crossorigin=n,img.srcset=t.srcset}(t,r.resolve,n)}function A(t,e,n,o){return{hid:e,rel:"preload",as:"image",crossorigin:o,callback:n,imageSrcset:t.srcset}}var w={props:{preload:{type:Array,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},fetchOnServer:!1,data:function(){return{visible:this.isCritical,preloaded:!1,webpSupport:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!1,e.t0){e.next=5;break}return e.next=4,Object(l.b)();case 4:e.t0=e.sent;case 5:t.webpSupport=e.t0;case 6:case"end":return e.stop()}}),e)})))()},head:function(){var t,e=this;return this.preload&&this.visible&&this.preload&&this.preload.length?f((t=this.preload,this.webpSupport&&t.find((function(source){return"image/webp"===source.type}))||t.find((function(source){return"image/webp"!==source.type}))),(function(){return e.onPreload()}),this.crossorigin):{}},mounted:function(){var t=this;Object(r.a)(this.$el,(function(){t.visible=!0}))},destroyed:function(){Object(r.b)(this.$el)},methods:{onLoad:function(t){this.preloaded&&this.$emit("load",t.target)},onPreload:function(){this.preloaded=!0,this.$emit("preload")}}},v=(n(271),n(8)),component=Object(v.a)(w,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",crossorigin:t.crossorigin},on:{load:t.onLoad}})}),[],!1,null,"c1feaf18",null);e.a=component.exports},274:function(t,e,n){"use strict";var o={props:{loading:{type:Boolean,default:function(){return!1}}},computed:{hasSlot:function(){return this.$slots.caption}}},r=(n(267),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"nuxt-speedkit__image-container"},[t._t("default"),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"}),t._v(" "),t.hasSlot?n("figcaption",[t._t("caption")],2):t._e()],2)}),[],!1,null,"e23a632a",null);e.a=component.exports},275:function(t,e,n){"use strict";n(269);var o=n(8),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this,e=t.$createElement;t._self._c;return t._t("default")},staticRenderFns:[]}})}),[],!1,null,"fc27cbec",null);e.a=component.exports},276:function(t,e,n){"use strict";n(266);var o=n(274),r=n(275),l=n(273),c={components:{ImageContainer:o.a,CustomNoScript:r.a,CustomImage:l.a},props:{sources:{type:Array,default:function(){return[]}},placeholder:{type:Object,default:function(){return{}}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},data:function(){return{preloadedSources:this.noScript&&this.sources||[],loading:!1,webpSupport:!1}},computed:{hasSlot:function(){return this.$slots.caption}},mounted:function(){this.loading=!0},methods:{onLoad:function(t){this.loading=!1,this.$emit("load")},onPreload:function(){this.preloadedSources=this.sources}}},d=n(8),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{staticClass:"nuxt-speedkit__lazy-picture",attrs:{loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(){return[n("picture",[t._l(t.preloadedSources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.placeholder.base64,preload:t.sources,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2),t._v(" "),n("custom-no-script",[n("picture",[t._l(t.sources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.placeholder.url,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2)])]},proxy:!0},{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.a=component.exports},277:function(t,e,n){var o={src:n.p+"img/d05258f.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23ab8a5c' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fffff3' d='M182.8 2254.7l2071.9-1021.9 65.6 1312.5z'/%3E%3Cpath fill='%23361100' d='M604.7 173.4l468.7 1659.4 750-1790.6z'/%3E%3Cpath fill='%23380100' d='M623.4 998.4l-768.7 665.7V-145.3z'/%3E%3Cpath fill='%23fbe0a6' d='M417.2 2545.3l1837.5-253.1-2081.3-984.4z'/%3E%3Cpath fill='%236a3400' d='M1917.2 1289l-890.6 459.4-740.7-618.7z'/%3E%3Cpath fill='%23b6af91' d='M2311 1101.6l-1828.2 75 618.8-403.2z'/%3E%3Cpath fill='%23230d00' d='M1767.2-51.6l-440.6 993.8-356.3-459.4z'/%3E%3Cpath fill='%23ecc285' d='M2470.3 932.8L1617.2 98.4l778.1-243.7z'/%3E%3Cpath fill='%23280400' d='M-145.3 754.7l150 946.9L342.2 623.4z'/%3E%3Cpath fill='%23bd7b29' d='M257.8 839l-403.1 1462.6 675 243.7z'/%3E%3Cpath fill='%239e6523' d='M717.2 1176.6L-145.3 145.3 839 576.6z'/%3E%3Cpath fill='%23eff0ce' d='M867.2 2076.6l946.9 468.7 496.8-1031.2z'/%3E%3Cpath fill='%23311102' d='M1842.2 726.6l-271.9 121.8-56.2-234.3z'/%3E%3Cpath fill='%239c571c' d='M1317.2 1898.4l-150-1331.2 403.1 890.6z'/%3E%3Cpath fill='%23c17d1d' d='M351.6-32.8L1298.4 314l243.8-272z'/%3E%3Cpath fill='%23060000' d='M1026.6 1026.6l-84.4 206.2 318.7 393.8z'/%3E%3Cpath fill='%23e2bd85' d='M1392.2 1607.8L145.3 1767.2l300 778.1z'/%3E%3Cpath fill='%23421d00' d='M1486 454.7L586-4.7l206.2 478.1z'/%3E%3Cpath fill='%23723e00' d='M2292.2 1111l93.7 1012.4 159.4-731.2z'/%3E%3Cpath fill='%23dfbd9e' d='M211 389L70.2-145.2l553.1 93.7z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},279:function(t,e,n){t.exports={srcSet:n.p+"img/00b4f63-480.webp 480w,"+n.p+"img/93e2d7e-768.webp 768w,"+n.p+"img/a7d60c7-960.webp 960w,"+n.p+"img/3344f2d-1080.webp 1080w,"+n.p+"img/104d21d-1200.webp 1200w,"+n.p+"img/d7e5050-1536.webp 1536w,"+n.p+"img/07db796-2160.webp 2160w,"+n.p+"img/1ab22ac-2400.webp 2400w",images:[{path:n.p+"img/00b4f63-480.webp",width:480,height:480},{path:n.p+"img/93e2d7e-768.webp",width:768,height:768},{path:n.p+"img/a7d60c7-960.webp",width:960,height:960},{path:n.p+"img/3344f2d-1080.webp",width:1080,height:1080},{path:n.p+"img/104d21d-1200.webp",width:1200,height:1200},{path:n.p+"img/d7e5050-1536.webp",width:1536,height:1536},{path:n.p+"img/07db796-2160.webp",width:2160,height:2160},{path:n.p+"img/1ab22ac-2400.webp",width:2400,height:2400}],src:n.p+"img/00b4f63-480.webp",toString:function(){return n.p+"img/00b4f63-480.webp"},placeholder:"data:image/webp;base64,UklGRgwDAABXRUJQVlA4IAADAACwDwCdASooACgAPlEij0UjoiEVXVSsOAUEoAnTKEjDeu8nnc/44OHtz9xnvNMbJ8GfG36sUAu0fCLv1l8/efN/uKchX0F/T/AeIEC4jOs4yzY/wVuLDijeySwvQOUXUm70d/+ARvaPebEqrGWD31p1EUS2Z2vT2mRN2HiC+XWlSbV6YOrkYAD+uEBfLnRUlyLJf2jEbfUWct+DMd17W+Ciotu8TjivYH1boH2G0P4yNk1jNLKWY06n89126h7jqzgQLNgDmykqXQ2f9YNBkvBAUHIwpm/BD/yJyRFWsD776rYHRhTqQ/89lOs0E7p8BWScRl7q87O3Qm7gTDK8vkQKFNPR4XRuk0Xl2LXUzVe47Z+9dH2fwgc+INq4hDOcX52ZVNSSG/lFz0wsSmWnEFO6DVwWryZue0iQC6XBD7dcCKB2mR4xreZj2UhRNG5Dl8UriKh9h5rg3UpdgwjxZXrkMqsua5F/pyOXdSH1hROLBadx2rSy2Pk4uyvEIPv+GcCZ2+/2QYVUW/KfFP8uM/a00i5mkd+hdoDMuzLppTdGyPCiE+MvwUnfrS2oYQC00XFgck9XfX97/m79ySZw0duQerF5qLZwKrOj9ruMWgnY/JcmRewnIe73kPgzRhaCTrqI2aUfs8DhbMAfjbpK5Skz7IA8DljexmTg9D29abIptH+xAN56bM9s8CyTNLpDVG6QyfMySzZLIQIL46OTvhY2e+8reBtUpHf2QKLmITepLjyBLhUV53Qfec/VSx+a/QnLp+6p7ysrYIJIyUGggbJKb8dd1rV5nz+qAlVSEc8IZFWwKzX6vIAeh7aomJIm/OskcO5ztvQFpjDS///x2GZ7oHQE8Wg4kEP8P8xFR6qUeTJurb77uWVgjwURbwqv62JTftISU+lLC1acsMB2QGCq4lgbjgcYU4k+GuVeuVT3Zo+9oHMmZ67TlwjctTLFSeGQXOMYCyRFxFA+A8R/L1jVzUdNaP6bIyedGsgl6WVLpxQKjnrTFf2iHS4nLqyAAAA=",width:480,height:480}},280:function(t,e,n){t.exports={srcSet:n.p+"img/de71c67-480.webp 480w,"+n.p+"img/f902958-768.webp 768w,"+n.p+"img/8ff4429-960.webp 960w,"+n.p+"img/6ad4c4c-1080.webp 1080w,"+n.p+"img/803a7ac-1200.webp 1200w,"+n.p+"img/62dfd4d-1536.webp 1536w,"+n.p+"img/a6b7c63-2160.webp 2160w,"+n.p+"img/84a0d62-2400.webp 2400w",images:[{path:n.p+"img/de71c67-480.webp",width:480,height:480},{path:n.p+"img/f902958-768.webp",width:768,height:768},{path:n.p+"img/8ff4429-960.webp",width:960,height:960},{path:n.p+"img/6ad4c4c-1080.webp",width:1080,height:1080},{path:n.p+"img/803a7ac-1200.webp",width:1200,height:1200},{path:n.p+"img/62dfd4d-1536.webp",width:1536,height:1536},{path:n.p+"img/a6b7c63-2160.webp",width:2160,height:2160},{path:n.p+"img/84a0d62-2400.webp",width:2400,height:2400}],src:n.p+"img/de71c67-480.webp",toString:function(){return n.p+"img/de71c67-480.webp"},placeholder:"data:image/webp;base64,UklGRlYDAABXRUJQVlA4IEoDAACwDgCdASooACgAPk0ejEQioaEXFZgoBMSgCdMr2CzIisPUHirQttuBzvmmgR7j9V8HfA4ujtBTRLp70y7+2MD0Xc/70/7BQptAQLZ1XJxUwGWRlJw06txdtGSqRdPAepfu+fxYRtmup/ltviiGrMC88eAV1kxc7iPbne1iSPAA/vnr/aIPkPKLE31d/7/1E9ReBSo7X61pmylYg3rFmrxyp5R9uHfEbg523EdMC26PTUUZ6v6Cp4vsildm+L0z2xW6VUHQC0N0pF0c6LecVIJcFyS6QQuPx6byK0o/3f7JwH/zu51T37OGwkSY7E43akTahQ2iFro///FEZi3JQ8vThoKfclVNYrExTl++T1di339lnczDa9ew9W+pCuKKVOmuUP3gUncQlkUh+H1cIXnGN6dBBexvzwiKj5HFjGeckZD+7kVQWUXtUTVdEu0hiaTWbraaZgromhnFM4OX/MlgZNv8d2Jp64gDxYK4ZaXT92AL0PsVm1JmAeN8C6eoOq1exAGV5WbdDgjiDPAxGagKvXChGUsok8tTdpN/KE/CZzIUrkVTfz9S0808C9dJgjieBXi6e00ZCqp1mtDXm1Io4rRsJBvU0mG/yCmCzSRkXB1ZukOVRrTYS+EXNR2bTkrli0aUGmNux2yBMvpz+S9C+82Oy8pVqfYgDm43oLYDPZgp3vCSytyclXoTXcI2XaFhh6DqluAV+87OVLR/jzuvJaz7D8p5PPxk16Z9/mrjVRuqQV3RwzknahqwcwRS5TTjQcn6+n+th69SgQaQBlcD4/naiV0N3g1/GrB8u+nUJDYimICNgcTdyEDdK5j4TdO/LGLvgUsXhu/X/zpyf2Nu+Q7h9Y5hWa1LzZf64gwrbx3AknAIoO+S3tnPhNg6Gu/k5kWWtfzdampTk8XGKP34/KfNwclwD9sEHp7p2rgT1wxGBR68T75aE1usZf1sH8kzJMLIMPhlTWptnIxU3k8fPUnD6oWawrO8xN6fZZuQ30uukxLmr18lMJMSIUPA43GVTzkBYR9SSP5hE0QQIrgoXZKSntVduVJR735D/ZuahZYvEH+zdkoq3//BExRZrcnetF6gX4WQG6y57IB68pWpZWMGHjL8RAAAAA==",width:480,height:480}},281:function(t,e,n){var o={src:n.p+"img/e9da68e.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23a29673' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fff' d='M698.4 2245.3L501.6-145.3l1546.8 2353.1z'/%3E%3Cpath fill='%23311600' d='M2179.7 1495.3l365.6-1640.6-1528.1 290.6z'/%3E%3Cpath fill='%231e0800' d='M726.6-145.3L135.9 1298.4-145.3 32.8z'/%3E%3Cpath fill='%23fff' d='M1092.2 576.6l9.4-675-665.7 525zm918.8 1725L1129.6 792.2l-796.9 356.2z'/%3E%3Cpath fill='%2348330b' d='M2545.3 782.8l-1425-928.1 56.3 1087.5z'/%3E%3Cpath fill='%23afa48f' d='M961 454.7L857.7 2414 342.2 820.3z'/%3E%3Cpath fill='%23a49841' d='M2507.8 811l-18.7 1556.2L1185.9 960.9z'/%3E%3Cpath fill='%23f8fbf7' d='M342.2 1261l56.2-534.4L1701.6 1514z'/%3E%3Cpath fill='%23848525' d='M370.3 2545.3L332.8 501.6-145.3 2339z'/%3E%3Cpath fill='%23f6ffff' d='M454.7 1776.6l-150 759.3 243.7-328z'/%3E%3Cpath fill='%23fdf9f0' d='M1532.8 2142.2l-759.4-637.5 1772 712.5z'/%3E%3Cpath fill='%23644c21' d='M1307.8 1992.2l-253.1 243.7h393.7z'/%3E%3Cpath fill='%23fff' d='M1111 2395.3l-281.3 150 253.1-1068.7z'/%3E%3Cpath fill='%23430d08' d='M970.3 792.2l93.8-159.4-328.2-131.2z'/%3E%3Cpath fill='%23efe5d5' d='M1120.3 51.6l-571.9 28-103 881.3z'/%3E%3Cpath fill='%23fff' d='M1017.2 14L904.7 567.3l290.6-112.5z'/%3E%3Cpath fill='%238e7e60' d='M436 1148.4l206.2 881.3 459.4 37.5z'/%3E%3Cpath fill='%23483914' d='M482.8 736l-628.1 393.7 346.9-1275z'/%3E%3Cpath fill='%235f471c' d='M2432.8 1129.7l-84.4-1275H961z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},282:function(t,e,n){t.exports={srcSet:n.p+"img/59e11e9-480.jpg 480w,"+n.p+"img/6a9a41f-768.jpg 768w,"+n.p+"img/79b55d2-960.jpg 960w,"+n.p+"img/0ee1ab8-1080.jpg 1080w,"+n.p+"img/de250d4-1200.jpg 1200w,"+n.p+"img/ff88e34-1536.jpg 1536w,"+n.p+"img/4ed6f1a-2160.jpg 2160w,"+n.p+"img/b17eca7-2400.jpg 2400w",images:[{path:n.p+"img/59e11e9-480.jpg",width:480,height:480},{path:n.p+"img/6a9a41f-768.jpg",width:768,height:768},{path:n.p+"img/79b55d2-960.jpg",width:960,height:960},{path:n.p+"img/0ee1ab8-1080.jpg",width:1080,height:1080},{path:n.p+"img/de250d4-1200.jpg",width:1200,height:1200},{path:n.p+"img/ff88e34-1536.jpg",width:1536,height:1536},{path:n.p+"img/4ed6f1a-2160.jpg",width:2160,height:2160},{path:n.p+"img/b17eca7-2400.jpg",width:2400,height:2400}],src:n.p+"img/59e11e9-480.jpg",toString:function(){return n.p+"img/59e11e9-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQP/xAAuEAABAwMDAwMDAwUAAAAAAAABAgMEAAURBhIhBzFBFFFhEyIyUnGRgYKhsdH/xAAYAQADAQEAAAAAAAAAAAAAAAADBAUGAf/EACERAAICAgIBBQAAAAAAAAAAAAECAAMREgQhMSIjMkHB/9oADAMBAAIRAxEAPwDYsWpmWLXGYDyUONuFK8/pJJGeR8/xU/6g3y+wdSsps0VQS/23pIbJ8kntgjnI9qVtH6nusu4NSG4yHIjK8ub0BQ3Ywnj+tPl4jTry/CZ9IpRlqBC9yU7fYgEjjsDjtmsgoIIRxmaggYLKYuPdVX4rX0mMtyB9u9OCnOcEcitrobLvky/PS7up2W/JQHG5DrhV9h5CU5/EDPb3zSbdtF3pLdnkPQkNTnUha46zhxlxW77FJPjKQf7jVS0nYb3pyWhqRFaTFVKLTbi1HKmdqPprHfAJJGT7fNMCiqpfb8wJuZz6upTI0jdMf3pWCnCfv4Oe5z/iila1zJJukyY/KDrb+1AHlKkZHf5GP4oqZeSbDmFAGJHun2krk9o5akShDS8+VrcT+QAA4BPA/fxTXFvMa3SDEMSE0420hpTc99RbUpCiUrS4kKJScnII5wMGnnp1CYXZUxCkYQSOfet3UWiYV/tq2gw2zOQD9J9ttCVcj9v90zRyH3LznIrUjRvEg+l9Xv31FrXcW1rkx3EtOqPBWlJO1eO+NuAM+BVEZ1Pd7xLuLbUJRaVO9O2GYpJdYRtUkB0K/AqTggJ3cEZHeusTpSzHCLnNLgu29MdTbbZ2OMk43EJHCk989uMcd6rGktHxNOyGvQLeMGOxsjMuk7kqJypR9ySSaZpNocsOgYHkGgVj7I/JO9S2hdssjl7di+llOvIMlKEbElRHfb4PgminjqkylWibsFZViOpfzkc0UpfXl8wlL5WTrp5dW/VzY7agENvbQfn3qrWmQjIUBuzyST3PtRRQ6ThuoXkAHMYobiVJBWlOR5xXRSw2kpJ48H/tFFWFJ1kNlG2JP+q1yab03cWQsJCmClSu+M8CiiikvmSTKiDVQBP/2Q==",width:480,height:480}},283:function(t,e,n){t.exports={srcSet:n.p+"img/c8f1ba0-480.jpg 480w,"+n.p+"img/37e590c-768.jpg 768w,"+n.p+"img/59faa2f-960.jpg 960w,"+n.p+"img/e3185aa-1080.jpg 1080w,"+n.p+"img/06e8966-1200.jpg 1200w,"+n.p+"img/7524a62-1536.jpg 1536w,"+n.p+"img/301685b-2160.jpg 2160w,"+n.p+"img/21b757b-2400.jpg 2400w",images:[{path:n.p+"img/c8f1ba0-480.jpg",width:480,height:480},{path:n.p+"img/37e590c-768.jpg",width:768,height:768},{path:n.p+"img/59faa2f-960.jpg",width:960,height:960},{path:n.p+"img/e3185aa-1080.jpg",width:1080,height:1080},{path:n.p+"img/06e8966-1200.jpg",width:1200,height:1200},{path:n.p+"img/7524a62-1536.jpg",width:1536,height:1536},{path:n.p+"img/301685b-2160.jpg",width:2160,height:2160},{path:n.p+"img/21b757b-2400.jpg",width:2400,height:2400}],src:n.p+"img/c8f1ba0-480.jpg",toString:function(){return n.p+"img/c8f1ba0-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAcEBggFAf/EAC8QAAEDAwMCBQMDBQAAAAAAAAECAwQABREGEiExQRMiUWFxBxWBCDKxFCORocH/xAAZAQEAAwEBAAAAAAAAAAAAAAAEAgMFAAH/xAAlEQACAQMCBQUAAAAAAAAAAAABAgADERITMQQFISJBscHR4fH/2gAMAwEAAhEDEQA/AFAwJSpaHMhTflKEg8lW3pWzdL6XgWbTzjkuwpvFxmtxX3ojq0BC3WkICSCrhO3A5PHHvWYvp9o+Zf8AV0O1QENNrCvFK31EIQhBClEkcngY455rQOpHZ91c+2wHZtsuiJu6LJQpex1KOQvI42ncQUnpjvgVkUwoGZEeST2A7xafqpEy2/VJNwPiliRDbcjrUnyJKRgthQ68jPr5vzSvlTnlWFmZISXZMpxSvN0SkenrzmmR9dtJXmFqqM/ci5MlToiVuPqXuKikqTt8uE4Ax0APPNUC/wBumvw40VqI8UNtDaQnHOSf8UesqavQWlyZKN7yFCuRlSURXlqbKBlpfHTHIz/sfFFew7Rc24zbkpltghe5QUrzKH/aKlTRRe09yJj10YIen9QfepDZS1DYfcXsbGcBsg4ppaOuFjvjUS7W11R/qWgtCXCAQPjv36Up4FwQ/do4DIQh99LQbdVt8VSgdyRnjvjPvXZ0zKdt13hJaimM3421UdHXaSVDAOMEk5P5ruXudPFh5+IVwSSY6daaXhaq08m3vENPIHiRnsZ8NeP4PcVna82R6HdXIkjDb8VfhrSoE+Yd/juD71oydNfdkxzDnsxUNAB9tSAvcSP2nnIxkdPWqf8AVixPPRI1/CEbwgNTS1064Ssfx7cVbzGhmuoo6j0+pGlUK9p8xKJsx3Hyxl7uQAjv8miuytRcecJby2TnfyAvHQe/HOaKw8zE3Mj6ITFka0guu7EtRgpYCCccJODg8Ajjn4qwaZlWW53VFuVIeVLZnpVGc37nXEAgYKu/Tv60UU7hahQIo2JPtDNteT9f3yRbtRRGLa44GYhYIbdJK1NlPRR5Jz1/Aq3XjXUBVmVCfgOzGn2EqJQjcnaccHHTnuemKKKa1dwzDx+yeANpQbpP025EcfVBcjyWQA2psn+6rBH7TxkjuMUUUVi1KhJ2lhn/2Q==",width:480,height:480}},307:function(t,e,n){var content=n(326);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("2ec41824",content,!0,{sourceMap:!1})},325:function(t,e,n){"use strict";n(307)},326:function(t,e,n){var o=n(25)(!1);o.push([t.i,'.page-full-example-without-components[data-v-099d8c5a]{font-size:1.25em}.page-full-example-without-components>*[data-v-099d8c5a]{margin:40px 0}.page-full-example-without-components[data-v-099d8c5a]>:first-child{margin-top:0}.page-full-example-without-components[data-v-099d8c5a]>:last-child{margin-bottom:0}.page-full-example-without-components .component-image-text[data-v-099d8c5a] img{width:100%;height:100%}@media (min-width:768px){.page-full-example-without-components .component-image-text[data-v-099d8c5a]{display:flex}.page-full-example-without-components .component-image-text>*[data-v-099d8c5a]{width:50%}}.page-full-example-without-components .component-image-text .text[data-v-099d8c5a]{padding:2%}.page-full-example-without-components .component-stage[data-v-099d8c5a]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.page-full-example-without-components .component-stage .claim[data-v-099d8c5a]{display:block;font-size:25px;line-height:50px;text-transform:none}.page-full-example-without-components .component-stage .headline[data-v-099d8c5a]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.page-full-example-without-components .component-stage .headline[data-v-099d8c5a]{font-size:40px;line-height:80px}}.page-full-example-without-components .component-stage[data-v-099d8c5a] picture:before{display:block;padding-top:56.25%;content:""}.page-full-example-without-components .component-stage[data-v-099d8c5a] picture img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.page-full-example-without-components .component-stage h1[data-v-099d8c5a]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.page-full-example-without-components .component-stage h1[data-v-099d8c5a]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}.page-full-example-without-components .component-text-font-a[data-v-099d8c5a],.page-full-example-without-components .component-text-font-b[data-v-099d8c5a]{padding:0 10%}',""]),t.exports=o},353:function(t,e,n){"use strict";n.r(e);var o={components:{LazyPicture:n(276).a},asyncData:function(){var t,e,o=n(279),r=n(282),l=n(277),c=n(280),d=n(283),h=n(281);return{contentA:"<p>This is a basic test with single font variant.</p>",textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{srcset:c.srcSet,type:"image/webp"},{srcset:d.srcSet,type:"image/jpeg"}],placeholder:(e=h,{url:e.src,base64:e.preview}),width:d.width,height:d.height,alt:"Alt Text",title:"Title Text",caption:null}},stage:{critical:!0,headline:"Stage Headline",claim:"Stage Claim",picture:{sources:[{srcset:o.srcSet,type:"image/webp"},{srcset:r.srcSet,type:"image/jpeg"}],placeholder:(t=l,{url:t.src,base64:t.preview}),width:r.width,height:r.height,alt:"Alt Text",title:"Title Text",caption:null}}}}},r=(n(325),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-full-example-without-components"},[n("div",{staticClass:"component-stage"},[n("lazy-picture",t._b({},"lazy-picture",t.stage.picture,!1)),t._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),t.$fonts.getFont("Comic Neue",300,"italic",{selector:".claim"})],expression:"[\n        $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n        $fonts.getFont('Comic Neue', 300, 'italic', {selector: '.claim'})\n      ]"}]},[n("span",{staticClass:"headline"},[t._v(t._s(t.stage.headline))]),t._v(" "),n("span",{staticClass:"claim"},[t._v(t._s(t.stage.claim))])])],1),t._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Comic Neue",400,"normal"),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"h2"}),t.$fonts.getFont("Comic Neue",400,"italic",{selector:"i"}),t.$fonts.getFont("Comic Neue",700,"normal",{selector:"b,strong"}),t.$fonts.getFont("Comic Neue",700,"italic",{selector:"i b,i strong"}),t.$fonts.getFont("Comic Neue",700,"italic",{selector:"b i, strong i"}),t.$fonts.getFont("Comic Neue",400,"italic",{selector:"i > b, i > strong"})],expression:"[\n      $fonts.getFont('Comic Neue', 400, 'normal'),\n      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),\n      $fonts.getFont('Comic Neue', 400, 'italic', {selector: 'i'}),\n      $fonts.getFont('Comic Neue', 700, 'normal', {selector: 'b,strong'}),\n      $fonts.getFont('Comic Neue', 700, 'italic', {selector: 'i b,i strong'}),\n      $fonts.getFont('Comic Neue', 700, 'italic', {selector: 'b i, strong i'}),\n      $fonts.getFont('Comic Neue', 400, 'italic', {selector: 'i > b, i > strong'})\n    ]"}],staticClass:"component-text-font-a",domProps:{innerHTML:t._s(t.textA.text)}}),t._v(" "),n("div",{staticClass:"component-image-text"},[n("lazy-picture",t._b({},"lazy-picture",t.imageTextA.picture,!1)),t._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Comic Neue",400,"normal"),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"h2"})],expression:"[\n        $fonts.getFont('Comic Neue', 400, 'normal'),\n        $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'})]"}],staticClass:"text",domProps:{innerHTML:t._s(t.imageTextA.text)}})],1),t._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Comic Neue",400,"normal"),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"h2"}),t.$fonts.getFont("Montserrat Alternates",400,"italic",{selector:"i"}),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"b"}),t.$fonts.getFont("Montserrat Alternates",700,"italic",{selector:"i b"}),t.$fonts.getFont("Montserrat Alternates",700,"italic",{selector:"b i"})],expression:"[\n      $fonts.getFont('Comic Neue', 400, 'normal'),\n      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),\n      $fonts.getFont('Montserrat Alternates', 400, 'italic', {selector: 'i'}),\n      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'b'}),\n      $fonts.getFont('Montserrat Alternates', 700, 'italic', {selector: 'i b'}),\n      $fonts.getFont('Montserrat Alternates', 700, 'italic', {selector: 'b i'})\n    ]"}],staticClass:"component-text-font-b",domProps:{innerHTML:t._s(t.textB.text)}})])}),[],!1,null,"099d8c5a",null);e.default=component.exports}}]);