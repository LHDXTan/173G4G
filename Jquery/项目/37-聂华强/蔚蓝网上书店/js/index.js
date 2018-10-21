$(function() {
	window.open("open.html", "", "target:self");

	$("#menu>img").hover(
		function() {
			$("#dd_menu_top_down").slideDown(500);
		},
		function() {
			$("#dd_menu_top_down").slideUp(500);
		}
	)
	//
	var adverTop; //层距页面顶端距离
	var adverLeft;
	var adverObj; //层对象
	function inix() {
		adverObj = document.getElementById("right"); //获得层对象
		if(adverObj.currentStyle) {
			adverTop = parseInt(adverObj.currentStyle.top);
			adverLeft = parseInt(adverObj.currentStyle.left);
		} else {
			adverTop = parseInt(document.defaultView.getComputedStyle(adverObj, null).top);
			adverLeft = parseInt(document.defaultView.getComputedStyle(adverObj, null).left);
		}
	}

	function move(){
		var sTop = parseInt(document.documentElement.scrollTop || document.body.scrollTop);
		var sLeft = parseInt(document.documentElement.scrollLeft || document.body.scrollLeft);
		adverObj.style.top = adverTop + sTop + "px";
		adverObj.style.left = adverLeft + sLeft + "px";
	}
	window.onload = inix;
	window.onscroll = move;
	$("#dd_close").click(
		function() {
			$(this).hide();
			$("#right1").hide();
		}
	)

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
	$(".book ul img").hover(
		function() {
			$(this).animate({
				width: "110%"
			}, "slow");
		},
		function() {

			$(this).animate({
				width: "80%"
			}, "slow");
		}
	)
	  $(".tab ol li:first-of-type").mouseover(function(){
        $(".tab ol li:last-of-type").css({"background":"#efefef","border-left":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"});
        $(this).css({"width":"119px","background":"#ffffff","border":"none"});
        $(".tab ul:first-of-type").show();
        $(".tab ul:last-of-type").hide();
    });
    $(".tab ol li:last-of-type").mouseover(function(){
        $(".tab ol li:first-of-type").css({"background":"#efefef","border-right":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"});
        $(this).css({"width":"119px","background":"#ffffff","border":"none"});
        $(".tab ul:first-of-type").hide();
        $(".tab ul:last-of-type").show();
    });
    $(".tab ul li p").mouseenter(function(){
        $(this).next().show();
        $(this).hide();
        $(this).parent().siblings().children("p").show().end().children("dl").hide();
    })

})