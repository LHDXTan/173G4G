$(document).ready(function(){
	//打开一个广告栏
	window.open('open.html','雅客','locatio=0,status=0,toolbar=0,width=500,height=327,top=200,left=450');
	//“新手入门”下拉菜单的自动显示与隐藏
	$("#menu>img").mouseover(function(){
		$("#dd_menu_top_down").slideDown(400);
	})
    $("#menu>img").mouseout(function(){
		$("#dd_menu_top_down").slideUp(400);
	})
	//轮换图片
	function changeImg(){
        var index=0;
        var stop=false;
        var $li=$("#content").find("#scroll_img").children("li");
        var $page = $("#content").find("#scroll_number").children("li");
        $page.eq(index).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        $page.mouseover(function(){
            stop=true;
            index=$page.index($(this));
            $li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
            $(this).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        }).mouseout(function(){
            stop=false;
        });
        setInterval(function(){
            if(stop) return;
            index++;
            if(index>=$li.length){
                index=0;
            }
            $li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
            $page.eq(index).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        },3000);
    }
    changeImg();
//电子书特效：鼠标移至图片上时，图片变大，离开图片恢复原来状态
    $(".book ul img").mouseenter(function(){
        $(this).animate({width:"110%"},"slow");
    });
    $(".book ul img").mouseleave(function(){
        $(this).animate({width:"80%"},"slow");
    });
    //随滚动条上下移动的广告图片
    $(window).scroll(function(){
        var st = $(this).scrollTop()+50;
        $("#right").css("top",st);
    });
    $("#right").find("a").click(function(){
        $("#right").hide();
    });
	
});
