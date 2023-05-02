"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[2537],{4137:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return t?a.createElement(m,o(o({ref:r},c),{},{components:t})):a.createElement(m,o({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6795:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),n=(t(7294),t(4137));const i={sidebar_position:1},o="Introduction",l={unversionedId:"azsphere/Introduction",id:"azsphere/Introduction",title:"Introduction",description:"This is version 2 of the Azure Sphere Altair Emulator and shares the same code base as the Altair 8800 Everywhere project that runs on Windows, Linux, macOS, and Raspberry Pi.",source:"@site/docs/azsphere/01-Introduction.md",sourceDirName:"azsphere",slug:"/azsphere/Introduction",permalink:"/altair_8800_docs/azsphere/Introduction",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/azsphere/01-Introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"azsphere",next:{title:"Architecture",permalink:"/altair_8800_docs/azsphere/architecture"}},s={},p=[{value:"Source code",id:"source-code",level:2},{value:"Azure Sphere",id:"azure-sphere",level:2},{value:"Altair on Azure Sphere",id:"altair-on-azure-sphere",level:2},{value:"Ideal Azure Sphere config",id:"ideal-azure-sphere-config",level:2}],c={toc:p},u="wrapper";function d(e){let{components:r,...i}=e;return(0,n.kt)(u,(0,a.Z)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This is version 2 of the Azure Sphere Altair Emulator and shares the same code base as the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/Altair_8800_Everywhere"},"Altair 8800 Everywhere")," project that runs on Windows, Linux, macOS, and Raspberry Pi."),(0,n.kt)("h2",{id:"source-code"},"Source code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Altair on Azure Sphere source code is maintained at ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureSphereCloudEnabledAltair8800/AI-and-Cloud-Powered-Altair-8800-on-Azure-Sphere"},"AI and Cloud powered Altair 8800")),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureSphereCloudEnabledAltair8800/AzureSphereAltair8800.Hardware"},"Altair Front Panel")," hardware design."),(0,n.kt)("li",{parentName:"ul"},"All the source is provided under an MIT License, and contributions are very welcome.")),(0,n.kt)("h2",{id:"azure-sphere"},"Azure Sphere"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/azure-sphere/"},"Azure Sphere")," is a secure embedded platform that is ideal for quickly developing an IoT system. By providing a platform meeting all ",(0,n.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/uploads/prod/2020/11/Seven-Properties-of-Highly-Secured-Devices-2nd-Edition-R1.pdf"},"7 properties of highly secured devices"),", Azure Sphere eliminates the need to be a hardware, OS, and security expert. These seven properties make Azure Sphere ideal for running Intelligent Edge solutions."),(0,n.kt)("p",null,"Azure Sphere consists of the following components: "),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(6477).Z,width:"434",height:"242"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Azure Sphere\u2013certified chips")," from hardware partners include built-in Microsoft security technology to provide connectivity and a dependable hardware root of trust."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Azure Sphere OS")," adds layers of protection and ongoing security updates to create a trustworthy platform for new IoT experiences."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Azure Sphere Security Service")," brokers trust for device-to-cloud communication, detects threats and renews device security.")),(0,n.kt)("h2",{id:"altair-on-azure-sphere"},"Altair on Azure Sphere"),(0,n.kt)("p",null,"The Altair emulator is supported on Azure Sphere devices from Avnet and Seeed Studio. If an Azure Sphere device is paired with the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/AzureSphereAltair8800.Hardware"},"Altair front panel kit")," or the ",(0,n.kt)("a",{parentName:"p",href:"https://www.mikroe.com/blog/8800-retro-click"},"Mikroe Altair Retro Click"),", the Altair address and data bus activity are displayed."),(0,n.kt)("h2",{id:"ideal-azure-sphere-config"},"Ideal Azure Sphere config"),(0,n.kt)("p",null,"The ideal Azure Sphere configuration is the Avnet Azure Sphere Starter Kit paired with the ",(0,n.kt)("a",{parentName:"p",href:"https://www.mikroe.com/microsd-click"},"MikroE microSD Click")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://www.mikroe.com/8800-retro-click"},"MikroE 8800 Retro Click"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Azure Sphere with the Altair front panel kit"),(0,n.kt)("th",{parentName:"tr",align:null},"MikroE Retro Click"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The gif shows the Altair on Azure Sphere with the Altair front panel",src:t(4376).Z,width:"979",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The gif shows the address and data bus LEDs in action",src:t(7140).Z,width:"332",height:"400"}))))))}d.isMDXComponent=!0},4376:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/altair_on_sphere-98abeed24d5bc60e757abebf5915ef90.gif"},7140:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/avnet_retro_click-7b1a51a16e5d323ac421778d433c78d0.gif"},6477:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/azure-sphere-9f9541c53628a97ca8e9530b6d631da2.png"}}]);