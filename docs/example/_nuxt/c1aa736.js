(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{322:function(t,e,n){var content=n(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("a887cd6c",content,!0,{sourceMap:!1})},323:function(t,e,n){var content=n(363);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1f67e694",content,!0,{sourceMap:!1})},324:function(t,e,n){var content=n(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1e3267f2",content,!0,{sourceMap:!1})},360:function(t,e,n){"use strict";n(322)},361:function(t,e,n){(e=n(25)(!1)).push([t.i,"",""]),t.exports=e},362:function(t,e,n){"use strict";n(323)},363:function(t,e,n){(e=n(25)(!1)).push([t.i,"ul[data-v-c96a3b80]{padding:0;list-style:none}li[data-v-c96a3b80]{margin:.625em 0}a[data-v-c96a3b80]{color:currentColor;text-decoration:none}",""]),t.exports=e},364:function(t,e,n){"use strict";n(324)},365:function(t,e,n){(e=n(25)(!1)).push([t.i,".page-index h1,.page-index h2,.page-index nav{text-align:center}",""]),t.exports=e},391:function(t,e,n){"use strict";n.r(e);var l={props:{tag:{type:String,default:"h1"},content:{type:String,default:"Headline"}}},o=(n(360),n(8)),r=Object(o.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",700,"normal"),expression:"$getFont('Quicksand', 700, 'normal')"}],tag:"component",staticClass:"atom-headline"},[this._t("default",[this._v(this._s(this.content))])],2)}),[],!1,null,null,null).exports,c={props:{items:{type:Array,default:function(){return[{title:"Link 1."},{title:"Link 2."},{title:"Link 3."}]}}}},d=(n(362),{components:{Headline:r,LinkList:Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.items,(function(e,l){return n("li",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Quicksand",400,"normal")],expression:"[\n      $getFont('Quicksand', 400, 'normal'),\n    ]"}],key:l},[n("nuxt-link",t._b({},"nuxt-link",e,!1),[t._v("\n      "+t._s(e.title)+"\n    ")])],1)})),0)}),[],!1,null,"c96a3b80",null).exports},asyncData:function(){return{links:[{title:"Full Example With Components",to:"/full-example-with-components/"},{title:"Full Example Without Components",to:"/full-example-without-components"},{title:"Max Fonts",to:"/max-fonts"},{title:"Test: v-font",to:"/tests/v-font"},{title:"Test: v-font (media)",to:"/tests/v-font-media"},{title:"Test: SpeedkitPicture",to:"/tests/speedkit-picture"},{title:"Test: SpeedkitImage",to:"/tests/speedkit-image"},{title:"Test: SpeedkitIframe",to:"/tests/speedkit-iframe"},{title:"Test: Speedkit Function",to:"/tests/speedkit-function"},{title:"Test: Component Import (Critical by Prop)",to:"/tests/component-import/critical-prop"},{title:"Test: Component Import (Critical by Parent)",to:"/tests/component-import/critical-parent"}],criticalLinks:[{title:"Font basic usage",to:"/critical/font-basic"},{title:"Font extended usage",to:"/critical/font-extended"},{title:"SpeedkitImage",to:"/critical/speedkit-image"},{title:"SpeedkitPicture",to:"/critical/speedkit-picture"},{title:"SpeedkitIframe",to:"/critical/speedkit-iframe"}],lazyLinks:[{title:"Font basic usage",to:"/lazy/font-basic"},{title:"Font extended usage",to:"/lazy/font-extended"},{title:"SpeedkitImage",to:"/lazy/speedkit-image"},{title:"SpeedkitPicture",to:"/lazy/speedkit-picture"},{title:"SpeedkitIframe",to:"/lazy/speedkit-iframe"}],bothLinks:[{title:"Font basic usage",to:"/both/font-basic"},{title:"Font extended usage",to:"/both/font-extended"},{title:"SpeedkitImage",to:"/both/speedkit-image"},{title:"SpeedkitPicture",to:"/both/speedkit-picture"},{title:"SpeedkitIframe",to:"/both/speedkit-iframe"}],experimentalLinks:[{title:"SpeedkitYoutube",to:"/experimental/speedkit-youtube"}]}},data:function(){return{links:[]}}}),m=(n(364),Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-index"},[n("headline",{attrs:{tag:"h1",critical:""}},[t._v("\n    Preview\n  ")]),t._v(" "),n("nav",[n("link-list",{attrs:{items:t.links,critical:""}})],1),t._v(" "),n("headline",{attrs:{tag:"h2",critical:""}},[t._v("\n    Critical\n  ")]),t._v(" "),n("nav",[n("link-list",{attrs:{items:t.criticalLinks,critical:""}})],1),t._v(" "),n("headline",{attrs:{tag:"h2",critical:""}},[t._v("\n    Lazy\n  ")]),t._v(" "),n("nav",[n("link-list",{attrs:{items:t.lazyLinks,critical:""}})],1),t._v(" "),n("headline",{attrs:{tag:"h2",critical:""}},[t._v("\n    Both\n  ")]),t._v(" "),n("nav",[n("link-list",{attrs:{items:t.bothLinks,critical:""}})],1),t._v(" "),n("headline",{attrs:{tag:"h2",critical:""}},[t._v("\n    Experimental\n  ")]),t._v(" "),n("nav",[n("link-list",{attrs:{items:t.experimentalLinks,critical:""}})],1),t._v(" "),n("br")],1)}),[],!1,null,null,null));e.default=m.exports}}]);