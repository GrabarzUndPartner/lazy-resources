(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{121:function(e,t,r){"use strict";r.r(t);var n={layout:"detail",data:()=>({pictureA:{alt:"Alt Text",title:"Title Text",sources:[{srcset:[{url:"https://dummyimage.com/1200x1200/eeeeee/000000.jpg"},{url:"https://dummyimage.com/2400x2400/eeeeee/000000.jpg",density:2}],media:"(min-width: 768px)"},{srcset:[{url:"https://dummyimage.com/768x768/eeeeee/000000.jpg"},{url:"https://dummyimage.com/1536x1536/eeeeee/000000.jpg",density:2}]}]}})},o=r(3),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("organism-spacer"),e._v(" "),r("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[r("p",[e._v("LazyPicture"),r("br"),e._v("Source Switch by >768px")])]},proxy:!0}])},[[r("LazyPicture",e._b({},"LazyPicture",e.pictureA,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OrganismSpacer:r(57).default,LazyPicture:r(58).default,OrganismPreviewContainer:r(48).default})},45:function(e,t,r){var content=r(47);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("7d9112ab",content,!0,{sourceMap:!1})},46:function(e,t,r){"use strict";var n=r(45);r.n(n).a},47:function(e,t,r){(t=r(7)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;height:100%;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:1024px){.preview-container{flex-direction:row}}.preview-container>div{flex:0 0 50%}.preview-container .preview-container__info{display:flex;align-items:center;justify-content:center;font-size:7.72947vw}@media (min-width:768px){.preview-container .preview-container__info{font-size:4.16667vw}}@media (min-width:1024px){.preview-container .preview-container__info{font-size:32px}}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{background:#eee}.preview-container .preview-container__preview>article{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4.83092vw}.preview-container .preview-container__preview>article p{font-family:var(--font-family)}@media (min-width:768px){.preview-container .preview-container__preview>article{font-size:2.60417vw}}@media (min-width:1024px){.preview-container .preview-container__preview>article{font-size:20px}}.preview-container .preview-container__preview>figure,.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}.preview-container .preview-container__preview>figure img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},48:function(e,t,r){"use strict";r.r(t);var n={},o=(r(46),r(3)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},49:function(e,t,r){var content=r(56);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("7a80f00b",content,!0,{sourceMap:!1})},51:function(e,t,r){var content=r(62);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("03907b63",content,!0,{sourceMap:!1})},52:function(e,t,r){var content=r(64);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("f3aa63aa",content,!0,{sourceMap:!1})},55:function(e,t,r){"use strict";var n=r(49);r.n(n).a},56:function(e,t,r){(t=r(7)(!1)).push([e.i,".organism-spacer{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;font-size:7.72947vw}@media (min-width:768px){.organism-spacer{font-size:4.16667vw}}@media (min-width:1024px){.organism-spacer{font-size:32px}}.organism-spacer>span{display:block;font-size:44px;text-align:center}.organism-spacer p{line-height:1.375;text-align:center}",""]),e.exports=t},57:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,default:"Scroll down"}}},o=(r(55),r(3)),component=Object(o.a)(n,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-spacer"},[t("p",[this._v("Scroll down")]),this._v(" "),t("span",[this._v("↓")])])}],!1,null,null,null);t.default=component.exports},58:function(e,t,r){"use strict";r.r(t);var n=r(59),o=r.n(n);function c(e){return e=e.map(source=>(source.media=source.media||"all",source)),o()(e,"media").reverse()}var l=r(71),f=r(67),m=r.n(f),v=r(66),h={props:{srcset:{type:Array,default:()=>null}},computed:{preparedSrcset(){return m.a.stringify(Object(v.a)(this.srcset||[]))||null}}},d=(r(61),r(3)),w=Object(d.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("source",this._b({attrs:{srcset:this.preparedSrcset}},"source",this.$attrs,!1))}),[],!1,null,"61ed09b6",null).exports,_=r(53),x={components:{CustomImage:l.a,CustomSource:w,LazyImage:_.default},props:{sources:{type:Array,default:()=>[]}},computed:{fallbackImage(){const e=c(this.sources)[0];return{src:e.src,srcset:e.srcset}},sortedSources(){return c(this.sources)}}},y=(r(63),Object(d.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("lazy-image",e._b({attrs:{src:e.fallbackImage.src,srcset:e.fallbackImage.srcset},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.width,o=t.height;return[r("picture",[e._l(e.sortedSources,(function(source,t){return r("custom-source",e._b({key:t},"custom-source",source,!1))})),e._v(" "),r("custom-image",e._b({attrs:{src:e.fallbackImage.src,srcset:e.fallbackImage.srcset,width:n,height:o}},"custom-image",e.$attrs,!1))],2)]}},{key:"caption",fn:function(){return[e._t("caption")]},proxy:!0}],null,!0)},"lazy-image",e.$attrs,!1))}),[],!1,null,"0b321c64",null));t.default=y.exports},59:function(e,t,r){var n=r(60),o=["blank","all","minWidth","minHeight","maxWidth","maxHeight","print"];function c(e){return function(a,b){var t=a.sortVal,r=b.sortVal,n=a.item.__media,o=b.item.__media;if(e=void 0!==e&&e,t===r){if(n.match(/print/))return 1;if(o.match(/print/))return-1}return e?r-t:t-r}}function l(e,t,r){switch(function(e,t,r){return e&&e.length&&"string"!=typeof e?("object"!==t||r&&"string"==typeof r)&&function(e,t,r){for(var n=!0,i=0,o=e.length;i<o;i++)if(typeof e[i]!==t||r&&!e[i].hasOwnProperty(r)){n=!1;break}return n}(e,t,r)?"all":"some":"none"}(e,t,r)){case"none":return[];case"some":return e}var l=function(){for(var e={},i=0,t=o.length;i<t;i++)e[o[i]]=[];return e}();return e=function(e,t,r){for(var o=[],c={},i=0,l=e.length;i<l;i++)"string"===t?c=n({},{__media:e[i]}):(c=n({},e[i])).__media=e[i][r],o.push(c);return o}(e,t,r),function(e,t){for(var i=0,r=t.length;i<r;i++){var n=t[i],o=n.__media,c="blank",l=o.match(/\d+/g);o.match(/min-width/)?c="minWidth":o.match(/min-height/)?c="minHeight":o.match(/max-width/)?c="maxWidth":o.match(/max-height/)?c="maxHeight":o.match(/print/)?c="print":o.match(/all/)&&(c="all"),e[c].push({item:n,sortVal:l?l[0]:0})}}(l,e),function(e){var t;for(var r in e)e.hasOwnProperty(r)&&(t=c(!1),"maxWidth"!==r&&"maxHeight"!==r||(t=c(!0)),e[r].sort(t))}(l),function(e,t,r){var n=[];function c(e){for(var r,i=0,o=e.length;i<o;i++)"string"===t?r=e[i].item.__media:delete(r=e[i].item).__media,n.push(r)}for(var i=0,l=o.length;i<l;i++)c(e[o[i]]);return n}(l,t)}e.exports=function(e,t){return e?t?l(e,"object",t):l(e,"string"):[]}},60:function(e,t){e.exports=function(){for(var e={},i=0;i<arguments.length;i++){var source=arguments[i];for(var t in source)r.call(source,t)&&(e[t]=source[t])}return e};var r=Object.prototype.hasOwnProperty},61:function(e,t,r){"use strict";var n=r(51);r.n(n).a},62:function(e,t,r){(t=r(7)(!1)).push([e.i,"",""]),e.exports=t},63:function(e,t,r){"use strict";var n=r(52);r.n(n).a},64:function(e,t,r){(t=r(7)(!1)).push([e.i,"",""]),e.exports=t}}]);