// by nick W
// Execute in strict mode to prevent some common mistakes
"use strict";

// Create object for use by the HTML page
var controller = new demoApp();

// JavaScript "class" containing the model, providing controller "methods" for the HTML view
function demoApp() {
    console.log("Creating controller/model");
    this.authenticate();
    console.log("authenticating")

    var URL = "https://attain.aeronlabs.com/";

    this.authenticate = function () {
            console.log("RUNNING AUTH");
            const ACCESS_TOKEN_STORAGE_KEY = "token";
            const token = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
            console.log(token)
            if (token === null) {
                //const URL = "https://attain.aeronlabs.com/";
                localStorage.setItem("prevPage", window.location.href);
                window.location.href = URL + "auth";
                return;
            }
        },
        
        this.logout = function () {
            //const URL = "https://attain.aeronlabs.com/";
            const ACCESS_TOKEN_STORAGE_KEY = "token";
            const token = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
            localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
            localStorage.removeItem("prevPage");
            window.location.href = URL + "auth";
        }

    this.userLogin = function () {
        var userPw = $("#userPword").val(); // GET PASSWORD
        var fname = $("#userFname").val(); // GET FIRST NAME INPUT
        var lname = $("#userLname").val(); // GET LAST NAME INPUT
        const spacer = ":"
        console.log(fname, lname, userPw);
        // SEND DATA TO AUTH ENDPOINT
        var url = URL + `auth?creds=${fname+spacer+userPw}`
        $.ajax(url, { type: "GET", data: {}, success: onSuccess });
        function onSuccess(data) { // RETURNS TOKEN -> STORE IN LOCAL OBJECT
            console.log(data)
            var self = globalThis;
            self.things= data;
            }
        //this.match()
        }

}
