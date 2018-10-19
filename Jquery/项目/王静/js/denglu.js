$(document).ready(function(){
	$("#email").focus(function(){
		$(this).removeClass().addClass("login_content_input login_content_input_Focus");
	}).blur(function(){
		$(this).removeClass().addClass("login_content_input");
	});
	$("#password").focus(function(){
		$(this).removeClass().addClass("login_content_input login_content_input_Focus");
	}).blur(function(){
		$(this).removeClass().addClass("login_content_input");
	})
	
	$("#loginForm").submit(function(){
		var email=$("#email").val();
		var password=$("#passeord").val();
		if (email=="") {
			alert("请输入邮箱地址或昵称");
			return false;
		}
		if (password=="") {
			alert("请输入密码");
			return false;
		}
		return true;
	});
	$("#btn").hover(function(){
		$(this).removeClass().addClass("login_btn_over");
	},function(){
		$(this).removeClass().addClass("login_btn_out");
	})
	
	$("#quick_register").hover(function(){
		$(this).removeClass().addClass("login_register_over");
	},function(){
		$(this).removeClass().addClass("login_register_out");
	}).click(function(){
		window.location.href="register.html";
	});
})