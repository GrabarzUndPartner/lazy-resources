__NUXT_JSONP__("/usage", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq){return {data:[{document:{slug:"usage",description:"",title:"Usage",position:"001300000000",category:"Guide",components:["Directive zum anwenden von Fonts","Komponenten mit Lazy funktionialität"],developmentSandboxUrl:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002FGrabarzUndPartner\u002Fnuxt-speedkit-example\u002Ftree\u002Fmain\u002F?hidenavigation=1&theme=dark",toc:[{id:L,depth:n,text:M},{id:N,depth:n,text:O},{id:P,depth:n,text:Q},{id:R,depth:n,text:S},{id:T,depth:n,text:U}],body:{type:"root",children:[{type:b,tag:j,props:{className:[o,p]},children:[{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"The following tools are provided to optimize your webpage:"}]},{type:a,value:e},{type:b,tag:q,props:{id:L},children:[{type:b,tag:l,props:{href:"#critical-prop-for-critical-components"},children:[{type:a,value:M}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"A critical component is visible in the viewport when the web page is initially loaded. This can be communicated to the automated background process via a critical prop. The flag is passed on to all child components. This means that only the main component (organism) must be provided with it. With the help of this flag, the corresponding static resources (images & fonts) are also declared as preload tags in the page head. All other components and their associated resources, that do not have a positive critical prop, are lazy loaded on demand."}]},{type:a,value:e},{type:b,tag:j,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,G]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:V}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:":critical"}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:b,tag:c,props:{className:[d,f,Y]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:"true"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:_}]}]},{type:a,value:e}]}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:z,props:{type:$},children:[{type:a,value:"\nIn the current version, the critical flag must be set manually on the components. Automation would be conceivable in the future. However, according to current knowledge, this would have a massive impact on deployment times when using Puppeteer or similar tools. We are still collecting ideas here. If you know of a more efficient way, please send us a feature request.\n"}]},{type:a,value:e},{type:b,tag:j,props:{className:[o,p]},children:[{type:a,value:e},{type:b,tag:q,props:{id:N},children:[{type:b,tag:l,props:{href:"#font-declaration"},children:[{type:a,value:O}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"The integration of fonts is component-based directly in the Vue template. All fonts, which have been declared in "},{type:b,tag:g,props:{},children:[{type:a,value:aa}]},{type:a,value:", can be assigned directly to the corresponding HTML element or component. In addition, subselectors and media queries can be defined, which enable viewport-based declarations or rich-text declarations.\nThe cool thing about this is that it saves the additional declaration in the CSS. You no longer have to keep the template and the CSS with its corresponding selectors for fonts in sync. Yeah! This is extremely helpful, especially when it comes to theming."}]},{type:a,value:e},{type:b,tag:j,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,G]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:V}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:b,tag:c,props:{className:[d,f,Y]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]},{type:a,value:"$fonts.getFont(…)"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:_}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:b,tag:m,props:{to:ab},children:[{type:a,value:"Learn more"}]},{type:a,value:" about directive "},{type:b,tag:g,props:{},children:[{type:a,value:A}]},{type:a,value:B}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:z,props:{type:ac},children:[{type:a,value:"\nFonts are no longer declared via CSS with the help of this module. They may even no longer be explicitly defined via CSS, as otherwise the loading behaviour would be negatively affected in the worst case.\n"}]},{type:a,value:e},{type:b,tag:j,props:{className:[o,p]},children:[{type:a,value:e},{type:b,tag:q,props:{id:P},children:[{type:b,tag:l,props:{href:"#import-components"},children:[{type:a,value:Q}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Until now, the components available in the page were always declared via the attribute "},{type:b,tag:g,props:{},children:[{type:a,value:"components"}]},{type:a,value:". The import was done statically ("},{type:b,tag:g,props:{},children:[{type:a,value:"import component from '@\u002Fcomponent';"}]},{type:a,value:") or dynamically ("},{type:b,tag:g,props:{},children:[{type:a,value:"import('@\u002Fcomponent')"}]},{type:a,value:"). "},{type:b,tag:g,props:{},children:[{type:a,value:ad}]},{type:a,value:" provides a new attribute named "},{type:b,tag:g,props:{},children:[{type:a,value:"speedkitComponents"}]},{type:a,value:" that only allows dynamic imports. This ensures that only the components visible in the viewport are executed on initial load and the remaining components outside the viewport are executed on demand. In the background, the module by "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002Fmaoberlehner\u002Fvue-lazy-hydration",rel:[ae,af,ag],target:ah},children:[{type:a,value:"Markus Oberlehner"}]},{type:a,value:" is used in a standardised way."}]},{type:a,value:e},{type:b,tag:j,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,"language-js"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:"\n  speedkitComponents"},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:H}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,"function-variable","function"]},children:[{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"Stage"}]}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:H}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ak}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"arrow",D]},children:[{type:a,value:"=\u003E"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,am]},children:[{type:a,value:"'@\u002Fcomponents\u002Forganisms\u002FStage'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:","}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"Whether a component is in the viewport or not is determined in the background by the intersection observer. If the initialisation is to take place earlier, e.g. when scrolling, this can be adjusted accordingly via the "},{type:b,tag:g,props:{},children:[{type:a,value:"rootMargin"}]},{type:a,value:" option in the "},{type:b,tag:m,props:{to:"\u002Foptions#components"},children:[{type:a,value:aa}]},{type:a,value:B}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:z,props:{type:ac},children:[{type:a,value:"\nAlthough the attribute \"speedkitComponents\" can be filled in every component, we recommend its explicit use only in pages and layout. The use within components can only make sense in explicit special cases. Here we recommend the general use of static imports.\n"}]},{type:a,value:e},{type:b,tag:j,props:{className:[o,p]},children:[{type:a,value:e},{type:b,tag:q,props:{id:R},children:[{type:b,tag:l,props:{href:"#speedkit-components"},children:[{type:a,value:S}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"In order to be able to load further static resources such as pictures, iFrames or Youtube videos in the iFrame in a performance-optimised way, we provide the following components. The speedkit components can be imported via the namespace "},{type:b,tag:g,props:{},children:[{type:a,value:"nuxt-speedkit\u002Fcomponents"}]},{type:a,value:B}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{to:"\u002Fcomponents\u002Fspeedkit-layer"},children:[{type:a,value:"\nSpeedkitLayer\n"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{to:"\u002Fcomponents\u002Fspeedkit-picture"},children:[{type:a,value:"\nSpeedkitPicture\n"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{to:"\u002Fcomponents\u002Fspeedkit-iframe"},children:[{type:a,value:"\nSpeedkitIframe\n"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:F,props:{},children:[{type:a,value:e},{type:b,tag:m,props:{to:"\u002Fcomponents\u002Fspeedkit-youtube"},children:[{type:a,value:"\nSpeedkitYoutube\n"}]},{type:a,value:e}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{className:[v]},children:[{type:b,tag:w,props:{className:[x,G]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:an}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:"speedkit-picture"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:an}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:r}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:e},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:al}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"imports"]},children:[{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:ap}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:"from"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,am]},children:[{type:a,value:"'nuxt-speedkit\u002Fcomponents\u002FSpeedkitPicture'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:"export"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,s,t]},children:[{type:a,value:"default"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:"\n  components"},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:H}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:ap}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:e}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ao}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:u}]}]},{type:a,value:e}]}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:z,props:{type:$},children:[{type:a,value:"\nThe speedkit components will be expanded in the future. If you have explicit wishes, please send us a feature request or directly a pull request with the corresponding feature :)\n"}]},{type:a,value:e},{type:b,tag:j,props:{className:[o,p]},children:[{type:a,value:e},{type:b,tag:q,props:{id:T},children:[{type:b,tag:l,props:{href:"#example"},children:[{type:a,value:U}]}]},{type:a,value:e},{type:b,tag:k,props:{},children:[{type:a,value:"You can check out a sample integration of "},{type:b,tag:g,props:{},children:[{type:a,value:ad}]},{type:a,value:" at "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002FGrabarzUndPartner\u002Fnuxt-custom-speedkit",rel:[ae,af,ag],target:ah},children:[{type:a,value:"Nuxt Speedkit Example"}]},{type:a,value:B}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:"code-sandbox",props:{":src":"developmentSandboxUrl"},children:[{type:a,value:e}]}]},dir:"\u002Fen",path:"\u002Fen\u002Fusage",extension:".md",createdAt:aq,updatedAt:aq,to:"\u002Fusage",language:"en",draft:false},prev:{slug:"options",title:"Options",to:"\u002Foptions"},next:{slug:A,title:A,to:ab}}],fetch:{},mutations:void 0}}("text","element","span","token","\n","punctuation","code","tag"," ","div","p","a","nuxt-link",2,"prose","dark:prose-dark","h2","\u003C","keyword","module","\u003E","nuxt-content-highlight","pre","line-numbers","\"","alert","v-font",".","{","operator","}","li","language-html",":","maybe-class-name","\n  ","script","critical-prop-for-critical-components","Critical prop for critical components","font-declaration","Font declaration","import-components","Import components","speedkit-components","Speedkit Components","example","Example","component","attr-name","attr-value","attr-equals","=","\u002F\u003E","info","nuxt.config","\u002Fdirectives\u002Fv-font","warning","nuxt-speedkit","nofollow","noopener","noreferrer","_blank","\n    ","(",")","import","string","template","\u003C\u002F","SpeedkitPicture","2021-03-22T18:02:32.602Z")));