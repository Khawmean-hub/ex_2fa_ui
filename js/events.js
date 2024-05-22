const page = {
    homeTab: function (){
        $('#home_tab').show();
        $('#security').hide();
        $('.menu .item').removeClass('active')
        $(this).addClass('active')
    },
    securityTab: function (){
        $('#home_tab').hide();
        $('#security').show();
        $('.menu .item').removeClass('active')
        $(this).addClass('active')
        if(user.user.enable2fa){
            $('#btn_disable').show();
            $('#btn_enable').hide();
        }else{
            $('#btn_enable').show();
            $('#btn_disable').hide();
        }
    },
    home: function(){
        $('#home_page').show();
        $('#login_form').hide();
        $('#verify_2fa').hide();
        $('#name_txt').html(user.user.firstname)
    },
    login: function(){
        $('#login_form').show();
        $('#home_page').hide();
    },
    verify2fa: function(){
        $('#verify_2fa').show();
        $('#home_page, #login_form').hide();
    },
    disable2fa: function(){
        $('#disable_tab').show()
        $('#btn_disable').show();
        $(this).hide();
    },
    enable2fa: function(){
        $('#disable_tab').show();
        $('#btn_disable').hide()
    },
    verifyToEnable: function (){
        alert("2FA enable Success")
        $('#enable-2fa').hide();
        $('#btn_disable').show();
    },
    verifyToDisable: function (){
        alert("Disable Success")
        $('#btn_disable, #disable_tab').hide()
        $('#btn_enable').show();
    }
}