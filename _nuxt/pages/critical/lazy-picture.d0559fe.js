(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{222:function(e,t,r){var content=r(225);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(55).default)("7d9112ab",content,!0,{sourceMap:!1})},224:function(e,t,r){"use strict";var n=r(222);r.n(n).a},225:function(e,t,r){(t=r(54)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;height:100%;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:1024px){.preview-container{flex-direction:row}}.preview-container>div{flex:0 0 50%}.preview-container .preview-container__info{display:flex;align-items:center;justify-content:center;font-size:7.72947vw}@media (min-width:768px){.preview-container .preview-container__info{font-size:4.16667vw}}@media (min-width:1024px){.preview-container .preview-container__info{font-size:32px}}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{background:#eee}.preview-container .preview-container__preview>article{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4.83092vw}@media (min-width:768px){.preview-container .preview-container__preview>article{font-size:2.60417vw}}@media (min-width:1024px){.preview-container .preview-container__preview>article{font-size:20px}}.preview-container .preview-container__preview>figure,.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}.preview-container .preview-container__preview>figure img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},226:function(e,t,r){"use strict";r.r(t);var n={},c=(r(224),r(22)),component=Object(c.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},294:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{pictureA:{alt:"Alt Text",title:"Title Text",sources:[{srcset:[{url:"img/critical-1200.webp"},{url:"img/critical-2400.webp",density:2}],media:"(min-width: 768px)",type:"image/webp"},{srcset:[{url:"img/critical-1200.jpg"},{url:"img/critical-2400.jpg",density:2}],media:"(min-width: 768px)",type:"image/jpeg"},{srcset:[{url:"img/critical-768.webp"},{url:"img/critical-1536.webp",density:2}],type:"image/webp"},{srcset:[{url:"img/critical-768.jpg"},{url:"img/critical-1536.jpg",density:2}],type:"image/jpeg"}]}}}},c=r(22),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("organism-preview-container",{attrs:{critical:""},scopedSlots:e._u([{key:"title",fn:function(){return[r("p",[e._v("Critical"),r("br"),e._v("LazyPicture"),r("br"),e._v("Source Switch by >768px")])]},proxy:!0}])},[[r("LazyPicture",e._b({},"LazyPicture",e.pictureA,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LazyPicture:r(245).default,OrganismPreviewContainer:r(226).default})}}]);