(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{278:function(e,t,n){var content=n(281);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("295b85b1",content,!0,{sourceMap:!1})},279:function(e,t,n){"use strict";n(280);var r=n(8),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"ee1123ec",null);t.a=component.exports},280:function(e,t,n){"use strict";n(278)},281:function(e,t,n){(t=n(25)(!1)).push([e.i,".preview-container[data-v-ee1123ec]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-ee1123ec]:first-child{margin-top:0}.preview-container[data-v-ee1123ec]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-ee1123ec]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-ee1123ec]{flex-direction:row}}.preview-container>div[data-v-ee1123ec]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-ee1123ec]{font-size:2em}.preview-container .preview-container__info p[data-v-ee1123ec]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-ee1123ec]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-ee1123ec]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-ee1123ec]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-ee1123ec]{text-align:center}.preview-container .preview-container__preview>article[data-v-ee1123ec],.preview-container .preview-container__preview>div[data-v-ee1123ec]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-ee1123ec]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-ee1123ec]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-ee1123ec]{position:relative;width:100%;height:100%}",""]),e.exports=t},299:function(e,t,n){"use strict";(function(e){e.IntersectionObserver=e.IntersectionObserver||function(){function e(){}var t=e.prototype;return t.observe=function(){},t.unobserve=function(){},e}(),t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:function(){return null}},rootMargin:{type:String,default:function(){return"0px"}},threshold:{type:Array,default:function(){return[0]}}},created:function(){var e,t=this;if(!this.$attrs.critical||!this.$options.critical){var n={root:(e=this).root,rootMargin:e.rootMargin,threshold:e.threshold};this.observer=new IntersectionObserver((function(e){var n=e[0];return t.onIntersect(n)}),n)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(e){this.$emit("enter",e)}},render:function(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,n(12))},308:function(e,t,n){"use strict";var r=n(299).a,o=n(8),c={components:{IntersectionObserver:Object(o.a)(r,void 0,void 0,!1,null,null,null).exports},props:{src:{type:String,default:function(){return null}}},data:function(){return{lazySrc:null}},methods:{onLoad:function(e){this.$emit("load",e)},onEnter:function(e){this.lazySrc=this.src,this.$emit("enter",e)}}},l=Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("intersection-observer",{on:{enter:this.onEnter}},[t("iframe",this._b({staticClass:"nuxt-speedkit__speedkit-iframe",attrs:{src:this.lazySrc,loading:"lazy"},on:{load:this.onLoad}},"iframe",this.$attrs,!1))])}),[],!1,null,null,null);t.a=l.exports},382:function(e,t,n){"use strict";n.r(t);var r=n(308),o=n(279),c={components:{SpeedkitIframe:r.a,OrganismPreviewContainer:o.a},data:function(){return{iframe:{src:"https://grabarzundpartner.de"}}}},l=n(8),v=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("speedkit-iframe",e._b({},"speedkit-iframe",e.iframe,!1))]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("SpeedkitIframe")])]},proxy:!0}])})}),[],!1,null,null,null).exports,d={components:{SpeedkitIframe:r.a,OrganismPreviewContainer:o.a},data:function(){return{iframe:{src:"https://grabarzundpartner.de"}}}},f={components:{Critical:v,Lazy:Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("speedkit-iframe",e._b({},"speedkit-iframe",e.iframe,!1))]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("SpeedkitIframe")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},h=Object(l.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("critical",{attrs:{critical:""}}),this._v(" "),t("lazy")],1)}),[],!1,null,null,null);t.default=h.exports}}]);