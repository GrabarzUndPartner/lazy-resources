(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{101:function(e,t,r){var content=r(104);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(6).default)("295b85b1",content,!0,{sourceMap:!1})},102:function(e,t,r){"use strict";r(103);var n=r(2),component=Object(n.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"ee1123ec",null);t.a=component.exports},103:function(e,t,r){"use strict";r(101)},104:function(e,t,r){(t=r(5)(!1)).push([e.i,".preview-container[data-v-ee1123ec]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-ee1123ec]:first-child{margin-top:0}.preview-container[data-v-ee1123ec]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-ee1123ec]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-ee1123ec]{flex-direction:row}}.preview-container>div[data-v-ee1123ec]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-ee1123ec]{font-size:2em}.preview-container .preview-container__info p[data-v-ee1123ec]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-ee1123ec]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-ee1123ec]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-ee1123ec]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-ee1123ec]{text-align:center}.preview-container .preview-container__preview>article[data-v-ee1123ec],.preview-container .preview-container__preview>div[data-v-ee1123ec]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-ee1123ec]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-ee1123ec]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-ee1123ec]{position:relative;width:100%;height:100%}",""]),e.exports=t},121:function(e,t,r){"use strict";(function(e){e.IntersectionObserver=e.IntersectionObserver||class{observe(){}unobserve(){}},t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:()=>null},rootMargin:{type:String,default:()=>"0px"},threshold:{type:Array,default:()=>[0]}},created(){if(!this.$attrs.critical||!this.$options.critical){const e=(({root:e,rootMargin:t,threshold:r})=>({root:e,rootMargin:t,threshold:r}))(this);this.observer=new IntersectionObserver(([e])=>this.onIntersect(e),e)}},mounted(){this.observer&&this.observer.observe(this.$el)},destroyed(){this.observer&&this.observer.disconnect()},methods:{onIntersect(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter(e){this.$emit("enter",e)}},render(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(3))},130:function(e,t,r){"use strict";var n=r(121).a,o=r(2),c={components:{IntersectionObserver:Object(o.a)(n,void 0,void 0,!1,null,null,null).exports},props:{src:{type:String,default:()=>null}},data:()=>({lazySrc:null}),methods:{onLoad(e){this.$emit("load",e)},onEnter(e){this.lazySrc=this.src,this.$emit("enter",e)}}},l=Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("intersection-observer",{on:{enter:this.onEnter}},[t("iframe",this._b({staticClass:"nuxt-speedkit__speedkit-iframe",attrs:{src:this.lazySrc,loading:"lazy"},on:{load:this.onLoad}},"iframe",this.$attrs,!1))])}),[],!1,null,null,null);t.a=l.exports},203:function(e,t,r){"use strict";r.r(t);var n=r(130),o=r(102),c={components:{SpeedkitIframe:n.a,OrganismPreviewContainer:o.a},data:()=>({iframe:{src:"https://grabarzundpartner.de"}})},l=r(2),v=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[r("speedkit-iframe",e._b({},"speedkit-iframe",e.iframe,!1))]},proxy:!0},{key:"title",fn:function(){return[r("p",[e._v("Critical"),r("br"),e._v("SpeedkitIframe")])]},proxy:!0}])})}),[],!1,null,null,null).exports,d={components:{SpeedkitIframe:n.a,OrganismPreviewContainer:o.a},data:()=>({iframe:{src:"https://grabarzundpartner.de"}})},h={components:{Critical:v,Lazy:Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("organism-preview-container",{attrs:{id:"lazyContainer"},scopedSlots:e._u([{key:"default",fn:function(){return[r("speedkit-iframe",e._b({},"speedkit-iframe",e.iframe,!1))]},proxy:!0},{key:"title",fn:function(){return[r("p",[e._v("SpeedkitIframe")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},f=Object(l.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("critical",{attrs:{critical:""}}),this._v(" "),t("lazy")],1)}),[],!1,null,null,null);t.default=f.exports}}]);