const app = Vue.createApp({

    data() {
        return {
            selectNA:"", selectNB:"", selectNC:"",
            listN1     :[],
            textInN1   :"",
            helpN1     :"",
            selectM1:"", selectM2:"", selectM3:"",
            listsMA    :["VMA","VMB","VMC","VMD","VME"],
            listsMB    :["HMA","HMB","HMC","HMD","HME"],
            listsMC    :["CMA","CMB","CMC","CMD","CME"],
            listsMD    :["ZMA","ZMB","ZMC","ZMD","ZME"],
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
            msgRecvd   :{a:"", b:"", c:""}
        };
    },

    computed: {
            hLastRcvd() {
            var msgRecvd = this.msgRecvd
            if (typeof msgRecvd === 'string') return 'Last Message Received = ' + msgRecvd
            else return 'Nothbound Data Object = ' + this.syntaxHighlight(msgRecvd)
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
	    if (this.selectM2.includes("VMA")) {this.listM2 = new Array("Type1,Type2,Type3,Type4,Type5")};
	    if (this.selectM2.includes("FCU")) {this.listM2 = new Array("Type1,Type2,Type3,Type4,Type5")};
	    if (this.selectM2.includes("VAV")) {this.listM2 = new Array("Type1,Type2,Type3,Type4,Type5")};
	    if (this.selectM2.includes("Ext")) {this.listM2 = new Array("Type1,Type2,Type3,Type4,Type5")};
	    if (this.selectM2.includes("Boi")) {this.listM2 = new Array("Type1,Type2,Type3,Type4,Type5")};
	    if (this.selectM2.includes("Chi")) {this.listM2 = new Array("Type1,Type2,Type3,Type4,Type5")};
	    if (this.selectM2.includes("Val")) {this.listM2 = new Array("Type1,Type2,Type3,Type4,Type5")};
	    if (this.selectM2.includes("Pum")) {this.listM2 = new Array("Type1,Type2,Type3,Type4,Type5")};
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
	    
        listSystemsN() { // REQUIRED
            console.log("nameSelectionA");
            var a = ["Panel","Controller","I/O","Interface Screen","Interface Terminal","T Sensor Air","T Sensor Water","P Sensor Air","P Sensor Water","T Sensor Space",
		     "Hum Sensor Space","AQ Sensor","T Stat Air","T Stat Water","Control Valve","Valve Actuator","Damper Actuator","VSD"
		    ]; //BMS ITEMS
            var b = ["Panel","Switchboard","Dist Board","UPS","TX","MCB","ACB","MCCB","Surge Protection","Bus Coupler","Battery Charger","Generator",""
		    ]; //PMS ITEMS
            var c = ["Panel","Gateway","Serial Node",""
		    ]; //EMS ITEMS
            var d = ["Boiler","Pump","Valve","Radiator","Heater",""
		    ]; //HTG ITEMS
            var e = this.listsE
            var f = this.listsF
            var g = this.listsG
            var h = this.listsH
            if (this.selectNA == "1") {this.listN1 = a; console.log("bms selected")} 
            else if (this.selectNA == "2") {this.listN1 = b; console.log("pms selected")} 
            else if (this.selectNA == "3") {this.listN1 = c; console.log("ems selected")} 
            else if (this.selectNA == "4") {this.listN1 = d; console.log("htg selected")}
            else if (this.selectNA == "5") {this.listN1 = e; console.log("clg selected")} 
            else if (this.selectNA == "6") {this.listN1 = f; console.log("vnt selected")}
            else if (this.selectNA == "7") {this.listN1 = g; console.log("ph. selected")}
            else if (this.selectNA == "8") {this.listN1 = h; console.log("hvc selected")} 
            else if (this.selectNA == "9") {this.listN1 = g; console.log("ltg selected")}
            else if (this.selectNA == "10") {this.listN1 = h; console.log("met selected")} 
            else if (this.selectNA == "11") {this.listN1 = h; console.log("sec selected")} 
            else if (this.selectNA == "12") {this.listN1 = g; console.log("lft selected")}
            else if (this.selectNA == "13") {this.listN1 = h; console.log("av. selected")} 
            else if (this.selectNA == "14") {this.listN1 = h; console.log("fir selected")} 
            else if (this.selectNA == "15") {this.listN1 = h; console.log("it. selected")} 
            },
            inputN1(event) { // REQUIRED
            this.textInN1 = event.target.value;
		    console.log(event.target.value)
            },
	    
	    getAssetName() {
		    var a = this.selectNA
		    var b = this.selectNB
		    var c = this.textInN1
		    this.resource = a+b+c
	    },
	    
            getHelpN() { // REQUIRED
	    var a = this.selectNA
	    var b = this.selectNB
		console.log(a, b)
	    if (a == "1" && b == "Panel") {
		    this.helpN1 = "Input the panel identifier in the text box exactly as its referenced i.e MCC-01-01 including hyphens or underscores. "+
			     "Replace any blank spaces with a hyphen i.e. CP 01 01 would become CP-01-01"
            };
	    }
        
    }
 
});

app.mount('#application');
