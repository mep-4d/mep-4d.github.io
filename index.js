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
            if (this.selectA == "1") {
                this.list01 = a      
                console.log("mech selected")
            } else if (this.selectA == "2") {
                this.list01 = b      
                console.log("elec selected")
            }
        }
        
    }
   
});

app.mount('#application');
