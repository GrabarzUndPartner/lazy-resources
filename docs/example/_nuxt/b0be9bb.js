(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{348:function(t,e,r){"use strict";(function(t){r(345);t.IntersectionObserver=t.IntersectionObserver||function(){function t(){}var e=t.prototype;return e.observe=function(){},e.unobserve=function(){},t}(),e.a={abstract:!0,props:{root:{type:t.HTMLElement,default:function(){return null}},rootMargin:{type:String,default:function(){return"0px"}},threshold:{type:Array,default:function(){return[0]}},trackVisibility:{type:Boolean,default:function(){return!1}},delay:{type:Number,default:0}},created:function(){var t,e=this;if(!this.$attrs.critical||!this.$options.critical){var r={root:(t=this).root,rootMargin:t.rootMargin,threshold:t.threshold,trackVisibility:t.trackVisibility,delay:t.delay};this.observer=new IntersectionObserver((function(t){var r=t[0];return e.onIntersect(r)}),r)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(t){t.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(t){this.$emit("enter",t)}},render:function(){try{return this.$slots.default[0]}catch(t){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(18))},361:function(t,e,r){"use strict";var n=r(348).a,o=r(4),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.a=component.exports},378:function(t,e,r){var content=r(428);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("26fec364",content,!0,{sourceMap:!1})},379:function(t,e,r){var content=r(430);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("9438d1fe",content,!0,{sourceMap:!1})},427:function(t,e,r){"use strict";r(378)},428:function(t,e,r){var n=r(13)(!1);n.push([t.i,".nuxt-speedkit__experimental__speedkit-picture[data-v-66dfc0cf]{width:100%;height:inherit;margin:0}",""]),t.exports=n},429:function(t,e,r){"use strict";r(379)},430:function(t,e,r){var n=r(13)(!1);n.push([t.i,'div[data-v-45b0bd64]{position:relative;overflow:hidden}.nuxt-speedkit__speedkit-youtube[data-v-45b0bd64]{width:100%}.nuxt-speedkit__speedkit-youtube[data-v-45b0bd64] iframe{position:absolute;top:0;width:100%;height:100%}.nuxt-speedkit__speedkit-youtube .poster[data-v-45b0bd64]{position:relative;display:block;width:100%;padding:0;cursor:pointer;background:transparent;border:none;border-radius:0;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:opacity .2s ease-in}.nuxt-speedkit__speedkit-youtube .poster i[data-v-45b0bd64]{position:absolute;top:50%;left:50%;width:68px;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .poster i path[data-v-45b0bd64]:first-child{fill:#212121;fill-opacity:.8;transition:fill .1s cubic-bezier(.4,0,1,1),fill-opacity .1s cubic-bezier(.4,0,1,1)}.nuxt-speedkit__speedkit-youtube .poster:hover path[data-v-45b0bd64]:first-child{fill:red;fill-opacity:1;transition:fill .1s cubic-bezier(0,0,.2,1),fill-opacity .1s cubic-bezier(0,0,.2,1)}.nuxt-speedkit__speedkit-youtube svg[data-v-45b0bd64]{transition:opacity .2s linear,transform .2s linear}.nuxt-speedkit__speedkit-youtube.js--playing .poster[data-v-45b0bd64]{pointer-events:none;opacity:0}.nuxt-speedkit__speedkit-youtube .spinner[data-v-45b0bd64]{position:absolute;top:50%;left:50%;z-index:18;width:48px;pointer-events:none;transform:translate(-50%,-50%)}.nuxt-speedkit__speedkit-youtube .spinner[data-v-45b0bd64]:before{display:block;padding-top:100%;content:""}.nuxt-speedkit__speedkit-youtube .spinner .spinner-container[data-v-45b0bd64]{position:absolute;top:50%;left:50%;width:100%;padding-bottom:100%;margin-top:-50%;margin-left:-50%;pointer-events:none;-webkit-animation:spinner-linspin-data-v-45b0bd64 1568.23529647ms linear infinite;animation:spinner-linspin-data-v-45b0bd64 1568.23529647ms linear infinite}.nuxt-speedkit__speedkit-youtube .spinner .spinner-rotator[data-v-45b0bd64]{position:absolute;width:100%;height:100%;-webkit-animation:spinner-easespin-data-v-45b0bd64 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-easespin-data-v-45b0bd64 5332ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left[data-v-45b0bd64]{position:absolute;top:0;right:49%;bottom:0;left:0;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right[data-v-45b0bd64]{position:absolute;top:0;right:0;bottom:0;left:49%;overflow:hidden}.nuxt-speedkit__speedkit-youtube .spinner .spinner-circle[data-v-45b0bd64]{position:absolute;box-sizing:border-box;width:200%;height:100%;border:4px solid #b81c22;border-bottom-color:transparent;border-radius:50%}.nuxt-speedkit__speedkit-youtube .spinner .spinner-left .spinner-circle[data-v-45b0bd64]{border-right-color:transparent;-webkit-animation:spinner-left-spin-data-v-45b0bd64 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-left-spin-data-v-45b0bd64 1333ms cubic-bezier(.4,0,.2,1) infinite both}.nuxt-speedkit__speedkit-youtube .spinner .spinner-right .spinner-circle[data-v-45b0bd64]{left:-100%;border-left-color:transparent;-webkit-animation:spinner-right-spin-data-v-45b0bd64 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:spinner-right-spin-data-v-45b0bd64 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes rotate-data-v-45b0bd64{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes rotate-data-v-45b0bd64{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}@-webkit-keyframes spinner-linspin-data-v-45b0bd64{to{transform:rotate(1turn)}}@keyframes spinner-linspin-data-v-45b0bd64{to{transform:rotate(1turn)}}@-webkit-keyframes spinner-easespin-data-v-45b0bd64{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@keyframes spinner-easespin-data-v-45b0bd64{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@-webkit-keyframes spinner-left-spin-data-v-45b0bd64{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes spinner-left-spin-data-v-45b0bd64{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes spinner-right-spin-data-v-45b0bd64{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}@keyframes spinner-right-spin-data-v-45b0bd64{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}',""]),t.exports=n},445:function(t,e,r){"use strict";r.r(e);r(37);var n=r(7),o=r(354),c=r.n(o),d=r(108),l=r(361),f=(r(46),r(362),r(82),r(29),r(363),r(10),r(44),r(328),r(35),r(217),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),r(343),r(344),r(36),r(364)),m=(r(386),r(357),r(385)),h=r(320),v=r(327),y=r(124),k=r(316),_=r(62);function x(t,e){x=function(t,e){return new c(t,void 0,e)};var r=Object(m.a)(RegExp),n=RegExp.prototype,o=new WeakMap;function c(t,e,n){var c=r.call(this,t,e);return o.set(c,n||o.get(t)),c}function d(t,e){var g=o.get(e);return Object.keys(g).reduce((function(e,r){return e[r]=t[g[r]],e}),Object.create(null))}return Object(f.a)(c,r),c.prototype.exec=function(t){var e=n.exec.call(this,t);return e&&(e.groups=d(e,this)),e},c.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var r=o.get(this);return n[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+r[e]})))}if("function"==typeof e){var c=this;return n[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!=typeof t[t.length-1]&&t.push(d(t,c)),e.apply(this,t)}))}return n[Symbol.replace].call(this,t,e)},x.apply(this,arguments)}var w={components:{CustomPicture:v.a,CustomNoScript:y.a},props:{sources:{type:Array,default:function(){return[]}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{placeholders:[],resolvedSources:this.getSources()}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchMeta();case 2:t.placeholders=e.sent;case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{noscript:[Object(_.c)(".nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}},computed:{hasSlot:function(){return this.$slots.caption}},watch:{sources:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchMeta();case 2:t.placeholders=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},methods:{fetchMeta:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=6;break;case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",Object(h.b)(t.sources,(function(e){var r=e.src,n=e.sizes;return Promise.all([t.$img(r,{width:30}),t.$img.sizes(r,n)])})));case 7:case"end":return e.stop()}}),e)})))()},getSources:function(){var t,e=this;return(t=this.sources,[].concat(new Set(["webp"].concat(t.map((function(source){return t=source.src,(e=t.match(x(/\.(png|jpe?g)/i,{ext:1})))&&e.groups.ext||"jpg";var t,e}))).map((function(t){return"jpeg"===t?"jpg":t}))))).map((function(t){return e.sources.map((function(r){var n=r.src,o=r.sizes;return e.$img.sizes(n,o,{format:t})})).flat()})).map((function(t){return{srcset:t.map((function(t){var e=t.width,r=t.url;return e?r+" "+e+"w":r})).join(", "),sizes:t.map((function(t){var e=t.width,r=t.media;return r?r+" "+e+"px":e+"px"})).reverse().join(", "),type:Object(k.a)(t[0].format)}}))}}},j=(r(427),r(4)),z=Object(j.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"nuxt-speedkit__experimental__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],1),t._v(" "),r("custom-picture",t._g({attrs:{sources:t.placeholders,preload:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}},t.$listeners)),t._v(" "),t.hasSlot?r("figcaption",[t._t("caption")],2):t._e()],1)}),[],!1,null,"66dfc0cf",null).exports,O={components:{IntersectionObserver:l.a,SpeedkitPicture:z},props:{id:{type:String,required:!0},autoplay:{type:Boolean,default:!1}},data:function(){return{playing:!1,loading:!1,player:null,playerReady:new d.a,deferred:new d.a}},computed:{sources:function(){return[{src:"https://img.youtube.com/vi/"+this.id+"/maxresdefault.jpg",sizes:this.sizes}]}},methods:{onClick:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.deferred.resolve(),e.next=3,t.play();case 3:case"end":return e.stop()}}),e)})))()},onEnter:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.deferred.resolve(),!t.autoplay){e.next=4;break}return e.next=4,t.play();case 4:case"end":return e.stop()}}),e)})))()},play:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.playerReady.promise;case 3:t.player.playVideo();case 4:case"end":return e.stop()}}),e)})))()},onLoad:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.deferred.promise;case 2:t.loadPlayer();case 3:case"end":return e.stop()}}),e)})))()},loadPlayer:function(){var t=this;this.player=c()(this.$refs.youtube,{host:"https://www.youtube-nocookie.com",videoId:this.id,playerVars:{playsinline:1,modestbranding:1}}),this.player.on("ready",(function(){t.playerReady.resolve()})),this.player.on("stateChange",(function(e){1===e.data&&(t.loading=!1,t.playing=!0)}))}}},S=(r(429),Object(j.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("intersection-observer",{attrs:{threshold:[1],"track-visibility":"",delay:350},on:{enter:t.onEnter}},[r("div",{staticClass:"nuxt-speedkit__speedkit-youtube",class:{"js--playing":t.playing,"js--loading":t.loading}},[r("div",{ref:"youtube",attrs:{loading:"lazy"}}),t._v(" "),r("button",{staticClass:"poster",attrs:{"aria-label":"Play"},on:{click:t.onClick}},[r("speedkit-picture",{attrs:{sources:t.sources},on:{load:t.onLoad}}),t._v(" "),t.loading||t.playing?t._e():r("i",[r("svg",{attrs:{version:"1.1",viewBox:"0 0 68 48"}},[r("path",{attrs:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}}),r("path",{attrs:{d:"M 45,24 27,14 27,34",fill:"#fff"}})])]),t._v(" "),t.loading?r("div",{staticClass:"spinner"},[r("div",{staticClass:"spinner-container"},[r("div",{staticClass:"spinner-rotator"},[r("div",{staticClass:"spinner-left"},[r("div",{staticClass:"spinner-circle"})]),t._v(" "),r("div",{staticClass:"spinner-right"},[r("div",{staticClass:"spinner-circle"})])])])]):t._e()],1)])])}),[],!1,null,"45b0bd64",null));e.default=S.exports}}]);