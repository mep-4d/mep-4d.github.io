const app = Vue.createApp({

    data() {
        return {
            dataObject:"",
            selectA:"",
            selectB:"",
            selectC: "",
            selectD: "",
            selectE: "",
            selectF: "",
            list01: [
                "General MEP", 
                "HVAC-R", 
                "Electrical Service", 
                "Metering System",
                "Security System",
                "Audio/Visual System",
                "Vertical Transportation",
                "Waste Management",
                "Catering",
                "Smart Sensors",
                "ICT",
                "Fire/Smoke System",
                "Lighting",
                "Renewable Energy",
                "Appliances"
            ],
            list02:"",
            list03: [
                "B2","B1","00","01","02","03","04","05",
                "06","07","08","09","10","11","12","13",
                "RF"
            ],
            list04: [
                "air", "air_differential", "inlet_air", "return_air", "supply_air", "exhaust_air","fan","supply_fan","extract_fan",
                "water", "water_differential", "return_water", "flow_water","storage_water","pump","pump_set","damper",
                "off_coil","space","duct","frost","high_limit","low_limit","ambient","general","global","capacity",
                "system","unit","zone","occupancy","non_occupancy",
                "heating_flow","heating_return","cooling_flow","cooling_return","condense_flow","condense_return"
            ],
            list05: [
                "temperature","pressure","flow","humidity","lux","co2","voc","co","no2","o3","run","fault","enable",
                "alarm","level","position","open","closed","intensity","mode","%","band","deadband"
            ],
            list06: [
                "sensor", "setpoint", "value", "input", "output", "status"
            ],
            item:"",
            sys:"",
            identifier:"",
            assetName:"",
            pointName: "",
        };
    },

    computed: {
    },

    methods: {

        setSystem() {
            var x = this.selectA;
            this.list02 = [];
            this.name = "";
            this.selectC = "";
            url = `https://msi.aeronlabs.com/deviceNames?sys=${x}`;
            fetch(url).then(res => {
                if (res.status === 200) {
                    // SUCCESS
                    res.json().then(data => {
                        console.log(data);
                        var self = this
                        self.dataObject = data
                        for (var i=0; i<data[0].length; i++) {
                            this.list02.push(data[0][i][0])
                        }
                    });
                }
            });
        },

        setItem() {
            var x = this.selectB; var y = this.dataObject;
            for (var i=0; i<y[0].length; i++) {
                if (y[0][i][0] == x) {
                    this.item = y[0][i][1]
                    this.sys = y[0][i][2]
                }
            }
            console.log(x); console.log(y); console.log(this.item)
        },

        inputA() {
            this.identifier = event.target.value
        },

        getAssetName() {
            var str;
            var id = this.identifier;

            if (id.toString().length == 1) {
                str = "00".concat(id)
            } else if (id.toString().length == 2) {
                str = "0".concat(id)
            } else if (id == "") {
                str = "NNN | where NNN is a unique numeric item reference for that floor"
            } else {
                str = id
            }
            this.assetName = this.sys + "_" + this.item + "_" + this.selectC + "_" + str
        },

        getPointName() {
            this.pointName = this.selectD + "_" + this.selectE + "_" + this.selectF
        },

    },

    mounted: function () {
        uibuilder.start();
        var vueApp = this;

        uibuilder.onChange('msg', function (newVal) {

            uibuilder.send({ 'topic': 'logged', 'payload': "test" });
            //vueApp.value021 = newVal.payload[3][0][0];
            //document.getElementById("value021").style.width = vueApp.value021;
        });
    }
});

app.mount('#naming');
