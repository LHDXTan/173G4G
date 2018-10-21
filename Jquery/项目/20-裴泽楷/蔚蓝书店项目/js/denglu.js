$(document).ready(function(){
	$("#email").focus(function(){
		$(this).removeClass().addClass("login_content_input login_content_input_Focus");
	}).blur(function(){
		$(this).removeClass().addClass("login_content_input");
	})
	$("#pwd").focus(function(){
		$(this).removeClass().addClass("login_content_input login_content_input_Focus");
	}).blur(function(){
		$(this).removeClass().addClass("login_content_input");
	})
	$("#btn").mousemove(function(){
		$(this).removeClass().addClass("login_btn_out login_btn_over");
	}).mouseout(function(){
		$(this).removeClass().addClass("login_btn_out");
	})
	$("#quick_register").mousemove(function(){
		$(this).removeClass().addClass("login_register_out login_register_over");
	}).mouseout(function(){
		$(this).removeClass().addClass("login_register_out");
	})
	
	$("form").submit(function(){
		var mail = $("#email:text").val();
		if (mail=="") {//检测Email是否为空
			alert("Email不能为空");
			return false;
		}
		if (mail.indexOf("@") ==-1) {
			alert("Email格式不正确\n必须包含@");
			return false;
		}
		if (mail.indexOf(".") ==-1) {
			alert("Email格式不正确\n必须包含.");
			return false;
		}
		return true;
	})

})