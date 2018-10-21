$(function(){
   $("#shopping_commend_arrow").click(function(){
        if($("#shopping_commend_sort").css("display")=="none"){
            $(this).attr("src","images/shopping_arrow_up.gif");
        }else{
            $(this).attr("src","images/shopping_arrow_down.gif");
        }
        $("#shopping_commend_sort").toggle();
    });
	function AA(){
		var sum=0;//总价
		var sum1=0;//节省
		var sum2=0;//积分
		var length=$(".shopping_product_list").length;
	for(var i=1;i<=length;i++){
		var num1=$("#shoppingProduct_0"+i).children(".shopping_product_list_4").children("label").html();
		var num2=$("#shoppingProduct_0"+i).children(".shopping_product_list_5").children("input").val();
		var num3=$("#shoppingProduct_0"+i).children(".shopping_product_list_3").children("label").html();
		var num4=$("#shoppingProduct_0"+i).children(".shopping_product_list_2").children("label").html();
		zh=parseFloat(num1)*parseInt(num2);
		yh=parseInt(num2)*parseFloat(num3)-parseFloat(num1)*parseInt(num2);
		jf=parseInt(num2)*parseInt(num4);
		sum+=zh;
		sum1+=yh;
		sum2+=jf;

	}
	$(".shopping_list_end_3").html(sum);
	$("#product_save").html(sum1);
	$("#product_integral").html(sum2);
	}
	AA();
	$(".shopping_product_list_5").change(function(){
		var num1=$(this).children("input").val();
		var num2=$(this).siblings(".shopping_product_list_4").children("label").html();
		var num3=parseFloat(num1)*parseInt(num2);
		$(".shopping_list_end_3").html(num3);
		AA();
	})
	$(".blue").click(function(){
		
		if(confirm("你确定删除吗？")){
			$(this).parent().parent().remove();
		AA();
		}
	})
	$("#removeAllProduct").click(function(){
		$("#myTableProduct").remove();
		AA();
	})
	$("#myTableProduct").find("tr:odd").css("backgroundColor","#ffebcd");
})