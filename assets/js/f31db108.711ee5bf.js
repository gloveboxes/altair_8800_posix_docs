"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[4857],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),y=n,b=m["".concat(l,".").concat(y)]||m[y]||c[y]||i;return t?a.createElement(b,s(s({ref:r},u),{},{components:t})):a.createElement(b,s({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5165:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const i={},s="Raspberry Pi OS",o={unversionedId:"Compile-the-Altair/Install prerequistes/Raspberry-Pi-users",id:"Compile-the-Altair/Install prerequistes/Raspberry-Pi-users",title:"Raspberry Pi OS",description:"Install Raspberry Pi OS",source:"@site/docs/03-Compile-the-Altair/Install prerequistes/04-Raspberry-Pi-users.md",sourceDirName:"03-Compile-the-Altair/Install prerequistes",slug:"/Compile-the-Altair/Install prerequistes/Raspberry-Pi-users",permalink:"/altair_8800_posix_docs/Compile-the-Altair/Install prerequistes/Raspberry-Pi-users",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_posix_docs/tree/main/docs/03-Compile-the-Altair/Install prerequistes/04-Raspberry-Pi-users.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/altair_8800_posix_docs/Compile-the-Altair/Install prerequistes/Windows-users"},next:{title:"Clone the Altair repo",permalink:"/altair_8800_posix_docs/Compile-the-Altair/Clone-Altair-repo"}},l={},p=[{value:"Install Raspberry Pi OS",id:"install-raspberry-pi-os",level:2},{value:"Connect to your Raspberry Pi",id:"connect-to-your-raspberry-pi",level:3},{value:"Raspberry Pi Sense HAT support",id:"raspberry-pi-sense-hat-support",level:2}],u={toc:p};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"raspberry-pi-os"},"Raspberry Pi OS"),(0,n.kt)("h2",{id:"install-raspberry-pi-os"},"Install Raspberry Pi OS"),(0,n.kt)("p",null,"The easiest way to install Raspberry Pi OS is to use the latest version of the ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi Imager"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check which version of Raspberry Pi OS your Raspberry Pi is ",(0,n.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/software/operating-systems/"},"compatible")," with."),(0,n.kt)("li",{parentName:"ol"},"If compatible, then install Raspberry Pi OS 64 bit ",(0,n.kt)("strong",{parentName:"li"},"no desktop")," to maximize memory for the Altair emulator build process."),(0,n.kt)("li",{parentName:"ol"},"Learn how to use the ",(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/ntaXWS8Lk34"},"Raspberry Pi Imager"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the Raspberry Pi Imager Settings icon to configure the operating system installation, wifi settings and more.")),(0,n.kt)("h3",{id:"connect-to-your-raspberry-pi"},"Connect to your Raspberry Pi"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From your desktop computer, start an SSH session to your Raspberry Pi.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the SSH session, run the following command to install the required packages"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y libuv1-dev cmake build-essential gdb curl libcurl4-openssl-dev libssl-dev uuid-dev ca-certificates git libi2c-dev\n")))),(0,n.kt)("h2",{id:"raspberry-pi-sense-hat-support"},"Raspberry Pi Sense HAT support"),(0,n.kt)("p",null,"If you are building the Altair project on a Raspberry Pi with a ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/products/sense-hat/"},"Raspberry Pi PI Sense HAT")," then you need to enable the I2C bus."),(0,n.kt)("p",null,"From the command prompt, run the following command to enable I2C support for the Pi Sense HAT."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo raspi-config nonint do_i2c 0\n")))}c.isMDXComponent=!0}}]);