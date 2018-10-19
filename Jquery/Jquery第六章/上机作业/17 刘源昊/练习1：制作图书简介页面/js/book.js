/**
 * Created by zongjuan.wang on 2016/6/15.
 */

$(document).ready(function(){
    $(".intro").css("color","red");
    /*价格设置字体加大加粗红色*/
    $("#jdPrice>span").css({"font-size":"24px","font-weight":"bold","color":"red"});
    $("#jdPrice p").css({"color":"#cccccc"});//字体灰色
    $("#jdPrice p span").css({"text-decoration":"line-through"});

    $("dl").css("color","#ff0000");  //dl中字体颜色为红色
    $("dl span,#ticket span").css({"background":"#ff0000","color":"#ffffff","padding":"1px 5px","margin-right":"5px"});

    $("dt").click(function(){   //获取<dt>标签并为其添加click事件函数
        $("dd").css("display","block"); //获取<dd>标签设置显示
    });
})