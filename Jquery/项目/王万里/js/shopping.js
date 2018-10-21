$(document).ready(function(){
	$("#shopping_commend_arrow").click(function(){
		if($("#shopping_commend_sort").css("display")=="none"){
            $(this).attr("src","images/shopping_arrow_up.gif");			
		}else{
            $(this).attr("src","images/shopping_arrow_down.gif");			
		}
		$("#shopping_commend_sort").toggle();
	})

$("#myTableProduct").find("tr:odd").css("background-color","#ffebcd")


 $("#myTableProduct").find("tr").mouseover(function(){
        $(this).css("backgroundColor","#fff");
    }).mouseout(function(){
        if($("#myTableProduct").find("tr").index($(this))%2==1) {
            $(this).css("backgroundColor","#ffebcd");
        }else{
            $(this).css("backgroundColor","#fefbf2");
        }
    });

function jisuan(){
	var jifen=0,yuanjia=0,xianjia=0;
	$("#myTableProduct").find("tr").each(function(i,ele){
		var shuliang=$(ele).find(".shopping_product_list_5").find("input").val();
		jifen+=parseInt($(ele).find(".shopping_product_list_2").text())*shuliang//积分数
		 var price=parseInt($(ele).find(".shopping_product_list_4").find("label").text().replace(".",""))*shuliang;//现价
		 xianjia=price+xianjia;
		 //原价
		 var prePrice=parseInt($(ele).find(".shopping_product_list_3").find("label").text().replace(".",""))*shuliang;
		yuanjia=prePrice+yuanjia;
	})
	$("#product_integral").text(jifen);//吧
        $("#product_total").text(xianjia/100);
        $("#product_save").text((yuanjia-xianjia)/100);
        return xianjia/100;
}
         jisuan();

$("#myTableProduct").find(".shopping_product_list_6").children("a").click(function(){
	if(confirm("您确定要删除信息吗")){
		$(this).parent().parent().remove();
	     jisuan(); 
	}
})

$("#myTableProduct").find(".shopping_product_list_5").children("input").change(function(){
   var a;
   var zhi=$(this).val();
   if(zhi==""){
   	alert("数量不能为空 必须是整数")
   	$(this).val(1);
   }
  	a=jisuan();
	alert("您现在的总价为"+a);
})
$("#removeAllProduct").click(function(){
		$("#myTableProduct").next().remove();
         $("#myTableProduct").remove();
         $(".shopping_list_border").append('<div><div>您还没有挑选商品点击首页前去挑选<a href="index.html">首页</a></div></div>')
		
	})
})
