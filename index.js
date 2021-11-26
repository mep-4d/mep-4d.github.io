const app = Vue.createApp({

    data() {
        return {
            selectA    :"",
            selectB    :"",
            selectC    :"",
            selectD    :"",
            list01     :[],
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
            console.log(mec)
            var mec = ["AHU","FCU","VAV","Boiler","Chiller","Pump"]
            if (this.selectA.includes("Mech")) {
                this.list01 = mec          
            } else if (this.selectA.includes("RTU")) {
                this.list01 = mec   
            } else if (this.selectA.includes("MAU")) {
                this.list01 = mec      
            } 
        }
        
    },
});

app.mount('#application');
