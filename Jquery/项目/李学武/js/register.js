$(document).ready(function() {
	$(".registerBtn").click(function() {

		var em = $("#email").val();
		if(em == "") {
			alert("邮箱不能是空");
			return false;
		}
		if(em.indexOf("@") == -1 || em.indexOf(".") == -1) {
			alert("邮箱不能没有@或点");
			return false;
		}

		var name = $("#nickName").val();
		if(name == "") {
			alert("名字不能为空");
			return false;
		}
		if(name.length < 4) {
			alert("name长度必须大于4");
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

		var mimai = $("#repwd").val();
		if(mimai == "") {
			alert("二次密码不能是空");
			return false;
		}
		if(mima != mimai) {
			alert("俩次密码不一致");
			return false;
		}

	})
	var cityList = new Array();
	cityList['北京市'] = ['朝阳区', '东城区', '西城区', '海淀区', '宣武区', '丰台区', '怀柔', '延庆', '房山'];
	cityList['上海市'] = ['宝山区', '长宁区', '丰贤区', '虹口区', '黄浦区', '青浦区', '南汇区', '徐汇区', '卢湾区'];
	cityList['广州省'] = ['广州市', '惠州市', '汕头市', '珠海市', '佛山市', '中山市', '东莞市'];
	cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
	cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
	cityList['其他'] = ['其他'];
	$("#province").append(function() {
		var html = "";
		for(var i in cityList) {
			html += "<option value=" + i + ">" + i + "</option>";
		}
		return $(html);
	});
	$("#province").change(function() {
		var v = $(this).val();
		var html = "";
		if(v == "请选择省/城市") {
			html = "<option>请选择城市/地区</option>";
			$("#city").html(html);
			return;
		}
		var citys = cityList[v];
		$.each(citys, function(i, n) {
			html += "<option value=" + n + ">" + n + "</option>";
		});
		$("#city").html(html);
	});
	window.open("login.html");
	$("#registerBtn").mouseover(function() {
		$(this).attr("src", "images/register_btn_over.gif");
	}).mouseout(function() {
		$(this).attr("src", "images/register_btn_out.gif");
	});
})