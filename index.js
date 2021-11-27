const app = Vue.createApp({

    data() {
        return {
            selectA    :"",
            selectB    :"",
            selectC    :"",
            selectD    :"",
            list01     :[],
            listsA     :["AHU","FCU","VAV","Boiler","Chiller","Pump"],
            listsB     :["DB","Switch Board","Socket Outlet","Fused Outlet","Isolator"],
            listsC     :["CHW Thermal Energy","LTHW Thermal Energy","Electricity","Water","Gas"],
            listsD     :["Luminaire","Wall Pad","LCM","PIR","Switch","LED Fixture"],
            resource   :"TEST"
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
            if (this.selectA == "1") {
                this.list01 = a      
                console.log("mec selected")
            } else if (this.selectA == "2") {
                this.list01 = b      
                console.log("lec selected")
            } else if (this.selectA == "3") {
                this.list01 = c      
                console.log("mtr selected")
            } else if (this.selectA == "4") {
                this.list01 = d      
                console.log("ltg selected")
            }
        };
        
    }
   
});

app.mount('#application');
