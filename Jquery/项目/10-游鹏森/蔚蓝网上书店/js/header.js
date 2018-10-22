$(document).ready(function(){
	//“新手入门”下拉菜单的自动显示与隐藏
	$("#menu").hover(function(){
		$("#dd_menu_top_down").stop(true,true).slideDown(1000);
	},
	function(){
	    $("#dd_menu_top_down").stop(true,true).slideUp(1000);
      });
// $("#menu").mouseenter(function(){
//      $("#dd_menu_top_down").stop(true,true).slideDown(1000);
//  }).mouseleave(function(){
//      $("#dd_menu_top_down").stop(true,true).slideUp(1000);
//  });
});
