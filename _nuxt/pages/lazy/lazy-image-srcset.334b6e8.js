(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{216:function(e,t,r){var content=r(219);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("7d9112ab",content,!0,{sourceMap:!1})},217:function(e,t,r){"use strict";(function(e){e.IntersectionObserver=e.IntersectionObserver||function(){function e(){}var t=e.prototype;return t.observe=function(){},t.unobserve=function(){},e}(),t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:function(){return null}},rootMargin:{type:String,default:function(){return"0px"}},threshold:{type:Array,default:function(){return[0]}}},created:function(){var e,t=this;if(!this.$attrs.critical||!this.$options.critical){var r={root:(e=this).root,rootMargin:e.rootMargin,threshold:e.threshold};this.observer=new IntersectionObserver((function(e){var r=e[0];return t.onIntersect(r)}),r)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(e){this.$emit("enter",e)}},render:function(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(22))},218:function(e,t,r){"use strict";var n=r(216);r.n(n).a},219:function(e,t,r){(t=r(55)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;height:100%;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:1024px){.preview-container{flex-direction:row}}.preview-container>div{flex:0 0 50%}.preview-container .preview-container__info{display:flex;align-items:center;justify-content:center;font-size:7.72947vw}@media (min-width:768px){.preview-container .preview-container__info{font-size:4.16667vw}}@media (min-width:1024px){.preview-container .preview-container__info{font-size:32px}}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{background:#eee}.preview-container .preview-container__preview>article{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4.83092vw}@media (min-width:768px){.preview-container .preview-container__preview>article{font-size:2.60417vw}}@media (min-width:1024px){.preview-container .preview-container__preview>article{font-size:20px}}.preview-container .preview-container__preview>div{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>figure,.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}.preview-container .preview-container__preview>figure img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},220:function(e,t,r){"use strict";r.r(t);var n={},o=(r(218),r(21)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},221:function(e,t,r){var content=r(228);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("80409e3c",content,!0,{sourceMap:!1})},222:function(e,t,r){var content=r(231);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("7a80f00b",content,!0,{sourceMap:!1})},223:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(57);function n(e){return[].concat(e).sort((function(a,b){return a.density-b.density||a.width-b.width}))}},224:function(e,t,r){"use strict";var n=r(217).a,o=r(21),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);t.a=component.exports},225:function(e,t,r){"use strict";r.r(t);r(12),r(31);var n=r(6);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l=new Map;function f(e){if("undefined"==typeof IntersectionObserver)return null;var t=JSON.stringify(e);if(l.has(t))return l.get(t);var r=new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.hydrate&&e.target.hydrate()}))}),e);return l.set(t,r),r}function h(e,t){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){o(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({render:function(t){var r=this.$el?this.$el.tagName:"div";return this.$el||e._resolve(),t(r)}},t)}function d(component){var e,t=new Promise((function(t){e=t}));return t._resolve=function(){e("function"==typeof component?component():component)},t}var v="undefined"==typeof window;Boolean,Boolean,Boolean,Boolean,Boolean;var w=r(226),m=r.n(w),y=r(224),_=(r(215),r(32),r(33),r(223)),x=new Map;function O(e,t){return Array.isArray(e)?function(e,t){return j(Object(_.a)(e)[0].url,t)}(e,t):j(e,t)}function j(e,t){return E.apply(this,arguments)}function E(){return(E=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.has(t)){e.next=7;break}return e.next=3,r(t);case 3:n=e.sent,o=n.width,c=n.height,x.set(t,{width:o,height:c});case 7:return e.abrupt("return",x.get(t));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=r(21),I=Object(S.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{inlineTemplate:{render:function(){var e=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,null,null).exports,$={components:{IntersectionObserver:y.a,CustomNoScript:I,CustomImage:function(component){if(v)return component;var e=d(component),t=h(e);return function(){return{component:e,delay:0,loading:t}}}((function(){return r.e(1).then(r.bind(null,276))}))},props:{src:{type:String,default:function(){return null}},srcset:{type:Array,default:function(){return null}},seo:{type:Boolean,default:function(){return!0}}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e.src||e.srcset,e.$getImageSizeFromUrl);case 2:r=t.sent,e.width=r.width,e.height=r.height;case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{width:0,height:0,lazy:{src:null,srcset:null}}},computed:{preparedSrcset:function(){return m.a.stringify(Object(_.a)(this.srcset||[]))||null},hasSlot:function(){return this.$slots.caption}},created:function(){},methods:{load:function(){this.lazy.src=this.src,this.lazy.srcset=this.srcset},onEnter:function(){this.load()}}},z=(r(227),Object(S.a)($,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("intersection-observer",{on:{enter:e.onEnter}},[r("figure",[e._t("default",[r("custom-image",e._b({},"custom-image",Object.assign({},e.$attrs,{width:e.width,height:e.height,src:e.src,srcset:e.preparedSrcset}),!1))]),e._v(" "),r("custom-no-script",[r("custom-image",e._b({},"custom-image",Object.assign({},e.$attrs,{width:e.width,height:e.height,src:e.src,srcset:e.preparedSrcset}),!1))],1),e._v(" "),e.hasSlot?r("figcaption",[e._t("caption")],2):e._e()],2)])}),[],!1,null,"7bea74bb",null));t.default=z.exports},226:function(e,t,r){"use strict";const n=/^-?\d+$/;t.parse=e=>{return(t=e.split(/,\s+/).map(e=>{const t={};return e.trim().split(/\s+/).forEach((element,e)=>{if(0===e)return void(t.url=element);const r=element.slice(0,-1),o=element[element.length-1],c=Number.parseInt(r,10),l=Number.parseFloat(r);if("w"===o&&n.test(r)){if(c<=0)throw new Error("Width descriptor must be greater than zero");t.width=c}else{if("x"!==o||Number.isNaN(l))throw new Error("Invalid srcset descriptor: "+element);if(l<=0)throw new Error("Pixel density descriptor must be greater than zero");t.density=l}if(t.width&&t.density)throw new Error("Image candidate string cannot have both width descriptor and pixel density descriptor")}),t})).sort().filter((element,e)=>JSON.stringify(element)!==JSON.stringify(t[e-1]));var t},t.stringify=e=>[...new Set(e.map(element=>{if(!element.url)throw new Error("URL is required");const e=[element.url];return element.width&&e.push(element.width+"w"),element.density&&e.push(element.density+"x"),e.join(" ")}))].join(", ")},227:function(e,t,r){"use strict";var n=r(221);r.n(n).a},228:function(e,t,r){(t=r(55)(!1)).push([e.i,"figure[data-v-7bea74bb]{margin:0}",""]),e.exports=t},230:function(e,t,r){"use strict";var n=r(222);r.n(n).a},231:function(e,t,r){(t=r(55)(!1)).push([e.i,".organism-spacer{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;font-size:7.72947vw}@media (min-width:768px){.organism-spacer{font-size:4.16667vw}}@media (min-width:1024px){.organism-spacer{font-size:32px}}.organism-spacer>span{display:block;font-size:44px;text-align:center}.organism-spacer p{line-height:1.375;text-align:center}",""]),e.exports=t},232:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:"Scroll down"}}},o=(r(230),r(21)),component=Object(o.a)(n,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-spacer"},[t("p",[this._v("Scroll down")]),this._v(" "),t("span",[this._v("↓")])])}],!1,null,null,null);t.default=component.exports},297:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{imageA:{caption:null,alt:"Alt Text",title:"Title Text",srcset:[{url:"https://placeimg.com/768/768?index-a-1",width:768},{url:"https://placeimg.com/1200/1200?index-a-2",width:2400}]}}}},o=r(21),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("organism-spacer"),e._v(" "),r("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[r("p",[e._v("LazyImage - SRCSET"),r("br"),e._v("Image Switch by >768px")])]},proxy:!0}])},[[r("LazyImage",e._b({},"LazyImage",e.imageA,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OrganismSpacer:r(232).default,LazyImage:r(225).default,OrganismPreviewContainer:r(220).default})}}]);