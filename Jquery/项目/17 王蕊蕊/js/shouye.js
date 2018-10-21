//显示与隐藏
$(document).ready(function() {
	$("#menu a").hover(function() {
			$("#dd_menu_top_down").show()
		},
		function() {
			$("#dd_menu_top_down").hide();
		})
	//随滚动条滚动的移动可关闭广告窗口
	$(window).scroll(function() {
		var st = $(this).scrollTop() + 50;
		$("#right").css("top", st);
	});
	$(".dd_close a").click(function() {
		$("#right").hide();
	});
	//轮播图片
	function changeImg() {
		var index = 0;
		var stop = false;
		var $li = $("#content").find("#scroll_img").children("li");
		var $page = $("#content").find("#scroll_number").children("li");
		$page.eq(index).addClass("scroll_number_over").stop(true, true).siblings().removeClass("scroll_number_over");
		$page.mouseover(function() {
			stop = true;
			index = $page.index($(this));
			$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
			$(this).addClass("scroll_number_over").stop(true, true).siblings().removeClass("scroll_number_over");
		}).mouseout(function() {
			stop = false;
		});
		setInterval(function() {
			if(stop) return;
			index++;
			if(index >= $li.length) {
				index = 0;
			}
			$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
			$page.eq(index).addClass("scroll_number_over").stop(true, true).siblings().removeClass("scroll_number_over");
		}, 3000);
	}
	changeImg();

	//图片放大缩小
	$(".book ul img").mouseenter(function() {
		$(this).animate({ width: "110%" }, "slow");
	});
	$(".book ul img").mouseleave(function() {
		$(this).animate({ width: "80%" }, "slow");
	});

	//图书畅销切换
	$(".tab ol li:first-of-type").click(function() {
		$(".tab ol li:last-of-type").css({ "background": "#efefef", "border-left": "1px solid #cccccc", "border-bottom": "1px solid #ccc" });
		$(this).css({ "background": "#ffffff", "border": "none" });
		$(".tab ul:first-of-type").show();
		$(".tab ul:last-of-type").hide();
	})
	$(".tab ol li:last-child").click(function() {
		$(".tab ol li:first-of-type").css({ "background": "#efefef", "border-right": "1px solid #cccccc", "border-bottom": "1px solid #ccc" });
		$(this).css({ "background": "#ffffff", "border": "none" });
		$(".tab ul:last-of-type").show();
		$(".tab ul:first-of-type").hide();
	})
	 $(".tab ul li p").mouseenter(function(){
        $(this).next().show();
        $(this).hide();
        $(this).parent().siblings().children("p").show().end().children("dl").hide();
    })

	//书讯快递循环垂直向上滚动
	function gundong() {
		var marginTop = 0;
		var stop = false;
		var interval = setInterval(function() {
			if(stop) return;
			$("#express").children("li").first().animate({ "margin-top": marginTop-- }, 0, function() {
				var $first = $(this);
				if(!$first.is(":animated")) {
					if((-marginTop) > $first.height()) {
						$first.css({ "margin-top": 0 }).appendTo($("#express"));
						marginTop = 0;
					}
				}

			})
		}, 20);
		$("#express").mouseover(function() {
			stop = true;
		}).mouseout(function() {
			stop = false;
		});
	}
	gundong();
})