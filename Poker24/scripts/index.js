app.initPage = function() {
    $("#loginBtn").click(function() {
        app.home.login();
    });

    $("#regBtn").click(function() {
        app.home.register();
    });
};

app.home = {
    
};

app.home.login = function() {
    var uname = $("#loginUserName").val();
    var pass = $("#loginPassword").val();

    checkPassword(uname, pass);
};
app.home.register = function () { };

function checkPassword(uname, pass) {
    $.ajax("http://221.204.241.69:99/api/User/Login?username=" + uname + "&password=" + pass, {
        type: "get",
        //datatype:"jsonp",
        crossDomain: true,
        success: function (result) {
            alert(result);
        },
        error: function() {
            alert("error");
        }
    });
}