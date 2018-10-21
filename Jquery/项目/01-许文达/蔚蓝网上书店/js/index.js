
// 主页JS脚本

 

$(document).ready(function () {

      window.open ('open.html', 'newwindow', 'height=400, width=500');

 

    //书讯快递

    var marginTop = 0;

    var interval = setInterval(function () {

        $("#express").children("li").first().animate({"margin-top": marginTop--}, 0, function () {

            var $first = $(this);

            if (!$first.is(":animated")) {

                if ((-marginTop) > $first.height()) {

                    $first.css({"margin-top": 0}).appendTo($("#express"));

                    marginTop = 0;

                }

            }

        });

    }, 100);

 

//广告图关闭

    $("#dd_close").click(function () {

        $("#right").hide();

    });

    //方法1

    //var adverTop =parseInt($("#right").css("top"));//广告图

    // var adverleft =parseInt($("#right").css("left"));

    // $(window).scroll(function(){

    //     var scrollTop =parseInt($(this).scrollTop());//获取滚动条滚下去的距离

    //     var scrollLeft =parseInt($(this).scrollLeft());//获取滚动条滚向右的距离

    //     $("#right").offset({top:scrollTop+adverTop});

    //     $("#right").offset({left:scrollLeft+adverleft});

    // });

 

    $("#right").css("position", "fixed");//方法2：广告图

 

    $("#menu").hover(function () {//新手入门

        $("#dd_menu_top_down").slideDown();

    }).mouseleave(function () {

        $("#dd_menu_top_down").slideUp();

    });

 

    var i = 0;//当前广告图下标

    var bool = 1;

    //轮播图
    setInterval(function () {

        //siblings除它以外

        $("#scroll_number li").eq(i).css("background", "red").siblings().css("background", "#a9a9a9");

        $("#scroll_img li ").eq(i).fadeIn("slow").siblings().fadeOut("slow");//3.把要显示的广告图淡入

        //if(i==4)i=0; 顺序1-4   1-4

        if (i == 4) {

            bool = 2;

        } else if (i == 0) {

            bool = 1

        }

        //1 前进

        //2 后退

        if (bool == 1) {

            i++;//广告图索引+1

        } else if (bool == 2) {

            i--;

        }

        //顺序1-4  4-1  1-4

    }, 2000);//1.设置定时

 

 

//电子书

    $(".book ul li img").mouseenter(function () {

        $(this).animate({width: "240px"});

    }).mouseleave(function () {

        $(this).animate({width: "80%"});

    });

//图书

// 图书畅销榜

    $(".tab ol li:first").click(function () {

        $(this).css({background: "#ffffff", "border": "none"});

        $(".tab ol li:last").css({

            background: "#efefef",

            "border-left": "1px solid #cccccc",

            "border-bottom": "1px solid #ccc"

        });

        $(".tab ul:first").show();//显示

        $(".tab ul:last").hide();//隐藏

 

    });

//图书上新书榜

    $(".tab ol li:last").click(function () {

        $(this).css({background: "#ffffff", "border": "none"});

        $(".tab ol li:first").css({

            background: "#efefef",

            "border-right": "1px solid #cccccc",

            "border-bottom": "1px solid #ccc"

        });

        $(".tab ul:first").hide();//隐藏

        $(".tab ul:last").show();//显示

 

    });

 

    //畅销榜和新书榜：鼠标悬浮在书名上时的事件

    $(".tab ul li").mouseenter(function () {

        //1.把当前li所有的兄弟li的dl隐藏、p显示

        $(this).parent().children("li").children("dl").hide();

        $(this).parent().children("li").children("p").show();

        //2.把当前的li的dl显示，p隐藏

        $(this).children("dl").show();

        $(this).children("p").hide();

    });

 

});
