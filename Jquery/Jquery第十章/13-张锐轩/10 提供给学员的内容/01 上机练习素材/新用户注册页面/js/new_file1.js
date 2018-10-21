$(document).ready(function($){
  
    function validate($dom){
        var flag=true;
        var id= $dom.attr("id");
        var v=$dom.val();
        var errorInfo="";
        switch(id){
            case "userName":
                var $userNameId=$("#userNameId");
                var reg=/^[0-9a-zA-Z][0-9a-zA-Z_.-]{2,16}[0-9a-zA-Z]$/;
                if(v==""){
                    $userNameId.removeClass().addClass("error_prompt");
                    $userNameId.html("通行证用户名不能为空，请输入通行证用户名");
                    flag=false;
                }else if(reg.test(v)==false){
                    $userNameId.removeClass().addClass("error_prompt");
                    $userNameId.html("1、由字母、数字、下划线、点、减号组成<br/>2、只能以数字、字母开头或结尾，且长度为4-18");
                    flag=false;
                }else{
                    $userNameId.removeClass().addClass("ok_prompt").html("通行证用户名输入正确");
                }
                break;
            case "pwd":
                var $pwdId=$("#pwdId");
                if(v==""){
                    $pwdId.removeClass().addClass("error_prompt").html("密码不能为空，请输入密码");
                    flag=false;
                }else if(v.length<6 || v.length>16){
                    $pwdId.removeClass().addClass("error_prompt").html("密码长度为6-16");
                    flag=false;
                }else{
                    $pwdId.removeClass().addClass("ok_prompt").html("密码输入正确");
                }
                break;
            case "repwd":
                var pwd=$("#pwd").val();
                var $repwdId=$("#repwdId");
                if(v==""){
                    $repwdId.removeClass().addClass("error_prompt").html("重复密码不能为空，请重复输入密码");
                    flag=false;
                }else if(v!=pwd){
                    $repwdId.removeClass().addClass("error_prompt").html("两次输入的密码不一致，请重新输入");
                    flag=false;
                }else{
                    $repwdId.removeClass().addClass("ok_prompt").html("两次密码输入正确");
                }
                break;
            case "nickName":
                var $nickNameId=$("#nickNameId");
                var reg = /^([\u4e00-\u9fa5]|\w|[@!#$%&*])+$/;   // 匹配昵称
                var chinaReg = /[\u4e00-\u9fa5]/g;   //匹配中文字符
                var len = v.replace(chinaReg, "ab").length;  //把中文字符转换为两个字母，以计算字符长度
                if(v==""){
                    $nickNameId.removeClass().addClass("error_prompt").html("昵称不能为空，请输入昵称");
                    flag=false;
                }else if(reg.test(v)==false){
                    $nickNameId.removeClass().addClass("error_prompt").html("只能由汉字、字母、数字、下划线以及@!#$%&*特殊字符组成");
                    flag=false;
                } else if (len < 4 || len > 20) {
                    $nickNameId.removeClass().addClass("error_prompt").html("1、长度为4－20个字符<br/>2、一个汉字占两个字符");
                    flag=false;
                }else{
                    $nickNameId.removeClass().addClass("ok_prompt").html("昵称输入正确");
                }
                break;
            case "tel":
                var $telId=$("#telId");
                var reg=/^(13|15|18)\d{9}$/;
                if(v==""){
                    $telId.removeClass().addClass("error_prompt").html("关联手机号码不能为空，请输入关联手机号码");
                    flag=false;
                }else if(reg.test(v)==false){
                    $telId.removeClass().addClass("error_prompt").html("关联手机号码输入不正确，请重新输入");
                    flag=false;
                }else{
                    $telId.removeClass().addClass("ok_prompt").html("关联手机号码输入正确");
                }
                break;
            case "email":
                var $emailId=$("#emailId");
                var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
                if(v==""){
                    $emailId.removeClass().addClass("error_prompt").html("保密邮箱不能为空，请输入保密邮箱");
                    flag=false;
                }else if(reg.test(v)==false){
                    $emailId.removeClass().addClass("error_prompt").html("保密邮箱格式不正确，请重新输入");
                    flag=false;
                }else{
                    $emailId.removeClass().addClass("ok_prompt").html("保密邮箱输入正确");
                }
                break;
            default:
                break;
        }

        return flag;
    }
    $("#registerForm").submit(function(){
        var flag=true;
        $(this).find("input[id]").each(function(i,e){
           if(!validate($(e))){
               flag=false;
           }
        });
        return false;
    });
    $("#userName").bind({
        focus:function(){
            $("#userNameId").removeClass().addClass("import_prompt").html("1、由字母、数字、下划线、点、减号组成<br/>2、只能以数字、字母开头或结尾，且长度为4-18");
        },
        blur:function(){
            validate($(this));
        }
    });
    $("#pwd").focus(function(){
        $("#pwdId").removeClass().addClass("import_prompt").html("密码长度为6-16");
    }).blur(function(){
        validate($(this));
    });
    $("#repwd").blur(function(){
        validate($(this));
    });
    $("#nickName").bind({
        focus:function(){
            $("#nickNameId").removeClass().addClass("import_prompt").html("1、包含汉字、字母、数字、下划线以及@!#$%&*<br/>特殊字符<br/>2、长度为4－20个字符<br/>3、一个汉字占两个字符");
        },
        blur:function(){
            validate($(this));
        }
    });
    $("#tel").focus(function(){
        $("#telId").removeClass().addClass("import_prompt").html("1、手机号码以13，15，18开头<br/>2、手机号码由11位数字组成");
    }).blur(function(){
        validate($(this));
    });
    $("#email").bind({
        focus:function(){
            $("#emailId").removeClass().addClass("import_prompt").html("请输入您常用的电子邮箱");
        },
        blur:function(){
            validate($(this));
        }
    });
});