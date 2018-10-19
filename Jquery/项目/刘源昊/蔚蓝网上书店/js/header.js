
$(function(){
	//下拉菜单
    $("#menu").mouseenter(function(){
        $("#dd_menu_top_down").stop(true,true).slideDown(700);
      });
     $("#menu").mouseleave(function(){
        $("#dd_menu_top_down").stop(true,true).slideUp(1000);
    });
});
