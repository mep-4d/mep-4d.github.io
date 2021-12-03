const app = Vue.createApp({

    data() {
        return {
            selectM1   :"",
            selectM2   :"",
            selectM3   :"",
            listsMA    :["AHU","FCU","VAV","Extract Fan","Supply Fan","Smoke Fan","MVHR","Smoke Damper","Control Damper","Air Diffuser","..."],
            listsMB    :["Boiler","Chiller","Control Valve","Isolation Valve","Balancing Valve","..."],
            selectA    :"",
            selectB    :"",
            selectC    :"",
            textInA    :"",
            listM1     :[],
            listM2     :[],
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
            resource   :"",
        };
    },

    computed: {
    },

    methods: {
        
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
            if (this.selectM1 == "1") {this.listM1 = a} 
            else if (this.selectM1 == "2") {this.listM1 = b} 
            },
        listTypesM() {
            console.log("selection");
	    if (this.selectM2.includes("Chill")) {this.listM2 = new Array("a","b","c")} 
	    else if (this.selectM2.includes("Boil")) {this.listM2 = new Array("d","e","f")} 
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
        
        inputA(event) {
            this.textInA = event.target.value;
            },
        
        identifyA() {
	    fetch("https://api.apispreadsheets.com/data/20934/").then(res=>{
	    if (res.status === 200){
		res.json().then(data=>{
			const yourData = data
			console.log(yourData)
		}).catch(err => console.log(err))}else{console.log("nah")}
            })
            var a = this.selectA
            var str
            if(a==1){str=="mec"}else if(a==2){str=="lec"}else if(a==3){str=="met"}else if(a==4){str=="ltg"}else if(a==5){str=="bms"}else if(a==6){str=="avt"}else if(a==7){str=="fre"}else if(a==8){str=="sec"};
            var b = this.selectB
            var c = this.selectC
            var d = this.textInA
            var e = str +"_"+ b +"_"+ c +"_"+ d
            this.resource = e
            }
    }
   
});

app.mount('#application');
