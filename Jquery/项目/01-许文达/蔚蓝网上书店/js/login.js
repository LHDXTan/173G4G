
// 登录

$(document).ready(function () {

 

    $("#email").focus(function () {//得到光标

        $(this).css("background", "#f1ffde");

    }).blur(function () {//失去光标

 

        $(this).css("background", "#FFFFFF");

    });

    $("#pwd").focus(function () {//得到光标

        $(this).css("background", "#f1ffde");

    }).blur(function () {//失去光标

        $(this).css("background", "#FFFFFF");

    });

 

    $(".login_btn_out").hover(function () {

        $("#btn").css("background", "url('images/login_icon_bg_01.gif')-78px -29px no-repeat");

    }).mouseleave(function () {

        $("#btn").css("background", "url('images/login_icon_bg_01.gif')0px -30px no-repeat")

    });

    $(".login_btn_out").click(function () {

        var email = $("#email").val();

        var pwd = $("#pwd").val();

        if (email == "") {

            alert("请输入email地址或昵称");

            return false;

        }

        if (pwd == "") {

            alert("密码不能为空");

            return false;

        }

    })

 

 

    $(".login_register_out").mouseenter(function () {

        $("#quick_register").css("background", "url('images/login_icon_bg_01.gif')-144px -3px no-repeat");

    }).mouseleave(function () {

        $("#quick_register").css("background", "url('images/login_icon_bg_01.gif') 0px -3px no-repeat");

    });

 

});