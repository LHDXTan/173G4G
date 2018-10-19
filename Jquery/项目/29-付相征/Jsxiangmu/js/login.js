$(function($){
	$("#email").focus(function(){
		$(this).removeClass().addClass("login_content_input login_content_input_Focus");
	}).blur(function(){
		$(this).removeClass().addClass("login_content_input");
	});
	$("#pwd").focus(function(){
		$(this).removeClass().addClass("login_content_input login_content_input_Focus");
	}).blur(function(){
		$(this).removeClass().addClass("login_content_input");
	});
	$("#loginForm").submit(function(){
		var email=$("#email").var();
		var pwd=$("#pwd").val();
		if(email==""){
			alert("请输入Email地址或昵称");
			return false;
		}
		if(pwd==""){
			alert("请输入密码");
			return false;
		}
		return true;
	});
      $("#btn").mouseover(function(){
      	$(this).removeClass().addClass("login_btn_over");
      }).mouseout(function(){
      	$(this).removeClass().addClass("login_btn_out");
      });
       	
	   $("#quick_register").mouseover(function(){
	   	$(this).removeClass().addClass("login_register_over");
	   }).mouseout(function(){
	   	$(this).removeClass().addClass("login_register_out");
	   }).click(function(){
	   	window.location.href="register.html"
	   });
});
