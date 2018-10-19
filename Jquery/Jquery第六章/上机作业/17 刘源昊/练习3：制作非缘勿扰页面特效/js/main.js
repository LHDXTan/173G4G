/**
 * Created by zongjuan.wang on 2016/6/16.
 */

$(document).ready(function(){
    $('dt').click(function(){
        $('dd span[id]').css({"color":"#FF0099", "font-weight":"bold"});
    });


    $("#director").click(function(){
        $("dd span[title]").css("font-weight","bold");
    });


    $('#label').click(function(){
        $("#label~span").css({"background-color":"#E0F8EA","color":"#10A14B","padding":"2px 8px"});
    });

    $("img[alt]").click(function(){
        alert("您已收藏成功！");
    });

});
