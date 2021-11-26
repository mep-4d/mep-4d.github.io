const app = Vue.createApp({

    data() {
        return {
            selectA    :"",
            selectB    :"",
            selectC    :"",
            selectD    :"",
            list01     :[],
            listsA     :["AHU","FCU","VAV","Boiler","Chiller","Pump"],
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
        
        listItem() {
            var a = this.listsA
            if (this.selectA.includes("Mech")) {
                console.log(a)
                this.list01 = a      
            }
        }
        
    }
   
});

app.mount('#application');
