const app = Vue.createApp({

    data() {
        return {
            selectA    :"",
            selectB    :"",
            selectC    :"",
            selectD    :"",
            value001   :25,
            value002   :50,
            value003   :75,
            value004   :100,
            list01     :[],
            list02     :[],
            list03     :[],
            manuA      :["AHU's 01","AHU's 02","AHU's 03"],
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
        
        function:listItem() {
            var mec = ["AHU","FCU","VAV","Boiler","Chiller","Pump"]
            if (this.selectA.includes("Mech")) {
                this.list01 = mec          
            } else if (this.selectA.includes("RTU")) {
                this.list01 = mec   
            } else if (this.selectA.includes("MAU")) {
                this.list01 = mec      
            }
        },
        
    }
});

app.mount('#application');
