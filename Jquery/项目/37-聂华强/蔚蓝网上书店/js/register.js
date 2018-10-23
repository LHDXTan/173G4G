$(function(){
	$(".registerBtn").click(function(){
		var str=$("#email").val();
		if(str==""){
			email.setCustomValidity("邮箱不能为空")
		}else if(str.indexOf("@")==-1&&str.indexOf(".")==-1){
			email.setCustomValidity("邮箱格式不正确，例如123456@qq.com")
		}
		
	var name=$("#nickName").val();
	if(name==""){
		nickName.setCustomValidity("昵称不能为空");
	}else if(name.length<4||name.length>20){
		nickName.setCustomValidity("昵称必须由4-20个或汉字组成");
	}
	var ps=$("#pwd").val();
	if(ps==""){
		pwd.setCustomValidity("密码不能为空");
	}else if(ps.length<6||ps.length>20){
		pwd.setCustomValidity("密码必须由6-20个数字和英文字母组成");
	}
	var ps2=$("#repwd").val();
	if(ps!=ps2){
		repwd.setCustomValidity("两次密码输入不一致");
	}
	})
	    //提交按钮样式变化
    $("#registerBtn").mouseover(function(){
        $(this).attr("src","images/register_btn_over.gif");
    }).mouseout(function(){
        $(this).attr("src","images/register_btn_out.gif");
    });
    //省市级联
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
    cityList['黑龙江省'] = ['黑龙江省','哈尔滨市'];
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})