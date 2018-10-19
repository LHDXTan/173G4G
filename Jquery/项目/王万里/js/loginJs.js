
$(document).ready(function(){
	//Email和密码获取鼠标焦点变色，
	//失去鼠标焦点恢复原样，通过已有的css移除添加样式实现
	$("#email").focus(function(){
	$(this).removeClass().addClass("login_content_input_Focus")
}).blur(function(){
	$(this).removeClass().addClass("login_content_input")
})
$("#pwd").focus(function(){
	$(this).removeClass().addClass("login_content_input_Focus")
}).blur(function(){
	$(this).removeClass().addClass("login_content_input")
})
//登录按钮变色
$("#btn").mouseover(function(){
	$(this).removeClass().addClass("login_btn_over");
}).mouseout(function(){
	$(this).removeClass().addClass("login_btn_out");
})
//快速注册按钮变色
$("#quick_register").mouseover(function(){
	$(this).removeClass().addClass("login_register_over")
}).mouseout(function(){
	$(this).removeClass().addClass("login_register_out")
}).click(function(){
window.location.href="register.html";
	
})
$("#loginForm").submit(function(){
	var email=document.getElementById("email");
	var pwd=$("#pwd").val();
	var reg=/^\w+@\w+(\.[a-z A-Z]{2,3}){1,2}$/;
	
//表单校验
if(email==""){
		alert("Email不能为空请输入您的 邮箱地址")
		return false;
	}if(email!=reg){
		alert("请输入正确的邮箱格式");
		return false;
	}if(pwd==""){
		alert("密码不能为空");
        return false;
	}
   return true;


})



})

