// console.log("Creating controller/model");
const API_URL = "https://attain.aeronlabs.com/";
const ACCESS_TOKEN_STORAGE_KEY = "token";
const SPACER = ":";

function authenticate() {
    const token = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    if (token === null && window.location.href!=="https://mep-4d.github.io/auth") {
        //localStorage.setItem("prevPage", window.location.href);
        window.location.href = "https://mep-4d.github.io/auth";
        return;
    }
}
    
function logout() {
    const token = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
    localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    localStorage.removeItem("prevPage");
    window.location.href = URL + "auth";
}

function userLogin() {
    const password = $("#password").val(); // GET PASSWORD
    const username = $("#username").val(); // GET FIRST NAME INPUT
    // SEND DATA TO AUTH ENDPOINT
    const _url = URL + `auth?creds=${username+SPACER+password}`
    $.ajax(_url, { type: "GET", data: {}, success: onSuccess });
    function onSuccess(data) { // RETURNS TOKEN -> STORE IN LOCAL OBJECT
        console.log(data)
        const self = globalThis;
        self.things= data;
        }
}

$(function() {
    console.log("auth_running")
    authenticate();
})
