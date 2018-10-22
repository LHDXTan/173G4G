
$(document).ready(function(){
    //提交表单
   
    $("#registerBtn").click(function(){
        var email=document.getElementById("email");
        if(email.validity.valueMissing==true){
            email.setCustomValidity("邮箱不能为空");
        }
        else if(email.validity.typeMismatch==true){
            email.setCustomValidity("邮箱格式不正确，例如web@bdqn.cn");
        }
        else{
            email.setCustomValidity("");
        }

        var uName=document.getElementById("nickName");
        if(uName.validity.valueMissing==true){
            uName.setCustomValidity("昵称不能为空");
        }
        else if(uName.validity.patternMismatch==true){
            uName.setCustomValidity("昵称必须是4~20位的英文和数字");
        }
        else{
            uName.setCustomValidity("");
        }
        var pwd=document.getElementById("pwd");
        if(pwd.validity.valueMissing==true){
            pwd.setCustomValidity("密码不能为空");
        }
        else if(pwd.validity.patternMismatch==true){
            pwd.setCustomValidity("密码必须是6~20位的英文和数字");
        }
        else{
            pwd.setCustomValidity("");
        }
        var repwd=document.getElementById("repwd");
        if(repwd.val()==pwd.val()){ repwd.setCustomValidity("");}
        else{repwd.setCustomValidity("两次输入的密码不一致");}


    });
//  //提交按钮样式变化
//  $("#registerBtn").mouseover(function(){
//      $(this).attr("src","images/register_btn_over.gif");
//  }).mouseout(function(){
//      $(this).attr("src","images/register_btn_out.gif");
//  });
    //省市级联
    var cityList = new Array();
    cityList['河南省'] = ['郑州市','鹤壁市','漯河市'];
    cityList['山西省'] = ['运城市','太原市'];
    
 
    $("#province").append(function(){
        var html="";
        for (var i in cityList){
            html+="<option value="+i+">"+i+"</option>";
        }
        return $(html);
    });
    $("#province").change(function(){
        var v= $(this).val();
        var html="";
        if(v=="请选择省/城市"){
            html="<option>请选择城市/地区</option>";
            $("#city").html(html);
            return;
        }
        var citys=cityList[v];
        $.each(citys,function(i,n){
            html+="<option value="+n+">"+n+"</option>";
        });
        $("#city").html(html);
    });
});