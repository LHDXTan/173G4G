$(document).ready(function() {
//下拉菜单的显示和隐藏
	$("#menu").hover(function() {
			$("#dd_menu_top_down").show();
		},
		function() {
			$("#dd_menu_top_down").hide();
		}
	);
//滚动条滚动的可关闭广告窗口
	$(window).scroll(function() {
		var st = $(this).scrollTop() + 50;
		$("#right").css("top", st);
	});
	$("#right").find("a").click(function() {
		$("#right").hide();
	});
//图片循环显示
function lunbo(){
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
        },1500);
    }
    lunbo();

//图书畅销榜tab切换
$(".tab ol li:first-of-type").click(function(){
	$(".tab ol li:last-of-type").css({"background":"#efefef","border-left":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"});
        $(this).css({"width":"110px","background":"#ffffff","border":"none"});
        $(".tab ul:first-of-type").show();
        $(".tab ul:last-of-type").hide();
    });
    $(".tab ol li:last-of-type").click(function(){
        $(".tab ol li:first-of-type").css({"background":"#efefef","border-right":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"});
        $(this).css({"width":"110px","background":"#ffffff","border":"none"});
        $(".tab ul:first-of-type").hide();
        $(".tab ul:last-of-type").show();
    });
    $(".tab ul li p").mouseenter(function(){
        $(this).next().show();
        $(this).hide();
        $(this).parent().siblings().children("p").show().end().children("dl").hide();
    })



//书讯快递循环垂直向上滚动
	function movedome() {
		var marginTop = 0;
		var stop = false;
		var interval = setInterval(function() {
			if(stop) return;
			$("#express").children("li").first().animate({"margin-top ": marginTop--}, 0, function() {
				var $first = $(this);
				if(!$first.is(":animated")) {
					if((-marginTop) > $first.height()) {
						$first.css({"margin-top": 0}).appendTo($("#express"));
						marginTop = 0;
					}
				}
			});
		}, 20);
		$("#express").mouseover(function() {
			stop = true;
		}).mouseout(function() {
			stop = false;
		});
	}
	movedome();
	
	//电子书特效图片的大小变化效果
	$(".book ul img").mouseenter(function(){
		$(this).animate({width:"100%"},"slow");
	});
	$(".book ul img").mouseleave(function(){
		$(this).animate({width:"80%"},"slow");
	})
	
})