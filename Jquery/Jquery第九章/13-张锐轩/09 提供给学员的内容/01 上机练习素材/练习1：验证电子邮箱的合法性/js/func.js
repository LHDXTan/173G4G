	function chinaCharactor(thisStr){
		var pattern=/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/;
		if (!pattern.test(thisStr)){
			return false;
			}
		else {
			return true;
			}
		}

	function patternCheck(thisPattern){
		strTest = arguments[1];
		if (!thisPattern.test(strTest)){
			return false;
			}
		else {
			return true;
			}
		}	
		
$(document).ready(function(){
	
	$("form").submit(function(){
		
		var mail= $("#email:text").val();
		if (mail=="") {
			alert("Email不能为空")
			return false;
		}
		if (mail.indexOf("@")==-1) {
			alert("Email格式不正确，必须包含@")
			return false;
		}
		if (mail.indexOf(".")==-1) {
			alert("Emai格式不正确，必须包含.")
			return false;
		}
		
	})
	
})