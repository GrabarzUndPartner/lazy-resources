(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{246:function(t,o,c){var content=c(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(51).default)("59f850b2",content,!0,{sourceMap:!1})},263:function(t,o,c){"use strict";c(246)},264:function(t,o,c){(o=c(50)(!1)).push([t.i,".list-primary{--text-opacity:1;color:#00cd81;color:rgba(0,205,129,var(--text-opacity))}.list-info{--text-opacity:1;color:#4299e1;color:rgba(66,153,225,var(--text-opacity))}.list-success{--text-opacity:1;color:#48bb78;color:rgba(72,187,120,var(--text-opacity))}.list-warning{--text-opacity:1;color:#ed8936;color:rgba(237,137,54,var(--text-opacity))}.list-danger{--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}",""]),t.exports=o},285:function(t,o,c){"use strict";c.r(o);c(34),c(47);var r={props:{items:{type:Array,default:function(){return[]}},icon:{type:String,default:null},type:{type:String,default:"primary",validator:function(t){return["primary","info","success","warning","danger"].includes(t)}}},computed:{iconName:function(){return this.icon||{primary:"IconBadgeCheck",info:"IconInformationCircle",success:"IconCheckCircle",warning:"IconExclamationCircle",danger:"IconXCircle"}[this.type]}}},e=(c(263),c(3)),component=Object(e.a)(r,(function(){var t=this,o=t.$createElement,c=t._self._c||o;return c("div",t._l(t.items,(function(o,i){return c("div",{key:i,staticClass:"mt-3 flex"},[c("span",{staticClass:"mt-px mr-3 flex-shrink-0",class:"list-"+t.type},[c(t.iconName,{tag:"component",staticClass:"h-6 w-6"})],1),t._v("\n    "+t._s(o)+"\n  ")])})),0)}),[],!1,null,null,null);o.default=component.exports}}]);