"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[4512],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return a?r.createElement(d,i(i({ref:t},s),{},{components:a})):r.createElement(d,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4401:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={},i="Open Weather Map",p={unversionedId:"azsphere/Cloud-services/Open-Weather-Map/Open-Weather-Map",id:"azsphere/Cloud-services/Open-Weather-Map/Open-Weather-Map",title:"Open Weather Map",description:"Connecting the Open Weather Map cloud service is optional, free, and recommended so the Altair emulator can stream weather and pollution information to Azure IoT Central.",source:"@site/docs/azsphere/Cloud-services/Open-Weather-Map/02-Open-Weather-Map.md",sourceDirName:"azsphere/Cloud-services/Open-Weather-Map",slug:"/azsphere/Cloud-services/Open-Weather-Map/Open-Weather-Map",permalink:"/altair_8800_docs/azsphere/Cloud-services/Open-Weather-Map/Open-Weather-Map",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/azsphere/Cloud-services/Open-Weather-Map/02-Open-Weather-Map.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"azsphere",previous:{title:"Open Weather Map",permalink:"/altair_8800_docs/category/open-weather-map"},next:{title:"Add Open Weather Map Key",permalink:"/altair_8800_docs/azsphere/Cloud-services/Open-Weather-Map/Add-open-weather-map"}},l={},c=[{value:"Create an Open Weather Map API Key",id:"create-an-open-weather-map-api-key",level:2},{value:"Open Weather Map air quality calculation",id:"open-weather-map-air-quality-calculation",level:2}],s={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"open-weather-map"},"Open Weather Map"),(0,n.kt)("p",null,"Connecting the Open Weather Map cloud service is optional, free, and recommended so the Altair emulator can stream weather and pollution information to Azure IoT Central."),(0,n.kt)("h2",{id:"create-an-open-weather-map-api-key"},"Create an Open Weather Map API Key"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From your web browser navigate to ",(0,n.kt)("a",{parentName:"li",href:"https://openweathermap.org/api"},"https://openweathermap.org/api")),(0,n.kt)("li",{parentName:"ol"},"Sign in to Open Weather Map"),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"API")," from the Open Weather Map main menu."),(0,n.kt)("li",{parentName:"ol"},"Subscribe to the Current Weather Data. Select the ",(0,n.kt)("strong",{parentName:"li"},"Free")," option, and select ",(0,n.kt)("strong",{parentName:"li"},"Get API key"),"."),(0,n.kt)("li",{parentName:"ol"},"Repeat and subscribe to the Air Pollution API. Select the ",(0,n.kt)("strong",{parentName:"li"},"Free")," option, and select ",(0,n.kt)("strong",{parentName:"li"},"Get API key"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"API Keys")," from the Open Weather Map site."),(0,n.kt)("li",{parentName:"ol"},"Copy the Open Weather Map API key somewhere safe as you will need this data when you start the Altair in cloud-connected mode.")),(0,n.kt)("h2",{id:"open-weather-map-air-quality-calculation"},"Open Weather Map air quality calculation"),(0,n.kt)("p",null,"Open Weather Map air quality calculation is based on the Common Air Quality Index (CAQI). The Common Air Quality Index (CAQI) is an air quality index used in Europe since 2006."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The image shows how Open Weather Map calculate air quality index",src:a(7971).Z,width:"599",height:"338"})),(0,n.kt)("p",null,"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Air_quality_index#CAQI"},"calculation of Air Quality index"),"."))}u.isMDXComponent=!0},7971:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/open_weather_map_air_quality_index-5a434955dfef28a7c95922ab3b38f229.png"}}]);