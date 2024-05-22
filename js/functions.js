/*
* Login
* */
function getLogin() {
    //callback
    function callback (data){
        user = data;
        data.user.enable2fa ? page.verify2fa() : page.home();
    }

    //request body
    const body = {
        username: $('#username').val(),
        password:  $('#password').val()
    }

    //make a api request
    ajax(endpoint.login, callback, body)
}


/*
* Verify 2FA
* alter login show and click to verify
* */
function getVerify2fa(){
    endpoint.verify2fa.param = $("#txt-verify2").val()
    ajax(endpoint.verify2fa, function (){page.home()})
}


/*
* Get 2FA QRCode
*/
function get2faQRcode(){
    //loading
    $('#btn_enable').addClass("loading");
    //callback
    function callback (data){
        page.enable2fa()
        $('#qrcode').attr("src", "data:image/png;base64," + data.qrCode)
    }
    //make a api request
    ajax(endpoint.get2fa, callback)
}


/*
* Enable 2FA
* */
function getEnable2fa(){
    endpoint.enable2fa.param = $("#txt-verify").val();
    //make a api request
    ajax(endpoint.enable2fa, function(){page.verifyToEnable()})
}


/*
* Disable 2FA
* */
function getDisable2fa(){
    endpoint.disable2fa.param = $("#txt-verify3").val();
    //make a api request
    ajax(endpoint.disable2fa, function(){page.verifyToDisable()})
}