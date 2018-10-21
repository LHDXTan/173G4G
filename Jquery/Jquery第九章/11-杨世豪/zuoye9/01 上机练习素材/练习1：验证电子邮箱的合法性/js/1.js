	$(document).ready(function(){
			$("#formRegister").submit(function(){
				var mail=$("#email").val();
				if(mail==""){//检测Email是否为空
					alert("Email不能为空");
					return false;
				}
				if(mail.indexOf("@")==-1){
					alert("Email格式不正确\n必须包含@");
					return false;
				}
				if(mail.indexOf(".")==-1){
					alert("Email格式不正确\n必须包含.");
					return false;
				}
				return true;
			})
		})
