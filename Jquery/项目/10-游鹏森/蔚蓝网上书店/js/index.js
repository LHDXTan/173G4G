$(document).ready(function(){
	//广告弹出窗口
	window.open("open.html","雅客","top=200,left=450,width=800,height=500");
	 //随滚动条滚动的可关闭广告窗口
    $(window).scroll(function(){
        var st = $(this).scrollTop()+50;
        $("#right").css("top",st);
    });
    $("#right").find("a").click(function(){
        $("#right").hide();
    });
    
      //轮播图
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

    $(".book ul img").mouseenter(function(){
        $(this).stop(true,true).animate({width:"110%"},"slow");
    });
    $(".book ul img").mouseleave(function(){
        $(this).stop(true,true).animate({width:"80%"},"slow");
    });
//图书畅销榜切换
$(".tab ol li:first-of-type").mouseover(function(){
	$(".tab ol li:last-of-type").css({"background":"#efefef","border-left":"1px solid #cccccc","border-bottom":"1px solod #ccc","width":"118px"});
	$(this).css({"width":"119px","background":"#ffffff","border":"none"});
	$(".tab ul:first-of-type").show();
	$(".tab ul:last-of-type").hide();
});
$(".tab ol li:last-of-type").mouseover(function(){
	$(".tab ol li:first-of-type").css({"background":"#efefef","border-right":"1px solid #cccccc","border-bottom":"1px solod #ccc","width":"118px"});
	$(this).css({"width":"119px","background":"#ffffff","border":"none"});
	$(".tab ul:first-of-type").hide();
	$(".tab ul:last-of-type").show();
	
	
});
$(".tab ul li p").mouseenter(function(){
    $(this).next().show();
    $(this).hide();
    $(this).parent().siblings().children("p").show().end().children("dl").hide();
})
//书讯快递循环向上滚动
function movedome(){
	var marginTop=0;
	var stop=false;
	var interval=setInterval(function(){
		if(stop) return;
		$("#express").children("li").first().animate({"margin-top":marginTop--},0,function(){
			var $first=$(this);
			if(!$first.is(":animated")){
				if((-marginTop)>$first.height()){
					$first.css({"margin-top":0}).appendTo($("#express"));
					marginTop=0;
				}
			}
		});
	},50);
	$("#express").mouseover(function(){
		stop=true;
	}).mouseout(function(){
		stop=false;
	});
}
movedome();
});

