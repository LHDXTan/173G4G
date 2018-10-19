$(document).ready(function(){
	//设置弹出小广告用OPEN方法 
	window.open('open.html','','top=350,left=400,width=700,height=327,scrollbars=0,resizable=0');
	$(window).scroll(function(){
		//把当前滚动距离加50赋值给ST变量
		var st=$(this).scrollTop()+50;
		//st作为值赋值给TOP属性
            $("#right").css("top",st);
	})
	//拿到这个A标签当点击A标签时隐藏DIV 
	$(".right").find("a").click(function(){
		$(".right").hide();
	})
	
	//电子书放大缩小
	//通过鼠标mouseenter时间进入时IMG标签时，动画方法animate，来改变图形的大小形成动画。
    $(".book ul img").mouseenter(function(){
        $(this).animate({width:"1000"},"slow");
    });
    $(".book ul img").mouseleave(function(){
        $(this).animate({width:"80%"},"slow");
    });

//书讯
function shuxun(){
	var top=0;
	var stop=false;
	var interval=setInterval(function(){
		if(stop) return;
		$("#express").children("li").first().animate({"margin-top":top--},0,function(){
			var $first=$(this);
			if(!$first.is(":animated")){
				if((-top)>$first.height()){
					$first.css({"margin-top":0}).appendTo($("#express"))
				    top=0;
				}
			}
		})
	},50);
	
	$("#express").hover(function(){
		stop=true;},
		function(){
		stop=false;})
}
 shuxun();
 
 //Tab切换
 //当鼠标进入第一个LI标签时改变元素的CSS
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
  function changeImg(){
        var index=0;
        var stop=false;
        var $li=$("#content").find("#scroll_img").children("li");
        var $page = $("#content").find("#scroll_number").children("li");
        $page.eq(index).addClass("scroll_number_over").stop(true,true).siblings().removeClass("scroll_number_over");
        $page.mouseover(function(){
            stop=true;
            index=$page.index($(this));
        //clearQueue:如果设置成true，则清空队列。可以立即结束动画。
        //jumpToEnd:如果设置成true，则完成队列。可以立即完成动画。
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
})