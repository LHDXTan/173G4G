$(document).ready(function() {
		/*用户名验证*/
		$("#user").blur(function () {
			var user = $(this).val();
			var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
			if (reg.test(user) == false) {
				$("#user_prompt").html("用户名不正确");
				return false;
			}
			$("#user_prompt").html("");
			return true;
		})

		/*密码验证*/
		$("#pwd").blur(function () {
			var pwd = $(this).val();
			var reg = /^[a-zA-Z0-9]{4,10}$/;
			if (reg.test(pwd) == false) {
				$("#pwd_prompt").html("密码不能含有非法字符，长度在4-10之间");
				return false;
			}
			$("#pwd_prompt").html("");
			return true;
		})
		$("#repwd").blur(function () {
			var repwd = $("#repwd").val();
			var pwd = $("#pwd").val();
			if (pwd != repwd) {
				$("#repwd_prompt").html("两次输入的密码不一致");
				return false;
			}
			$("#repwd_prompt").html("");
			return true;
		})

		/*验证邮箱*/
		$("#email").blur(function () {
			var email = $(this).val();
			var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
			if (reg.test(email) == false) {
				$("#email_prompt").html("Email格式不正确，例如web@sohu.com");
				return false;
			}
			$("#email_prompt").html("");
			return true;
		})

		/*验证手机号码*/
		$("#mobile").blur(function () {
			var mobile = $(this).val();
			var regMobile = /^1\d{10}$/;
			if (regMobile.test(mobile) == false) {
				$("#mobile_prompt").html("手机号码不正确，请重新输入");
				return false;
			}
			$("#mobile_prompt").html("");
			return true;
		})
		/*生日验证*/
		$("#birth").blur(function () {
			var birth = $(this).val();
			var reg = /^((19\d{2})|(200\d)|(201[0-6]))-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2]\d|3[0-1])$/;
			if (reg.test(birth) == false) {
				$("#birth_prompt").html("生日格式不正确，例如1980-5-12或1988-05-04");
				return false;
			}
			$("#birth_prompt").html("");
			return true;
		})

	})
