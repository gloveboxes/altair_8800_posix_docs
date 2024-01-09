"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[472],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,g=c["".concat(m,".").concat(u)]||c[u]||d[u]||o;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(4137));const o={},i="Learn about CP/M",l={unversionedId:"fundamentals/introduction-cpm",id:"fundamentals/introduction-cpm",title:"Learn about CP/M",description:"CP/M originally stood for Control Program/Monitor. Later, CP/M became known as Control Program for Microcomputers. It was a mass-market operating system created in 1974 for Intel 8080/85-based microcomputers by Gary Kildall of Digital Research, Inc.",source:"@site/docs/20-fundamentals/30-introduction-cpm.md",sourceDirName:"20-fundamentals",slug:"/fundamentals/introduction-cpm",permalink:"/altair_8800_docs/fundamentals/introduction-cpm",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/20-fundamentals/30-introduction-cpm.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Start the web terminal",permalink:"/altair_8800_docs/fundamentals/Web-Terminal"},next:{title:"Rebooting the emulator",permalink:"/altair_8800_docs/fundamentals/Rebooting-the-Altair"}},m={},p=[{value:"Digital Research CP/M Operating System Manual",id:"digital-research-cpm-operating-system-manual",level:2},{value:"Programming the Altair emulator",id:"programming-the-altair-emulator",level:2},{value:"Get started with CP/M",id:"get-started-with-cpm",level:2},{value:"Get started with retro gaming",id:"get-started-with-retro-gaming",level:2},{value:"Download a retro game",id:"download-a-retro-game",level:2},{value:"Retro game acknowledgments",id:"retro-game-acknowledgments",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"learn-about-cpm"},"Learn about CP/M"),(0,n.kt)("p",null,"CP/M originally stood for Control Program/Monitor. Later, CP/M became known as Control Program for Microcomputers. It was a mass-market operating system created in 1974 for Intel 8080/85-based microcomputers by Gary Kildall of Digital Research, Inc."),(0,n.kt)("p",null,"The first version was single-tasking on 8-bit processors with support for up to 64 kilobytes of memory. Later versions of CP/M added multiple-user variations and were migrated to 16-bit processors."),(0,n.kt)("p",null,"For more information about CP/M, see the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/CP/M?azure-portal=true"},"CP/M Wikipedia article")," and ",(0,n.kt)("a",{parentName:"p",href:"http://www.gaby.de/faq.htm"},"CP/M Frequently Asked Questions"),"."),(0,n.kt)("h2",{id:"digital-research-cpm-operating-system-manual"},"Digital Research CP/M Operating System Manual"),(0,n.kt)("p",null,"You will find a wealth of information about CP/M, including compilers, assemblers, debuggers, and more in the ",(0,n.kt)("a",{parentName:"p",href:"http://www.gaby.de/cpm/manuals/archive/cpm22htm/"},"Digital Research CP/M Operating System Manual")),(0,n.kt)("h2",{id:"programming-the-altair-emulator"},"Programming the Altair emulator"),(0,n.kt)("p",null,"From CP/M, you can program the Altair emulator using Microsoft BASIC, BD Software C, the Intel Assembler and Linker, and the Microsoft MACRO-80 Assembler."),(0,n.kt)("h2",{id:"get-started-with-cpm"},"Get started with CP/M"),(0,n.kt)("p",null,"Here are some CP/M commands to get you started:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Changing drives. The Altair emulator mounts two drives, drive A and drive B. To change drives, from the Altair CP/M command prompt in the Web Terminal, type the drive name, then press the Enter key."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"a:\n\nb:\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Display a directory listing."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"dir\n\ndir *.BAS\n\nls\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Erase a file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"era *.txt\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copy Microsoft BASIC ",(0,n.kt)("inlineCode",{parentName:"p"},"mbasic.com")," from drive A to drive B."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"a:pip b:mbasic.com.com=a:mbasic.com\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"List the contents of a file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"type hw.c\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rename a file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"ren hello.c=hw.c\n")))),(0,n.kt)("h2",{id:"get-started-with-retro-gaming"},"Get started with retro gaming"),(0,n.kt)("h2",{id:"download-a-retro-game"},"Download a retro game"),(0,n.kt)("p",null,"The following is an example of copying the ",(0,n.kt)("inlineCode",{parentName:"p"},"love.bas")," game to the CP/M filesystem using the CP/M ",(0,n.kt)("inlineCode",{parentName:"p"},"gf")," command."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(5403).Z,width:"887",height:"335"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/RetroGames"},"Retro Games")," repo.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the Altair web terminal CP/M command prompt, run the ",(0,n.kt)("strong",{parentName:"p"},"Get File")," command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"gf\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select endpoint 1 (GitHub)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Type the name of the file to be transferred. For example ",(0,n.kt)("strong",{parentName:"p"},"LOVE.BAS"),". Note, that the filenames are case sensitive.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Press ",(0,n.kt)("kbd",null,"Enter")," to start the transfer.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the CP/M command line, start the game. For example"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-cpm"},"mbasic love\n")))),(0,n.kt)("p",null,"Note, a lot of the retro games in the repo expect to find ",(0,n.kt)("strong",{parentName:"p"},"MENU.BAS")," in the CP/M filesystem. So be sure to transfer MENU.BAS as well."),(0,n.kt)("h2",{id:"retro-game-acknowledgments"},"Retro game acknowledgments"),(0,n.kt)("p",null,"This list of games was made possible by the dedicated work of ",(0,n.kt)("a",{parentName:"p",href:"http://www.retroarchive.org/cpm/games/games.htm"},"CP/M Games")," and ",(0,n.kt)("a",{parentName:"p",href:"http://www.vintage-basic.net/games.html"},"Vintage BASIC"),"."))}d.isMDXComponent=!0},5403:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/retro-games-snippet-314a12c132b5feb9166685285bbb43fc.png"}}]);