$(function($){
	$("#shopping_commend_arrow").click(function(){
		if($("#shopping_commend_sort").css("display")=="none"){
			$(this).attr("src","images/shopping_arrow_up.gif");
		}else{
			$(this).attr("src","images/shopping_arrow_down.gif");
		}
		$("#shopping_commend_sort").toggle();
	})
	$("#myTableProduct").find("tr:odd").css("background-color","#ffebcd");
	$("#myTableProduct").find("tr").mouseover(function(){
		$(this).css("background-color","#fff");
	}).mouseout(function(){
		if($("#myTableProduct").find("tr").index($(this))%2==1){
			$(this).css("background-color","#ffebcd");
		}else{
			$(this).css("background-color","#FEFBF2");
		}
	})
	function totalPrice(){
		var percents= 0,prePrices= 0,prices=0;
		
	}
})