const app = Vue.createApp({

    data() {
        return {
            selectA    :"",
            selectB    :"",
            selectC    :"",
            selectD    :"",
            list01     :[],
            list02     :["01","02","03","04","05","06","07","08","09","10"],
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
        
        identifyA() {
            var a = this.selectA
            var b = this.selectB
            var c = this.selectC
            var d = this.selectD
            var e = a + b + c + d
            this.resource = e
            console.log(e);
            }
    }
   
});

app.mount('#application');
