(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{100:function(t,e,n){"use strict";n(80);var r=n(2),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{inlineTemplate:{render:function(){var t=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,"27f04a69",null);e.a=component.exports},110:function(t,e,n){"use strict";var r=n(86);n.n(r).a},111:function(t,e,n){(e=n(8)(!1)).push([t.i,"",""]),t.exports=e},49:function(t,e,n){var content=n(52);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("7d9112ab",content,!0,{sourceMap:!1})},50:function(t,e,n){"use strict";n.r(e);var r={},o=(n(51),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"preview-container"},[e("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),e("div",{staticClass:"preview-container__info"},[this._t("title",[e("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);e.default=component.exports},51:function(t,e,n){"use strict";var r=n(49);n.n(r).a},52:function(t,e,n){(e=n(8)(!1)).push([t.i,".preview-container{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:992px){.preview-container{flex-direction:row}}.preview-container>div{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div{width:50vw;height:100vh}}.preview-container .preview-container__info{font-size:2em}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{font-size:1.125em;background:#eee}.preview-container .preview-container__preview>article,.preview-container .preview-container__preview>div{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}",""]),t.exports=e},53:function(t,e,n){"use strict";(function(t){t.IntersectionObserver=t.IntersectionObserver||class{observe(){}unobserve(){}},e.a={abstract:!0,props:{root:{type:t.HTMLElement,default:()=>null},rootMargin:{type:String,default:()=>"0px"},threshold:{type:Array,default:()=>[0]}},created(){if(!this.$attrs.critical||!this.$options.critical){const t=(({root:t,rootMargin:e,threshold:n})=>({root:t,rootMargin:e,threshold:n}))(this);this.observer=new IntersectionObserver(([t])=>this.onIntersect(t),t)}},mounted(){this.observer&&this.observer.observe(this.$el)},destroyed(){this.observer&&this.observer.disconnect()},methods:{onIntersect(t){t.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter(t){this.$emit("enter",t)}},render(){try{return this.$slots.default[0]}catch(t){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,n(4))},62:function(t,e,n){"use strict";var r=n(53).a,o=n(2),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.a=component.exports},65:function(t,e,n){var content=n(79);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("6da7a688",content,!0,{sourceMap:!1})},66:function(t,e,n){var content=n(81);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("5571714b",content,!0,{sourceMap:!1})},67:function(t,e,n){var content=n(83);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("25249a9c",content,!0,{sourceMap:!1})},75:function(t,e,n){"use strict";n.r(e);var r=n(77),o=n(98),c=n(100),l=n(99);const d=new Set;var h={components:{ImageContainer:o.a,CustomNoScript:c.a,CustomImage:l.a},props:{placeholder:{type:String,default:()=>null},srcset:{type:String,default:()=>null},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},width:{type:Number,default:()=>null},height:{type:Number,default:()=>null}},data:()=>({init:!1,loading:!1}),computed:{imageSrcset(){return this.init?(d.add(this.srcset),this.srcset):null},hasSlot(){return this.$slots.caption}},methods:{onRequestHiRes(){this.loading=!0,this.init=!0},onVisible(){this.loading=Object(r.a)()||d.has(this.srcset),this.init=Object(r.a)()||d.has(this.srcset)},onLoad(){this.loading=!1,this.$emit("load")}}},f=(n(110),n(2)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{attrs:{loading:t.loading},on:{visible:t.onVisible,requestHiRes:t.onRequestHiRes},scopedSlots:t._u([{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)},[[n("custom-image",t._b({on:{load:t.onLoad}},"custom-image",{src:t.placeholder,srcset:t.imageSrcset,width:t.width,height:t.height,alt:t.alt,title:t.title},!1)),t._v(" "),t.init?t._e():n("custom-no-script",[n("custom-image",t._b({},"custom-image",{srcset:t.srcset,width:t.width,height:t.height,alt:t.alt,title:t.title},!1))],1)]],2)}),[],!1,null,"c78c6f4c",null);e.default=component.exports},77:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return f}));const r="4g",o=50,c={connection:{effectiveType:r,saveData:!1},hardwareConcurrency:2,deviceMemory:4},l=t.navigator||c,d=l.connection||c.connection,h=["4g","3g","2g","slow-2g"];function f(){return h.indexOf(d.effectiveType)<=h.indexOf(r)&&l.hardwareConcurrency>=c.hardwareConcurrency&&l.hardwareConcurrency<=o&&(l.deviceMemory||c.deviceMemory)>=c.deviceMemory&&!d.saveData&&!0}}).call(this,n(4))},78:function(t,e,n){"use strict";var r=n(65);n.n(r).a},79:function(t,e,n){(e=n(8)(!1)).push([t.i,'section[data-v-17897602]{position:relative;width:100%;height:100%}section>figure[data-v-17897602]{width:100%;height:100%;margin:0}section>figure figcaption[data-v-17897602]{position:absolute;top:100px}section>span.loading[data-v-17897602]{position:absolute;top:50%;left:50%;display:block;width:10%;transform:translate(-50%,-50%)}section>span.loading[data-v-17897602]:before{box-sizing:border-box;display:block;padding-top:100%;content:""}section>span.loading[data-v-17897602]:after{top:0;left:0;box-sizing:border-box;display:block;content:"";border:3px solid #ccc;border-top-color:#07d;border-radius:50%;-webkit-animation:spinner-data-v-17897602 .6s linear infinite;animation:spinner-data-v-17897602 .6s linear infinite;will-change:transform}section>button[data-v-17897602],section>span.loading[data-v-17897602]:after{position:absolute;right:0;bottom:0}@-webkit-keyframes spinner-data-v-17897602{to{transform:rotate(1turn)}}@keyframes spinner-data-v-17897602{to{transform:rotate(1turn)}}',""]),t.exports=e},80:function(t,e,n){"use strict";var r=n(66);n.n(r).a},81:function(t,e,n){(e=n(8)(!1)).push([t.i,"noscript[data-v-27f04a69]{position:absolute;top:0;left:0;width:100%;height:100%}",""]),t.exports=e},82:function(t,e,n){"use strict";var r=n(67);n.n(r).a},83:function(t,e,n){(e=n(8)(!1)).push([t.i,"img[data-v-d62cab08]{width:100%;height:100%;vertical-align:middle;-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},86:function(t,e,n){var content=n(111);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("586f3be8",content,!0,{sourceMap:!1})},98:function(t,e,n){"use strict";var r=new Map;function o(t){if("undefined"==typeof IntersectionObserver)return null;var e=JSON.stringify(t);if(r.has(e))return r.get(e);var n=new IntersectionObserver((function(t){t.forEach((function(t){(t.isIntersecting||t.intersectionRatio>0)&&t.target.hydrate&&t.target.hydrate()}))}),t);return r.set(e,n),n}var c="undefined"==typeof window;var l={components:{LazyHydrate:{props:{idleTimeout:{default:2e3,type:Number},onInteraction:{type:[Array,Boolean,String]},ssrOnly:{type:Boolean},triggerHydration:{default:!1,type:Boolean},whenIdle:{type:Boolean},whenVisible:{type:[Boolean,Object]}},data:function(){return{hydrated:c}},watch:{triggerHydration:{immediate:!0,handler:function(t){t&&this.hydrate()}}},computed:{interactionEvents:function(){return this.onInteraction?!0===this.onInteraction?["focus"]:Array.isArray(this.onInteraction)?this.onInteraction:[this.onInteraction]:[]}},mounted:function(){var t=this;if(0!==this.$el.childElementCount){if(!this.ssrOnly){if(this.interactionEvents.forEach((function(e){t.$el.addEventListener(e,t.hydrate,{capture:!0,once:!0,passive:!0})})),this.interactionEvents.length&&(this.interaction=function(){t.interactionEvents.forEach((function(e){return t.$el.removeEventListener(e,t.hydrate)}))}),this.whenIdle){if(!("requestIdleCallback"in window)||!("requestAnimationFrame"in window))return void this.hydrate();var e=requestIdleCallback((function(){requestAnimationFrame((function(){t.hydrate()}))}),{timeout:this.idleTimeout});this.idle=function(){return cancelIdleCallback(e)}}if(this.whenVisible){var n=o(!0===this.whenVisible?{}:this.whenVisible);if(!n)return void this.hydrate();this.$el.hydrate=this.hydrate,n.observe(this.$el),this.visible=function(){n.unobserve(t.$el),delete t.$el.hydrate}}}}else this.hydrate()},beforeDestroy:function(){this.cleanup()},methods:{cleanup:function(){var t=this;["idle","interaction","visible"].forEach((function(e){e in t&&(t[e](),delete t[e])}))},hydrate:function(){this.hydrated=!0,this.cleanup()}},render:function(t){if(!this.$scopedSlots.default&&!this.$slots.default)return null;var e=this.$scopedSlots.default?this.$scopedSlots.default({hydrated:this.hydrated}):this.$slots.default[0];if(this.hydrated)return e;var n=t(this.$el?this.$el.tagName:"div");return n.asyncFactory={},n.isComment=!0,n}},IntersectionObserver:n(62).a},props:{loading:{type:Boolean,default:()=>!1}},data:()=>({init:!1}),computed:{hasSlot(){return this.$slots.caption}},watch:{loading:{handler(t){this.init=t||this.init}}},methods:{onClick(){this.$emit("requestHiRes")},onEnter(){this.$emit("visible")}}},d=(n(78),n(2)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("intersection-observer",{on:{enter:t.onEnter}},[n("section",[n("lazy-hydrate",{attrs:{"ssr-only":"","trigger-hydration":t.loading}},[n("figure",[t._t("default"),t._v(" "),t.hasSlot?n("figcaption",[t._t("caption")],2):t._e()],2)]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"}),t._v(" "),t.init?t._e():n("button",{staticClass:"noscript-hide",on:{click:t.onClick}},[t._t("button",[t._v("\n        HiRes\n      ")])],2)],1)])}),[],!1,null,"17897602",null);e.a=component.exports},99:function(t,e,n){"use strict";var r={computed:{loading(){return this.isCritical?"eager":"lazy"}},mounted(){console.log("mounted")},methods:{onLoad(t){this.$emit("load",t.target)}}},o=(n(82),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{loading:this.loading},on:{load:this.onLoad}})}),[],!1,null,"d62cab08",null);e.a=component.exports}}]);