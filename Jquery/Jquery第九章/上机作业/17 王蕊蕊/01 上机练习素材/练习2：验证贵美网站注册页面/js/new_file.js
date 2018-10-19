$(document).ready(function(){
	//提交表单,调用验证函数
    $("#formRegister").submit(function(){
    	var flag = true;
    	if(!checkFname()) flag = false;
    	if(!checkName()) flag = false;
    	if(!checkEmai()) flag = false;
    	if(!checkPass()) flag = false;
    	if(!checkRepass()) flag = false;
    	return flag;
    })
    $("#fname").blur(checkFname);
    $("#lname").blur(checkName);
	$("#email").blur(checkEmail);
	$("#pass").blur(checkPass);
	$("#rpass").blur(checkrRepass);
})
//验证名字
function checkFname(){
	var $fname = $("#fname");
	var $divID = $("#DivFname");
	$divID.html("");
	if ($fname.val()=="") {
		$divID.html("名字不能为空");
		return;
	}
	for (var i=0;i<$fname.val().length;i++) {
		var j =$fname.val().substring(i,i+1)
		if (j>= 0) {
			$divID.html();
		}
	}
	return false;
}
//姓氏验证
function checkName () {
	var $name = $("#lname");
	var $divID = $("#DivName");
	$divID.html();
	if ($name.val()=="") {
		$divID.html("姓氏不为空");
		return false;
	}
	for (var i =0;i< $name.val().length;i++) {
		var j =$name.val().substring(i,i+1);
		if (j>=0) {
			$divID.html("姓氏不包含数字");
			return false;
		}
	}
	return true;
}
//email验证
function checkEmail () {
	var $email = $("#email");
	var $divID = $("#DivEmail");
	$divID.html();
	if ($email.val()=="") {
		$divID.html("姓氏不为空");
		return false;
	}
	if ($email.val().indexOf("@")==-1) {
		$divID.html("Email格式不正确，必须包含@");
		return false;
	}
	if ($email.val().indexOf(".")==-1) {
        $divID.html("Email格式不正确，必须包含.");
		return false;
	}
	return true;
}
//密码验证
function checkPass () {
	var $pass = $("#pass");
	var $divID = $("#DivPwd");
	$divID.html();
	if ($pass.val()=="") {
		$divID.html("密码不为空");
		return false;
	}
	if ($pass.val().length<6) {
		$divID.html("密码必须等于或大于6个字符");
		return false;
	}
	
	return true;
}
//重复密码验证
function checkrRepass () {
	var $pass = $("#pass");//输入密码
	var $Rpass = $("#rpass");//再次输入密码
	var $divID = $("#DivRepwd");
	$divID.html();
	if ($pass.val()!=$Rpass.val()) {
		$divID.html("两次输入密码不一样");
		return false;
	}
	return true;
}