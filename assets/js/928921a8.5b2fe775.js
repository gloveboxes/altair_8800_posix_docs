"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[1803],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,m=n(e,["components","mdxType","originalType","parentName"]),c=s(a),d=l,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=c;var n={};for(var p in t)hasOwnProperty.call(t,p)&&(n[p]=t[p]);n.originalType=e,n.mdxType="string"==typeof e?e:l,i[1]=n;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3363:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>s});var r=a(7462),l=(a(7294),a(3905));const o={sidebar_position:4},i="Build from Visual Studio Code",n={unversionedId:"Compile-the-Altair/Build-from-vs-code",id:"Compile-the-Altair/Build-from-vs-code",title:"Build from Visual Studio Code",description:"Install Visual Studio Code",source:"@site/docs/03-Compile-the-Altair/03-Build-from-vs-code.md",sourceDirName:"03-Compile-the-Altair",slug:"/Compile-the-Altair/Build-from-vs-code",permalink:"/Altair_8800_POSIX_Docs/Compile-the-Altair/Build-from-vs-code",draft:!1,editUrl:"https://github.com/gloveboxes/altair-docs/tree/main/docs/03-Compile-the-Altair/03-Build-from-vs-code.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Clone the Altair repo",permalink:"/Altair_8800_POSIX_Docs/Compile-the-Altair/Clone-Altair-repo"},next:{title:"Build from the command line",permalink:"/Altair_8800_POSIX_Docs/Compile-the-Altair/Compile-from-CLI"}},p={},s=[{value:"Install Visual Studio Code",id:"install-visual-studio-code",level:2},{value:"Build the Altair 8800 docker image",id:"build-the-altair-8800-docker-image",level:3},{value:"For AMD64 or ARM64 platforms",id:"for-amd64-or-arm64-platforms",level:4},{value:"For Raspberry Pi ARM64 with Pi Sense HAT",id:"for-raspberry-pi-arm64-with-pi-sense-hat",level:4},{value:"Build Docker image from source",id:"build-docker-image-from-source",level:3},{value:"Trouble shooting Raspberry Pi issues",id:"trouble-shooting-raspberry-pi-issues",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"build-from-visual-studio-code"},"Build from Visual Studio Code"),(0,l.kt)("h2",{id:"install-visual-studio-code"},"Install Visual Studio Code"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://code.visualstudio.com&azure-portal=true"},"Visual Studio Code"),".")),(0,l.kt)("p",null,"You need to pass the IoT Central and derived device key to your application."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a Terminal command prompt.\nIf you are using Windows Subsystem for Linux then open a WSL command prompt.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the ",(0,l.kt)("em",{parentName:"p"},"Altair8800/AltairHL_emulator")," folder")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the following command to open the folder with VS Code."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"code .\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the following Visual Studio Code extensions:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If using WSL, then install the ",(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl&azure-portal=true"},"Visual Studio Code Remote-WSL extension"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb"},"Visual Studio Code CodeLLDB extension")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools"},"CMake Tools extension")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools"},"C/C++ extension")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open the .vscode/launch.json file in VS Code.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Update the ","[args]"," json property for the build configuration.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add the following information."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DPS or IoT Central ID Scope."),(0,l.kt)("li",{parentName:"ul"},"Device ID."),(0,l.kt)("li",{parentName:"ul"},"Derived device key."),(0,l.kt)("li",{parentName:"ul"},"Network interface, eg wlan0, eth0.")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},'"args": ','["-s", "<YOUR_SCOPE_ID>", "-d", "<YOUR_DEVICE_ID>", "-k", "<YOUR_DERIVED_DEVICE_KEY>", "-n", "<YOUR_NETWORK_INTERFACE>", "-o", "<YOUR_OPEN_WEATHER_MAP_API_KEY>"]',","))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Save the launch.json file.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the ",(0,l.kt)("strong",{parentName:"p"},"GCC")," or ",(0,l.kt)("strong",{parentName:"p"},"Clang")," Kit.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Press ",(0,l.kt)("kbd",null,"F5")," to compile and launch the Altair emulator."))),(0,l.kt)("h3",{id:"build-the-altair-8800-docker-image"},"Build the Altair 8800 docker image"),(0,l.kt)("p",null,"You can use a prebuilt Altair 8800 docker image. Run the following command to pull the prebuilt Docker image."),(0,l.kt)("h4",{id:"for-amd64-or-arm64-platforms"},"For AMD64 or ARM64 platforms"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull glovebox/altair8800\n")),(0,l.kt)("h4",{id:"for-raspberry-pi-arm64-with-pi-sense-hat"},"For Raspberry Pi ARM64 with Pi Sense HAT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull glovebox/altair8800-pisense\n")),(0,l.kt)("h3",{id:"build-docker-image-from-source"},"Build Docker image from source"),(0,l.kt)("p",null,"From a Terminal window, run the following commands."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Clone the repo"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/gloveboxes/Altair8800.Emulator.UN-X.git Altair8800\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the Altair repo folder on your computer."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd Altair8800/Docker\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Raspberry Pi Sense HAT user. Enable the Pi Sense HAT."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i 's/#<REMOVE_THIS_COMMENT_TO_ENABLE_PI_SENSE_HAT>//g' dockerfile\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If running the emulator as a shared service, then enable cloud service."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i 's/#<REMOVE_THIS_COMMENT_TO_ENABLE_CLOUD>//g' dockerfile\n")))),(0,l.kt)("h2",{id:"trouble-shooting-raspberry-pi-issues"},"Trouble shooting Raspberry Pi issues"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Ensure strong WiFi connection")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Disabling the WiFi power management can improve stability"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo iw wlan0 set power_save off\n")))))}u.isMDXComponent=!0}}]);