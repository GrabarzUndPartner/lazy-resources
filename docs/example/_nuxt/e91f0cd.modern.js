(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{101:function(e,t,n){var content=n(104);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("295b85b1",content,!0,{sourceMap:!1})},102:function(e,t,n){"use strict";n(103);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"ee1123ec",null);t.a=component.exports},103:function(e,t,n){"use strict";n(101)},104:function(e,t,n){(t=n(5)(!1)).push([e.i,".preview-container[data-v-ee1123ec]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-ee1123ec]:first-child{margin-top:0}.preview-container[data-v-ee1123ec]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-ee1123ec]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-ee1123ec]{flex-direction:row}}.preview-container>div[data-v-ee1123ec]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-ee1123ec]{font-size:2em}.preview-container .preview-container__info p[data-v-ee1123ec]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-ee1123ec]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-ee1123ec]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-ee1123ec]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-ee1123ec]{text-align:center}.preview-container .preview-container__preview>article[data-v-ee1123ec],.preview-container .preview-container__preview>div[data-v-ee1123ec]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-ee1123ec]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-ee1123ec]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-ee1123ec]{position:relative;width:100%;height:100%}",""]),e.exports=t},107:function(e,t,n){"use strict";(function(e){let r;function c(){return r||(r=new Promise(t=>{const img=new e.Image;img.onload=()=>t(!0),img.onerror=()=>t(!1),img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"})),r}function l(element,t){let n={};return e.document&&(n=e.document.createElement(element)),t in n}n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}))}).call(this,n(3))},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(10);var c=n(11),l=n(107);const h=new class{constructor(){this.map=new Map}getEntry(e){return this.map.has(e)||this.map.set(e,new r.a),this.map.get(e)}};function d(e,t,n){const r=Object(c.a)(e.srcset),d=h.getEntry(r);return d.promise.then(()=>t()),Object(l.a)("link","imageSrcset")?{link:[o(e,r,d.resolve,n)]}:function(e,t,n){const img=new Image;img.onload=t,img.crossorigin=n,img.srcset=e.srcset}(e,d.resolve,n)}function o(e,t,n,r){return{hid:t,rel:"preload",as:"image",crossorigin:r,callback:n,imageSrcset:e.srcset}}},133:function(e,t,n){e.exports=(()=>{const e=n(134);return{sources:[{srcset:n(135).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(136)),width:e.width,height:e.height}})()},134:function(e,t,n){e.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},135:function(e,t,n){e.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},136:function(e,t,n){var r={src:n.p+"img/f312213.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M1357.5 672.5l-1250 125-40-555z'/%3E%3Cpath fill='%23ccc3a8' d='M1357.5 502.5l-1435-395 1345-185z'/%3E%3Cpath fill='%23ff0' d='M17.5 2.5l95 785-190-130z'/%3E%3Cpath fill='%230f0615' d='M1052.5 122.5l115 640-685 35z'/%3E%3Cpath fill='%23ff0' d='M1242.5-37.5l115 425-115 410z'/%3E%3Cpath fill='%238a7b00' d='M782.5 652.5l-640 15 5-245z'/%3E%3Cpath fill='%23b0a993' d='M187.5 342.5l-65-410 1145 135z'/%3E%3Cpath fill='%23ffedcd' d='M1067.5 412.5l185-375-65 455z'/%3E%3Cpath fill='%23ff0' d='M-77.5 317.5l145 445-30-840z'/%3E%3Cpath fill='%234d536d' d='M552.5 152.5l-85 255 745 90z'/%3E%3Cpath fill='%231a0f06' d='M1237.5 497.5l-600 145 600 155z'/%3E%3Cpath fill='%23ff0' d='M1357.5 457.5l-115-415 5 755z'/%3E%3Cpath fill='%2301081a' d='M22.5 332.5l595 135-520 35z'/%3E%3Cpath fill='%23c6c5db' d='M747.5-62.5l-5 415 200-285z'/%3E%3Cpath fill='%23504649' d='M1022.5 592.5l-445-190 575-225z'/%3E%3Cpath fill='%23d3d114' d='M52.5 92.5l265 70 265-75z'/%3E%3Cpath fill='%23ff0' d='M87.5 727.5l-70-615-95 610z'/%3E%3Cpath fill='%230c0000' d='M37.5 797.5l50-140 445 20z'/%3E%3Cpath fill='%236d4d2e' d='M47.5 467.5l-5-450 125 35z'/%3E%3Cpath fill='%23130c0b' d='M797.5 432.5l-540 140 615 5z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},174:function(e,t,n){e.exports=(()=>{const e=n(175);return{sources:[{srcset:n(176).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(177)),width:e.width,height:e.height}})()},175:function(e,t,n){e.exports={srcSet:n.p+"img/989de56-480.jpg 480w,"+n.p+"img/860842d-768.jpg 768w,"+n.p+"img/8ede879-960.jpg 960w,"+n.p+"img/df666a4-1080.jpg 1080w,"+n.p+"img/0683296-1200.jpg 1200w,"+n.p+"img/984bf0c-1280.jpg 1280w",images:[{path:n.p+"img/989de56-480.jpg",width:480,height:270},{path:n.p+"img/860842d-768.jpg",width:768,height:432},{path:n.p+"img/8ede879-960.jpg",width:960,height:540},{path:n.p+"img/df666a4-1080.jpg",width:1080,height:608},{path:n.p+"img/0683296-1200.jpg",width:1200,height:675},{path:n.p+"img/984bf0c-1280.jpg",width:1280,height:720}],src:n.p+"img/989de56-480.jpg",toString:function(){return n.p+"img/989de56-480.jpg"},width:480,height:270}},176:function(e,t,n){e.exports={srcSet:n.p+"img/6e81844-480.webp 480w,"+n.p+"img/000570c-768.webp 768w,"+n.p+"img/542b50c-960.webp 960w,"+n.p+"img/b4b2178-1080.webp 1080w,"+n.p+"img/14fed16-1200.webp 1200w,"+n.p+"img/76320eb-1280.webp 1280w",images:[{path:n.p+"img/6e81844-480.webp",width:480,height:270},{path:n.p+"img/000570c-768.webp",width:768,height:432},{path:n.p+"img/542b50c-960.webp",width:960,height:540},{path:n.p+"img/b4b2178-1080.webp",width:1080,height:608},{path:n.p+"img/14fed16-1200.webp",width:1200,height:675},{path:n.p+"img/76320eb-1280.webp",width:1280,height:720}],src:n.p+"img/6e81844-480.webp",toString:function(){return n.p+"img/6e81844-480.webp"},width:480,height:270}},177:function(e,t,n){var r={src:n.p+"img/36b4356.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%231e2133' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23c8cdde' d='M222.5 597.5l265-420 555 110z'/%3E%3Cpath d='M367.5 797.5l-295-875-150 775z'/%3E%3Cpath fill='%23f5eced' d='M777.5 372.5l-160-85 245-120z'/%3E%3Cpath fill='%231249b1' d='M367.5 317.5l325-80-445-190z'/%3E%3Cpath fill='%23001' d='M1357.5 732.5l-1060 65 970-875z'/%3E%3Cpath fill='%23767172' d='M932.5 227.5l50 160-600 150z'/%3E%3Cpath fill='%23ccd2d5' d='M242.5 527.5l335-185-40-115z'/%3E%3Cpath fill='%23000325' d='M197.5-52.5l400 330 595-280z'/%3E%3Cpath d='M297.5 467.5l140-145-505-400z'/%3E%3Cpath fill='%2377727a' d='M182.5 497.5l445-5-325 100z'/%3E%3Cpath d='M372.5 562.5l-345 235 1090-110z'/%3E%3Cpath fill='%232c88dd' d='M322.5 132.5l140 170 130-65z'/%3E%3Cpath fill='%23161505' d='M692.5 227.5l-130 110-10 110z'/%3E%3Cpath d='M117.5 797.5l160-875-355 115z'/%3E%3Cpath fill='%230b0700' d='M847.5 267.5l510-205-525-140z'/%3E%3Cpath fill='%23c8c4d7' d='M677.5 222.5l-15 155 220-170z'/%3E%3Cpath fill='%23d4d6cf' d='M887.5 417.5l80-85-15 65z'/%3E%3Cpath fill='%23020842' d='M1357.5 327.5l-160 470-275-615z'/%3E%3Cpath fill='%2392918f' d='M202.5 477.5l-35 90 105-50z'/%3E%3Cpath fill='%23e1daed' d='M537.5 287.5l-60 160 135-175z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},205:function(e,t,n){"use strict";n.r(t);var r=n(152),c=n(102),l={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:c.a},data:()=>({iframe:{id:"cLKvbhfVBUU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(133))}})},h=n(2),d=Object(h.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports,o={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:c.a},data:()=>({iframe:{id:"VBafwg16xpU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(174))}})},w={components:{Critical:d,Lazy:Object(h.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},f=Object(h.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("critical",{attrs:{critical:""}}),this._v(" "),t("lazy")],1)}),[],!1,null,null,null);t.default=f.exports}}]);