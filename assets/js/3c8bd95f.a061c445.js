"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[9117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=l,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const s={},a="Windows users",i={unversionedId:"Compile-the-Altair/Install prerequistes/Windows-users",id:"Compile-the-Altair/Install prerequistes/Windows-users",title:"Windows users",description:"Complete the following steps:",source:"@site/docs/03-Compile-the-Altair/Install prerequistes/03-Windows-users.md",sourceDirName:"03-Compile-the-Altair/Install prerequistes",slug:"/Compile-the-Altair/Install prerequistes/Windows-users",permalink:"/Compile-the-Altair/Install prerequistes/Windows-users",draft:!1,editUrl:"https://github.com/gloveboxes/altair-docs/tree/main/docs/03-Compile-the-Altair/Install prerequistes/03-Windows-users.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"macOS users",permalink:"/Compile-the-Altair/Install prerequistes/macOS-users"},next:{title:"Raspberry Pi users",permalink:"/Compile-the-Altair/Install prerequistes/Raspberry-Pi-users"}},o={},p=[{value:"Install the required packages",id:"install-the-required-packages",level:2},{value:"Windows Subsystem for Linux users",id:"windows-subsystem-for-linux-users",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"windows-users"},"Windows users"),(0,l.kt)("p",null,"Complete the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"If you have not done so already, then install Windows Subsystem for Linux ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/windows/wsl/install"},"(WSL2)")," and Ubuntu 20.04."),(0,l.kt)("li",{parentName:"ol"},"Optional, but recommended, install the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/windows/terminal/install"},"Windows Terminal"))),(0,l.kt)("h2",{id:"install-the-required-packages"},"Install the required packages"),(0,l.kt)("p",null,"The Altair project requires the following packages:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man3/event.3.html"},"libuv1")," event loop library."),(0,l.kt)("li",{parentName:"ol"},"SSL Development."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"http://www.ossp.org/pkg/lib/uuid/"},"OSSP uuid")),(0,l.kt)("li",{parentName:"ol"},"C compiler and debugging tools.")),(0,l.kt)("h2",{id:"windows-subsystem-for-linux-users"},"Windows Subsystem for Linux users"),(0,l.kt)("p",null,"Follow these steps to install the required packages."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open an WSL Ubuntu Terminal window.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the following command to install the required packages"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y libuv1-dev cmake build-essential gdb curl libcurl4-openssl-dev libssl-dev uuid-dev ca-certificates git libi2c-dev\n")))))}c.isMDXComponent=!0}}]);