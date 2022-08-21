"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[3999],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return a?r.createElement(g,o(o({ref:t},u),{},{components:a})):r.createElement(g,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1,slug:"/"},o="Introduction",l={unversionedId:"Home",id:"Home",title:"Introduction",description:"The goal of the cloud-connected Altair project is to provide a unique blend of computing history with modern cloud computing. You'll learn about computing fundamentals, software development, and modern IoT, Data, and AI cloud services that address today's real-world IT challenges.",source:"@site/docs/Home.md",sourceDirName:".",slug:"/",permalink:"/Altair_8800_POSIX_Docs/",draft:!1,editUrl:"https://github.com/gloveboxes/altair-docs/tree/main/docs/Home.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Altair web terminal",permalink:"/Altair_8800_POSIX_Docs/Altair-Web-Terminal"}},s={},p=[{value:"Documentation and source code",id:"documentation-and-source-code",level:2},{value:"Test drive retro software development and gaming",id:"test-drive-retro-software-development-and-gaming",level:2},{value:"Running your own Altair",id:"running-your-own-altair",level:2},{value:"Support desktop operating systems",id:"support-desktop-operating-systems",level:3},{value:"Supported devices",id:"supported-devices",level:3},{value:"Raspberry Pi with the optional Pi Sense HAT",id:"raspberry-pi-with-the-optional-pi-sense-hat",level:4},{value:"Azure Sphere with optional Altair front panel kit",id:"azure-sphere-with-optional-altair-front-panel-kit",level:4},{value:"Altair history",id:"altair-history",level:2},{value:"Altair 8800 emulator architecture",id:"altair-8800-emulator-architecture",level:2}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The goal of the cloud-connected Altair project is to provide a unique blend of ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Retrocomputing"},"computing history")," with modern cloud computing. You'll learn about computing fundamentals, software development, and modern IoT, Data, and AI cloud services that address today's real-world IT challenges."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Altair_8800?azure-portal=true"},"Altair 8800")," kick-started the personal computer revolution. Microsoft's first product was ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Altair_BASIC?azure-portal=true"},"Altair BASIC")," written for the Altair 8800 by Bill Gates and Paul Allen. At the time, Altair BASIC was a huge step forward as it allowed people to write programs using a high-level programming language."),(0,n.kt)("p",null,"The Altair project can be viewed through three lenses:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Learn how to develop multithreaded event-driven IoT C applications that scale from ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Microcontroller"},"microcontrollers"),", to ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Raspberry_Pi"},"Raspberry Pis"),", to desktop-class computers."),(0,n.kt)("li",{parentName:"ol"},"A fantastic safe way to explore machine-level programming, Intel 8080 Assembly programming, along with C and BASIC development."),(0,n.kt)("li",{parentName:"ol"},"You are interested in retro gaming, and you want to chill playing retro games from yesteryear.")),(0,n.kt)("p",null,"Optionally, the project integrates free weather and pollution cloud services from ",(0,n.kt)("a",{parentName:"p",href:"http://openweathermap.org"},"Open Weather Map"),", along with ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-au/services/iot-central/"},"Azure IoT Central"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/cognitive-services/anomaly-detector/"},"Azure Anomaly Detection Cognitive Service"),". The following reports were generated from data published by the Altair emulator using data sourced from Open Weather Map."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"IoT Central Sydney pollution report"),(0,n.kt)("th",{parentName:"tr",align:null},"Azure Anomaly Detection report"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The images shows pollution report for Sydney",src:a(6776).Z,width:"600",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The following images shows temperature based anomalies",src:a(468).Z,width:"533",height:"400"}))))),(0,n.kt)("h2",{id:"documentation-and-source-code"},"Documentation and source code"),(0,n.kt)("p",null,"This project is based on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/AzureSphereAltair8800_V2"},"Azure Sphere Cloud-Enabled Altair 8800"),' as featured on the Register "',(0,n.kt)("a",{parentName:"p",href:"https://www.theregister.com/2021/07/16/altair_redux/"},"Microsoft adds cloud enablement to 1970s Altair 8800 tech"),'".'),(0,n.kt)("h2",{id:"test-drive-retro-software-development-and-gaming"},"Test drive retro software development and gaming"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"easiest")," way to try the Altair emulator is from your web browser. Select the following link, ",(0,n.kt)("a",{parentName:"p",href:"http://aterminal.z8.web.core.windows.net/?altair=altair.westus2.cloudapp.azure.com"},"Test Drive the Altair 8800 emulator"),", and open the link in a new browser tab. The Altair web terminal will open, select ",(0,n.kt)("strong",{parentName:"p"},"Connect")," to start a 30-minute session. The web terminal connects to an instance of the emulator running in an ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/container-instances/"},"Azure Container Instance"),"."),(0,n.kt)("p",null,"Then learn about ",(0,n.kt)("a",{parentName:"p",href:"/Altair_8800_POSIX_Docs/Altair-Web-Terminal"},"CPM"),", software development with ",(0,n.kt)("a",{parentName:"p",href:"/Altair_8800_POSIX_Docs/Programming-the-Altair/Microsoft-BASIC-programming"},"BASIC"),", ",(0,n.kt)("a",{parentName:"p",href:"/Altair_8800_POSIX_Docs/Programming-the-Altair/C-programming"},"C"),", and ",(0,n.kt)("a",{parentName:"p",href:"/Altair_8800_POSIX_Docs/Programming-the-Altair/Assembly-programming"},"Assembly")," using climate data sourced from ",(0,n.kt)("a",{parentName:"p",href:"https://openweathermap.org/"},"Open Weather Map"),". Or take a break, and fire up a ",(0,n.kt)("a",{parentName:"p",href:"/Altair_8800_POSIX_Docs/Altair-Web-Terminal#get-started-with-retro-gaming"},"retro game"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The image shows a retro game running in the web terminal",src:a(6469).Z,width:"704",height:"650"})),(0,n.kt)("p",null,"The following limitations apply to test-drive:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You'll lose any changes you make when you disconnect or close the test-drive web terminal."),(0,n.kt)("li",{parentName:"ol"},"Only one person at a time can connect to the test-drive emulator. If you can't connect, then try again in 30-minutes.")),(0,n.kt)("h2",{id:"running-your-own-altair"},"Running your own Altair"),(0,n.kt)("p",null,"The Altair emulator runs on desktop and device operating systems. The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/Altair8800.Emulator.UN-X"},"source code")," is the same, but on devices there are some extended experiences. The Altair emulator has been tested on the following desktop operating systems and devices."),(0,n.kt)("h3",{id:"support-desktop-operating-systems"},"Support desktop operating systems"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"fastest")," way to run the Altair emulator is on your computer. The Altair emulator runs on ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/POSIX"},"POSIX")," compatible operating systems including, Linux, Windows with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"WSL 2"),", macOS on Apple Silicon and Intel."),(0,n.kt)("h3",{id:"supported-devices"},"Supported devices"),(0,n.kt)("p",null,"The more ",(0,n.kt)("strong",{parentName:"p"},"interesting")," way to run the Altair emulator is on a device, the Altair emulator has been tested on the following devices:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.raspberrypi.org/"},"Raspberry Pi"),", models, Zero 1 & 2, 2B, 3B, 3B, and 4 running Raspberry Pi OS."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/services/azure-sphere/"},"Azure Sphere Avnet and Seeed Developer Kits")," running embedded Linux.")),(0,n.kt)("h4",{id:"raspberry-pi-with-the-optional-pi-sense-hat"},"Raspberry Pi with the optional Pi Sense HAT"),(0,n.kt)("p",null,"If you pair a Raspberry Pi with a ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/products/sense-hat/"},"Pi Sense HAT"),", the Altair address and data bus activity is displayed on the 8x8 LED panel."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi with Pi Sense HAT"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi Sense HAT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The image shows the address and data bus LEDs",src:a(6854).Z,width:"562",height:"379"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The gif shows the address and data bus LEDs in action",src:a(3780).Z,width:"469",height:"400"}))))),(0,n.kt)("h4",{id:"azure-sphere-with-optional-altair-front-panel-kit"},"Azure Sphere with optional Altair front panel kit"),(0,n.kt)("p",null,"The Altair emulator is supported on Azure Sphere devices from Avnet and Seeed Studio. If an Azure Sphere device is paired with the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/AzureSphereAltair8800.Hardware"},"Altair front panel kit")," or the ",(0,n.kt)("a",{parentName:"p",href:"https://www.mikroe.com/blog/8800-retro-click"},"Mikroe Altair Retro Click"),", the Altair address and data bus activity is displayed."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Azure Sphere with the Altair front panel kit"),(0,n.kt)("th",{parentName:"tr",align:null},"MikroE Retro Click"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The gif shows the Altair on Azure Sphere with the Altair front panel",src:a(4493).Z,width:"979",height:"400"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The gif shows the address and data bus LEDs in action",src:a(9299).Z,width:"332",height:"400"}))))),(0,n.kt)("h2",{id:"altair-history"},"Altair history"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The image shows the Altair 8800",src:a(243).Z,width:"1200",height:"600"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://commons.wikimedia.org/wiki/File:Altair_8800,_Smithsonian_Museum.jpg"},"Altair 8800 image attribution - Smithsonian Museum")),(0,n.kt)("p",null,"The Altair 8800 was built on the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Intel_8080?azure-portal=true"},"Intel 8080")," CPU, the second 8-bit microprocessor manufactured by Intel in 1974. By today's standards, it's a simple CPU design, perfect for learning computing fundamentals because of its small instruction set."),(0,n.kt)("p",null,"The original Altair 8800 was programmed by setting switches on the front panel. It was a painstaking, error-prone process to load and run a program. The Altair 8800 had a series of LEDs and switches that you used to load apps and determine the state of the Altair."),(0,n.kt)("p",null,"You could save and load applications from a paper tape reader connected to the Altair 8800. As the Altair 8800 grew in popularity, more options became available. You could attach a keyboard, a computer monitor, and finally disk drives, a more reliable way to save and load applications."),(0,n.kt)("h2",{id:"altair-8800-emulator-architecture"},"Altair 8800 emulator architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The following diagram summarizes the Altair emulator architecture.",src:a(1368).Z,width:"3840",height:"2160"})),(0,n.kt)("p",null,"Starting from the bottom left and moving up and then to the right."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"POSIX Compatible OS:"),". The Altair 8800 emulator runs on ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/POSIX"},"POSIX")," compatible operating systems, including Linux, macOS, ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/windows/wsl"},"Windows WSL 2"),", and Raspberry Pi OS."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WebSocket & Azure IoT C:")," These communication libraries connect the Altair emulator to the web terminal and cloud services. The Altair terminal IO messages are routed over ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/WebSocket"},"WebSockets"),", and the Azure IoT C SDK connects the Altair to Azure IoT Central."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Event library:")," The Altair coordinates activities on the main thread using the ",(0,n.kt)("a",{parentName:"li",href:"https://libevent.org/"},"event")," event loop library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"EdgeDevX:")," This library simplifies access to Azure IoT services, provides event-timer services, along with several useful utilities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Terminal IO & Cloud Services:")," The Intel 8080 CPU provides 256 input ports and 256 output ports. The Intel 8080 ports were used to integrate peripherals such as disk drives, printers, and modems. However, for the Altair emulator, these ports are used to integrate communications and cloud services. Terminal input and output ports are routed over WebSockets, other ports are used for timing services, access to weather and pollution data, plus Azure IoT services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Intel 8080 emulator:")," This is an open-source software implementation of the Intel 8080 CPU. The Intel 8080 emulator executes Intel 8080 applications including the CP/M operating system, compilers, apps, and games."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CPU Monitor:")," The CPU monitor implements the virtual Altair front panel, along with memory disassembler, tracer, and Altair emulator reset."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CP/M:")," CP/M originally stood for Control Program/Monitor. Later, CP/M became known as Control Program for Microcomputers. It was a mass-market operating system created in 1974 for Intel 8080/85-based microcomputers by Gary Kildall of Digital Research, Inc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Programming languages:")," Included on the main disk image are the Microsoft BASIC interpreter, the BDS C compiler, and the Intel and Microsoft assemblers and linkers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Altair BASIC:")," By default the Altair emulator boots CP/M, but it is easy to boot the original Altair BASIC program."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Altair Web Terminal:")," Provides a web-browser hosted Altair terminal. The web terminal is built using the Xterm library. Xterm.js provides a web browser-hosted terminal, a WebSocket integrates Xterm with the Altair emulator."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Open Weather Map"),": Open Weather Map provides planet-scale weather and pollution data services. Open Weather Map provides free access to weather and pollution data by geographic location."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Azure IoT Central:")," ",(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/services/iot-central?azure-portal=true"},"Azure IoT Central")," is a customizable cloud-based Internet of Things (IoT) application platform. You can report, analyze, and export IoT data.")))}m.isMDXComponent=!0},1368:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Altair_8800_Application_Architecture-74342ab41320e784bd16842e534944f6.png"},243:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/altair-8800-smithsonian-museum-efa63f9b538227319fa6d4ec8ca701b7.png"},4493:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/altair_on_sphere-98abeed24d5bc60e757abebf5915ef90.gif"},9299:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/avnet_retro_click-7b1a51a16e5d323ac421778d433c78d0.gif"},6776:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/iot_central_pollution_report-ac41244851068dc6e9880987e78e9d1a.png"},3780:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/raspberry_pi_sense_hat-079bdc455c3a3502d2aaa72a6f7b69ed.gif"},6854:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/raspberry_pi_sense_hat_map-219521f7247903276cd59d090845b3ea.png"},6469:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},468:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/univariate-anomalies-ca2e171d017ac8c6f26ad82d99afd7b8.png"}}]);