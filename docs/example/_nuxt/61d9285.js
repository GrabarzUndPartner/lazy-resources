(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{265:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o;n(7);function r(){return o||(o=new Promise((function(e){var img=new t.Image;img.onload=function(){return e(!0)},img.onerror=function(){return e(!1)},img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}))),o}function l(element,e){var n={};return t.document&&(n=t.document.createElement(element)),e in n}}).call(this,n(14))},266:function(t,e,n){var content=n(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("053ef68b",content,!0,{sourceMap:!1})},267:function(t,e,n){var content=n(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("40ede033",content,!0,{sourceMap:!1})},268:function(t,e,n){var content=n(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("4f904b7d",content,!0,{sourceMap:!1})},269:function(t,e,n){"use strict";var o=n(13),r=n(4),l=n(59),c=n(16),h=n(12),d=n(36),f=n(117),m=n(81),A=n(5),w=n(58),v=n(116).f,x=n(44).f,E=n(19).f,C=n(190).trim,j=r.Number,S=j.prototype,H="Number"==d(w(S)),M=function(t){var e,n,o,r,l,c,h,code,d=m(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=C(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(c=(l=d.slice(2)).length,h=0;h<c;h++)if((code=l.charCodeAt(h))<48||code>r)return NaN;return parseInt(l,o)}return+d};if(l("Number",!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var y,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(H?A((function(){S.valueOf.call(n)})):"Number"!=d(n))?f(new j(M(e)),n,I):M(e)},B=o?v(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;B.length>F;F++)h(j,y=B[F])&&!h(I,y)&&E(I,y,x(j,y));I.prototype=S,S.constructor=I,c(r,"Number",I)}},270:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(7),n(18),n(22),n(189),n(17),n(82);var o=n(118),r=function(){function t(){this.map=new Map}return t.prototype.getEntry=function(t){return this.map.has(t)||this.map.set(t,new o.a),this.map.get(t)},t}(),l=n(60),c=n(265),h=new r;function d(t,e,n){var o=Object(l.a)(t.srcset),r=h.getEntry(o);return r.promise.then((function(){return e()})),Object(c.a)("link","imageSrcset")?{link:[f(t,o,r.resolve,n)]}:function(t,e,n){var img=new Image;img.onload=e,img.crossorigin=n,img.srcset=t.srcset}(t,r.resolve,n)}function f(t,e,n,o){return{hid:e,rel:"preload",as:"image",crossorigin:o,callback:n,imageSrcset:t.srcset}}},271:function(t,e,n){"use strict";n(266)},272:function(t,e,n){(e=n(25)(!1)).push([t.i,'.nuxt-speedkit__image-container[data-v-34a7b8f3]{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading[data-v-34a7b8f3]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading[data-v-34a7b8f3]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading[data-v-34a7b8f3]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}',""]),t.exports=e},273:function(t,e,n){"use strict";n(267)},274:function(t,e,n){(e=n(25)(!1)).push([t.i,".nuxt-speedkit__noscript[data-v-dd0bafc0]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},275:function(t,e,n){"use strict";n(268)},276:function(t,e,n){(e=n(25)(!1)).push([t.i,".nuxt-speedkit__custom-image[data-v-6bcef9de]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},277:function(t,e,n){"use strict";var o={props:{loading:{type:Boolean,default:function(){return!1}}},computed:{hasSlot:function(){return this.$slots.caption}}},r=(n(271),n(8)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"nuxt-speedkit__image-container"},[this._t("default"),this._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"loading"}),this._v(" "),this.hasSlot?e("figcaption",[this._t("caption")],2):this._e()],2)}),[],!1,null,"34a7b8f3",null);e.a=component.exports},278:function(t,e,n){"use strict";n(80),n(30);var o=n(3),r=n(83),l=n(265),c=n(270);var h={props:{preload:{type:Array,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},fetchOnServer:!1,data:function(){return{visible:this.isCritical,preloaded:!1,webpSupport:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!1,e.t0){e.next=5;break}return e.next=4,Object(l.b)();case 4:e.t0=e.sent;case 5:t.webpSupport=e.t0;case 6:case"end":return e.stop()}}),e)})))()},head:function(){var t,e=this;return this.preload&&this.visible&&this.preload&&this.preload.length?Object(c.a)((t=this.preload,this.webpSupport&&t.find((function(source){return"image/webp"===source.type}))||t.find((function(source){return"image/webp"!==source.type}))),(function(){return e.onPreload()}),this.crossorigin):{}},mounted:function(){var t=this;Object(r.a)(this.$el,(function(){t.visible=!0}))},destroyed:function(){Object(r.b)(this.$el)},methods:{onLoad:function(t){this.preloaded&&this.$emit("load",t.target)},onPreload:function(){this.preloaded=!0,this.$emit("preload")}}},d=(n(275),n(8)),component=Object(d.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",crossorigin:this.crossorigin},on:{load:this.onLoad}})}),[],!1,null,"6bcef9de",null);e.a=component.exports},279:function(t,e,n){"use strict";n(273);var o=n(8),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,"dd0bafc0",null);e.a=component.exports},280:function(t,e,n){var o={src:n.p+"img/3bdc01d.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23ab8a5c' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fffff2' d='M173.4 2245.3l2090.7-1021.9 46.8 1322z'/%3E%3Cpath fill='%23471700' d='M-145.3 1645.3L2057.8 89.1-32.8 267z'/%3E%3Cpath fill='%23512907' d='M689 1579.7l1022-1725-159.4 1725z'/%3E%3Cpath fill='%23fbe0a6' d='M436 2545.3L164 1307.8l2128.2 1021.9z'/%3E%3Cpath fill='%23d3dacb' d='M2048.4 1036l-656.2 178 56.2-440.6z'/%3E%3Cpath fill='%23cea874' d='M923.4 1382.8L42.2 107.8l459.4-253.1z'/%3E%3Cpath fill='%23f0c789' d='M1636 136l900 806.2-159.4-1087.5z'/%3E%3Cpath fill='%23372009' d='M539-98.4l412.6 871.8 956.2 9.4z'/%3E%3Cpath fill='%231c0000' d='M-61 1795.3L351.7 651.6-117.2 689z'/%3E%3Cpath fill='%23653404' d='M1036 1804.7l393.7-553.1-1003.1-84.4z'/%3E%3Cpath fill='%23be7d2b' d='M511 2432.8l-656.3-28.1L267.2 848.4z'/%3E%3Cpath fill='%23200900' d='M1326.6 670.3l-243.8-215.6 712.5-600z'/%3E%3Cpath fill='%23eef1d1' d='M829.7 2104.7l1031.2 440.6 347-993.7z'/%3E%3Cpath fill='%23863f08' d='M1101.6 1495.3l815.6-459.4-553.1 693.8z'/%3E%3Cpath fill='%23a0926e' d='M192.2 1345.3L895.3 811l618.8 187.5z'/%3E%3Cpath d='M979.7 1354.7l18.7-346.9 262.5 571.9z'/%3E%3Cpath fill='%23e1b97c' d='M407.8 2545.3l515.6-1068.7-759.3 103z'/%3E%3Cpath fill='%23703e00' d='M2292.2 1092.2l93.7 1256.2 159.4-750z'/%3E%3Cpath fill='%23b7813c' d='M1776.6 1532.8l-525-515.6 393.7 712.5z'/%3E%3Cpath fill='%23f9d3a0' d='M1476.6 576.6l-9.4 778L1589 989.2z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},282:function(t,e,n){"use strict";n(269);var o=n(277),r=n(279),l=n(278),c={components:{ImageContainer:o.a,CustomNoScript:r.a,CustomImage:l.a},props:{sources:{type:Array,default:function(){return[]}},placeholder:{type:Object,default:function(){return{}}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},data:function(){return{preloadedSources:this.noScript&&this.sources||[],loading:!1,webpSupport:!1}},computed:{hasSlot:function(){return this.$slots.caption}},mounted:function(){this.loading=!0},methods:{onLoad:function(t){this.loading=!1,this.$emit("load")},onPreload:function(){this.preloadedSources=this.sources}}},h=n(8),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{staticClass:"nuxt-speedkit__lazy-picture",attrs:{loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(){return[n("picture",[t._l(t.preloadedSources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.placeholder.base64,preload:t.sources,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2),t._v(" "),n("custom-no-script",[n("picture",[t._l(t.sources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.placeholder.url,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2)])]},proxy:!0},{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.a=component.exports},283:function(t,e,n){t.exports={srcSet:n.p+"img/00b4f63-480.webp 480w,"+n.p+"img/7e328ce-768.webp 768w,"+n.p+"img/ff303bf-960.webp 960w,"+n.p+"img/011a37a-1080.webp 1080w,"+n.p+"img/104d21d-1200.webp 1200w,"+n.p+"img/dd4364f-1536.webp 1536w,"+n.p+"img/13f3ee4-2160.webp 2160w,"+n.p+"img/1ab22ac-2400.webp 2400w",images:[{path:n.p+"img/00b4f63-480.webp",width:480,height:480},{path:n.p+"img/7e328ce-768.webp",width:768,height:768},{path:n.p+"img/ff303bf-960.webp",width:960,height:960},{path:n.p+"img/011a37a-1080.webp",width:1080,height:1080},{path:n.p+"img/104d21d-1200.webp",width:1200,height:1200},{path:n.p+"img/dd4364f-1536.webp",width:1536,height:1536},{path:n.p+"img/13f3ee4-2160.webp",width:2160,height:2160},{path:n.p+"img/1ab22ac-2400.webp",width:2400,height:2400}],src:n.p+"img/00b4f63-480.webp",toString:function(){return n.p+"img/00b4f63-480.webp"},placeholder:"data:image/webp;base64,UklGRv4CAABXRUJQVlA4IPICAACwDgCdASooACgAPlEij0UjoiEVXVSsOAUEoAnTK4yZe18qDX144Odt1dx7vKsbg8JfCD6r/zst3dyoHuR1e8z3yYfVHAZIEC4jOSqdWagWrP2JEH2tHObHlZac17xTvvnD9/lEBCcDXrU93rlm9nLgmFzu1uYTMheExe6V1YAA/rhRXFitIlFiUnfkaCxMB3q4+H2j7FJ+uqIBzd2FZXmGQSKbFRJ/APHJXS3+FsIrYXnwsBXhXOqsm/5NcygWAwOy58pW699xO2dmMSRnZ2N66//InVKIsra0tRGQnBnLaG/894gtodAxr77KkJOtr6TMn4+NuQi7eG1E+Z/S67/4vDlI0rgpNxQHuaRpOpl0tUXLn/CP0bt52kUlFH9Fk+38XWsI/aTUyT6uVREShMkiN7Nzi1SiDDdyUBO5YKGVuyhPFO/eFPo46LzK8W7Nwvv3zV1yi1wh4v45wKfdOIv99JRk/eIM0++mOzdLuNY6kEb7F9jYvP58Mz5JfCHXsjqg3EDcXGkXqIrHFKRAxqau7Gk0p857vRKPIL1zaOEJrhyBfIwb3cc0aq431k7OvlFnencXCs+e+5WRS5b+3DBlG7c3AdIiR+OO79Dh8wLLkTujsGEvVvHAy737PA6fM7aYX3M5Rv7H7fMOhEWFcC/RWs9MhGBpf9sWi33oTjLpccFK2HIHa6t50dviHoVKHK7BJvewCErA2qbO61QqJQ1e3vdOHyRv3dtf2JCDtQ9+cSLYVfDi8bKvsr2K+M5PKwGS32rxAB/HDnxstsvlV+m1iudHoxO/s3NcHTpXckxiK0GrrsvPMLwR7tIrRbHtX85AJJ6JtZJYRwAz/asvVFCKPDoxcnPXbvIS7Nauu1EF4ZvidXkvq4oLI74sqIABKbyl6K3ohK9Xzktqq9kbS166PveR0OOTsKXxURZI0T2YWaBW9EQwbuVS3wXSsa38568I11ZSVat1YfwFO9HYoDbB8bYfF6UB8jqtFSrPPivwwAAA",width:480,height:480}},284:function(t,e,n){t.exports={srcSet:n.p+"img/de71c67-480.webp 480w,"+n.p+"img/729de95-768.webp 768w,"+n.p+"img/b9f70ed-960.webp 960w,"+n.p+"img/0d8cbc2-1080.webp 1080w,"+n.p+"img/803a7ac-1200.webp 1200w,"+n.p+"img/5d6bf38-1536.webp 1536w,"+n.p+"img/ad67b53-2160.webp 2160w,"+n.p+"img/84a0d62-2400.webp 2400w",images:[{path:n.p+"img/de71c67-480.webp",width:480,height:480},{path:n.p+"img/729de95-768.webp",width:768,height:768},{path:n.p+"img/b9f70ed-960.webp",width:960,height:960},{path:n.p+"img/0d8cbc2-1080.webp",width:1080,height:1080},{path:n.p+"img/803a7ac-1200.webp",width:1200,height:1200},{path:n.p+"img/5d6bf38-1536.webp",width:1536,height:1536},{path:n.p+"img/ad67b53-2160.webp",width:2160,height:2160},{path:n.p+"img/84a0d62-2400.webp",width:2400,height:2400}],src:n.p+"img/de71c67-480.webp",toString:function(){return n.p+"img/de71c67-480.webp"},placeholder:"data:image/webp;base64,UklGRlgDAABXRUJQVlA4IEwDAAAQDgCdASooACgAPk0ejEQioaEXFZgoBMSgCdMoR2xI7sjVqiZQstuBzsummxubwX8Sa1izDNKVwoz/RUz/vUfsDim0At7R42LgSfd6INzWRVtjLzkthUEbyLx5q+1kdZeB3nGIBi6vPu3O4CwCEHk4QR79nPUSvngAAP756+GOs5Hd0r5vv8Lc/6iV7u8uAAZ/Sr9YDB6yB1HOWm+ZSg7bhxw6W2ddkIrCMjtHyz/UrOtqOZh5zI+F/y+uR+U4HSljRxbZbAWwMebwcikDV81VuiY3E3HjdoNeV+32aPjZA9rU++YsXzww7Ugp+r4nJetS6zFLhP//xRGjZFbFIi38G3RNZVmrJUX7y28NdbI+76ykfzeGZsR23TLLM355T+u6HjxqgiR+G+4sGhxmciK0zDC84fytRbT8pHmrKzE15x01PqJ5xSd5m0cuBgbpXIqe1030U1Tys1AGA5xNiaKlAUO6LYmkdLVVF8hWtclQbvUiqfpUI87dTwmLv8IcQuVlE5zQSuuN7MDwuX315gDrpEKQ256Be+i8TDGWya2+ZsneZS+J+95HvqYSHQsrpHj29ftNP1NZx+NPQjxvbrqWP/xLi42k7Cfnqd0EwxcTsW9ivBAnFBWc4oL5DsVO6OqHRZGOWXGcm3UIQBkvxB8qrJZ5qw8ac+UbJp5g05e6nSRT2GLvew+m6YneVGCIzLVIi3jB5C2cPa+HDs68xpbBiMsAao6t3SVSyT3CWVshNEDcJJkNChVHL4Xzz3C3rzv3N+sCitWxqdF59wYvAmSfF3kBMYFDlwE3CkBYDrC4SnpqiAH5LRVoSbcsfHHVkNHWZqKjnEOBCE79Y+M2tyGjtdvIdxEJ8UVGvKrJ7H642pNGijTAdmi9Iyv5PqnSszKI++MrdUWmPYZ4hTWCqFpf4/Sed8jWrMV+OnduLa41u4TDZWwyv9F3fT3PhGfFXdj7j5GCCr6mQEBy3hrs1sZK11OyuH9wIW3WRg3J8RgaLgus8M2++F1WTSIsu2LiFwmtVgHMg0yLcCSjQpIFeIcHvBufeLSxuQWpKVKwoMTHN5MjzCr/w2qtHSuP3Kqv3O2Y3hzgSZfEuDENNdBeGayFO55oYQVYrrDxAAAA",width:480,height:480}},285:function(t,e,n){var o={src:n.p+"img/41dd76a.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2400 2400'%3E%3Cpath fill='%23a29673' d='M0 0h2400v2400H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23fff' d='M314 1270.3l1875 1275L661-145.3z'/%3E%3Cpath fill='%232d0f00' d='M717.2 717.2l1828.1 403.1-253.1-1265.6z'/%3E%3Cpath fill='%231f0900' d='M136 1242.2L-145.4 14l900-159.4z'/%3E%3Cpath fill='%23fff' d='M1945.3 2086L857.8 2404.6 979.7 614z'/%3E%3Cpath fill='%23533a08' d='M1298.4 1139l1247-1068.7-1462.6-215.6z'/%3E%3Cpath fill='%23fff' d='M464 389l637.6 225 9.3-703z'/%3E%3Cpath fill='%23838323' d='M370.3 2545.3L332.8 492.2l-478.1 1884.4z'/%3E%3Cpath fill='%23736032' d='M1298.4 1926.6l272 618.7-478.2-243.7z'/%3E%3Cpath fill='%23140800' d='M520.3 1242.2l-131.2 75 234.3 178.1z'/%3E%3Cpath fill='%239d8f39' d='M2479.7 2329.7l-84.4-1425L1101.6 839z'/%3E%3Cpath fill='%23f5feff' d='M454.7 1767.2l93.7 450-243.7 318.7z'/%3E%3Cpath fill='%23ceba97' d='M511-145.3l65.6 1190.6L989 914.1z'/%3E%3Cpath fill='%23fff' d='M1111 829.7l-562.6 440.6 1190.7 450z'/%3E%3Cpath fill='%23f9e7cc' d='M1439 2245.3l1087.6-56.2-497-197z'/%3E%3Cpath fill='%23483914' d='M492.2 726.6l-637.5 431.2L164-145.3z'/%3E%3Cpath fill='%23786c22' d='M2207.8 2545.3l-431.2-271.9 187.5-121.8z'/%3E%3Cpath fill='%23fff' d='M1232.8 511L989.1 51.5l-253.2 56.2z'/%3E%3Cpath fill='%23d7deda' d='M1382.8 2545.3L370.3 1739.1l431.3 590.6z'/%3E%3Cpath fill='%234f3c19' d='M1139-145.3L2545.4 867.2 1148.4 389z'/%3E%3Cpath fill='%233b0b05' d='M801.6 520.3l46.8 150 225-9.4z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:2400,width:2400,type:"jpg"}};t.exports=o.preview,t.exports=Object.assign(t.exports,o)},286:function(t,e,n){t.exports={srcSet:n.p+"img/59e11e9-480.jpg 480w,"+n.p+"img/19da376-768.jpg 768w,"+n.p+"img/7b1d988-960.jpg 960w,"+n.p+"img/bd65a00-1080.jpg 1080w,"+n.p+"img/de250d4-1200.jpg 1200w,"+n.p+"img/d6672be-1536.jpg 1536w,"+n.p+"img/5d6c464-2160.jpg 2160w,"+n.p+"img/b17eca7-2400.jpg 2400w",images:[{path:n.p+"img/59e11e9-480.jpg",width:480,height:480},{path:n.p+"img/19da376-768.jpg",width:768,height:768},{path:n.p+"img/7b1d988-960.jpg",width:960,height:960},{path:n.p+"img/bd65a00-1080.jpg",width:1080,height:1080},{path:n.p+"img/de250d4-1200.jpg",width:1200,height:1200},{path:n.p+"img/d6672be-1536.jpg",width:1536,height:1536},{path:n.p+"img/5d6c464-2160.jpg",width:2160,height:2160},{path:n.p+"img/b17eca7-2400.jpg",width:2400,height:2400}],src:n.p+"img/59e11e9-480.jpg",toString:function(){return n.p+"img/59e11e9-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAYHBQP/xAAuEAACAQMDAgUDAwUAAAAAAAABAgMEBREAEiEGMQcUQVFhEyIyFXGRUoKhsdH/xAAZAQADAQEBAAAAAAAAAAAAAAADBAUGAQL/xAAgEQACAwACAwADAAAAAAAAAAABAgADEQQSISIxI0HB/9oADAMBAAIRAxEAPwDYsXU0MFrpoBMqSRyFXz/SSSM8j5/jU/8AEG+X2h6lhWzUzBZ843qRGT6kk8YI5yPbSt0f1Pdau4RVEdMklJC+ZN6BhuxheD++ny8U1deZ6KHyjMatgQ+5V2exAJHHYHHbPbWQUEEI42aggYWUxbm8VJ6aL6MGY6gHbuXBXOcHuNbfgbVXusvs1Xd2lqp6lBJHUSylvsPIVc/iBnt750m3bou9LHZ6iaiSKulUO9O5xJDI277WU+mVB/uOql0nYb305VpDUUsK0rVRijkZjlodqfTcd8AkkZPt86YFFVS/j+wJuZz7eJTKao3Vc+9XBXC/fwc9zn/GjSta6ypN0rKyeq+rHPtQD1VkyO/yMfxo1MvJLnYUAZI/4fdI3Gbo52SqFGs05d5F/IAAcAngfv6aaqa801uqPKGkoo5I4kiaOvnYxsyMSrrIoYlTk5UjnAwdPPh1RQPZVpCowhI599bvUXRNFf7a8Qp44a1AfpTxxorcj9v96Yo5D9y85yK1K9G+SD9L9Xz31LW9xjd6mnkWKVjwXVSdr47424Az6DVEh6nu94q7ikVE5jau8vGIaUkywJtZQJQ34FlwQF3cEZHfXak8KYKcJcq0yC7b1p2jjjOySEnG4hRwy5zntxjjvqr9JdH0nTtRF+ntN5Gng2U0MpO5WJyzH3JJJ01SbQ5YDAYLkGgVj9kfyTvqW0PbLLJe5aXytVLMhqVRNiliO+30PoTo08eKUKt0Tdg2WxTs/wA5HOjSt9evs90vqydeHl1j83W08bAJHNtB+ffVWtNQmQwG7PJJPc+2jRoVJxvELyFB2MVHIrKC6rkDvjXRnEalSePQ/wDdGjVhSeshso7ZJ/4rXKKPpu4whwoaAqze2eBo0aNJn2JJlRB1UAT/2Q==",width:480,height:480}},287:function(t,e,n){t.exports={srcSet:n.p+"img/c8f1ba0-480.jpg 480w,"+n.p+"img/d4c360b-768.jpg 768w,"+n.p+"img/64541ee-960.jpg 960w,"+n.p+"img/ddae62c-1080.jpg 1080w,"+n.p+"img/06e8966-1200.jpg 1200w,"+n.p+"img/100d05f-1536.jpg 1536w,"+n.p+"img/5a01275-2160.jpg 2160w,"+n.p+"img/21b757b-2400.jpg 2400w",images:[{path:n.p+"img/c8f1ba0-480.jpg",width:480,height:480},{path:n.p+"img/d4c360b-768.jpg",width:768,height:768},{path:n.p+"img/64541ee-960.jpg",width:960,height:960},{path:n.p+"img/ddae62c-1080.jpg",width:1080,height:1080},{path:n.p+"img/06e8966-1200.jpg",width:1200,height:1200},{path:n.p+"img/100d05f-1536.jpg",width:1536,height:1536},{path:n.p+"img/5a01275-2160.jpg",width:2160,height:2160},{path:n.p+"img/21b757b-2400.jpg",width:2400,height:2400}],src:n.p+"img/c8f1ba0-480.jpg",toString:function(){return n.p+"img/c8f1ba0-480.jpg"},placeholder:"data:image/jpeg;base64,/9j/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcGCAEEBQP/xAAuEAABAwMDAgUDBAMAAAAAAAABAgMEBREhAAYSMUETIlFhcQcUgSMyobEIFcH/xAAZAQACAwEAAAAAAAAAAAAAAAAEBQACAwH/xAAlEQACAQMCBQUAAAAAAAAAAAABAgADERITMQQFISJBscHR4fH/2gAMAwEAAhEDEQA/AFAwJSpaHLhbZ4lCQclXHpq5219rwKNt5xyXQU1ipTW4r70R1aAhbrSEBJBVhPGwycY99Vh+nuz5lf3fDpUBDTawrxS4+ohCEIIUokjJwLYznVgtyOz6q5/rYDs2l1RE3lFkoUrg6lGQu4xxPIgpPS3ew0op4gZkRgSx7AYs/wDKj7ym/VJNQPiqYkQ23I61J8iSkWLfIdci+c+b86V8qc8aCzLkJLsmU4pWeiUj09c30yPrttGswt1Rn6kpyXKnRErcfWvkVFJUnj5bJsBboAc51AK/Tpr8ONFaiOlDbQ4njbNz/GdD1lTV6C01TJRve00oVSMqSiK8tTZQLtKx0tkX/kfGjWYdIqbcZtyUy2wQvkoKV5lD/ujVqaKL2nciY9dmiFt/cBrUhspahsPuL4Ni9g2QbaaWzqhQ641Eq1NcUfuWgtCXCAQPjv36aU8CoIfq0cBgIQ++loNOq4+KpQPJIvjva/vrs7ZlO06rwktRTGR43FUdHXiSVCwNrEk3P51OXudPFh5+IK4JJMdO9Nrwt1beTT3iGnm/1Iz1r+Gq39HuNV2rNEeh1VyJIs2/GX4a0qBPmHf47399WMnTX3ZMcw57MVDQAfbUgL5Ej9pzcWuOnrqH/VihPPRI1fCEcwgNTfC6eiVj+vbGteY0M11FHUen1K0qhXtPmJRNGPI+WMu+QAjv8nRrsrUXHnCWrtk3C8gLt0HvjN9GkeZhN2nhsdMWRvSC67wS1GClgIJthJsbHAIxn4139syqLU6oinKkPKlsz0qjOc+TriAQLFXfp39dGjR3C1CgRRsSfaDNteb+/wCuSaduOIxTXHQzELBDbpJWpsp6KOSb9fwNS6sb6gKoyoT8ByY0+wlRKEck8TbBt0z3PS2jRo5q7hmHj9l8AbSA1SfttyG4+qCuPJZADamyf1VWI/acXI7i2jRo0kqVCTtNDP/Z",width:480,height:480}},310:function(t,e,n){var content=n(328);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0e38e807",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n(310)},328:function(t,e,n){(e=n(25)(!1)).push([t.i,'.page-full-example-without-components[data-v-887cf85e]{font-size:1.25em}.page-full-example-without-components>*[data-v-887cf85e]{margin:40px 0}.page-full-example-without-components[data-v-887cf85e]>:first-child{margin-top:0}.page-full-example-without-components[data-v-887cf85e]>:last-child{margin-bottom:0}.page-full-example-without-components .component-image-text[data-v-887cf85e] img{width:100%;height:100%}@media (min-width:768px){.page-full-example-without-components .component-image-text[data-v-887cf85e]{display:flex}.page-full-example-without-components .component-image-text>*[data-v-887cf85e]{width:50%}}.page-full-example-without-components .component-image-text .text[data-v-887cf85e]{padding:2%}.page-full-example-without-components .component-stage[data-v-887cf85e]{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.page-full-example-without-components .component-stage .claim[data-v-887cf85e]{display:block;font-size:25px;line-height:50px;text-transform:none}.page-full-example-without-components .component-stage .headline[data-v-887cf85e]{display:block;font-size:30px;line-height:60px}@media (min-width:768px){.page-full-example-without-components .component-stage .headline[data-v-887cf85e]{font-size:40px;line-height:80px}}.page-full-example-without-components .component-stage[data-v-887cf85e] picture:before{display:block;padding-top:56.25%;content:""}.page-full-example-without-components .component-stage[data-v-887cf85e] picture img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.page-full-example-without-components .component-stage h1[data-v-887cf85e]{position:absolute;bottom:0;left:0;width:100%;padding:20px 0;margin:0;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (min-width:768px){.page-full-example-without-components .component-stage h1[data-v-887cf85e]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:400px}}.page-full-example-without-components .component-text-font-a[data-v-887cf85e],.page-full-example-without-components .component-text-font-b[data-v-887cf85e]{padding:0 10%}',""]),t.exports=e},393:function(t,e,n){"use strict";n.r(e);var o={components:{LazyPicture:n(282).a},asyncData:function(){var t,e,o=n(283),r=n(286),l=n(280),c=n(284),h=n(287),d=n(285);return{contentA:"<p>This is a basic test with single font variant.</p>",textA:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},textB:{text:"<h2>Text Headline</h2><p>Aliqua odit <b>anim vehicula</b> varius eget feugiat beatae. <i><b>Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet</b></i>, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>"},imageTextA:{text:"<h2>Text Headline</h2><p>Aliqua odit anim vehicula varius eget feugiat beatae. Fringilla cumque, nulla pulvinar necessitatibus pharetra vehicula ultricies egestas rhoncus justo occaecati amet, fames quod. Similique! Ornare nesciunt inventore nulla, montes doloribus, erat, parturient! Accumsan omnis doloribus perspiciatis, blanditiis ullamcorper adipisicing quisquam. Nobis placerat. Eget do sagittis elit wisi voluptates, facilisis veritatis.</p><p>Laboriosam recusandae blandit nunc tempor urna veniam? Etiam perferendis, quisquam class ea eos habitasse quis tempora nulla? Non, facilis consectetuer suspendisse tortor, etiam dolor? Blanditiis suspendisse, massa. Tempus consequatur bibendum magnam? Praesentium, posuere consequuntur, tenetur tempus quod suscipit nibh? Voluptate ratione justo! Ullamcorper! Cursus auctor magna. Beatae corporis. Inceptos nisi.</p>",picture:{sources:[{srcset:c.srcSet,type:"image/webp"},{srcset:h.srcSet,type:"image/jpeg"}],placeholder:(e=d,{url:e.src,base64:e.preview}),width:h.width,height:h.height,alt:"Alt Text",title:"Title Text",caption:null}},stage:{critical:!0,headline:"Stage Headline",claim:"Stage Claim",picture:{sources:[{srcset:o.srcSet,type:"image/webp"},{srcset:r.srcSet,type:"image/jpeg"}],placeholder:(t=l,{url:t.src,base64:t.preview}),width:r.width,height:r.height,alt:"Alt Text",title:"Title Text",caption:null}}}}},r=(n(327),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-full-example-without-components"},[n("div",{staticClass:"component-stage"},[n("lazy-picture",t._b({},"lazy-picture",t.stage.picture,!1)),t._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:".headline"}),t.$fonts.getFont("Comic Neue",300,"italic",{selector:".claim"})],expression:"[\n        $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: '.headline'}),\n        $fonts.getFont('Comic Neue', 300, 'italic', {selector: '.claim'})\n      ]"}]},[n("span",{staticClass:"headline"},[t._v(t._s(t.stage.headline))]),t._v(" "),n("span",{staticClass:"claim"},[t._v(t._s(t.stage.claim))])])],1),t._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Comic Neue",400,"normal"),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"h2"}),t.$fonts.getFont("Comic Neue",400,"italic",{selector:"i"}),t.$fonts.getFont("Comic Neue",700,"normal",{selector:"b,strong"}),t.$fonts.getFont("Comic Neue",700,"italic",{selector:"i b,i strong"}),t.$fonts.getFont("Comic Neue",700,"italic",{selector:"b i, strong i"}),t.$fonts.getFont("Comic Neue",400,"italic",{selector:"i > b, i > strong"})],expression:"[\n      $fonts.getFont('Comic Neue', 400, 'normal'),\n      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),\n      $fonts.getFont('Comic Neue', 400, 'italic', {selector: 'i'}),\n      $fonts.getFont('Comic Neue', 700, 'normal', {selector: 'b,strong'}),\n      $fonts.getFont('Comic Neue', 700, 'italic', {selector: 'i b,i strong'}),\n      $fonts.getFont('Comic Neue', 700, 'italic', {selector: 'b i, strong i'}),\n      $fonts.getFont('Comic Neue', 400, 'italic', {selector: 'i > b, i > strong'})\n    ]"}],staticClass:"component-text-font-a",domProps:{innerHTML:t._s(t.textA.text)}}),t._v(" "),n("div",{staticClass:"component-image-text"},[n("lazy-picture",t._b({},"lazy-picture",t.imageTextA.picture,!1)),t._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Comic Neue",400,"normal"),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"h2"})],expression:"[\n        $fonts.getFont('Comic Neue', 400, 'normal'),\n        $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'})]"}],staticClass:"text",domProps:{innerHTML:t._s(t.imageTextA.text)}})],1),t._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Comic Neue",400,"normal"),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"h2"}),t.$fonts.getFont("Montserrat Alternates",400,"italic",{selector:"i"}),t.$fonts.getFont("Montserrat Alternates",700,"normal",{selector:"b"}),t.$fonts.getFont("Montserrat Alternates",700,"italic",{selector:"i b"}),t.$fonts.getFont("Montserrat Alternates",700,"italic",{selector:"b i"})],expression:"[\n      $fonts.getFont('Comic Neue', 400, 'normal'),\n      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'h2'}),\n      $fonts.getFont('Montserrat Alternates', 400, 'italic', {selector: 'i'}),\n      $fonts.getFont('Montserrat Alternates', 700, 'normal', {selector: 'b'}),\n      $fonts.getFont('Montserrat Alternates', 700, 'italic', {selector: 'i b'}),\n      $fonts.getFont('Montserrat Alternates', 700, 'italic', {selector: 'b i'})\n    ]"}],staticClass:"component-text-font-b",domProps:{innerHTML:t._s(t.textB.text)}})])}),[],!1,null,"887cf85e",null);e.default=component.exports}}]);