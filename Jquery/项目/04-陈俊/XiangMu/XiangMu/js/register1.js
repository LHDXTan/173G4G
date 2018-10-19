$(document).ready(function() {
$("#registerBtn").click(function() {
	var em = $("#email").val();
	if(em == "") {
		alert("email不能为空");
		return false;
	}
	if(em.indexOf("@") == -1) {
		alert("email不能没有@");
		return false;
	}
	if(em.indexOf(".") == -1) {
		alert("email不能没有点");
		return false;
	}

	var name=$("#nickName").val();
	if(name==""){
		alert("name不能是空");
		return false;
	}
	if(name.length<4 || name.length>20){
		alert("name在4-20之间");
		return false;
	}
	
	var mima=$("#pwd").val();
	if(mima==""){
		alert("mima不能是空");
		return false;
	}
	if(mima.length>6){
		alert("长度大于6");
		return false;
	}
	
	var mimai=$("#repwd").val();
	if(mimai==""){
		alert("二次密码不能是空");
		return false;
	}
	if(mima!=mimai){
		alert("俩次密码不一致");
		return false;
	}
	/*var cityList = new Array();
   
    cityList['河南省'] = ['郑州市','洛阳市'];
   
    cityList['其他'] = ['其他'];
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
});*/
	window.open("login.html");
})
})

