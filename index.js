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
            var a = this.listsA
            console.log(a);
            if (this.selectA.includes("Mech")) {
                this.list01 = a      
            }
        }
        
    }
   
});

app.mount('#application');
