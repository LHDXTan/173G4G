$(document).ready(function() {
	$("#btn").click(function() {
		var em = $("#email").val();
		if(em == "") {
			alert("请输入正确的邮箱或名称");
			return false;
		}

		var mima = $("#pwd").val();
		if(mima == "") {
			alert("密码不能为空");
			return false;
		}
		if(mima.length < 6) {
			alert("密码长度必须大于 6");
			return false;
		}
	})
	
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
	 $("#btn").mouseover(function(){
        $(this).removeClass().addClass("login_btn_over");
    }).mouseout(function(){
        $(this).removeClass().addClass("login_btn_out");
    });
    //快速注册
    $("#quick_register").mouseover(function(){
        $(this).removeClass().addClass("login_register_over");
    }).mouseout(function(){
        $(this).removeClass().addClass("login_register_out");
    }).click(function(){
    });
})
