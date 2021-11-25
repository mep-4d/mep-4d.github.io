const app = Vue.createApp({

    data() {
        return {
            select01   :"",
            select02   :"",
            select03   :"",
            value001   :25,
            value002   :50,
            value003   :75,
            value004   :100,
            list01     :["AHU","RTU","MAU","HRU","VRF","EF","HVLS","UH","BMS","Sensors","Valves","Actuators"],
            list02     :[],
            list03     :[],
            manuA      :["AHU's 01","AHU's 02","AHU's 03"],
            manuB      :["RTU's 01","RTU's 02","RTU's 03"],
            manuC      :["MAU's 01","MAU's 02","MAU's 03"],
            manuAunitsA:["unitA","unitB","unitC"],
            manuAunitsB:["unitD","unitE","unitF"],
            manuAunitsC:["unitG","unitH","unitI"],
            colorA     :"red",
            show       : true,
            resource   :"TEST"
        };
    },

    computed: {
    },

    methods: {
        //runFunc(event) {
        //    console.log(event.target.value)
        //},
        reset() {
            this.value001 = 0; this.value002 = 0; this.value003 = 0; this.value004 = 0; this.show = false;
        },
        log() {
            console.log(this.select01, this.select02);
        },
        listManufacturers() {
            var m01 = this.manuA
            var m02 = this.manuB
            var m03 = this.manuC
            if (this.select01.includes("AHU")) {
                this.list02 = m01          
            } else if (this.select01.includes("RTU")) {
                this.list02 = m02   
            } else if (this.select01.includes("MAU")) {
                this.list02 = m03      
            }
        },
        listModels() {
            var aa = this.manuAunitsA
            var ab = this.manuAunitsB
            var ab = this.manuAunitsC
            if ((this.select01.includes("AHU")) && (this.select02.includes("01"))) {
                this.list03 = aa          
            } else if ((this.select01.includes("AHU")) && (this.select02.includes("02"))) {
                this.list03 = ab   
            } else if ((this.select01.includes("AHU")) && (this.select02.includes("03"))) {
                this.list03 = ac     
            }
        }
    }
});

app.mount('#application');
