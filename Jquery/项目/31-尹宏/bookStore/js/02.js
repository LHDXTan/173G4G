$(document).ready(function(){
	$("#email").focus(function(){
		$(this).removeClass().addClass("login_content_input_Focus");
	}).blur(function(){
		$(this).removeClass().addClass("login_content_input");
	});
	$("#pwd").focus(function(){
		$(this).removeClass().addClass("login_content_input_Focus");
	}).blur(function(){
		$(this).removeClass().addClass("login_content_input");
	});
	$("#loginForm").submit(function(){
		var email=$("#email").val();
		var ps=$("#pwd").val();
		if(email==""){
			alert("邮箱不能为空");
		return false;
		}
		if(ps==""){
			alert("密码不能为空");
			return false;
		}
		return true;
	});
//	
//	$("#btn").click(function(){
//		window.open("product.html");
//		
//	})
//	
//	
	
})