//“新手入门”下拉菜单能否自动显示与隐藏
$("#menu").mouseenter(function() {
	$("#dd_menu_top_down").slideDown(500);
}).mouseleave(function() {
	$("#dd_menu_top_down").slideUp(500);
})
//打开首页时能否弹出广告页面窗口
window.open("open.html");
//广告图片能否随滚动条上下移动
$(window).scroll(function() {
	var a = $(this).scrollTop() + 50;
	$("#right").css("top", a);
})
$(".dd_close").click(function() {
	$("#right").hide();
})
//电子书特效实现图片的大小变化效果
$(".book ul img").mousemove(function() {
	$(this).animate({
		width: "110%"
	}, "slow")
});
$(".book ul img").mouseout(function() {
	$(this).animate({
		width: "80%"
	}, "slow")
});
changeImg();
//“图书畅销榜”内容是否实现tab切换特效
$(".tab ol li:first-of-type").mouseover(function() {
	$(".tab ol li:last-of-type").css({
		"background": "#efefef",
		"border-left": "1px solid #cccccc",
		"border-bottom": "1px solid #ccc",
		"width": "118px"
	});
	$(this).css({
		"width": "119px",
		"background": "#ffffff",
		"border": "none"
	});
	$(".tab ul:first-of-type").show();
	$(".tab ul:last-of-type").hide();
});
$(".tab ol li:last-of-type").mouseover(function() {
	$(".tab ol li:first-of-type").css({
		"background": "#efefef",
		"border-right": "1px solid #cccccc",
		"border-bottom": "1px solid #ccc",
		"width": "118px"
	});
	$(this).css({
		"width": "119px",
		"background": "#ffffff",
		"border": "none"
	});
	$(".tab ul:first-of-type").hide();
	$(".tab ul:last-of-type").show();
});
$(".tab ul li p").mouseenter(function() {
	$(this).next().show();
	$(this).hide();
	$(this).parent().siblings().children("p").show().end().children("dl").hide();
})
//中间的图片广告能否循环显示
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
