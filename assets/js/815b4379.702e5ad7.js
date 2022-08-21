"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[6153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},l="Config the Altair",i={unversionedId:"Cloud-services/Start-cloud-connected-Altair",id:"Cloud-services/Start-cloud-connected-Altair",title:"Config the Altair",description:"The following steps assume you have followed the Start standalone Altair guide and you are currently running the Altair Docker image in standalone mode.",source:"@site/docs/04-Cloud-services/08-Start-cloud-connected-Altair.md",sourceDirName:"04-Cloud-services",slug:"/Cloud-services/Start-cloud-connected-Altair",permalink:"/AltairEverywhereDocs/Cloud-services/Start-cloud-connected-Altair",draft:!1,editUrl:"https://github.com/gloveboxes/altair-docs/tree/main/docs/04-Cloud-services/08-Start-cloud-connected-Altair.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy the Altair emulator",permalink:"/AltairEverywhereDocs/Cloud-services/Azue-IoT-Central/Deploy-the-Altair-emulator"},next:{title:"Azure anomaly detector",permalink:"/AltairEverywhereDocs/category/azure-anomaly-detector"}},s={},p=[{value:"Stop the Altair docker container",id:"stop-the-altair-docker-container",level:2},{value:"Create the Altair docker environment file",id:"create-the-altair-docker-environment-file",level:2},{value:"Start the Altair Docker image",id:"start-the-altair-docker-image",level:2},{value:"General Linux, macOS, Windows, and Raspberry Pi users",id:"general-linux-macos-windows-and-raspberry-pi-users",level:3},{value:"Raspberry Pi with Pi Sense HAT users",id:"raspberry-pi-with-pi-sense-hat-users",level:3},{value:"Open the Web Terminal",id:"open-the-web-terminal",level:2}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"config-the-altair"},"Config the Altair"),(0,n.kt)("p",null,"The following steps assume you have followed the ",(0,n.kt)("a",{parentName:"p",href:"/AltairEverywhereDocs/Deploy-Altair"},"Start standalone Altair")," guide and you are currently running the Altair Docker image in standalone mode."),(0,n.kt)("h2",{id:"stop-the-altair-docker-container"},"Stop the Altair docker container"),(0,n.kt)("p",null,"First, stop the Altair Docker container. From a terminal window, run the following command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop altair8800\n")),(0,n.kt)("h2",{id:"create-the-altair-docker-environment-file"},"Create the Altair docker environment file"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("em",{parentName:"p"},"Altair8800")," folder that you cloned to your computer.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Using Visual Studio Code or a text editor of your choice, open the docker ",(0,n.kt)("em",{parentName:"p"},"altair.env")," environment file.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update the values with your data."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"IMPORTANT")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"If you don't use a service then leave the key-value blank."),(0,n.kt)("li",{parentName:"ul"},"Don't include any speech marks in key-values."),(0,n.kt)("li",{parentName:"ul"},"Replace the Australia/Sydney time zone with your local time zone."))),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-env"},"ID_SCOPE=\nDEVICE_ID=\nDERIVED_KEY=\nOPEN_WEATHER_MAP_API_KEY=\nTZ=Australia/Sydney\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Save As")," the file as ",(0,n.kt)("strong",{parentName:"p"},"~/altair.env"),". The commands below assume you have saved the Altair environment file to your computer's home directory."))),(0,n.kt)("h2",{id:"start-the-altair-docker-image"},"Start the Altair Docker image"),(0,n.kt)("p",null,"There are two Altair Docker images. The first is for general use on 64-bit ",(0,n.kt)("a",{parentName:"p",href:"#general-linux-macos-windows-and-raspberry-pi-users"},"Linux, macOS, Windows, and Raspberry Pi operating systems"),". The second image is for a Raspberry Pi running ",(0,n.kt)("a",{parentName:"p",href:"#raspberry-pi-with-pi-sense-hat-users"},"Raspberry Pi OS with a Pi Sense HAT"),". Be sure to run the Docker image that matches your system."),(0,n.kt)("h3",{id:"general-linux-macos-windows-and-raspberry-pi-users"},"General Linux, macOS, Windows, and Raspberry Pi users"),(0,n.kt)("p",null,"Run the following command to start the Altair emulator Docker image. This command will load the environment file and map the ports for the web terminal."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --env-file ~/altair.env -p 8082:8082 --name altair8800 --rm glovebox/altair8800:latest\n")),(0,n.kt)("h3",{id:"raspberry-pi-with-pi-sense-hat-users"},"Raspberry Pi with Pi Sense HAT users"),(0,n.kt)("p",null,"If you have a Raspberry Pi with a Pi Sense HAT, run the following commands.  These commands will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"enable I2C hardware access,"),(0,n.kt)("li",{parentName:"ul"},"start the Altair Docker image.")),(0,n.kt)("p",null,"From the command prompt, run the following command to enable I2C support for the Pi Sense HAT."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo raspi-config nonint do_i2c 0\n")),(0,n.kt)("p",null,"From the command prompt, run the following command to download and run the Docker image with Pi Sense HAT support. Replace the Australia/Sydney time zone with your local time zone."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --env-file ~/altair.env --privileged -p 8081:8081 -p 8082:8082 --name altair8800 --rm glovebox/altair8800-pisense:latest\n")),(0,n.kt)("h2",{id:"open-the-web-terminal"},"Open the Web Terminal"),(0,n.kt)("p",null,"Open the Web Terminal to access the Altair emulator. Follow these steps."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Familiarize yourself with the ",(0,n.kt)("a",{parentName:"p",href:"/AltairEverywhereDocs/Altair-Web-Terminal"},"Web Terminal")," and the CP/M operating system.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To start the web terminal, from your web browser open the following link ",(0,n.kt)("a",{parentName:"p",href:"http://aterminal.z8.web.core.windows.net/"},"http://aterminal.z8.web.core.windows.net/"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the Altair hostname or IP Address in the textbox and select ",(0,n.kt)("strong",{parentName:"p"},"Connect"),". If you are running the Altair on your local computer, then the hostname will be ",(0,n.kt)("strong",{parentName:"p"},"localhost"),". Otherwise enter the hostname of IP address of the system running the Altair emulator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once connected, you will be greeted by the CP/M command prompt."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"The image shows the web terminal",src:r(4507).Z,width:"1153",height:"339"})))))}m.isMDXComponent=!0},4507:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/web_terminal-d19e3defd17e52260589780d1b3a9291.png"}}]);