$(document).ready(function(){
	$("#registerBtn").click(function(){
		var emails=document.getElementById("email");
		if(emails.validity.valueMissing==true){
			emails.setCustomValidity("邮箱格式不能为空");
		}else if(emails.validity.typeMismatch==true){
			emails.setCustomValidity("邮箱格式不正确，例如web@bdqn.cn");
		}else{
			emails.setCustomValidity("");
			
		}
		
		var nname=document.getElementById("nickName");
		if(nname.validity.valueMissing==true){
			nname.setCustomValidity("昵称不能为空null");
		}else if(nname.validity.typeMismatch==true){
			nname.setCustomValidity("昵称不能位数字注意您的格式");
		}else{
			nname.setCustomValidity("");
		}
		
		var ppwd=document.getElementById("pwd");
		if(ppwd.validity.valueMissing==true){
			ppwd.setCustomValidity("密码不能为空");
		}else if(ppwd.validity.typeMismatch==true){
			ppwd.setCustomValidity("密码必须是6---20位的字母以及数字");
		}else{
			ppwd.setCustomValidity("");
		}
		var rrepwd=document.getElementById("repwd");
		if(ppwd.val()==rrepwd.val()){
			rrepwd.setCustomValidity("");
		}else{
			rrepwd.setCustomValidity("两次输入的密码不一样请确认密码");
		}
	})
	    $("#registerBtn").mouseover(function(){
        $(this).attr("src","images/register_btn_over.gif");
    }).mouseout(function(){
        $(this).attr("src","images/register_btn_out.gif");
    });
    
    var arraylist= new Array();
    arraylist['河南省']=['郑州市','漯河市','开封市','兰考县','登封市'];
    arraylist['浙江省']=['温州市'];
    arraylist['山东省']=['烟台市','青岛市','济南市'];
	arraylist['山西省']=['山西市','太原市'];


$("#province").append(function(){
	   var ht="";
        for (var i in arraylist){
            ht+="<option value="+i+">"+i+"</option>";
        }
        return $(ht);
})
 $("#province").change(function(){
        var v= $(this).val();
        var ht="";
        if(v=="请选择省/城市"){
            ht="<option>请选择城市/地区</option>";
            $("#city").html(ht);
            return;
        }
        var citys=arraylist[v];
        $.each(citys,function(i,n){
            ht+="<option value="+n+">"+n+"</option>";
        });
        $("#city").html(ht);
    });

})