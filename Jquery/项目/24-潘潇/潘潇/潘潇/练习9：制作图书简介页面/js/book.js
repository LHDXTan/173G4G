$(document).ready(function(){
	$(".intro").css("color","red");
	$("#jdPrice>span").css({"font-size":"24px","font-weight":"hold","color":"red"});
	$("#jdPrice p").css("color","#cccccc");
	$("#jdPrice p span").css("text-decoration","line-through");
	$(".price dl").css("color","red");
	$("dl").click(function(){
		$("dd").css("display","block")
	});
	$(".price dl span,#ticket span").css({"background":"red","color":"#ffffff","padding":"ipx 5px","margin-right":"5px"});
})