$(document).ready(function() {
$("#btn").click(function() {
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
	/*if(name.length<4 || name.length>20){
		alert("name在4-20之间");
		return false;
	}*/
	
	var mima=$("#pwd").val();
	if(mima==""){
		alert("mima不能是空");
		return false;
	}
	if(mima.length>6){
		alert("长度大于6");
		return false;
	}
	window.open("index.html");
	})
})

