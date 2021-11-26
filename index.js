const app = Vue.createApp({

    data() {
        return {
            selectA    :"",
            selectB    :"",
            selectC    :"",
            selectD    :"",
            list01     :[],
            listsA     :["AHU","FCU","VAV","Boiler","Chiller","Pump"],
            resource   :"TEST"
        };
    },

    computed: {
    },

    methods: {
        
        listItem() {
            console.log("selection");
            if (this.selectA == "1") {
                console.log("mechanical selected")
                //this.list01 = a      
            }
        }
        
    }
   
});

app.mount('#application');
