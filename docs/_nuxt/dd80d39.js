(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{253:function(t,e,n){"use strict";var o=n(8),r=n(83)(6),c="findIndex",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),o(o.P+o.F*l,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(82)(c)},256:function(t,e,n){var content=n(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("08a411bc",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";n(256)},273:function(t,e,n){var o=n(54)(!1);o.push([t.i,"button[data-v-094bef5c]{outline:none}.first-tab .code-block[data-v-094bef5c]:nth-child(2){display:block}.highlight-underline[data-v-094bef5c]{bottom:-2px;height:2px;transition:left .15s,width .15s}.code-group[data-v-094bef5c]  pre[class*=language-]{border-top-left-radius:0;border-top-right-radius:0;margin-top:0}",""]),t.exports=o},295:function(t,e,n){"use strict";n.r(e);n(253),n(28),n(14);var o={data:function(){return{activeTabIndex:0}},computed:{tabs:function(){return this.$slots.default.map((function(slot){var t,e,n,o=(null===(t=slot.asyncMeta)||void 0===t||null===(e=t.data)||void 0===e?void 0:e.attrs)||(null===(n=slot.componentOptions)||void 0===n?void 0:n.propsData)||{};return{label:o.label,active:void 0!==o.active,attrs:o,slot:slot}})).filter((function(slot){return Boolean(slot.label)}))}},watch:{activeTabIndex:function(t,e){this.tabs[e].slot.elm.classList.remove("active"),this.tabs[t].slot.elm.classList.add("active")}},created:function(){var t=this.tabs.findIndex((function(t){return t.active}));t<0?(this.tabs[0].active=!0,this.tabs[0].attrs.active=!0):this.activeTabIndex=t},mounted:function(){this.updateHighlighteUnderlinePosition()},methods:{updateTabs:function(i){this.activeTabIndex=i,this.updateHighlighteUnderlinePosition()},updateHighlighteUnderlinePosition:function(){var t=this.$refs.tabs[this.activeTabIndex];if(t){var e=this.$refs["highlight-underline"];e.style.left="".concat(t.offsetLeft,"px"),e.style.width="".concat(t.clientWidth,"px")}}}},r=(n(272),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-group",class:[0==t.activeTabIndex&&"first-tab"]},[n("div",{staticClass:"relative px-2 text-sm text-white bg-gray-800 border-b-2 border-gray-700 rounded-t-md h-12"},[t._l(t.tabs,(function(e,i){var label=e.label;return n("button",{key:label,ref:"tabs",refInFor:!0,staticClass:"px-4 py-3 font-mono font-bold h-12",class:[t.activeTabIndex===i?"active text-white":"text-gray-300"],on:{click:function(e){return t.updateTabs(i)}}},[t._v(t._s(label))])})),t._v(" "),n("span",{ref:"highlight-underline",staticClass:"absolute highlight-underline bg-primary-500 dark:bg-primary-400"})],2),t._v(" "),t._t("default")],2)}),[],!1,null,"094bef5c",null);e.default=component.exports}}]);