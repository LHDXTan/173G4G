/**
 * Created by zongjuan.wang on 2016/7/6.
 */

$(document).ready(function(){
    //提交表单进行证验
    $("#myform").submit(function(){
        var flag = true;
        if (!checkUser()) flag = false;
        if (!checkPwd()) flag = false;
        return flag;
    })


    //绑定失去焦点事件
    $("#user").blur(checkUser);
    $("#pwd").blur(checkPwd);

    //绑定获得焦点事件
    $("#user").focus(showUser);
    $("#pwd").focus(showPwd);




    /*用户名验证*/
    function checkUser(){
        var user=$("#user").val();
        var userId=$("#user_prompt");
        userId.html("");
        var reg=/^[a-zA-Z][\w_]{4,15}$/;
        if(reg.test(user)==false){
            userId.html("用户名不正确");
            return false;
        }
        return true;
    }

    /*密码验证*/
    function checkPwd(){
        var pwd=$("#pwd").val();
        var pwdId=$("#pwd_prompt");
        pwdId.html("");
        var reg=/^[a-zA-Z0-9]{4,10}$/;
        if(reg.test(pwd)==false){
            pwdId.html("密码填写不正确");
            return false;
        }
        return true;
    }
    //用户名输入提示
    function showUser(){
        var userId=$("#user_prompt");
        userId.html("首位为字母的 4-16个数字、字母、下线划");
    }
    //密码输入提示
    function showPwd(){
        var pwdId=$("#pwd_prompt");
        pwdId.html("4-10个字母和下划线");
    }

})

