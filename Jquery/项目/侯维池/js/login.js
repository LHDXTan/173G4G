$(function(){
	$("#btn").click(function(){
		var em = $("#email").val();
		if(em == "") {
			alert("邮箱不能为空");
			return false;
		}
		if(em.indexOf("@") == -1 || em.indexOf(".") == -1) {
			alert("格式不正确,例如1797712444@qq.com");
			return false;
		}
		var pas = $("#pwd").val();
		if(pas == "") {
			alert("密码不能为空");
			return false;
		}
		if(pas.length < 6 || pas.length > 20) {
			alert("请输入长度在6-20之间的密码");
			return false;
		}
		window.open("index.html");
	});
	$("#email").focus(function(){
		$(this).removeClass().addClass("login_content_input_Focus");
	}).blur(function(){
		$(this).removeClass().addClass("login_content_input");
	})
	$("#pwd").focus(function(){
		$(this).removeClass().addClass("login_content_input_Focus");
	}).blur(function(){
		$(this).removeClass().addClass("login_content_input");
	})
	$("#btn").focus(function(){
		$(this).removeClass().addClass("login_btn_over");
	}).blur(function(){
		$(this).removeClass().addClass("login_btn_out");
	})
	$("#quick_register").focus(function(){
		$(this).removeClass().addClass("login_register_over");
	}).blur(function(){
		$(this).removeClass().addClass("login_register_out");
	})
	$("#quick_register").click(function(){
		window.open("register.html");
	})
})
