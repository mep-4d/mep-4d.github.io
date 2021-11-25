const app = Vue.createApp({

    data() {
        return {
            //select01   :"",
            //select02   :"",
            //select03   :"",
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
    }
});

app.mount('#application');
