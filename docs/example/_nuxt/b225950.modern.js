(window.webpackJsonp=window.webpackJsonp||[]).push([[11,19],{124:function(e,t,r){"use strict";(function(e){var n=r(15),o=r(130),l=r(9),d=r(125),c=r(131),f=r(10);const A=new c.a;function m({type:e}){return e===Object(d.a)("webp")}t.a={props:{sources:{type:Array,default:()=>[]},preload:{type:Array,default:()=>[]},alt:{type:String,default:()=>""},title:{type:String,default:()=>""},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head(){let data={};if(this.preload.length&&(this.isCritical||this.visible)){const source=this.getPreloadSource();A.getPromise(Object(f.a)(source.srcset),((t,r)=>{Object(o.a)()?data={link:[Object(l.b)(source,this.crossorigin,t)]}:function({srcset:t,sizes:r},n,o=(()=>{})){{const img=new e.Image;img.onload=o,img.crossorigin=n,img.sizes=r,img.srcset=t}}(source,this.crossorigin,t)})).then((e=>this.onPreload(e)))}return data},watch:{sources(){this.imageSources.length||(this.imageSources=this.sources)}},mounted(){Object(n.a)(this.$el,(e=>{this.visible=!0,this.$emit("enter",e)}))},destroyed(){Object(n.b)(this.$el)},methods:{onPreload(e){this.style.backgroundImage=`url(${this.$refs.image.currentSrc})`,this.imageSources=this.preload,this.inProgress=!1,this.$emit("load")},getPreloadSource(){const e=function(e){return e.filter((source=>!m(source)||m(source)&&o.b))}(this.preload),t=Array.from(new Set(e.map((({type:e})=>e)))).shift(),{srcset:r,sizes:n}=e.filter((source=>source.type===t)).reduce(((e,source)=>(e.srcset.push(source.srcset),e.sizes.push(source.sizes),e)),{srcset:[],sizes:[]});return{srcset:r.join(", "),sizes:n.join(", "),type:t}}}}}).call(this,r(6))},125:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const n={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(e){return n[String(e)]}},126:function(e,t,r){var content=r(133);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("061ec49c",content,!0,{sourceMap:!1})},127:function(e,t,r){var content=r(135);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("3bcf2470",content,!0,{sourceMap:!1})},128:function(e,t,r){var content=r(137);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("841b0088",content,!0,{sourceMap:!1})},129:function(e,t,r){"use strict";r(136);var n=r(2),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"preview-container"},[r("div",{staticClass:"preview-container__preview"},[e._t("default")],2),e._v(" "),r("div",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[e._t("title",[r("p",[e._v("Preview Info")])])],2)])}),[],!1,null,"fa2458f0",null);t.a=component.exports},130:function(e,t,r){"use strict";(function(e){r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return l}));var n=r(13);const o=function(){const t=e.document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}();function l(){if(Object(n.a)())return!1;{const t=e.document.createElement("link").relList;return function(element,t){let r={};e.document&&(r=e.document.createElement(element));if(t in r)return!0;return!1}("link","imageSrcset")&&!!(t&&t.supports&&t.supports("preload"))}}}).call(this,r(6))},131:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(20);class o{constructor(){this.map=new Map}getPromise(e,t){if(!this.map.has(e)){const r=new n.a;this.map.set(e,r.promise),t(r.resolve,r.reject)}return this.map.get(e)}}},132:function(e,t,r){"use strict";r(126)},133:function(e,t,r){var n=r(4)(!1);n.push([e.i,"picture[data-v-47bc5e0b]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-47bc5e0b]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);-o-object-fit:cover;object-fit:cover}picture img.in-progress[data-v-47bc5e0b]{filter:blur(10px);transform:scale(1.1)}",""]),e.exports=n},134:function(e,t,r){"use strict";r(127)},135:function(e,t,r){var n=r(4)(!1);n.push([e.i,".nuxt-speedkit__noscript[data-v-7b49c021]{display:block;height:inherit}",""]),e.exports=n},136:function(e,t,r){"use strict";r(128)},137:function(e,t,r){var n=r(4)(!1);n.push([e.i,".preview-container[data-v-fa2458f0]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-fa2458f0]:first-child{margin-top:0}.preview-container[data-v-fa2458f0]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-fa2458f0]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-fa2458f0]{flex-direction:row}}.preview-container>div[data-v-fa2458f0]{display:flex;align-items:center;justify-content:center;width:100%;height:50vh;overflow:hidden}@media (orientation:landscape){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-fa2458f0]{font-size:2em}.preview-container .preview-container__info p[data-v-fa2458f0]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-fa2458f0]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-fa2458f0]{font-size:1.125em;--bg-opacity:1;background-color:rgb(0 0 0/40%)}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-fa2458f0]{background-color:rgb(255 255 255/40%)}}.preview-container .preview-container__preview>article[data-v-fa2458f0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-align:center}.preview-container .preview-container__preview>div[data-v-fa2458f0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-fa2458f0]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-fa2458f0]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-fa2458f0]{position:relative;width:100%;height:100%}",""]),e.exports=n},138:function(e,t,r){"use strict";var n=r(124).a,o=(r(132),r(2)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("picture",{style:e.style},[e._l(e.imageSources,(function(source,e){return r("source",{key:e,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),e._v(" "),r("img",{ref:"image",class:{"in-progress":e.inProgress},attrs:{loading:"lazy",alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],2)}),[],!1,null,"47bc5e0b",null);t.a=component.exports},139:function(e,t,r){"use strict";r(134);var n=r(2),component=Object(n.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var e=this,t=e.$createElement;e._self._c;return e._t("default")},staticRenderFns:[]}})}),[],!1,null,"7b49c021",null);t.a=component.exports},141:function(e,t,r){var content=r(151);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("ec0eaf24",content,!0,{sourceMap:!1})},142:function(e,t,r){"use strict";var n=r(125),o=r(9),l=r(138),d=r(139),c={components:{CustomPicture:l.a,CustomNoScript:d.a},props:{sources:{type:Array,default:()=>[]},placeholders:{type:Array,default:()=>[]},alt:{type:String,default:null},title:{type:String,default:null},crossorigin:{type:String,default(){return this.$crossorigin}}},data(){return{resolvedPlacholders:this.getPlaceholders(),resolvedSources:this.getSources()}},head:()=>({noscript:[Object(o.c)(".nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}),computed:{hasSlot(){return this.$slots.caption}},methods:{getPlaceholders(){return this.placeholders.map((({media:e,url:t,format:r})=>({media:e,url:t,type:Object(n.a)(r)})))},getSources(){return this.sources.map((({sizes:e,format:t,media:r})=>{const o=e.sort(((a,b)=>a.width>b.width?-1:1));return{media:r,srcset:o.map((({width:e,url:t})=>e?`${t} ${e}w`:t)).join(", "),sizes:o.map((({width:e,media:t})=>t?`${t} ${e}px`:`${e}px`)).join(", "),type:Object(n.a)(t)}}))}}},f=(r(150),r(2)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",{staticClass:"nuxt-speedkit__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}})],1),e._v(" "),r("custom-picture",e._g({attrs:{sources:e.resolvedPlacholders,preload:e.resolvedSources,alt:e.alt,title:e.title,crossorigin:e.crossorigin}},e.$listeners)),e._v(" "),e.hasSlot?r("figcaption",[e._t("caption")],2):e._e()],1)}),[],!1,null,"6e52358f",null);t.a=component.exports},150:function(e,t,r){"use strict";r(141)},151:function(e,t,r){var n=r(4)(!1);n.push([e.i,".nuxt-speedkit__speedkit-picture[data-v-6e52358f]{width:100%;height:inherit;margin:0}",""]),e.exports=n},152:function(e,t,r){var content=r(169);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("33d8bc99",content,!0,{sourceMap:!1})},154:function(e,t,r){e.exports=r.p+"img/414.4c00400.jpg"},155:function(e,t,r){e.exports=r.p+"img/576.65e4eb6.jpg"},156:function(e,t,r){e.exports=r.p+"img/768.a1dfc54.jpg"},157:function(e,t,r){e.exports=r.p+"img/1024.d6d18e1.jpg"},158:function(e,t,r){e.exports=r.p+"img/1280.a766dca.jpg"},159:function(e,t,r){e.exports=r.p+"img/414.2959315.webp"},160:function(e,t,r){e.exports=r.p+"img/576.24ab176.webp"},161:function(e,t,r){e.exports=r.p+"img/768.17074af.webp"},162:function(e,t,r){e.exports=r.p+"img/1024.4186569.webp"},163:function(e,t,r){e.exports=r.p+"img/1280.af3abdb.webp"},168:function(e,t,r){"use strict";r(152)},169:function(e,t,r){var n=r(4)(!1);n.push([e.i,'.nuxt-speedkit__speedkit-youtube[data-v-40996368]{position:relative;width:100%;overflow:hidden}.nuxt-speedkit__speedkit-youtube[data-v-40996368] iframe{position:absolute;top:0;width:100%;height:100%}.nuxt-speedkit__speedkit-youtube .poster[data-v-40996368]{position:relative;display:block;width:100%;padding:0;cursor:pointer;background:transparent;border:none;border-radius:0;outline:none;transition:opacity .2s ease-in;-webkit-appearance:none;-moz-appearance:none;appearance:none}.nuxt-speedkit__speedkit-youtube .poster .icon[data-v-40996368]{position:absolute;top:50%;left:50%;width:68px;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .poster .icon path[data-v-40996368]:first-child{fill:#212121;fill-opacity:.8;transition:fill .1s cubic-bezier(.4,0,1,1),fill-opacity .1s cubic-bezier(.4,0,1,1)}.nuxt-speedkit__speedkit-youtube .poster:hover path[data-v-40996368]:first-child{fill:red;fill-opacity:1;transition:fill .1s cubic-bezier(0,0,.2,1),fill-opacity .1s cubic-bezier(0,0,.2,1)}.nuxt-speedkit__speedkit-youtube svg[data-v-40996368]{transition:opacity .2s linear,transform .2s linear}.nuxt-speedkit__speedkit-youtube.js--playing .poster[data-v-40996368]{pointer-events:none;opacity:0}.nuxt-speedkit__speedkit-youtube .spinner[data-v-40996368]{position:absolute;top:50%;left:50%;z-index:18;width:48px;pointer-events:none;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .spinner[data-v-40996368]:before{display:block;padding-top:100%;content:""}.nuxt-speedkit__speedkit-youtube .spinner .spinner-container[data-v-40996368]{position:absolute;top:50%;left:50%;width:100%;padding-bottom:100%;margin-top:-50%;margin-left:-50%;pointer-events:none;-webkit-animation:spinner-linspin-data-v-40996368 1568.23529647ms linear infinite;animation:spinner-linspin-data-v-40996368 1568.23529647ms linear infinite}.nuxt-speedkit__speedkit-youtube .spinner .spinner-rotator[data-v-40996368]{position:absolute;width:100%;height:100%;-webkit-animation:spinner-easespin-data-v-40996368 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-easespin-data-v-40996368 5332ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left[data-v-40996368]{position:absolute;top:0;right:49%;bottom:0;left:0;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right[data-v-40996368]{position:absolute;top:0;right:0;bottom:0;left:49%;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-circle[data-v-40996368]{position:absolute;box-sizing:border-box;width:200%;height:100%;border:4px solid #b81c22;border-bottom-color:transparent;border-radius:50%}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left .spinner-circle[data-v-40996368]{border-right-color:transparent;-webkit-animation:spinner-left-spin-data-v-40996368 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-left-spin-data-v-40996368 1333ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right .spinner-circle[data-v-40996368]{left:-100%;border-left-color:transparent;-webkit-animation:spinner-right-spin-data-v-40996368 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-right-spin-data-v-40996368 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes rotate-data-v-40996368{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes rotate-data-v-40996368{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes spinner-linspin-data-v-40996368{to{transform:rotate(1turn)}}@keyframes spinner-linspin-data-v-40996368{to{transform:rotate(1turn)}}@-webkit-keyframes spinner-easespin-data-v-40996368{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@keyframes spinner-easespin-data-v-40996368{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@-webkit-keyframes spinner-left-spin-data-v-40996368{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes spinner-left-spin-data-v-40996368{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes spinner-right-spin-data-v-40996368{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}@keyframes spinner-right-spin-data-v-40996368{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}',""]),e.exports=n},172:function(e,t,r){"use strict";r.r(t);var n=r(153),o=r.n(n),l=r(20),d=r(145),c=r(142),f={components:{IntersectionObserver:d.a,SpeedkitPicture:c.a},props:{id:{type:String,required:!0},autoplay:{type:Boolean,default:!1},poster:{type:Object,default:()=>({})},host:{type:String,default:"https://www.youtube-nocookie.com"},config:{type:Object,default:()=>({playsinline:1,modestbranding:1})}},data:()=>({playing:!1,loading:!1,player:null,playerReady:new l.a,deferred:new l.a}),mounted(){this.playerReady.promise.then((()=>{this.$emit("ready")}))},methods:{async onClick(){this.deferred.resolve(),await this.play()},async onEnter(){this.$emit("enter"),this.deferred.resolve(),this.autoplay&&await this.play()},async play(){this.loading=!0,this.$emit("loading"),await this.playerReady.promise,this.player.playVideo()},async onLoad(){await this.deferred.promise,this.loadPlayer()},loadPlayer(){this.player=o()(this.$refs.youtube,{host:this.host,videoId:this.id,playerVars:this.config}),this.player.on("ready",(()=>{this.playerReady.resolve()})),this.player.on("stateChange",(e=>{1===e.data&&(this.loading=!1,this.playing=!0,this.$emit("playing"))}))}}},A=(r(168),r(2)),component=Object(A.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("intersection-observer",{attrs:{threshold:[1],"track-visibility":"",delay:350},on:{enter:e.onEnter}},[r("div",{staticClass:"nuxt-speedkit__speedkit-youtube",class:{"js--playing":e.playing,"js--loading":e.loading}},[r("div",{ref:"youtube",attrs:{loading:"lazy"}}),e._v(" "),r("button",{staticClass:"poster",attrs:{"aria-label":"Play"},on:{click:e.onClick}},[r("speedkit-picture",e._b({on:{load:e.onLoad}},"speedkit-picture",e.poster,!1)),e._v(" "),e.loading||e.playing?e._e():r("span",{staticClass:"icon"},[r("svg",{attrs:{version:"1.1",viewBox:"0 0 68 48"}},[r("path",{attrs:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}}),r("path",{attrs:{d:"M 45,24 27,14 27,34",fill:"#fff"}})])]),e._v(" "),e.loading?r("div",{staticClass:"spinner"},[r("div",{staticClass:"spinner-container"},[r("div",{staticClass:"spinner-rotator"},[r("div",{staticClass:"spinner-left"},[r("div",{staticClass:"spinner-circle"})]),e._v(" "),r("div",{staticClass:"spinner-right"},[r("div",{staticClass:"spinner-circle"})])])])]):e._e()],1)])])}),[],!1,null,"40996368",null);t.default=component.exports},292:function(e,t,r){"use strict";r.r(t);var n=r(172),o=r(129),l={components:{SpeedkitYoutube:n.default,OrganismPreviewContainer:o.a},data:()=>({youtube:{id:"cLKvbhfVBUU",poster:{alt:"Youtube Alt Text",title:"Youtube Title Text",placeholders:[{format:"jpg",url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAARAB4DAREAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAACQMEBQYIB//EABoBAAIDAQEAAAAAAAAAAAAAAAUGAwcIAgT/2gAMAwEAAhADEAAAAL/mlzd2cDRdodE5AZQ02iErjZJzyzB5QMfMY/7M7yhbfjjDgAj+TT//xAAzEAABBAEDAgIEDwAAAAAAAAADAQIEBQYHCBIAEwkUESE0tQoiIzEyODlEUnF0d4Wxwf/aAAgBAQABPwCi1T0mu90+rGLZtbQ7KZXam2ieQk2RkSPHFLltcNwWGa74xSBf3Gqz2djPWjndar5lothVCWAF0ZbCxvp46mW47O+NEWM5FkfKL6ERCPZw4B5cWF+ZURd3e73SfAtqcCNjmR0MuZFrYZzUr6aQK1kTpTWIEQJJIyJGRpiCIc6Gd6QOZ2Gk4qI3hpjhZxt3wDWWznMW6tMZsgzgxwvjhlkbYow0sQF9fYe4LXBcTm/slYqOa1/BPGg0aq9A93WtmVZHf5HKFf6iOdhjI1DBlRbOeaFX3FnElvWQwkJkUVvE7T0iyUPz4uVjmvf1gO3TevqXtdibmtG8M1QyulBGv7/I59jTVddQ1ceuIB8osGS6Uq2DlRyNcHywubwyRhbKWKbhg25bLbKmBjWp8CzFjnkXjivszuA8TDSpKlIApEK9zAuJ3G8WPdzG9PpK3rwD/EV1G3Vai1O3rP6Or7enmkJ41Tb1cvsukRI8mphgHIi/jYIbOJUX1N68e/7WnWT+G9zQuq/2Cu/Wk/pevvTvy/1OvguP1/co/ZWf71p+v//EACwRAAIBAgUEAAQHAAAAAAAAAAECAwQRAAUGEiEHCBMyEBQ3szFBQlFhcnT/2gAIAQIBAT8A0jlM9b04yVxUNCpo4BuEcbG/jiKkGVHW6qpX1PD/ALhSNN5BI8C1MzpKWNnHhQJdVNzEBZ4y7lWbySTgKmxQpYvifIqSKlMvyyWHPqv4A8n1x3bLlsWhqVIoFR/mY/0ruF4Z7ji9vyuAbXGOg+uJ876d5NQ0sUYMVOon3O4KIrzU8DoPGUkMr00m9TLGY8P1a0pp/WD5BmNRBFOWgSNVeRpXkn3bFeJYQIxxe5lcbXQyCISR7mzFWppEQiR19eS3NgQH5PP8m3FjjvFomOi6WsBsWqlDC3FzDLYg2FrWPGO376PZT/R/uP8AAemO7/6Y0f8Asj+zUY//xAArEQEAAgAGAQIDCQAAAAAAAAABAhEAAwQSITEFE0EGFFEyNDVxcpGxsvH/2gAIAQMBAT8AzPR+YnAgKNvPPP1r2eeHGvz/AEs5yCVbYx920b7rh6eSMcePzdPLV+m5pFbO15euD6/ud48Vp5afV5kvUJnISN22XIEjcRlSFm6MZU0h1jWePI+Rnm6pZlu3bxfuD2m0Yl07q6MeQ0Of5CfrQkzE5ZBJojXKrb7WF8Xa4loDL1Uc6NwJfbqgOW9hwhtSjlu6THw/qZkJZAFHTxYClVb3d3/r5b8Qn+UP6GDrE+nHg/vsv0v8mP/Z"}],sources:[{format:"jpg",sizes:[{width:414,url:r(154)},{width:576,media:"(min-width: 576px)",url:r(155)},{width:768,media:"(min-width: 768px)",url:r(156)},{width:1024,media:"(min-width: 1024px)",url:r(157)},{width:1280,media:"(min-width: 1200px)",url:r(158)}]},{format:"webp",sizes:[{width:414,url:r(159)},{width:576,media:"(min-width: 576px)",url:r(160)},{width:768,media:"(min-width: 768px)",url:r(161)},{width:1024,media:"(min-width: 1024px)",url:r(162)},{width:1280,media:"(min-width: 1200px)",url:r(163)}]}]}}})},d=r(2),c=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[r("div",[r("speedkit-youtube",e._b({},"speedkit-youtube",e.youtube,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[r("p",[e._v("Critical"),r("br"),e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports,f={components:{SpeedkitYoutube:n.default,OrganismPreviewContainer:o.a},data:()=>({youtube:{id:"cLKvbhfVBUU",poster:{alt:"Youtube Alt Text",title:"Youtube Title Text",placeholders:[{format:"jpg",url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAARAB4DAREAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAACQMEBQYIB//EABoBAAIDAQEAAAAAAAAAAAAAAAUGAwcIAgT/2gAMAwEAAhADEAAAAL/mlzd2cDRdodE5AZQ02iErjZJzyzB5QMfMY/7M7yhbfjjDgAj+TT//xAAzEAABBAEDAgIEDwAAAAAAAAADAQIEBQYHCBIAEwkUESE0tQoiIzEyODlEUnF0d4Wxwf/aAAgBAQABPwCi1T0mu90+rGLZtbQ7KZXam2ieQk2RkSPHFLltcNwWGa74xSBf3Gqz2djPWjndar5lothVCWAF0ZbCxvp46mW47O+NEWM5FkfKL6ERCPZw4B5cWF+ZURd3e73SfAtqcCNjmR0MuZFrYZzUr6aQK1kTpTWIEQJJIyJGRpiCIc6Gd6QOZ2Gk4qI3hpjhZxt3wDWWznMW6tMZsgzgxwvjhlkbYow0sQF9fYe4LXBcTm/slYqOa1/BPGg0aq9A93WtmVZHf5HKFf6iOdhjI1DBlRbOeaFX3FnElvWQwkJkUVvE7T0iyUPz4uVjmvf1gO3TevqXtdibmtG8M1QyulBGv7/I59jTVddQ1ceuIB8osGS6Uq2DlRyNcHywubwyRhbKWKbhg25bLbKmBjWp8CzFjnkXjivszuA8TDSpKlIApEK9zAuJ3G8WPdzG9PpK3rwD/EV1G3Vai1O3rP6Or7enmkJ41Tb1cvsukRI8mphgHIi/jYIbOJUX1N68e/7WnWT+G9zQuq/2Cu/Wk/pevvTvy/1OvguP1/co/ZWf71p+v//EACwRAAIBAgUEAAQHAAAAAAAAAAECAwQRAAUGEiEHCBMyEBQ3szFBQlFhcnT/2gAIAQIBAT8A0jlM9b04yVxUNCpo4BuEcbG/jiKkGVHW6qpX1PD/ALhSNN5BI8C1MzpKWNnHhQJdVNzEBZ4y7lWbySTgKmxQpYvifIqSKlMvyyWHPqv4A8n1x3bLlsWhqVIoFR/mY/0ruF4Z7ji9vyuAbXGOg+uJ876d5NQ0sUYMVOon3O4KIrzU8DoPGUkMr00m9TLGY8P1a0pp/WD5BmNRBFOWgSNVeRpXkn3bFeJYQIxxe5lcbXQyCISR7mzFWppEQiR19eS3NgQH5PP8m3FjjvFomOi6WsBsWqlDC3FzDLYg2FrWPGO376PZT/R/uP8AAemO7/6Y0f8Asj+zUY//xAArEQEAAgAGAQIDCQAAAAAAAAABAhEAAwQSITEFE0EGFFEyNDVxcpGxsvH/2gAIAQMBAT8AzPR+YnAgKNvPPP1r2eeHGvz/AEs5yCVbYx920b7rh6eSMcePzdPLV+m5pFbO15euD6/ud48Vp5afV5kvUJnISN22XIEjcRlSFm6MZU0h1jWePI+Rnm6pZlu3bxfuD2m0Yl07q6MeQ0Of5CfrQkzE5ZBJojXKrb7WF8Xa4loDL1Uc6NwJfbqgOW9hwhtSjlu6THw/qZkJZAFHTxYClVb3d3/r5b8Qn+UP6GDrE+nHg/vsv0v8mP/Z"}],sources:[{format:"jpg",sizes:[{width:414,url:r(154)},{width:576,media:"(min-width: 576px)",url:r(155)},{width:768,media:"(min-width: 768px)",url:r(156)},{width:1024,media:"(min-width: 1024px)",url:r(157)},{width:1280,media:"(min-width: 1200px)",url:r(158)}]},{format:"webp",sizes:[{width:414,url:r(159)},{width:576,media:"(min-width: 576px)",url:r(160)},{width:768,media:"(min-width: 768px)",url:r(161)},{width:1024,media:"(min-width: 1024px)",url:r(162)},{width:1280,media:"(min-width: 1200px)",url:r(163)}]}]}}})},A={components:{Critical:c,Lazy:Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[r("div",[r("speedkit-youtube",e._b({},"speedkit-youtube",e.youtube,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[r("p",[e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},m=Object(d.a)(A,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("critical",{attrs:{critical:""}}),e._v(" "),r("lazy")],1)}),[],!1,null,null,null);t.default=m.exports}}]);