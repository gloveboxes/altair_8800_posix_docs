"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[3748],{4137:(e,t,a)=>{a.d(t,{Zo:()=>T,kt:()=>E});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},T=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},R="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,T=l(e,["components","mdxType","originalType","parentName"]),R=s(a),m=r,E=R["".concat(p,".").concat(m)]||R[m]||N[m]||o;return a?n.createElement(E,i(i({ref:t},T),{},{components:a})):n.createElement(E,i({ref:t},T))}));function E(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[R]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1583:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>N,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(4137));const o={},i="Microsoft BASIC",l={unversionedId:"start/programming/Microsoft-BASIC-programming",id:"start/programming/Microsoft-BASIC-programming",title:"Microsoft BASIC",description:"Bill Gates and Paul Allen wrote Altair BASIC. It was Microsoft's first product. Later, Microsoft released Microsoft BASIC for CP/M, see the Microsoft BASIC-80 reference manual.",source:"@site/docs/start/programming/02-Microsoft-BASIC-programming.md",sourceDirName:"start/programming",slug:"/start/programming/Microsoft-BASIC-programming",permalink:"/altair_8800_docs/start/programming/Microsoft-BASIC-programming",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/start/programming/02-Microsoft-BASIC-programming.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"start",previous:{title:"Intel 8080 IO Ports",permalink:"/altair_8800_docs/start/programming/i8080-IO-Ports"},next:{title:"C programming",permalink:"/altair_8800_docs/start/programming/C-programming"}},p={},s=[{value:"Get started with Microsoft BASIC-80",id:"get-started-with-microsoft-basic-80",level:2},{value:"Setting text colors",id:"setting-text-colors",level:2},{value:"Use Intel 8080 input and output ports",id:"use-intel-8080-input-and-output-ports",level:2},{value:"Run the TIME.BAS application",id:"run-the-timebas-application",level:3},{value:"Run the WEATHER.BAS application",id:"run-the-weatherbas-application",level:3},{value:"Generating anomaly weather data",id:"generating-anomaly-weather-data",level:2},{value:"Font support",id:"font-support",level:2}],T={toc:s},R="wrapper";function N(e){let{components:t,...o}=e;return(0,r.kt)(R,(0,n.Z)({},T,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"microsoft-basic"},"Microsoft BASIC"),(0,r.kt)("p",null,"Bill Gates and Paul Allen wrote ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Altair_BASIC?azure-portal=true"},"Altair BASIC"),". It was Microsoft's first product. Later, Microsoft released Microsoft BASIC for CP/M, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/Altair8800.manuals/blob/master/AA-P226A-TV_BASIC-80_Reference_Manual_VT180_V5.21_1981.pdf?azure-portal=true"},"Microsoft BASIC-80 reference manual"),"."),(0,r.kt)("p",null,"In the following exercise, you'll learn how to write your first Microsoft BASIC application."),(0,r.kt)("h2",{id:"get-started-with-microsoft-basic-80"},"Get started with Microsoft BASIC-80"),(0,r.kt)("p",null,"Microsoft BASIC-80 is included on drive A."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Switch back to the web terminal in your web browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the CP/M command prompt, run the following command to start Microsoft BASIC."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mbasic\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run an interactive command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'print "Hello, world!"\n')),(0,r.kt)("p",{parentName:"li"},"The BASIC interpreter with execute the command immediately and display ",(0,r.kt)("strong",{parentName:"p"},"Hello, World!"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your first program:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},"10 for i = 1 to 1000000\n20 print i\n30 next i\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run your program"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},"run\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the program by selecting ",(0,r.kt)("strong",{parentName:"p"},"Ctrl+C"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save your program to disk:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'save "TEST.BAS"\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Name all files using ",(0,r.kt)("strong",{parentName:"p"},"CAPITAL LETTERS"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Load your program from disk:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'load "TEST.BAS"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Quit BASIC:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-basic"},"system\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to start your BASIC application from the CP/M command prompt."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpm"},"mbasic test\n")))),(0,r.kt)("p",null,"You can learn more about BASIC from the following BASIC applications included with the Altair emulator:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"COUNT.BAS")," demonstrates how to use the Intel 8080 IO Port 30 to sleep or delay an application for a specific period."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DISKRW.BAS")," is a test application that opens and repeatedly reads and writes a text file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FONT.BAS")," shows how to write ASCII characters to the 8x8 LED panels on the Pi Sense HAT or Retro Click."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JSON.BAS")," reads weather and pollution data and then publishes JSON data to Azure IoT Central."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LOOPY.BAS")," is a test application that generates a lot of messages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STARTREK.BAS")," is a game."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TICTAK.BAS:")," A simple game of naughts and crosses."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TIME.BAS")," demonstrates how to use the time Intel 8080 IO ports including setting a sleep timer, access to the system tick counter, and local and UTC date and times."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WEATHER.BAS")," reads weather and pollution data from Open Weather Map and adds random ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Jitter"},"jitter")," to the temperature data at random intervals. The jittered temperature is used for anomaly detection. The weather and pollution data is then streamed to Azure IoT Central at regular intervals.")),(0,r.kt)("h2",{id:"setting-text-colors"},"Setting text colors"),(0,r.kt)("p",null,"Text color can be controlled using 4-bit VT220 control characters. For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences"},"List of ANSI color escape sequences"),"."),(0,r.kt)("p",null,"The standards implementing terminal colors began with limited (4-bit) options. The table below lists the RGB values of the background and foreground colors used for these by a variety of terminal emulators:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The image shows 4-bit color chart",src:a(240).Z,width:"2624",height:"1034"})),(0,r.kt)("h2",{id:"use-intel-8080-input-and-output-ports"},"Use Intel 8080 input and output ports"),(0,r.kt)("p",null,"The BASIC language has support for Intel 8080 CPU input and output port instructions. The TIME.BAS application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gets the system tick count from port 41"),(0,r.kt)("li",{parentName:"ul"},"gets the UTC date and time from port 42"),(0,r.kt)("li",{parentName:"ul"},"gets the local date and time from port 43"),(0,r.kt)("li",{parentName:"ul"},"and sets a sleep period using output port 30, and then waits on input port 30 for the delay period to expire.")),(0,r.kt)("p",null,"For more information about Intel 8080 IO port mappings, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/Altair8800.Emulator.UN-X/wiki#intel-8080-input-and-output-ports"},"Intel 8080 input and output ports"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The image shows the time app running",src:a(5648).Z,width:"2264",height:"1397"})),(0,r.kt)("p",null,"The following BASIC program is the listing of ",(0,r.kt)("em",{parentName:"p"},"TIME.BAS"),". The Time app uses color escape codes to control text colors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'10 WIDTH 100\n20 PRINT "===================================================="\n30 PRINT "TIME DEMOS"\n40 SECONDS% = 1\n\n50 WHILE 1\n60 PRINT "==============================================="\n\n70 PORT = 41 : GOSUB 160 : PRINT chr$(27) + "[91;22;24m" + "System tick count: ";RSTRING$;chr$(27) + "[0m"\n80 PORT = 42 : GOSUB 160 : PRINT chr$(27) + "[92;22;24m" + "UTC date and time: ";RSTRING;chr$(27) + "[0m"\n90 PORT = 43 : GOSUB 160 : PRINT chr$(27) + "[94;22;24m" + "Local date and time: ";RSTRING$; chr$(27) + "[0m"\n\n130 GOSUB 230\n\n140 WEND\n150 END\n\n160 REM SUBROUTINE READS STRING DATA FROM PORT UNTIL NULL CHARACTER\n170 RSTRING$ = ""\n175 OUT PORT, 0\n180 C=INP(200)\n190 IF C = 0 THEN RETURN\n200 RSTRING$ = RSTRING$ + CHR$(C)\n210 GOTO 180\n\n220 REM PAUSE FOR N NUMBER OF SECONDS\n230 PRINT "" : PRINT "Pause";SECONDS%;"seconds."\n240 OUT 30, SECONDS%\n250 WAIT 30, 1, 1\n260 RETURN\n')),(0,r.kt)("h3",{id:"run-the-timebas-application"},"Run the TIME.BAS application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To start Microsoft BASIC, from the CP/M command prompt, enter:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpm"},"mbasic time\n")),(0,r.kt)("p",{parentName:"li"},"Microsoft BASIC starts and runs the ",(0,r.kt)("em",{parentName:"p"},"TIME.BAS")," application. The ",(0,r.kt)("em",{parentName:"p"},"TIME.BAS")," application displays the system tick count, along with the local and UTC date and time.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the program by selecting ",(0,r.kt)("strong",{parentName:"p"},"Ctrl+C"),"."))),(0,r.kt)("h3",{id:"run-the-weatherbas-application"},"Run the WEATHER.BAS application"),(0,r.kt)("p",null,"The WEATHER.BAS application reads weather and pollution data provided by Open Weather Map. Like the COUNT.BAS application, WEATHER.BAS uses Intel 8080 IO Ports to access the data."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This image displays output from the BASIC WEATHER application",src:a(686).Z,width:"1265",height:"710"})),(0,r.kt)("p",null,"The following BASIC program is the listing of ",(0,r.kt)("em",{parentName:"p"},"WEATHER.BAS"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'100 WIDTH 150\n200 PRINT "===================================================="\n300 PRINT "OPEN WEATHER MAP IOT APP"\n400 SECONDS% = 10\n500 WEATHERKEY = 34\n600 WEATHERVALUE = 35\n700 WEATHERITEMS = 6\n800 LOCATIONKEY = 36\n900 LOCATIONVALUE = 37\n1000 LOCATIONITEMS = 4\n1100 POLLUTIONKEY = 38\n1200 POLLUTIONVALUE = 39\n1300 POLLUTIONITEMS = 9\n1400 PRINT "PUBLISH WEATHER DATA TO IOT CENTRAL EVERY";SECONDS%;"SECONDS"\n1500 RCOUNT% = 0\n1600 READING# = 0\n1700 WHILE 1\n1800 READING# = READING# + 1\n1900 PRINT "============================================================================================================================"\n2000 PORT = 43 : GOSUB 4300 : TIME$ = RSTRING$\n2100 PRINT "Reading", "Time"\n2200 PRINT READING#,  TIME$\n2300 ITEMKEY = WEATHERKEY : ITEMVALUE = WEATHERVALUE : ITEMS = WEATHERITEMS : GOSUB 3300\n2400 PRINT\n2500 ITEMKEY = POLLUTIONKEY : ITEMVALUE = POLLUTIONVALUE : ITEMS = POLLUTIONITEMS : GOSUB 3300\n2600 PRINT\n2700 ITEMKEY = LOCATIONKEY : ITEMVALUE = LOCATIONVALUE : ITEMS = LOCATIONITEMS : GOSUB 3300\n2800 PRINT\n2900 GOSUB 5400 : REM PUBLISH WEATHER DATA\n3000 GOSUB 5000 : REM SLEEP\n3100 WEND\n3200 END\n3300 REM PRINT ITEM KEY VALUE PAIRS\n3400 PRINT\n3500 FOR I = 1 TO ITEMS\n3600 PORT = ITEMKEY : PDATA = I - 1 : GOSUB 4300 : PRINT RSTRING$, \n3700 NEXT I\n3800 PRINT\n3900 FOR I = 1 TO ITEMS\n4000 PORT = ITEMVALUE : PDATA = I - 1 : GOSUB 4300 : PRINT RSTRING$, \n4100 NEXT I\n4200 RETURN\n4300 REM SUBROUTINE READS STRING DATA FROM PORT UNTIL NULL CHARACTER\n4400 OUT PORT, PDATA\n4500 RSTRING$ = ""\n4600 C=INP(200)\n4700 IF C = 0 THEN RETURN\n4800 RSTRING$ = RSTRING$ + CHR$(C)\n4900 GOTO 4600\n5000 PRINT "" : PRINT CHR$(27) + "[31;22;24m" + "Sleep for"; SECONDS% ; "seconds." + CHR$(27) + "[0m"\n5100 OUT 30, SECONDS%\n5200 IF INP(30) = 1 THEN GOTO 5200\n5300 RETURN\n5400 REM PUBLISH WEATHER DATA\n5500 REM WAIT FOR PUBLISH WEATHER PENDING TO GO FALSE\n5600 WAIT 32, 1, 1\n5700 REM PUBLISH TO IOT CENTRAL WITH JITTER\n5800 OUT 32, 0\n5900 RETURN\n')),(0,r.kt)("p",null,"When you run this application, weather and pollution data are published to Azure IoT Central. You can view the data in the Azure IoT Central web portal, from the ",(0,r.kt)("strong",{parentName:"p"},"Pollution")," and ",(0,r.kt)("strong",{parentName:"p"},"Weather")," tabs for your device."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This image shows an IoT Central chart.",src:a(1580).Z,width:"1247",height:"833"})),(0,r.kt)("h2",{id:"generating-anomaly-weather-data"},"Generating anomaly weather data"),(0,r.kt)("p",null,"The anomaly app publishes weather data sourced from Open Weather Map to Azure IoT Central. The anomaly app adds random jitter values to the temperature. The jitter values are added to the temperature so you can see the effect of anomalies when using the ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/cognitive-services/anomaly-detector/"},"Azure Anomaly Detection Cognitive Service"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The image shows the anomaly basic app running",src:a(4331).Z,width:"900",height:"618"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-basic"},'100 WIDTH 150\n200 PRINT "===================================================="\n300 PRINT "OPEN WEATHER MAP IOT APP"\n400 DELAY% = 10\n500 WEATHERPORT = 35\n600 LOCATIONPORT = 37\n700 POLLUTIONPORT = 39\n800 DEF FNNEXTJITTER(ROW#, DELAY%) = ROW# + 1 + (INT(RND * 60) * 180 / DELAY% )\n900 DEF FNJITTERTEMPERATURE(TEMPERATURE$) = VAL(TEMPERATURE$) + 30 - INT(RND * 20) : REM Return temperature plus random value\n1000 REM GET RANDOM NUMBER SEED FROM PLATFORM\n1100 PORT = 44 : GOSUB 4700 : RANDOMIZE VAL(RSTRING$)\n1200 PRINT "SEND WEATHER DATA TO IOT CENTRAL EVERY";DELAY%;"SECONDS"\n1300 RCOUNT# = 0\n1400 NEXTJITTER# = FNNEXTJITTER(RCOUNT#, DELAY%)\n1500 WHILE 1\n1600 RCOUNT# = RCOUNT# + 1\n1700 PRINT "===================================================="\n1800 PRINT CHR$(27) + "[33;22;24m" + "Reading:"; RCOUNT#; "| Next jitter:";NEXTJITTER#; "| BASIC free memory:"; FRE(0); CHR$(27) + "[0m"\n1900 REM GET TIME AS STRING\n2000 PORT = 43 : GOSUB 4700 : PRINT "Time (local): ";RSTRING$\n2100 PORT = WEATHERPORT : PDATA = 0 : GOSUB 4700 : TEMPERATURE$ = RSTRING$\n2200 PORT = WEATHERPORT : PDATA = 1 : GOSUB 4700 : PRESSURE$ = RSTRING$\n2300 PORT = WEATHERPORT : PDATA = 2 : GOSUB 4700 : HUMIDITY$ = RSTRING$\n2400 PORT = POLLUTIONPORT : PDATA = 0 : GOSUB 4700 : AIRQUALITYINDEX$ = RSTRING$\n2500 PORT = LOCATIONPORT : PDATA = 0 : GOSUB 4700 : LATITUDE$ = RSTRING$\n2600 PORT = LOCATIONPORT : PDATA = 1 : GOSUB 4700 : LONGITUDE$ = RSTRING$\n2700 IF RCOUNT# = NEXTJITTER# THEN TEMPERATURE$ = STR$(FNJITTERTEMPERATURE(TEMPERATURE$)) : NEXTJITTER# = FNNEXTJITTER(RCOUNT#, DELAY%)\n2800 PRINT : PRINT "Celsius", "Millibars", "Humidity %", "AQI (CAQI)", "Latitude", "Longitude"\n2900 PRINT TEMPERATURE$, PRESSURE$, HUMIDITY$, AIRQUALITYINDEX$, LATITUDE$, LONGITUDE$\n3000 PRINT\n3100 GOSUB 3700 : REM Generate JSON\n3200 GOSUB 5900 : REM Publish JSON\n3300 PRINT: PRINT CHR$(27) + "[31;22;24m" + "Sleep for";DELAY%;"seconds." + CHR$(27) + "[0m"\n3400 GOSUB 5400\n3500 WEND\n3600 END\n3700 REM BUILD JSON STRING\n3800 RJSON$ = "{"\n3900 RJSON$ = RJSON$ + CHR$(34) + "temperature" + CHR$(34) + ":" + TEMPERATURE$ + ","\n4000 RJSON$ = RJSON$ + CHR$(34) + "pressure" + CHR$(34) + ":" +  PRESSURE$ + ","\n4100 RJSON$ = RJSON$ + CHR$(34) + "humidity" + CHR$(34) + ":" +  HUMIDITY$ + ","\n4200 RJSON$ = RJSON$ + CHR$(34) + "latitude" + CHR$(34) + ":" +  LATITUDE$ + ","\n4300 RJSON$ = RJSON$ + CHR$(34) + "longitude" + CHR$(34) + ":" +  LONGITUDE$ + ","\n4400 RJSON$ = RJSON$ + CHR$(34) + "aqi" + CHR$(34) + ":" +  AIRQUALITYINDEX$\n4500 RJSON$ = RJSON$ + "}"\n4600 RETURN\n4700 REM SUBROUTINE READS STRING DATA FROM PORT UNTIL NULL CHARACTER\n4800 OUT PORT, PDATA\n4900 RSTRING$ = ""\n5000 C=INP(200)\n5100 IF C = 0 THEN RETURN\n5200 RSTRING$ = RSTRING$ + CHR$(C)\n5300 GOTO 5000\n5400 REM SUBROUTINE DELAYS PROGRAM EXECUTION BY DELAY% SECONDS\n5500 OUT 30, DELAY%\n5600 IF INP(30) = 1 THEN GOTO 5600\n5700 WAIT 31, 1, 1 : REM WAIT FOR PUBLISH JSON PENDING TO GO FALSE\n5800 RETURN\n5900 REM SUBROUTINE PUBLISHES JSON TO AZURE IOT\n6000 LENGTH% = LEN(RJSON$)\n6100 IF LENGTH% = 0 THEN RETURN\n6200 IF LENGTH% > 256 THEN RETURN\n6300 PRINT CHR$(27) + "[94;22;24m" + "PUBLISHING JSON TO AZURE IOT" + CHR$(27) + "[0m"\n6400 PRINT RJSON$\n6500 FOR DATAINDEX% = 1 TO LENGTH%\n6600 OUT 31, ASC(MID$(RJSON$, DATAINDEX%, 1))\n6700 NEXT DATAINDEX%\n6800 OUT 31, 0 : REM TERMINATING NULL CAUSE PUBLISH TO AZURE IOT\n6900 RETURN\n')),(0,r.kt)("h2",{id:"font-support"},"Font support"),(0,r.kt)("p",null,"The following example shows how to use the Intel 8080 IO ports to display characters on the Pi Sense HAT or Retro Click 8x8 LED panels. To understand IO ports, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/Altair8800.Emulator.UN-X/blob/main/AltairHL_emulator/io_ports.c"},"io_ports.c")," source code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-basic"},"100 REM 8x8 LED Panel Demo\n200 OUT 80,1 : REM Flip the 8x8 LED panel to FONT mode\n300 FOR J = 1 TO 10\n400 FOR I = 33 TO 122\n500 OUT 81, I MOD 3 : REM Cycle font color\n600 OUT 85, I : REM Display character on the 8x8 LED panel\n700 PRINT CHR$(I)\n800 OUT 29, 250 : WAIT 29, 1, 1 : REM Pause for 250 milliseconds\n900 NEXT I\n1000 NEXT J\n1100 OUT 80,0\n")))}N.isMDXComponent=!0},240:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/4-bit-color-chart-e6b3e3a4f4b96b865dfb27bfea68e420.png"},4331:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/anomaly_app-dd1098d833c57ad7cde2fbff3336041e.png"},1580:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/iot-central-device-tabs-1b38ed223539fbb7e93a491368174e50.png"},5648:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/time_app-3364c3b31cab4464266394e72e15b84f.png"},686:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/weather_basic_app-d9dc9bfe1658223833183bfd8ad0030c.png"}}]);