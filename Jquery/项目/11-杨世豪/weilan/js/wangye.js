$(document).ready(function(){
	
    //打开一个广告窗口
   window.open('open.html','','top=120,left=500,width=500,height=327,scrollbars=0,resizable=0');

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





    
	$("#menu").click(function(){
		$("#dd_menu_top_down").show();
	}).mouseleave(function(){
		$("#dd_menu_top_down").hide();
	})
	
	$(".book li:nth-of-type(1)").mousemove(function(){
		$(".book ul #q").css("transform","scale(1.5)")
		
}).mouseout(function(){
	$(".book ul #q").css("transform","scale(1)")
})
$(".book li:nth-of-type(2)").mousemove(function(){
		$(".book ul #w").css("transform","scale(1.5)")
		
}).mouseout(function(){
	$(".book ul #w").css("transform","scale(1)")
})
$(".book li:nth-of-type(3)").mousemove(function(){
		$(".book ul #e").css("transform","scale(1.5)")
		
}).mouseout(function(){
	$(".book ul #e").css("transform","scale(1)")
})
$(".book li:nth-of-type(4)").mousemove(function(){
		$(".book ul #r").css("transform","scale(1.5)")
		
}).mouseout(function(){
	$(".book ul #r").css("transform","scale(1)")
})
$(".book li:nth-of-type(5)").mousemove(function(){
		$(".book ul #t").css("transform","scale(1.5)")
		
}).mouseout(function(){
	$(".book ul #t").css("transform","scale(1)")
})
$(".book li:nth-of-type(6)").mousemove(function(){
		$(".book ul #y").css("transform","scale(1.5)")
		
}).mouseout(function(){
	$(".book ul #y").css("transform","scale(1)")
})
   
   $("#dd_close a").click(function(){
   	 $("#right").remove();
   })
    $(".tab ol li:nth-of-type(1)").bind("click",bg1=function(){
        $(this).css({"width":"119px","background":"#ffffff","border":"none"});
    }).bind("click",content1=function(){
        $("#qq").show();
        $("#ww").hide();
    });
    $(".tab ol li:nth-of-type(2)").bind("click",bg2=function(){
    $(this).css({"width":"119px","background":"#ffffff","border":"none"});
    }).bind("click",content2=function(){
        $("#qq").hide();
        $("#ww").show();
        
    })
    
// $(".tab ol li:first-of-type").mouseover(function(){
//      $(".tab ol li:last-of-type").css({"background":"#efefef","border-left":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"});
//      $(this).css({"width":"119px","background":"#ffffff","border":"none"});
//      $(".tab ul:first-of-type").show();
//      $(".tab ul:last-of-type").hide();
//  });
//  $(".tab ol li:last-of-type").mouseover(function(){
//      $(".tab ol li:first-of-type").css({"background":"#efefef","border-right":"1px solid #cccccc","border-bottom":"1px solid #ccc","width":"118px"});
//      $(this).css({"width":"119px","background":"#ffffff","border":"none"});
//      $(".tab ul:first-of-type").hide();
//      $(".tab ul:last-of-type").show();
//  });
    $(".tab ul li p").mouseenter(function(){
        $(this).next().show();
        $(this).hide();
        $(this).parent().siblings().children("p").show().end().children("dl").hide();
    })
    
    
    
    //书讯快递循环垂直向上滚动
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
    
    
    
    
    
})

