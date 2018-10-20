/**
 * Created by zongjuan.wang on 2016/7/6.
 */

$(document).ready(function(){
    //提交表单进行证验
    $("#myform").submit(function(){
        var flag = true;
        if (!userName()) flag = false;
        if (!passPwd()) flag = false;
        if (!repassPwd()) flag = false;
        if (!sex()) flag = false;
        if (!email()) flag = false;
        return flag;
    })


    //绑定失去焦点事件
    $("#user").blur(userName);
    $("#pwd").blur(passPwd);
    $("#repwd").blur(repassPwd);
    $("#email").blur(email);

    //验证用户名
    function userName(){
        var user=$("#user").val();
        var userId=$("#userId");
        if(user==""){
            userId.html("用户名不能为空");
            return false;
        }
        if(user.length<4 || user.length>12){
            userId.html("用户名长度为在4―12字符");
            return false;
        }
        for(var i=0;i<user.length;i++){
            var char=user.toLowerCase().charAt(i);
            if((!(char>=0 && char<=9))  && (!(char>='a'&& char<='z'))&&char!='_'){
                userId.html("用户名必须由字母、数字和下划线组成");
                return false;
            }
        }
    }
    //验证密码
    function passPwd(){
        var pwd=$("#pwd").val();
        var pwdId=$("#pwdId");
        if(pwd==""){
            pwdId.html("密码不能为空");
            return false;
        }
        if(pwd.length<6 || pwd.length>12){
            pwdId.html("密码长度为在6―12字符");
            return false;
        }
    }
    //验证重输密码
    function repassPwd(){
        var repwd=$("#repwd").val();
        var pwd=$("#pwd").val();
        var repwdId=$("#repwdId");
        if(pwd!=repwd){
            repwdId.html("两次输入的密码不一致");
            return false;
        }
    }
    //验证性别是否被选中
    function sex(){
        var sexId=$("#sexId");
        var j=0;
        var sex=document.getElementsByName("sex");
        for(var i=0;i<sex.length;i++){
            if(sex[i].checked==true){
                j=1;
                break;
            }
        }
        if(j==0){
            sexId.html("请选择性别");
            return false;
        }
    }
    //验证邮箱
    function email(){
        var mail=$("#email").val();
        var emailId=$("#emailId");
        if(mail==""){//检测Email是否为空
            emailId.html("电子邮件地址不能为空");
            return false;
        }
        if(mail.indexOf("@")==-1){
            emailId.html("电子邮件地址格式不正确\n必须包含@");
            return false;
        }
        if(mail.indexOf(".")==-1){
            emailId.html("电子邮件地址格式不正确\n必须包含.");
            return false;
        }
        return true;
    }



})
