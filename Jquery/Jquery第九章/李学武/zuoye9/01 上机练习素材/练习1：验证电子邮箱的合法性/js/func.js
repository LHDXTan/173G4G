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