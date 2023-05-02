"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[9495],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(y,l(l({ref:t},u),{},{components:r})):a.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3415:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(4137));const o={},l="Create a device key",i={unversionedId:"everywhere/Cloud-services/Azue-IoT-Central/Create-an-IoT-Central-device-key",id:"everywhere/Cloud-services/Azue-IoT-Central/Create-an-IoT-Central-device-key",title:"Create a device key",description:"To securely connect the Altair emulator to Azure IoT Central you need to create a device ID and a derived device key.",source:"@site/docs/everywhere/04-Cloud-services/Azue-IoT-Central/06-Create-an-IoT-Central-device-key.md",sourceDirName:"everywhere/04-Cloud-services/Azue-IoT-Central",slug:"/everywhere/Cloud-services/Azue-IoT-Central/Create-an-IoT-Central-device-key",permalink:"/altair_8800_docs/everywhere/Cloud-services/Azue-IoT-Central/Create-an-IoT-Central-device-key",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/everywhere/04-Cloud-services/Azue-IoT-Central/06-Create-an-IoT-Central-device-key.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"everywhere",previous:{title:"Create an IoT Central app",permalink:"/altair_8800_docs/everywhere/Cloud-services/Azue-IoT-Central/Create-an-IoT-Central-app"},next:{title:"Customize IoT Central",permalink:"/altair_8800_docs/everywhere/Cloud-services/Azue-IoT-Central/Customize-Azure-IoT-Central"}},c={},s=[{value:"Install the Azure CLI tools",id:"install-the-azure-cli-tools",level:2},{value:"Create an IoT Central enrollment group",id:"create-an-iot-central-enrollment-group",level:2},{value:"Create the device key",id:"create-the-device-key",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-device-key"},"Create a device key"),(0,n.kt)("p",null,"To securely connect the Altair emulator to Azure IoT Central you need to create a device ID and a derived device key."),(0,n.kt)("h2",{id:"install-the-azure-cli-tools"},"Install the Azure CLI tools"),(0,n.kt)("p",null,"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"},"How to install the Azure CLI")," guide to install the Azure CLI on your computer."),(0,n.kt)("h2",{id:"create-an-iot-central-enrollment-group"},"Create an IoT Central enrollment group"),(0,n.kt)("p",null,"From the Azure IoT Central web portal, follow these steps."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Permissions")," from the sidebar menu."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Device connection groups"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"+New")," to create a new enrollment group."),(0,n.kt)("li",{parentName:"ol"},"Name your group ",(0,n.kt)("strong",{parentName:"li"},"altair-emulator"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Shared access signature")," attestation type."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Save")),(0,n.kt)("li",{parentName:"ol"},"While on this page, copy the ",(0,n.kt)("strong",{parentName:"li"},"ID scope")," of your Azure IoT Central application somewhere safe. You will need the *ID scope** when you start the Altair emulator.")),(0,n.kt)("h2",{id:"create-the-device-key"},"Create the device key"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open a Terminal window on your computer and run the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/iot/central/device?view=azure-cli-latest#az-iot-central-device-compute-device-key"},"compute-device-key")," command to generate a device-derived key. Notes."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You will likely be prompted to install the azure-iot extension. Select ",(0,n.kt)("strong",{parentName:"li"},"Y"),", and press ",(0,n.kt)("kbd",null,"Enter"),"."),(0,n.kt)("li",{parentName:"ul"},"The primary key is the primary key generated by your newly created IoT Central enrollment group."),(0,n.kt)("li",{parentName:"ul"},"The device id is any arbitrary/sensible name, for example, myAltair.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"az iot central device compute-device-key --pk {primaryKey} --device-id {deviceid}\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy the ",(0,n.kt)("strong",{parentName:"p"},"Device ID"),", and the ",(0,n.kt)("strong",{parentName:"p"},"Derived key")," somewhere safe as you will need these values  when you start the Altair emulator in cloud-connected mode."))))}d.isMDXComponent=!0}}]);