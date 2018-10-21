
$(function($){
//    onmouseover="myddang_show('dd_menu_top_down')" onmouseout="myddang_hidden('dd_menu_top_down')"
    //下拉菜单
    $("#menu").mouseenter(function(){
        $("#dd_menu_top_down").stop(true,true).slideDown(1000);
    }).mouseleave(function(){
        $("#dd_menu_top_down").stop(true,true).slideUp(1000);
    });
});