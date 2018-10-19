/**
 * Created by zongjuan.wang on 2016/6/20.
 */

$(document).ready(function(){
    $("#play ul>li:not(li:last)").css("margin-right","10px");
    $("#play ul>li:last").css("background","#f0f0f0");
    $("#play ul>li>span").css("background","#f0a30f");
    $("#play ol>li>span:first").css("background","#f0a30f");
    $("#play ol>li>span:not(:first)").css("background","#a4a3a3");
    $("#play ol>li:lt(5)").css("background","url(images/orange.jpg) right -4px no-repeat");
    $("#play ol>li:eq(1)").css("background","url(images/green.jpg) right -4px no-repeat");
    $("#play ol>li:gt(4)").css("background","url(images/green.jpg) right -4px no-repeat");
    $("#play ol>li").mousemove(function(){
        $(this).find(":hidden").show();
    })
    $("#play ol>li").mouseout(function(){
        $("#play ol>li p:visible").hide();
    })

})