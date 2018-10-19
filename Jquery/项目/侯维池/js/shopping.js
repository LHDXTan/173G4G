$(function(){
	ZZ();
	//全部删除
	$("#removeAllProduct").click(function(){
			$(".shopping_product_list").remove();
			$(".shopping_list_border").append("<div class='empty_product'><div>您还没有挑选商品，<a href='index.html'>去挑选看看>></a></div></div>");
	   ZZ();
	});
	//隔行变色
	 $("#myTableProduct").find("tr:odd").css("backgroundColor","#ffebcd");
     //点击删除
     $(".blue").click(function(){
     	if(confirm("你确定要删除吗?")){
     		$(this).parent().parent().remove();
     		ZZ();
     	}
     });
     //收起推荐
     $("#shopping_commend_arrow").click(function(){
     	$("#shopping_commend_sort").remove();
     })
    $("#menu>img").hover(
		function() {
			$("#dd_menu_top_down").slideDown(500);
		},
		function() {
			$("#dd_menu_top_down").slideUp(500);
		}
	);
     //购物车的操作
     $(".shopping_product_list_5").change(function(){
     	ZZ();
     })
//   $(".shopping_product_list_5").change(function(){
//   	var num1=$(this).children("input").val();
//   	alert(num1);
//   	var num2=$(this).siblings(".shopping_product_list_4").children("label").html();
//   	alert(num2);
//   	var num3=parseFloat(num1)*parseFloat(num2);
//   	alert(num3);
//   	$(".shopping_list_end_3").html("商品金额总计："+num3);
//   })
    function ZZ(){
        var num3=0;
        var length=$(".shopping_product_list").length;
        for(var i=1;i<=length;i++){
        	var num1=$("#shoppingProduct_0"+i+">.shopping_product_list_5").children("input").val();
        	var num2=$("#shoppingProduct_0"+i+">.shopping_product_list_4").children("label").html();
        	num3==parseFloat(num1)*parseFloat(num2);
        }
        $(".shopping_list_end_3").html("商品金额总计："+num3);
     }
})
