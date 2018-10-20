$(document).ready(function() {
	/*验证邮箱*/
	$("#email").blur(function() {
		var email = $(this).val();
		var reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
		if(reg.test(email) == false) {
			$(".register_input_r").html("Email格式不正确，例如web@sohu.com");
			return false;
		}
		$(".register_input_r").html("");
		return true;
	})
	/*昵称验证*/
	$("#nickName").blur(function() {
		var user = $(this).val();
		var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
		if(reg.test(user) == false) {
			$(".register_input_ri").html("用户名不正确");
			return false;
		}
		$(".register_input_ri").html("");
		return true;
	})

	/*密码验证*/
	$("#pwd").blur(function() {
		var pwd = $(this).val();
		var reg = /^[a-zA-Z0-9]{4,10}$/;
		if(reg.test(pwd) == false) {
			$(".register_input_rig").html("密码不能含有非法字符，长度在4-10之间");
			return false;
		}
		$(".register_input_rig").html("");
		return true;
	})
	$("#repwd").blur(function() {
		var repwd = $("#repwd").val();
		var pwd = $("#pwd").val();
		if(pwd != repwd) {
			$(".register_input_righ").html("两次输入的密码不一致");
			return false;
		}
		$(".register_input_righ").html("");
		return true;
	})

    var cityList = new Array();
    cityList['北京市'] = ['朝阳区','东城区','西城区', '海淀区','宣武区','丰台区','怀柔','延庆','房山'];
    cityList['上海市'] = ['宝山区','长宁区','丰贤区', '虹口区','黄浦区','青浦区','南汇区','徐汇区','卢湾区'];
    cityList['广州省'] = ['广州市','惠州市','汕头市','珠海市','佛山市','中山市','东莞市'];
    cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
    cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
    cityList['天津市'] = ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
    cityList['江苏省'] = ['南京市','苏州市','无锡市'];
    cityList['浙江省'] = ['杭州市','宁波市','温州市'];
    cityList['四川省'] = ['四川省','成都市'];
    cityList['海南省'] = ['海口市'];
    cityList['福建省'] = ['福州市','厦门市','泉州市','漳州市'];
    cityList['山东省'] = ['济南市','青岛市','烟台市'];
    cityList['江西省'] = ['江西省','南昌市'];
    cityList['广西省'] = ['柳州市','南宁市'];
    cityList['安徽省'] = ['安徽省','合肥市'];
    cityList['河北省'] = ['邯郸市','石家庄市'];
    cityList['河南省'] = ['郑州市','洛阳市'];
    cityList['湖北省'] = ['武汉市','宜昌市'];
    cityList['湖南省'] = ['湖南省','长沙市'];
    cityList['陕西省'] = ['陕西省','西安市'];
    cityList['山西省'] = ['山西省','太原市'];
    cityList['黑龙江省'] = ['乌鲁木齐','哈尔滨市'];
    cityList['其他'] = ['其他'];
    
    $("#province").append(function(){
        var html="";
        for (var i in cityList){
            html+="<option value="+i+">"+i+"</option>";
        }
        return $(html);
    });
    $("#province").change(function(){
        var v= $(this).val();
        var html="";
        if(v=="请选择省/城市"){
            html="<option>请选择城市/地区</option>";
            $("#city").html(html);
            return;
        }
        var citys=cityList[v];
        $.each(citys,function(i,n){
            html+="<option value="+n+">"+n+"</option>";
        });
        $("#city").html(html);
        
    });
    
    
    $("#registerBtn").click(function(){
    	var a = $("#email").val();
    	var b = $("#nickName").val();
    	var c = $("#pwd").val();
    	var d = $("#repwd").val();
  
    	if(a==""){
    		
    		alert("请填写email地址");
    	}else if(b==""){
    		alert("请设置昵称");
    	}else if(c==""){
    		alert("请设定密码");
    	}else if(d==""||d!= c){
    		alert("请重新确认密码");
    		return false;
    	}else {
    		
		window.open("login.html");
    		
    	}
    })
})