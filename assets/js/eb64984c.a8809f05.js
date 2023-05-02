"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[9048],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(4137));const i={sidebar_position:2},o="Architecture",l={unversionedId:"everywhere/Architecture",id:"everywhere/Architecture",title:"Architecture",description:"The Altair emulator runs on POSIX compatible operating systems including, Linux, Windows with WSL 2, macOS on Apple Silicon and Intel.",source:"@site/docs/everywhere/10-Architecture.md",sourceDirName:"everywhere",slug:"/everywhere/Architecture",permalink:"/altair_8800_docs/everywhere/Architecture",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/everywhere/10-Architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"everywhere",previous:{title:"Introduction",permalink:"/altair_8800_docs/everywhere/Introduction"},next:{title:"Deploy",permalink:"/altair_8800_docs/everywhere/Deploy-Altair"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"The Altair emulator runs on ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/POSIX"},"POSIX")," compatible operating systems including, Linux, Windows with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"WSL 2"),", macOS on Apple Silicon and Intel."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The following diagram summarizes the Altair emulator architecture.",src:r(5760).Z,width:"3676",height:"1647"})),(0,n.kt)("p",null,"Starting from the bottom left and moving up and then to the right."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"POSIX Compatible OS:"),". The Altair 8800 emulator runs on ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/POSIX"},"POSIX")," compatible operating systems, including Linux, macOS, ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/windows/wsl"},"Windows WSL 2"),", and Raspberry Pi OS."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WebSocket & Azure IoT C:")," These communication libraries connect the Altair emulator to the web terminal and cloud services. The Altair terminal IO messages are routed over ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/WebSocket"},"WebSockets"),", and the Azure IoT C SDK connects the Altair to Azure IoT Central."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Event library:")," The Altair coordinates activities on the main thread using the ",(0,n.kt)("a",{parentName:"li",href:"https://libevent.org/"},"event")," event loop library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"EdgeDevX:")," This library simplifies access to Azure IoT services, provides event-timer services, along with several useful utilities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Terminal IO & Cloud Services:")," The Intel 8080 CPU provides 256 input ports and 256 output ports. The Intel 8080 ports were used to integrate peripherals such as disk drives, printers, and modems. However, for the Altair emulator, these ports are used to integrate communications and cloud services. Terminal input and output ports are routed over WebSockets, other ports are used for timing services, access to weather and pollution data, plus Azure IoT services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Intel 8080 emulator:")," This is an open-source software implementation of the Intel 8080 CPU. The Intel 8080 emulator executes Intel 8080 applications including the CP/M operating system, compilers, apps, and games."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CPU Monitor:")," The CPU monitor implements the virtual Altair front panel, along with memory disassembler, tracer, and Altair emulator reset."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CP/M:")," CP/M originally stood for Control Program/Monitor. Later, CP/M became known as Control Program for Microcomputers. It was a mass-market operating system created in 1974 for Intel 8080/85-based microcomputers by Gary Kildall of Digital Research, Inc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Programming languages:")," Included on the main disk image are the Microsoft BASIC interpreter, the BDS C compiler, and the Intel and Microsoft assemblers and linkers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Altair BASIC:")," By default the Altair emulator boots CP/M, but it is easy to boot the original Altair BASIC program."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Altair Web Terminal:")," Provides a web-browser hosted Altair terminal. The web terminal is built using the Xterm library. Xterm.js provides a web browser-hosted terminal, a WebSocket integrates Xterm with the Altair emulator."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Open Weather Map"),": Open Weather Map provides planet-scale weather and pollution data services. Open Weather Map provides free access to weather and pollution data by geographic location."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Azure IoT Central:")," ",(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/services/iot-central?azure-portal=true"},"Azure IoT Central")," is a customizable cloud-based Internet of Things (IoT) application platform. You can report, analyze, and export IoT data.")))}m.isMDXComponent=!0},5760:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Altair_8800_Application_Architecture-8a0e4a0afbebc6246264fdd776df6fc9.png"}}]);