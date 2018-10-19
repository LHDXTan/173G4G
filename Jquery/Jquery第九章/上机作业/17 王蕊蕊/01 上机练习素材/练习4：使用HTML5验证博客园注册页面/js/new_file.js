$(document).ready(function() {
	$(".btn").click(function(){
			var u=document.getElementById("user");
			if(u.validity.valueMissing==true){
				u.setCustomValidity("用户名不能为空");
			}
			else if(u.validity.patternMismatch==true){
				u.setCustomValidity("用户名必须是字母开头的4~16位的英文字母和数字");
			}
			else{
				u.setCustomValidity("");
			}

			var pwd=document.getElementById("pwd");
			if(pwd.validity.valueMissing==true){
				pwd.setCustomValidity("密码不能为空");
			}
			else if(pwd.validity.patternMismatch==true){
				pwd.setCustomValidity("密码必须是4~10位的英文字母和数字");
			}
			else{
				pwd.setCustomValidity("");
			}

			var email=document.getElementById("email");
			if(email.validity.valueMissing==true){
				email.setCustomValidity("邮箱不能为空");
			}
			else if(email.validity.typeMismatch==true){
				email.setCustomValidity("邮箱格式不正确");
			}
			else{
				email.setCustomValidity("");
			}

			var mobile=document.getElementById("mobile");
			if(mobile.validity.patternMismatch==true){
				mobile.setCustomValidity("手机必须是1开头的11位数字");
			}
			else{
				mobile.setCustomValidity("");
			}

			var birth=document.getElementById("birth");
			if(birth.validity.patternMismatch==true){
				birth.setCustomValidity("生日的年份必须为1900～2016之间，格式为1980-5-12或1988-05-04");
			}
			else{
				birth.setCustomValidity("");
			}



		})
	})
