// by nick W
// Execute in strict mode to prevent some common mistakes
"use strict";

// Create object for use by the HTML view
var controller = new demoApp();

// JavaScript "class" containing the model, providing controller "methods" for the HTML view
function demoApp() {
    console.log("Creating controller/model");

    var getUrl = "https://attain.aeronlabs.com";

    this.userLogin = function () {
        var oucu = $("#userId").val(); // GET OUCU
        var fname = $("#userFname").val(); // GET FIRST NAME INPUT
        var lname = $("#userLname").val(); // GET LAST NAME INPUT
        console.log(fname, lname, oucu);
        //GET ALL ORDERS FOR OUCU
        var url = getUrl + "/test"
        $.ajax(url, { type: "GET", data: {}, success: onSuccess });
        function onSuccess(data) { // STORE ORDERS IN GLOBAL OBJECT
            console.log(data)
            var self = globalThis;
            self.things= data;
            }
        this.match()
        }

    this.userRegister = function() { // THIS FUNCTION REGISTERS A NEW USER (FR3)
        var oucu = $("#userId").val(); // GET OUCU
        var regUrl = getUrl + "/test"
        $.ajax(regUrl, { type: "POST", data: { oucu: oucu }, success: onSuccess });
        function onSuccess(data) { // INFORM OF REGISTRATION STATUS
            console.log(data)
            }
    }

}
