//js file
var app = {
    //apiBaseUrl:"http://localhost:1234/"
	
    //apiBaseUrl:"http://127.0.0.1:1432/"

	apiBaseUrl:"http://221.204.241.69:99/"
};

$(function () {
    //document.domain = app.apiBaseUrl;
    start();
});

function start() {
    //localStorage.clear();
    var server = localStorage.getItem("server");
    if (server != null) {
        app.apiBaseUrl = server;
    } else {
        localStorage.setItem("server", app.apiBaseUrl);
    }

    if (typeof (init) == "function") {
        init();
        
    }
    
}

function quit() {
    localStorage.clear();
    location.href = "login.html";
}

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        start();


        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();