(window.webpackJsonp=window.webpackJsonp||[]).push([[12,32],{261:function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("4800df97",content,!0,{sourceMap:!1})},262:function(t,e,n){"use strict";n(263);var r=n(8),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"preview-container"},[e("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),e("div",{directives:[{name:"font",rawName:"v-font",value:this.$fonts.getFont("Quicksand",400,"normal"),expression:"$fonts.getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[this._t("title",[e("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"d2e5cc18",null);e.a=component.exports},263:function(t,e,n){"use strict";n(261)},264:function(t,e,n){(e=n(25)(!1)).push([t.i,".preview-container[data-v-d2e5cc18]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-d2e5cc18]:first-child{margin-top:0}.preview-container[data-v-d2e5cc18]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-d2e5cc18]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-d2e5cc18]{flex-direction:row}}.preview-container>div[data-v-d2e5cc18]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-d2e5cc18]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-d2e5cc18]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-d2e5cc18]{font-size:2em}.preview-container .preview-container__info p[data-v-d2e5cc18]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-d2e5cc18]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-d2e5cc18]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-d2e5cc18]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-d2e5cc18]{text-align:center}.preview-container .preview-container__preview>article[data-v-d2e5cc18],.preview-container .preview-container__preview>div[data-v-d2e5cc18]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-d2e5cc18]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-d2e5cc18]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-d2e5cc18]{position:relative;width:100%;height:100%}",""]),t.exports=e},265:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var r;n(7);function o(){return r||(r=new Promise((function(e){var img=new t.Image;img.onload=function(){return e(!0)},img.onerror=function(){return e(!1)},img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}))),r}function c(element,e){var n={};return t.document&&(n=t.document.createElement(element)),e in n}}).call(this,n(14))},269:function(t,e,n){"use strict";var r=n(13),o=n(4),c=n(59),l=n(16),d=n(12),f=n(36),h=n(117),m=n(81),v=n(5),w=n(58),_=n(116).f,y=n(44).f,x=n(19).f,E=n(190).trim,C=o.Number,k=C.prototype,j="Number"==f(w(k)),A=function(t){var e,n,r,o,c,l,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=E(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(c("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var S,z=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof z&&(j?v((function(){k.valueOf.call(n)})):"Number"!=f(n))?h(new C(A(e)),n,z):A(e)},M=r?_(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;M.length>N;N++)d(C,S=M[N])&&!d(z,S)&&x(z,S,y(C,S));z.prototype=k,k.constructor=z,l(o,"Number",z)}},270:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));n(7),n(18),n(22),n(189),n(17),n(82);var r=n(118),o=function(){function t(){this.map=new Map}return t.prototype.getEntry=function(t){return this.map.has(t)||this.map.set(t,new r.a),this.map.get(t)},t}(),c=n(60),l=n(265),d=new o;function f(t,e,n){var r=Object(c.a)(t.srcset),o=d.getEntry(r);return o.promise.then((function(){return e()})),Object(l.a)("link","imageSrcset")?{link:[h(t,r,o.resolve,n)]}:function(t,e,n){var img=new Image;img.onload=e,img.crossorigin=n,img.srcset=t.srcset}(t,o.resolve,n)}function h(t,e,n,r){return{hid:e,rel:"preload",as:"image",crossorigin:r,callback:n,imageSrcset:t.srcset}}},288:function(t,e,n){var content=n(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0ca7e28f",content,!0,{sourceMap:!1})},289:function(t,e,n){var content=n(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1c0f1833",content,!0,{sourceMap:!1})},290:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("cbd1ee28",content,!0,{sourceMap:!1})},295:function(t,e,n){t.exports=(()=>{const t=n(296);return{sources:[{srcset:n(297).srcSet,type:"image/webp"},{srcset:t.srcSet,type:"image/jpeg"}],placeholder:(({src:t,preview:e})=>({url:t,base64:e}))(n(298)),width:t.width,height:t.height}})()},296:function(t,e,n){t.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},297:function(t,e,n){t.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},298:function(t,e,n){var r={src:n.p+"img/e658a81.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M77.5 257.5l1280 415-1255 125z'/%3E%3Cpath fill='%23ccc3a8' d='M1272.5-77.5l-1350 185 1435 395z'/%3E%3Cpath fill='%23ff0' d='M102.5 797.5l-180-190 105-615z'/%3E%3Cpath fill='%230f0514' d='M482.5 797.5h695l-120-670z'/%3E%3Cpath fill='%23ff0' d='M1242.5 787.5l-5-865 120 435z'/%3E%3Cpath fill='%238f7c00' d='M797.5 667.5l-500-205-230 195z'/%3E%3Cpath fill='%23ffefcf' d='M1187.5 492.5l65-460-180 380z'/%3E%3Cpath fill='%23aea893' d='M1282.5 77.5l-1160-155 80 425z'/%3E%3Cpath fill='%234b495d' d='M302.5 322.5l730 260 95-355z'/%3E%3Cpath fill='%23ff0' d='M47.5 797.5l-10-875-115 445z'/%3E%3Cpath fill='%230d0600' d='M1242.5 487.5l-545 240 535 5z'/%3E%3Cpath fill='%23ff0' d='M1357.5 522.5l-115-420v695z'/%3E%3Cpath fill='%2310131e' d='M652.5 537.5l-600-100-5-180z'/%3E%3Cpath fill='%23adafbe' d='M937.5-12.5l-460 75 475 295z'/%3E%3Cpath fill='%23dbdb0e' d='M342.5 157.5l230-70-480 5z'/%3E%3Cpath fill='%23211512' d='M287.5 572.5l380-215 285 225z'/%3E%3Cpath fill='%23ff0' d='M12.5 252.5l-30 545 110-165z'/%3E%3Cpath fill='%23441b0f' d='M1152.5 202.5l-180 280 25-320z'/%3E%3Cpath fill='%23190000' d='M37.5 797.5l620-100-560-60z'/%3E%3Cpath fill='%23616f7c' d='M982.5 472.5l-420-395-65 235z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};t.exports=r.preview,t.exports=Object.assign(t.exports,r)},299:function(t,e,n){"use strict";n(288)},300:function(t,e,n){(e=n(25)(!1)).push([t.i,'.nuxt-speedkit__image-container[data-v-e23a632a]{position:relative;width:100%;height:100%;margin:0}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}.nuxt-speedkit__image-container>span.loading[data-v-e23a632a]:after{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation-name:spinner;animation-name:spinner;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-delay:.35s;animation-delay:.35s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;will-change:transform}',""]),t.exports=e},301:function(t,e,n){"use strict";n(289)},302:function(t,e,n){(e=n(25)(!1)).push([t.i,".nuxt-speedkit__noscript[data-v-fc27cbec]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},303:function(t,e,n){"use strict";n(290)},304:function(t,e,n){(e=n(25)(!1)).push([t.i,".nuxt-speedkit__custom-image[data-v-6af12a34]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},305:function(t,e,n){"use strict";n(269);var r={props:{loading:{type:Boolean,default:function(){return!1}}},computed:{hasSlot:function(){return this.$slots.caption}}},o=(n(299),n(8)),c=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"nuxt-speedkit__image-container"},[this._t("default"),this._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"loading"}),this._v(" "),this.hasSlot?e("figcaption",[this._t("caption")],2):this._e()],2)}),[],!1,null,"e23a632a",null).exports,l=(n(301),Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,"fc27cbec",null).exports),d=(n(80),n(30),n(3)),f=n(83),h=n(265),m=n(270);var v={props:{preload:{type:Array,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},fetchOnServer:!1,data:function(){return{visible:this.isCritical,preloaded:!1,webpSupport:!1}},fetch:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!1,e.t0){e.next=5;break}return e.next=4,Object(h.b)();case 4:e.t0=e.sent;case 5:t.webpSupport=e.t0;case 6:case"end":return e.stop()}}),e)})))()},head:function(){var t,e=this;return this.preload&&this.visible&&this.preload&&this.preload.length?Object(m.a)((t=this.preload,this.webpSupport&&t.find((function(source){return"image/webp"===source.type}))||t.find((function(source){return"image/webp"!==source.type}))),(function(){return e.onPreload()}),this.crossorigin):{}},mounted:function(){var t=this;Object(f.a)(this.$el,(function(){t.visible=!0}))},destroyed:function(){Object(f.b)(this.$el)},methods:{onLoad:function(t){this.preloaded&&this.$emit("load",t.target)},onPreload:function(){this.preloaded=!0,this.$emit("preload")}}},w=(n(303),{components:{ImageContainer:c,CustomNoScript:l,CustomImage:Object(o.a)(v,(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"nuxt-speedkit__custom-image",attrs:{loading:"lazy",crossorigin:this.crossorigin},on:{load:this.onLoad}})}),[],!1,null,"6af12a34",null).exports},props:{sources:{type:Array,default:function(){return[]}},placeholder:{type:Object,default:function(){return{}}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}},crossorigin:{type:String,default:function(){return"anonymous"}}},data:function(){return{preloadedSources:this.noScript&&this.sources||[],loading:!1,webpSupport:!1}},computed:{hasSlot:function(){return this.$slots.caption}},mounted:function(){this.loading=!0},methods:{onLoad:function(t){this.loading=!1,this.$emit("load")},onPreload:function(){this.preloadedSources=this.sources}}}),_=Object(o.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{staticClass:"nuxt-speedkit__lazy-picture",attrs:{loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(){return[n("picture",[t._l(t.preloadedSources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.placeholder.base64,preload:t.sources,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2),t._v(" "),n("custom-no-script",[n("picture",[t._l(t.sources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad,preload:t.onPreload}},"custom-image",{src:t.placeholder.url,width:t.width,height:t.height,alt:t.alt,title:t.title,crossorigin:t.crossorigin},!1))],2)])]},proxy:!0},{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.a=_.exports},383:function(t,e,n){"use strict";n.r(e);var r=n(306),o=n(262),c={components:{LazyYoutube:r.default,OrganismPreviewContainer:o.a},data:function(){return{iframe:{id:"cLKvbhfVBUU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(295))}}}},l=n(8),d={components:{Critical:Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("organism-preview-container",{scopedSlots:t._u([{key:"default",fn:function(){return[n("div",[n("lazy-youtube",t._b({},"lazy-youtube",t.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[t._v("Critical"),n("br"),t._v("LazyIframe")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},f=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("critical",{attrs:{critical:""}})],1)}),[],!1,null,null,null);e.default=f.exports}}]);