(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{316:function(e,t,n){var content=n(324);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("6af5338d",content,!0,{sourceMap:!1})},317:function(e,t,n){"use strict";n(323);var r=n(4),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview-container"},[n("div",{staticClass:"preview-container__preview"},[e._t("default")],2),e._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[e._t("title",[n("p",[e._v("Preview Info")])])],2)])}),[],!1,null,"5ae7c929",null);t.a=component.exports},323:function(e,t,n){"use strict";n(316)},324:function(e,t,n){var r=n(12)(!1);r.push([e.i,".preview-container[data-v-5ae7c929]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-5ae7c929]:first-child{margin-top:0}.preview-container[data-v-5ae7c929]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-5ae7c929]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-5ae7c929]{flex-direction:row}}.preview-container>div[data-v-5ae7c929]{display:flex;align-items:center;justify-content:center;width:100%;height:50vh;overflow:hidden}@media (orientation:landscape){.preview-container>div[data-v-5ae7c929]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-5ae7c929]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-5ae7c929]{font-size:2em}.preview-container .preview-container__info p[data-v-5ae7c929]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-5ae7c929]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-5ae7c929]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-5ae7c929]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-5ae7c929]{text-align:center}.preview-container .preview-container__preview>article[data-v-5ae7c929],.preview-container .preview-container__preview>div[data-v-5ae7c929]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-5ae7c929]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-5ae7c929]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-5ae7c929]{position:relative;width:100%;height:100%}",""]),e.exports=r},509:function(e,t,n){"use strict";n.r(t);var r=n(317),o={components:{OrganismPreviewContainer:r.a}},l=n(4),c=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("ul",[n("li",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Comic Neue",400,"normal"),expression:"$getFont('Comic Neue', 400, 'normal')"}],attrs:{id:"criticalFontAssignSimple"}},[e._v("\n          font assign simple\n        ")]),e._v(" "),n("hr"),e._v(" "),n("li",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Comic Neue",700,"normal",{selector:"strong"}),expression:"$getFont('Comic Neue', 700, 'normal', {selector: 'strong'})"}],attrs:{id:"criticalFontAssignBySingleSelector"}},[e._v("\n          font assign by "),n("strong",[e._v("single selector")])]),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Comic Neue",700,"normal",{selector:"strong"}),e.$getFont("Comic Neue",400,"italic",{selector:"em"})],expression:"[\n              $getFont('Comic Neue', 700, 'normal', {selector: 'strong'}),\n              $getFont('Comic Neue', 400, 'italic', {selector: 'em'})\n            ]"}],attrs:{id:"criticalFontAssignByMultipleVariances"}},[e._v("font assign by "),n("strong",[e._v("multiple")]),e._v(" "),n("em",[e._v("variances")])])]),e._v(" "),n("hr"),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Comic Neue",400,"italic",{selector:"em, span"})],expression:"[\n              $getFont('Comic Neue', 400, 'italic', {selector: 'em, span'})\n            ]"}],attrs:{id:"criticalFontAssignByMultipleSelectors"}},[e._v("font assign by "),n("em",[e._v("multiple")]),e._v(" "),n("span",[e._v("selectors")])])]),e._v(" "),n("hr"),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Comic Neue",700,"italic",{selector:"strong > em"})],expression:"[\n              $getFont('Comic Neue', 700, 'italic', {selector: 'strong > em'})\n            ]"}],attrs:{id:"criticalFontAssignByDeepSelector"}},[e._v("font assign by "),n("strong",[n("em",[e._v("deep")])]),e._v(" selector")])])])])]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical - v-font")])]},proxy:!0}])})}),[],!1,null,null,null).exports,v={components:{OrganismPreviewContainer:r.a}},m={components:{Critical:c,Lazy:Object(l.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("ul",[n("li",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Montserrat Alternates",400,"normal"),expression:"$getFont('Montserrat Alternates', 400, 'normal')"}],attrs:{id:"lazyFontAssignSimple"}},[e._v("\n          font assign simple\n        ")]),e._v(" "),n("hr"),e._v(" "),n("li",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Montserrat Alternates",700,"normal",{selector:"strong"}),expression:"$getFont('Montserrat Alternates', 700, 'normal', {selector: 'strong'})"}],attrs:{id:"lazyFontAssignBySingleSelector"}},[e._v("\n          font assign by "),n("strong",[e._v("single selector")])]),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Montserrat Alternates",700,"normal",{selector:"strong"}),e.$getFont("Montserrat Alternates",400,"italic",{selector:"em"})],expression:"[\n              $getFont('Montserrat Alternates', 700, 'normal', {selector: 'strong'}),\n              $getFont('Montserrat Alternates', 400, 'italic', {selector: 'em'})\n            ]"}],attrs:{id:"lazyFontAssignByMultipleVariances"}},[e._v("font assign by "),n("strong",[e._v("multiple")]),e._v(" "),n("em",[e._v("variances")])])]),e._v(" "),n("hr"),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Montserrat Alternates",400,"italic",{selector:"em, span"})],expression:"[\n              $getFont('Montserrat Alternates', 400, 'italic', {selector: 'em, span'})\n            ]"}],attrs:{id:"lazyFontAssignByMultipleSelectors"}},[e._v("font assign by "),n("em",[e._v("multiple")]),e._v(" "),n("span",[e._v("selectors")])])]),e._v(" "),n("hr"),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Montserrat Alternates",700,"italic",{selector:"strong > em"})],expression:"[\n              $getFont('Montserrat Alternates', 700, 'italic', {selector: 'strong > em'})\n            ]"}],attrs:{id:"lazyFontAssignByDeepSelector"}},[e._v("font assign by "),n("strong",[n("em",[e._v("deep")]),e._v(" selector")])])])])])]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Lazy - v-font")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},d=Object(l.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("critical",{attrs:{critical:""}}),e._v(" "),n("lazy")],1)}),[],!1,null,null,null);t.default=d.exports}}]);