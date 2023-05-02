"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[3748],{4137:(e,t,a)=>{a.d(t,{Zo:()=>T,kt:()=>R});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},T=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},N="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,T=l(e,["components","mdxType","originalType","parentName"]),N=s(a),m=r,R=N["".concat(p,".").concat(m)]||N[m]||c[m]||o;return a?n.createElement(R,i(i({ref:t},T),{},{components:a})):n.createElement(R,i({ref:t},T))}));function R(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[N]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1583:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(4137));const o={},i="Microsoft BASIC",l={unversionedId:"start/programming/Microsoft-BASIC-programming",id:"start/programming/Microsoft-BASIC-programming",title:"Microsoft BASIC",description:"Bill Gates and Paul Allen wrote Altair BASIC. It was Microsoft's first product. Later, Microsoft released Microsoft BASIC for CP/M, see the Microsoft BASIC-80 reference manual.",source:"@site/docs/start/programming/02-Microsoft-BASIC-programming.md",sourceDirName:"start/programming",slug:"/start/programming/Microsoft-BASIC-programming",permalink:"/altair_8800_docs/start/programming/Microsoft-BASIC-programming",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/start/programming/02-Microsoft-BASIC-programming.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"start",previous:{title:"Intel 8080 IO Ports",permalink:"/altair_8800_docs/start/programming/i8080-IO-Ports"},next:{title:"C programming",permalink:"/altair_8800_docs/start/programming/C-programming"}},p={},s=[{value:"Get started with Microsoft BASIC-80",id:"get-started-with-microsoft-basic-80",level:2},{value:"Setting text colors",id:"setting-text-colors",level:2},{value:"Use Intel 8080 input and output ports",id:"use-intel-8080-input-and-output-ports",level:2},{value:"Run the TIME.BAS application",id:"run-the-timebas-application",level:3},{value:"Run the WEATHER.BAS application",id:"run-the-weatherbas-application",level:3},{value:"Generating anomaly weather data",id:"generating-anomaly-weather-data",level:2},{value:"Font support",id:"font-support",level:2}],T={toc:s},N="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(N,(0,n.Z)({},T,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"microsoft-basic"},"Microsoft BASIC"),(0,r.kt)("p",null,"Bill Gates and Paul Allen wrote ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Altair_BASIC?azure-portal=true"},"Altair BASIC"),". It was Microsoft's first product. Later, Microsoft released Microsoft BASIC for CP/M, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/Altair8800.manuals/blob/master/AA-P226A-TV_BASIC-80_Reference_Manual_VT180_V5.21_1981.pdf?azure-portal=true"},"Microsoft BASIC-80 reference manual"),"."),(0,r.kt)("p",null,"In the following exercise, you'll learn how to write your first Microsoft BASIC application."),(0,r.kt)("h2",{id:"get-started-with-microsoft-basic-80"},"Get started with Microsoft BASIC-80"),(0,r.kt)("p",null,"Microsoft BASIC-80 is included on drive A."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Switch back to the web terminal in your web browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the CP/M command prompt, run the following command to start Microsoft BASIC."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mbasic\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run an interactive command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'print "Hello, world!"\n')),(0,r.kt)("p",{parentName:"li"},"The BASIC interpreter with execute the command immediately and display ",(0,r.kt)("strong",{parentName:"p"},"Hello, World!"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your first program:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},"10 for i = 1 to 1000000\n20 print i\n30 next i\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run your program"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},"run\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the program by selecting ",(0,r.kt)("strong",{parentName:"p"},"Ctrl+C"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your program to disk:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'save "TEST.BAS"\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Name all files using ",(0,r.kt)("strong",{parentName:"p"},"CAPITAL LETTERS"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Load your program from disk:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'load "TEST.BAS"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Quit BASIC:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},"system\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to start your BASIC application from the CP/M command prompt."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpm"},"mbasic test\n")))),(0,r.kt)("p",null,"You can learn more about BASIC from the following BASIC applications included with the Altair emulator:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"COUNT.BAS")," demonstrates how to use the Intel 8080 IO Port 30 to sleep or delay an application for a specific period."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DISKRW.BAS")," is a test application that opens and repeatedly reads and writes a text file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FONT.BAS")," shows how to write ASCII characters to the 8x8 LED panels on the Pi Sense HAT or Retro Click."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JSON.BAS")," reads weather and pollution data and then publishes JSON data to Azure IoT Central."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LOOPY.BAS")," is a test application that generates a lot of messages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STARTREK.BAS")," is a game."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TICTAK.BAS:")," A simple game of naughts and crosses."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TIME.BAS")," demonstrates how to use the time Intel 8080 IO ports including setting a sleep timer, access to the system tick counter, and local and UTC date and times."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WEATHER.BAS")," reads weather and pollution data from Open Weather Map and adds random ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Jitter"},"jitter")," to the temperature data at random intervals. The jittered temperature is used for anomaly detection. The weather and pollution data is then streamed to Azure IoT Central at regular intervals.")),(0,r.kt)("h2",{id:"setting-text-colors"},"Setting text colors"),(0,r.kt)("p",null,"Text color can be controlled using 4-bit VT220 control characters. For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences"},"List of ANSI color escape sequences"),"."),(0,r.kt)("p",null,"The standards implementing terminal colors began with limited (4-bit) options. The table below lists the RGB values of the background and foreground colors used for these by a variety of terminal emulators:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The image shows 4-bit color chart",src:a(240).Z,width:"2624",height:"1034"})),(0,r.kt)("h2",{id:"use-intel-8080-input-and-output-ports"},"Use Intel 8080 input and output ports"),(0,r.kt)("p",null,"The BASIC language has support for Intel 8080 CPU input and output port instructions. The TIME.BAS application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gets the system tick count from port 41"),(0,r.kt)("li",{parentName:"ul"},"gets the UTC date and time from port 42"),(0,r.kt)("li",{parentName:"ul"},"gets the local date and time from port 43"),(0,r.kt)("li",{parentName:"ul"},"and sets a sleep period using output port 30, and then waits on input port 30 for the delay period to expire.")),(0,r.kt)("p",null,"For more information about Intel 8080 IO port mappings, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/Altair8800.Emulator.UN-X/wiki#intel-8080-input-and-output-ports"},"Intel 8080 input and output ports"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The image shows the time app running",src:a(5648).Z,width:"610",height:"678"})),(0,r.kt)("p",null,"The following BASIC program is the listing of ",(0,r.kt)("em",{parentName:"p"},"TIME.BAS"),". The Time app uses color escape codes to control text colors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'10 WIDTH 100\n20 PRINT "===================================================="\n30 PRINT "TIME DEMOS"\n40 SECONDS% = 1\n\n50 WHILE 1\n60 PRINT "==============================================="\n\n70 PORT = 41 : GOSUB 160 : PRINT chr$(27) + "[91;22;24m" + "System tick count: ";RSTRING$;chr$(27) + "[0m"\n80 PORT = 42 : GOSUB 160 : PRINT chr$(27) + "[92;22;24m" + "UTC date and time: ";RSTRING;chr$(27) + "[0m"\n90 PORT = 43 : GOSUB 160 : PRINT chr$(27) + "[94;22;24m" + "Local date and time: ";RSTRING$; chr$(27) + "[0m"\n\n130 GOSUB 230\n\n140 WEND\n150 END\n\n160 REM SUBROUTINE READS STRING DATA FROM PORT UNTIL NULL CHARACTER\n170 RSTRING$ = ""\n175 OUT PORT, 0\n180 C=INP(200)\n190 IF C = 0 THEN RETURN\n200 RSTRING$ = RSTRING$ + CHR$(C)\n210 GOTO 180\n\n220 REM PAUSE FOR N NUMBER OF SECONDS\n230 PRINT "" : PRINT "Pause";SECONDS%;"seconds."\n240 OUT 30, SECONDS%\n250 WAIT 30, 1, 1\n260 RETURN\n')),(0,r.kt)("h3",{id:"run-the-timebas-application"},"Run the TIME.BAS application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To start Microsoft BASIC, from the CP/M command prompt, enter:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpm"},"mbasic time\n")),(0,r.kt)("p",{parentName:"li"},"Microsoft BASIC starts and runs the ",(0,r.kt)("em",{parentName:"p"},"TIME.BAS")," application. The ",(0,r.kt)("em",{parentName:"p"},"TIME.BAS")," application displays the system tick count, along with the local and UTC date and time.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the program by selecting ",(0,r.kt)("strong",{parentName:"p"},"Ctrl+C"),"."))),(0,r.kt)("h3",{id:"run-the-weatherbas-application"},"Run the WEATHER.BAS application"),(0,r.kt)("p",null,"The WEATHER.BAS application reads weather and pollution data provided by Open Weather Map. Like the COUNT.BAS application, WEATHER.BAS uses Intel 8080 IO Ports to access the data."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This image displays output from the BASIC WEATHER application",src:a(686).Z,width:"1265",height:"710"})),(0,r.kt)("p",null,"The following BASIC program is the listing of ",(0,r.kt)("em",{parentName:"p"},"WEATHER.BAS"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'100 WIDTH 150\n200 PRINT "===================================================="\n300 PRINT "OPEN WEATHER MAP IOT APP"\n400 SECONDS% = 10\n500 WEATHERKEY = 34\n600 WEATHERVALUE = 35\n700 WEATHERITEMS = 6\n800 LOCATIONKEY = 36\n900 LOCATIONVALUE = 37\n1000 LOCATIONITEMS = 4\n1100 POLLUTIONKEY = 38\n1200 POLLUTIONVALUE = 39\n1300 POLLUTIONITEMS = 9\n1400 PRINT "PUBLISH WEATHER DATA TO IOT CENTRAL EVERY";SECONDS%;"SECONDS"\n1500 RCOUNT% = 0\n1600 READING# = 0\n1700 WHILE 1\n1800 READING# = READING# + 1\n1900 PRINT "============================================================================================================================"\n2000 PORT = 43 : GOSUB 4300 : TIME$ = RSTRING$\n2100 PRINT "Reading", "Time"\n2200 PRINT READING#,  TIME$\n2300 ITEMKEY = WEATHERKEY : ITEMVALUE = WEATHERVALUE : ITEMS = WEATHERITEMS : GOSUB 3300\n2400 PRINT\n2500 ITEMKEY = POLLUTIONKEY : ITEMVALUE = POLLUTIONVALUE : ITEMS = POLLUTIONITEMS : GOSUB 3300\n2600 PRINT\n2700 ITEMKEY = LOCATIONKEY : ITEMVALUE = LOCATIONVALUE : ITEMS = LOCATIONITEMS : GOSUB 3300\n2800 PRINT\n2900 GOSUB 5400 : REM PUBLISH WEATHER DATA\n3000 GOSUB 5000 : REM SLEEP\n3100 WEND\n3200 END\n3300 REM PRINT ITEM KEY VALUE PAIRS\n3400 PRINT\n3500 FOR I = 1 TO ITEMS\n3600 PORT = ITEMKEY : PDATA = I - 1 : GOSUB 4300 : PRINT RSTRING$, \n3700 NEXT I\n3800 PRINT\n3900 FOR I = 1 TO ITEMS\n4000 PORT = ITEMVALUE : PDATA = I - 1 : GOSUB 4300 : PRINT RSTRING$, \n4100 NEXT I\n4200 RETURN\n4300 REM SUBROUTINE READS STRING DATA FROM PORT UNTIL NULL CHARACTER\n4400 OUT PORT, PDATA\n4500 RSTRING$ = ""\n4600 C=INP(200)\n4700 IF C = 0 THEN RETURN\n4800 RSTRING$ = RSTRING$ + CHR$(C)\n4900 GOTO 4600\n5000 PRINT "" : PRINT CHR$(27) + "[31;22;24m" + "Sleep for"; SECONDS% ; "seconds." + CHR$(27) + "[0m"\n5100 OUT 30, SECONDS%\n5200 IF INP(30) = 1 THEN GOTO 5200\n5300 RETURN\n5400 REM PUBLISH WEATHER DATA\n5500 REM WAIT FOR PUBLISH WEATHER PENDING TO GO FALSE\n5600 WAIT 32, 1, 1\n5700 REM PUBLISH TO IOT CENTRAL WITH JITTER\n5800 OUT 32, 0\n5900 RETURN\n')),(0,r.kt)("p",null,"When you run this application, weather and pollution data are published to Azure IoT Central. You can view the data in the Azure IoT Central web portal, from the ",(0,r.kt)("strong",{parentName:"p"},"Pollution")," and ",(0,r.kt)("strong",{parentName:"p"},"Weather")," tabs for your device."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This image shows an IoT Central chart.",src:a(1580).Z,width:"1247",height:"833"})),(0,r.kt)("h2",{id:"generating-anomaly-weather-data"},"Generating anomaly weather data"),(0,r.kt)("p",null,"The anomaly app publishes weather data sourced from Open Weather Map to Azure IoT Central. The anomaly app adds random jitter values to the temperature. The jitter values are added to the temperature so you can see the effect of anomalies when using the ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/cognitive-services/anomaly-detector/"},"Azure Anomaly Detection Cognitive Service"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The image shows the anomaly basic app running",src:a(4331).Z,width:"900",height:"618"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'100 WIDTH 150\n200 PRINT "===================================================="\n300 PRINT "OPEN WEATHER MAP IOT APP"\n400 DELAY% = 10\n500 WEATHERPORT = 35\n600 LOCATIONPORT = 37\n700 POLLUTIONPORT = 39\n800 DEF FNNEXTJITTER(ROW#, DELAY%) = ROW# + 1 + (INT(RND * 60) * 180 / DELAY% )\n900 DEF FNJITTERTEMPERATURE(TEMPERATURE$) = VAL(TEMPERATURE$) + 30 - INT(RND * 20) : REM Return temperature plus random value\n1000 REM GET RANDOM NUMBER SEED FROM PLATFORM\n1100 PORT = 44 : GOSUB 4700 : RANDOMIZE VAL(RSTRING$)\n1200 PRINT "SEND WEATHER DATA TO IOT CENTRAL EVERY";DELAY%;"SECONDS"\n1300 RCOUNT# = 0\n1400 NEXTJITTER# = FNNEXTJITTER(RCOUNT#, DELAY%)\n1500 WHILE 1\n1600 RCOUNT# = RCOUNT# + 1\n1700 PRINT "===================================================="\n1800 PRINT CHR$(27) + "[33;22;24m" + "Reading:"; RCOUNT#; "| Next jitter:";NEXTJITTER#; "| BASIC free memory:"; FRE(0); CHR$(27) + "[0m"\n1900 REM GET TIME AS STRING\n2000 PORT = 43 : GOSUB 4700 : PRINT "Time (local): ";RSTRING$\n2100 PORT = WEATHERPORT : PDATA = 0 : GOSUB 4700 : TEMPERATURE$ = RSTRING$\n2200 PORT = WEATHERPORT : PDATA = 1 : GOSUB 4700 : PRESSURE$ = RSTRING$\n2300 PORT = WEATHERPORT : PDATA = 2 : GOSUB 4700 : HUMIDITY$ = RSTRING$\n2400 PORT = POLLUTIONPORT : PDATA = 0 : GOSUB 4700 : AIRQUALITYINDEX$ = RSTRING$\n2500 PORT = LOCATIONPORT : PDATA = 0 : GOSUB 4700 : LATITUDE$ = RSTRING$\n2600 PORT = LOCATIONPORT : PDATA = 1 : GOSUB 4700 : LONGITUDE$ = RSTRING$\n2700 IF RCOUNT# = NEXTJITTER# THEN TEMPERATURE$ = STR$(FNJITTERTEMPERATURE(TEMPERATURE$)) : NEXTJITTER# = FNNEXTJITTER(RCOUNT#, DELAY%)\n2800 PRINT : PRINT "Celsius", "Millibars", "Humidity %", "AQI (CAQI)", "Latitude", "Longitude"\n2900 PRINT TEMPERATURE$, PRESSURE$, HUMIDITY$, AIRQUALITYINDEX$, LATITUDE$, LONGITUDE$\n3000 PRINT\n3100 GOSUB 3700 : REM Generate JSON\n3200 GOSUB 5900 : REM Publish JSON\n3300 PRINT: PRINT CHR$(27) + "[31;22;24m" + "Sleep for";DELAY%;"seconds." + CHR$(27) + "[0m"\n3400 GOSUB 5400\n3500 WEND\n3600 END\n3700 REM BUILD JSON STRING\n3800 RJSON$ = "{"\n3900 RJSON$ = RJSON$ + CHR$(34) + "temperature" + CHR$(34) + ":" + TEMPERATURE$ + ","\n4000 RJSON$ = RJSON$ + CHR$(34) + "pressure" + CHR$(34) + ":" +  PRESSURE$ + ","\n4100 RJSON$ = RJSON$ + CHR$(34) + "humidity" + CHR$(34) + ":" +  HUMIDITY$ + ","\n4200 RJSON$ = RJSON$ + CHR$(34) + "latitude" + CHR$(34) + ":" +  LATITUDE$ + ","\n4300 RJSON$ = RJSON$ + CHR$(34) + "longitude" + CHR$(34) + ":" +  LONGITUDE$ + ","\n4400 RJSON$ = RJSON$ + CHR$(34) + "aqi" + CHR$(34) + ":" +  AIRQUALITYINDEX$\n4500 RJSON$ = RJSON$ + "}"\n4600 RETURN\n4700 REM SUBROUTINE READS STRING DATA FROM PORT UNTIL NULL CHARACTER\n4800 OUT PORT, PDATA\n4900 RSTRING$ = ""\n5000 C=INP(200)\n5100 IF C = 0 THEN RETURN\n5200 RSTRING$ = RSTRING$ + CHR$(C)\n5300 GOTO 5000\n5400 REM SUBROUTINE DELAYS PROGRAM EXECUTION BY DELAY% SECONDS\n5500 OUT 30, DELAY%\n5600 IF INP(30) = 1 THEN GOTO 5600\n5700 WAIT 31, 1, 1 : REM WAIT FOR PUBLISH JSON PENDING TO GO FALSE\n5800 RETURN\n5900 REM SUBROUTINE PUBLISHES JSON TO AZURE IOT\n6000 LENGTH% = LEN(RJSON$)\n6100 IF LENGTH% = 0 THEN RETURN\n6200 IF LENGTH% > 256 THEN RETURN\n6300 PRINT CHR$(27) + "[94;22;24m" + "PUBLISHING JSON TO AZURE IOT" + CHR$(27) + "[0m"\n6400 PRINT RJSON$\n6500 FOR DATAINDEX% = 1 TO LENGTH%\n6600 OUT 31, ASC(MID$(RJSON$, DATAINDEX%, 1))\n6700 NEXT DATAINDEX%\n6800 OUT 31, 0 : REM TERMINATING NULL CAUSE PUBLISH TO AZURE IOT\n6900 RETURN\n')),(0,r.kt)("h2",{id:"font-support"},"Font support"),(0,r.kt)("p",null,"The following example shows how to use the Intel 8080 IO ports to display characters on the Pi Sense HAT or Retro Click 8x8 LED panels. To understand IO ports, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/Altair8800.Emulator.UN-X/blob/main/AltairHL_emulator/io_ports.c"},"io_ports.c")," source code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-basic"},"100 REM 8x8 LED Panel Demo\n200 OUT 80,1 : REM Flip the 8x8 LED panel to FONT mode\n300 FOR J = 1 TO 10\n400 FOR I = 33 TO 122\n500 OUT 81, I MOD 3 : REM Cycle font color\n600 OUT 85, I : REM Display character on the 8x8 LED panel\n700 PRINT CHR$(I)\n800 OUT 29, 250 : WAIT 29, 1, 1 : REM Pause for 250 milliseconds\n900 NEXT I\n1000 NEXT J\n1100 OUT 80,0\n")))}c.isMDXComponent=!0},240:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4-bit-color-chart-e6b3e3a4f4b96b865dfb27bfea68e420.png"},4331:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anomaly_app-dd1098d833c57ad7cde2fbff3336041e.png"},1580:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iot-central-device-tabs-1b38ed223539fbb7e93a491368174e50.png"},5648:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},686:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/weather_basic_app-d9dc9bfe1658223833183bfd8ad0030c.png"}}]);