// by nick W
// Execute in strict mode to prevent some common mistakes
"use strict";

// Create object for use by the HTML view
var controller = new demoApp();

// JavaScript "class" containing the model, providing controller "methods" for the HTML view
function demoApp() {
    console.log("Creating controller/model");

    var getUrl = "https://attain.aeronlabs.com/";

    this.userLogin = function () {
        var userPw = $("#userId").val(); // GET PW
        var fname = $("#userFname").val(); // GET FIRST NAME INPUT
        var lname = $("#userLname").val(); // GET LAST NAME INPUT
        console.log(fname, lname, userId);
        // SEND DATA TO AUTH ENDPOINT
        var url = getUrl + `test?creds=${fname+lname+userPw}`
        $.ajax(url, { type: "GET", data: {}, success: onSuccess });
        function onSuccess(data) { // STORE ORDERS IN GLOBAL OBJECT
            console.log(data)
            var self = globalThis;
            self.things= data;
            }
        this.match()
        }

}
