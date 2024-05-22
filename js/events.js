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
            $('#btn_enable, #disable_tab').hide();
        }else{
            $('#btn_enable').show();
            $('#btn_disable, #enable-2fa').hide();
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
        $('#btn_disable').hide();
    },
    enable2fa: function(){
        $('#enable-2fa').show();
        $('#btn_disable').hide()
        $('#btn_enable').removeClass('loading').hide()
    },
    verifyToEnable: function (){
        alert("2FA enable Success")
        $('#enable-2fa').hide();
        $('#btn_disable').show();
        user.user.enable2fa = true;
    },
    verifyToDisable: function (){
        alert("Disable Success")
        $('#btn_disable, #disable_tab').hide()
        $('#btn_enable').show();
        user.user.enable2fa = false;
    }
}