"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[1447],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,p(p({ref:n},s),{},{components:t})):r.createElement(m,p({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={},p="Add OWM Key",i={unversionedId:"Cloud-services/Open-Weather-Map/Add-open-weather-map",id:"Cloud-services/Open-Weather-Map/Add-open-weather-map",title:"Add OWM Key",description:"Open Weather Map weather and pollution service",source:"@site/docs/04-Cloud-services/Open-Weather-Map/03-Add-open-weather-map.md",sourceDirName:"04-Cloud-services/Open-Weather-Map",slug:"/Cloud-services/Open-Weather-Map/Add-open-weather-map",permalink:"/AltairEverywhereDocs/Cloud-services/Open-Weather-Map/Add-open-weather-map",draft:!1,editUrl:"https://github.com/gloveboxes/altair-docs/tree/main/docs/04-Cloud-services/Open-Weather-Map/03-Add-open-weather-map.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create OWM key",permalink:"/AltairEverywhereDocs/Cloud-services/Open-Weather-Map/Create-key"},next:{title:"Deploy the Altair emulator",permalink:"/AltairEverywhereDocs/Cloud-services/Open-Weather-Map/Deploy-the-Altair-emulator"}},l={},c=[{value:"Open Weather Map weather and pollution service",id:"open-weather-map-weather-and-pollution-service",level:2},{value:"Default app_manifest.json",id:"default-app_manifestjson",level:3}],s={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-owm-key"},"Add OWM Key"),(0,a.kt)("h2",{id:"open-weather-map-weather-and-pollution-service"},"Open Weather Map weather and pollution service"),(0,a.kt)("p",null,"To connect the Altair emulator to the Open Weather Map weather and pollution APIs you'll need to declare the Open Weather Map API key."),(0,a.kt)("p",null,"Update the ",(0,a.kt)("strong",{parentName:"p"},"cmdArgs")," section of the app_manifest.json file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"CmdArgs": [\n    "--ScopeID",\n    "",\n    "-o",\n    "REPLACE_WITH_YOUR_OPEN_WEATHER_MAP_API_KEY"\n],\n')),(0,a.kt)("h3",{id:"default-app_manifestjson"},"Default app_manifest.json"),(0,a.kt)("p",null,"The following is the default project app_manifest.json file. Open the Altair emulator app_manifest.json file and update."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "SchemaVersion": 1,\n    "Name": "AltairHL_emulator",\n    "ComponentId": "ac8d863a-4424-11eb-b378-0242ac130002",\n    "EntryPoint": "/bin/app",\n    "CmdArgs": [\n        "--ScopeID",\n        "",\n        "-o",\n        ""\n    ],\n    "Capabilities": {\n        "MutableStorage": {\n            "SizeKB": 64\n        },\n        "Gpio": [\n            "$AZURE_CONNECTED_LED",\n            "$BUTTON_A",\n            "$BUTTON_B",\n            "$LED_RED",\n            "$LED_GREEN",\n            "$LED_BLUE"\n        ],\n        "PowerControls": [\n            "SetPowerProfile"\n        ],\n        "WifiConfig": true,\n        "CertStore": true,\n        "EnterpriseWifiConfig": true,\n        "NetworkConfig": true,\n        "AllowedTcpServerPorts": [\n            8082\n        ],\n        "I2cMaster": [\n            "$ISU2"\n        ],\n        "Adc": [\n            "$AVNET_LIGHT_SENSOR"\n        ],\n        "AllowedConnections": [\n            "global.azure-devices-provisioning.net",\n            "api.openweathermap.org",\n            "get.geojs.io",\n            "raw.githubusercontent.com"\n        ],\n        "DeviceAuthentication ": null,\n        "AllowedApplicationConnections": [\n            "2e319eae-7be5-4a0c-ba47-9353aa6ca96a",\n            "9b684af8-21b9-42aa-91e4-621d5428e497",\n            "005180bc-402f-4cb3-a662-72937dbcde47",\n            "6583cf17-d321-4d72-8283-0b7c5b56442b",\n            "AF8B26DB-355E-405C-BBDE-3B851668EE23"\n        ]\n    },\n    "ApplicationType": "Default"\n}\n')))}u.isMDXComponent=!0}}]);