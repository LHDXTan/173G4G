$(function(){
	$("#loginForm").submit(function(){
		var str=$("#email").val();
		if(str==""){
			alert("邮箱不能为空");
			return false;
		}else if(str.indexOf("@")==-1&&str.indexOf(".")==-1){
			alert("邮箱格式不正确，例如123456@qq.com");
			return false;
		}
		var ps=$("#pwd").val();
		
	  if(ps==""){
		alert("密码不能为空");
		return false;
	   }else if(ps.length<6||ps.length>20){
		alert("密码必须由6-20个数字和英文字母组成");
		return false;
	   }
	   return true;
	  })
	$("#quick_register").click(function(){
		window.open("register.html");
		
		
	})
})