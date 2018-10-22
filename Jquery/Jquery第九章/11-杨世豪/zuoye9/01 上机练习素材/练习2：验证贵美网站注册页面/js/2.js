$(document).ready(function(){
			//提交表单,调用验证函数
			$("#formRegister").submit(function(){
				var flag = true;
				if (!checkFname()) flag = false;
				if (!checkName()) flag = false;
				if (!checkEmail()) flag = false;
				if (!checkPass()) flag = false;
				if (!checkRePass()) flag = false;
				return flag;
			})
			//绑定失去焦点事件
			$("#fname").blur(checkFname);
			$("#lname").blur(checkName);
			$("#email").blur(checkEmail);
			$("#pass").blur(checkPass);
			$("#rpass").blur(checkRePass);
		})

        //验证名字
		function checkFname() {
			var $fname = $("#fname");
			var $divID = $("#DivFname");
			$divID.html("");
			if ($fname.val() == "") {
				$divID.html("名字不能为空");
				return false;
			}
			for (var i = 0; i < $fname.val().length; i++) {
				var j = $fname.val().substring(i, i + 1)
				if (j >= 0) {
					$divID.html("姓名中不能包含数字");
					return false;
				}
			}
			return true;
		}
		//验证姓氏
		function checkName() {
			var $name = $("#lname");
			var $divID = $("#DivName");
			$divID.html("");
			if ($name.val() == "") {
				$divID.html("姓氏不能为空");
				return false;
			}
			for (var i = 0; i < $name.val().length; i++) {
				var j = $name.val().substring(i, i + 1)
				if (j >= 0) {
					$divID.html("姓氏中不能包含数字");
					return false;
				}
			}
			return true;
		}

		//验证Email
		function checkEmail() {
			var $mail = $("#email");
			var $divID = $("#DivEmail");
			$divID.html("");
			if ($mail.val() == "") {
				$divID.html("Email不能为空");
				return false;
			}
			if ($mail.val().indexOf("@") == -1) {
				$divID.html("Email格式不正确，必须包含@");
				return false;
			}
			if ($mail.val().indexOf(".") == -1) {
				$divID.html("Email格式不正确，必须包含.");
				return false;
			}
			return true;
		}
		//验证密码
		function checkPass() {
			var $pwd = $("#pass");
			var $divID = $("#DivPwd");
			$divID.html("");
			if ($pwd.val() == "") {
				$divID.html("密码不能为空");
				return false;
			}
			if ($pwd.val().length < 6) {
				$divID.html("密码必须等于或大于6个字符");
				return false;
			}
			return true;
		}
		//验证重复密码
		function checkRePass() {
			var $pwd = $("#pass"); //输入密码
			var $repwd = $("#rpass");  //再次输入密码
			var $divID = $("#DivRepwd");
			$divID.html("");
			if ($pwd.val() != $repwd.val()) {
				$divID.html("两次输入的密码不一致");
				return false;
			}
			return true;
		}
