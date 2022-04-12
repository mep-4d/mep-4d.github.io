const app = Vue.createApp({

    data() {
        return {
            selectM1:"", selectM2:"", selectM3:"",
            listsMA    :["AHU","FCU","VAV","Extract Fan","Supply Fan","Smoke Fan","MVHR","Smoke Damper","Control Damper","Air Diffuser","..."],
            listsMB    :["Boilers","Chillers","CHP","Control Valves","Pumps","Energy Meter","..."],
            listsMC    :["Booster Set","Tanks","Valves","Flow Meter","..."],
            listsMD    :["Valve","Booster","Valves","Gas Meter","..."],
            listM1:[], listM2:[],
            selectE1:"", selectE2:"", selectE3:"",
            listsEA    :["...","...","..."],
            listsEB    :["...","...","..."],
            listsEC    :["...","...","..."],
            listsED    :["...","...","..."],
            listE1:[], listE2:[],
            selectC1:"", selectC2:"", selectC3:"",
            listsCA    :["...","...","..."],
            listsCB    :["...","...","..."],
            listsCC    :["...","...","..."],
            listsCD    :["...","...","..."],
            listC1:[], listC2:[],
            selectS1   :"", selectS2   :"", selectS3   :"",
            textInS1   :"",
            list01     :[],
            listsA     :["AHU","FCU","VAV","Extract_Fan","Supply_Fan","Smoke_Fan","Boiler","Chiller","Pump","Valve","Commissioning_Point"],
            listsB     :["DB","Switch_Board","Socket_Outlet","Fused_Outlet","Isolator"],
            listsC     :["CHW_Thermal_Energy","LTHW_Thermal_Energy","Electricity","Water","Gas"],
            listsD     :["Luminaire","Wall_Pad","LCM","PIR","Switch","LED_Fixture"],
            listsE     :["Main_Enclosure","Enclosure","Terminal_Unit","Controller","I/O_Module","Translator","Sensor","Switch","Actuator","Network_Item"],
            listsF     :["Main_Enclosure","Enclosure","Touch_Panel","Interface","Voice","TV","Speaker","Switch","Network_Item"],
            listsG     :["Panel","Heat_Detector","Smoke_Detector","Alarm_Point","Relay Interface","Actuator","Vent","Network_Item"],
            listsH     :["Panel","Intrusion_Detector","IR_Beam","Alarm_Point","Relay_Interface","Network_Item"],
            locate     :[
                "B3","B2","B1","Gnd North","Gnd East","Gnd South","Gnd West","1st North","1st East","1st South","1st West","2nd North","2nd East","2nd South","2nd West",
                "3rd North","3rd East","3rd South","3rd West","4th North","4th East","4th South","4th West","5th North","5th East","5th South","5th West"
            ],
            database   :[],
	    tabledataM :[
 	    {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""},
 	    {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""},
 	    {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""},
 	    {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""},
 	    {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""},
 	    {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""},
 	    {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""},
 	    {a:"", b:"", c:"", d:"", e:"", f:"", g:"", h:"", i:""},
            ],
	    tabledataE :[
            ],
	    tabledataC :[
            ],
            selectW1:"", selectW2:"", selectW3:"",
	    tabledataW :[
            //{a:"", b:"", c:"", d:"", e:""},
            //{a:"", b:"", c:"", d:"", e:""},
            //{a:"", b:"", c:"", d:"", e:""}
            ],
	    visibleW1  :false,
	    joblist    :[],
	    job        :"",
            msgRecvd   :{test_string:""}
        };
    },

    computed: {
            hLastRcvd() {
            var msgRecvd = this.msgRecvd
            if (typeof msgRecvd === 'string') return 'Last Message Received = ' + msgRecvd
            else return 'Last Message Received = ' + this.syntaxHighlight(msgRecvd)
        }
    },

    methods: {
	    
            getData() {
	    fetch("https://api.apispreadsheets.com/data/20934/").then(res=>{
	    //if (res.status === 200){
		res.json().then(data=>{
			this.database = data
		})//.catch(err => console.log(err))}else{console.log("nah")}
                })
            console.log("getting data from g-drive")
            setTimeout(this.compileW, 4000)
            },
	    
	    syntaxHighlight(json) {
            json = JSON.stringify(json, undefined, 4)
            json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                var cls = 'number'
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key'
                    } else {
                        cls = 'string'
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean'
                } else if (/null/.test(match)) {
                    cls = 'null'
                }
                return '<span class="' + cls + '">' + match + '</span>'
            })
            return json
            }, // --- End of syntaxHighlight --- //
	    
	    listWorksA() {
	    var a = this.selectW1
	    if (a === "1") {this.createTableW1()}
	    if (a === "2") {this.createTableW2()}
	    },
	    compileW() {
	    var a = this.database
	    var b = this.database.data.length
            var c = this.tabledataW.length
		    if (c == 0) {
		    for (var i = 0; i < b; i++) {
                    this.tabledataW.push({
                    a:a.data[i].paramA,
                    b:a.data[i].paramB,
                    c:a.data[i].paramC,
                    d:a.data[i].paramD,
                    e:a.data[i].paramE,
                    f:a.data[i].paramF,
                    g:a.data[i].paramG,
                    h:a.data[i].paramH,
                    i:a.data[i].paramI,
                    j:a.data[i].paramJ,
                    });
		    }}
		    //this.createTableW()
	    },
            createTableW1() {
	    var self = this;
	    var table = new Tabulator("#works-table", {
            rowClick:function(e, row){
                    self.joblist = new Array(row._row.cells[0].value, row._row.cells[2].value);
		    self.visibleW1 = true;
		    self.detailWork();
            },
 	    data:this.tabledataW,
 	    layout:"fitColumns",
 	    columns:[ //Define Table Columns
	 	{title:"System", field:"a"},
	 	{title:"Works Required", field:"b"},
	 	{title:"Issue Logged", field:"c"},
	 	{title:"Date Logged", field:"d"},
 	        ],
            });    
	    },
	    
	    createTableW2() {
	    var self = this;
	    var table = new Tabulator("#works-table", {
            rowClick:function(e, row){
                    self.joblist = new Array(row._row.cells[0].value, row._row.cells[2].value);
		    self.visibleW1 = true;
		    self.detailWork();
            },
 	    data:this.tabledataW,
 	    layout:"fitColumns",
 	    columns:[ //Define Table Columns
	 	{title:"System", field:"a"},
	 	{title:"Works", field:"b"},
	 	{title:"Scheduled Date", field:"e"},
 	        ],
            });    
	    },
	    
	    detailWork() {
	    var selected = this.joblist[0];
	    this.job = selected;
	    },
	    
	    compile() {
		    var a = this.database
		    var b = a.data.length
		    var c = this.tabledataC.length
		    if (c == 0) {
		    for (var i = 0; i < b; i++) {
	            if (a.data[i].paramJ.includes("bms")) {
                    this.tabledataC.push({
                    a:a.data[i].paramA,
                    b:a.data[i].paramB,
                    c:a.data[i].paramC,
                    d:a.data[i].paramD,
                    e:a.data[i].paramE,
                    f:a.data[i].paramF,
                    g:a.data[i].paramG,
                    h:a.data[i].paramH,
                    i:a.data[i].paramI,
                    });
		    }
		    }
		    }
		    this.createTableC()
	    },
	    
	    test() {
		    var a = this.database
		    var b = a.data
		    var c = this.tabledataW
		    var d = this.joblist
		    var e = this.visibleW1
		    console.log(d, e)
	    },
        
            sendData() {
            fetch("https://api.apispreadsheets.com/data/20934/", {
	        method: "POST",
	        body: JSON.stringify({"data": {"paramA":"a","paramB":"b","paramC":"c","paramD":"d","paramE":"e","paramF":"f","paramG":"g","paramH":"h","paramI":"i","paramJ":"j"}}),
            }).then(res =>{
	        if (res.status === 201){console.log("success")} 
                else{console.log("nah")}
            })
            },
	    
            listItemsM() {
            console.log("selectionMA");
            var a = this.listsMA
            var b = this.listsMB
            var c = this.listsMC
            var d = this.listsMD
            if (this.selectM1 == "1") {this.listM1 = a} 
            else if (this.selectM1 == "2") {this.listM1 = b} 
            else if (this.selectM1 == "3") {this.listM1 = c} 
            else if (this.selectM1 == "4") {this.listM1 = d} 
            },
            listTypesM() {
            console.log("selectionMB");
	    if (this.selectM2.includes("AHU")) {this.listM2 = new Array("Large Modular","Medium Modular","Small Modular","Large packaged","Medium Packaged","Small Packaged")};
	    if (this.selectM2.includes("FCU")) {this.listM2 = new Array("2 Pipe VS","4 Pipe VS","AirSide","Multi-Zone","Packaged Controls")};
	    if (this.selectM2.includes("VAV")) {this.listM2 = new Array("VAV Type 1","VAV Type 2")};
	    if (this.selectM2.includes("Ext")) {this.listM2 = new Array("Fan Type 1","Fan Type 2")};
	    if (this.selectM2.includes("Boi")) {this.listM2 = new Array("d","e","f")}
	    if (this.selectM2.includes("Chi")) {this.listM2 = new Array("a","b","c")}
	    if (this.selectM2.includes("Val")) {this.listM2 = new Array("PICV","DRV","DPCV")}
	    if (this.selectM2.includes("Pum")) {this.listM2 = new Array("Small Pump","2 Pump Set","3 Pump Set")}
            },
            createTableM() {
	    var table = new Tabulator("#mechanical-table", {
 	    data:this.tabledataM,
 	    layout:"fitColumns",
 	    columns:[ //Define Table Columns
	 	{title:"Manufacturer", field:"a"},
	 	{title:"Unit Code", field:"b"},
	 	{title:"Description", field:"c"},
	 	{title:"Features", field:"d", formatter:"textarea"},
	 	{title:"Commission", field:"e"},
	 	{title:"Performance", field:"f"},
	 	{title:"Life", field:"g"},
	 	{title:"Cost", field:"h"},
	 	{title:"Issues", field:"i"},
 	        ],
            });    
	    },
        
            listItemsE() {
            console.log("selectionEA");
            var a = this.listsEA
            var b = this.listsEB
            var c = this.listsEC
            var d = this.listsED
            if (this.selectE1 == "1") {this.listE1 = a} 
            else if (this.selectE1 == "2") {this.listE1 = b} 
            else if (this.selectE1 == "3") {this.listE1 = c} 
            else if (this.selectE1 == "4") {this.listE1 = d} 
            },
            listTypesE() {
            console.log("selectionEB");
            },
            createTableE() {
	    var table = new Tabulator("#electrical-table", {
 	    data:this.tabledataE,
 	    layout:"fitColumns",
 	    columns:[ //Define Table Columns
	 	{title:"Manufacturer", field:"a"},
	 	{title:"Unit Code", field:"b"},
	 	{title:"Description", field:"c"},
	 	{title:"Features", field:"d", formatter:"textarea"},
	 	{title:"Commission", field:"e"},
	 	{title:"Performance", field:"f"},
	 	{title:"Life", field:"g"},
	 	{title:"Cost", field:"h"},
	 	{title:"Issues", field:"i"},
 	        ],
            });    
	    },
	    
            listItemsC() {
            console.log("selectionCA");
            var a = this.listsCA
            var b = this.listsCB
            var c = this.listsCC
            var d = this.listsCD
            if (this.selectC1 == "1") {this.listC1 = a} 
            else if (this.selectC1 == "2") {this.listC1 = b} 
            else if (this.selectC1 == "3") {this.listC1 = c} 
            else if (this.selectC1 == "4") {this.listC1 = d} 
            },
            listTypesC() {
            console.log("selectionCB");
            },
            createTableC() {
	    var table = new Tabulator("#controls-table", {
 	    data:this.tabledataC,
 	    layout:"fitColumns",
 	    columns:[ //Define Table Columns
	 	{title:"Manufacturer", field:"a"},
	 	{title:"Product", field:"b"},
	 	{title:"Description", field:"c"},
	 	{title:"Features", field:"d", formatter:"textarea", width:240},
	 	{title:"Engineering", field:"e"},
	 	{title:"Performance", field:"f"},
	 	{title:"Reliability", field:"g"},
	 	{title:"Cost", field:"h"},
	 	{title:"Real World", field:"i", formatter:"textarea", width:220},
 	        ],
            });    
	    },
	    
        listItem() {
            console.log("selection");
            var a = this.listsA
            var b = this.listsB
            var c = this.listsC
            var d = this.listsD
            var e = this.listsE
            var f = this.listsF
            var g = this.listsG
            var h = this.listsH
            if (this.selectA == "1") {this.list01 = a; console.log("mec selected")} 
            else if (this.selectA == "2") {this.list01 = b; console.log("lec selected")} 
            else if (this.selectA == "3") {this.list01 = c; console.log("mtr selected")} 
            else if (this.selectA == "4") {this.list01 = d; console.log("ltg selected")}
            else if (this.selectA == "5") {this.list01 = e; console.log("bms selected")} 
            else if (this.selectA == "6") {this.list01 = f; console.log("avi selected")}
            else if (this.selectA == "7") {this.list01 = g; console.log("fir selected")}
            else if (this.selectA == "8") {this.list01 = h; console.log("sec selected")} 
            },
        inputS1(event) {
            this.textInS1 = event.target.value;
            }
        
    }
   
});

app.mount('#application');
