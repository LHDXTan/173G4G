
// 产品展示

$(document).ready(function () {

    var boxkSort = new Array("科幻(513)", "武侠(574)", "中国当代小说(13880)"

        , "中国进现代小说(640)", "中国古典小说(1547)", "科幻(513)", "武侠(574)", "中国当代小说(13880)"

        , "中国进现代小说(640)", "中国古典小说(1547)", "科幻(513)", "武侠(574)", "中国当代小说(13880)"

        , "中国进现代小说(640)", "中国古典小说(1547)",

        "科幻(513)", "武侠(574)", "中国当代小说(13880)"

        , "中国进现代小说(640)", "中国古典小说(1547)", "科幻(513)", "武侠(574)", "中国当代小说(13880)"

        , "中国进现代小说(640)", "中国古典小说(1547)", "科幻(513)", "武侠(574)", "中国当代小说(13880)"

        , "中国进现代小说(640)", "中国古典小说(1547)", "科幻(513)", "武侠(574)", "中国当代小说(13880)"

        , "中国进现代小说(640)", "中国古典小说(1547)",

        "科幻(513)", "武侠(574)", "中国当代小说(13880)"

        , "中国进现代小说(640)", "中国古典小说(1547)"

    );

    var html = [];

    $.each(boxkSort, function (i, n) {

        html.push("<li>.<a href='#' class='blue'>" + n + "</a> </li>")

    });

    $("#product_catList_class").html(html.join(""));

 

 

 // **列表模式和大图模式切换**

    var $getBookList = $('#product_storyList_content').html();

    //大图模式(从列表的DOM中获取信息)

    function getBigBookList() {

        var $listBookImg = $("#product_storyList_content .product_storyList_content_left");

        var $contents = "";

        $(".product_storyList_content_right").find("ul").each(function(i, e) {

            var $content = ["<div class='big_img_list'><ul><li class='bookImg'>" + $listBookImg.eq(i).html() + "</li>"];

            var $print = $(e).children("li").eq(6).find('span');

            $content.push("<li><dl><dd>" + $print.eq(1).text() + "</dd><dd  class='product_content_delete'>" + $print.eq(2).text() + "</dd><dd>" + $print.eq(0).text() + "</dd></dl></li>")

            $content.push("<li class='detail'>" + $(e).children("li").eq(5).text() + "</li>")

            $content.push("<li class='detail'>" + $(e).children("li").eq(2).text() + "</li>")

            $content.push("<li class='detail'>" + $(e).children("li").eq(1).text() + "</li>")

            $content.push("<li class='detail'>" + $(e).children("li").eq(3).text() + "</li>")

            $content.push("<li class='detail'>" + $(e).children("li").eq(4).text() + "</li></ul></div>")

            $contents += $content.join("");

        });

        return $contents;

    }

    var $bigBookList = getBigBookList();

    $("#product_array").children().click(function () {

        $(this).addClass("click").siblings().removeClass("click");

        //使用attr判断this是列表还是大图

        if($(this).attr("name") == "array"){

            $("#product_storyList_content").html($getBookList);

        }else if($(this).attr("name") == "bigImg"){

            $("#product_storyList_content").html($bigBookList);

            // 鼠标悬浮到大图模式图片上的时候 显示隐藏的信息

            $("#product_storyList_content").children().find("ul").hover(function() {

                $(this).addClass("over");

                $(this).parent().addClass("over");

            }, function() {

                $(this).removeClass("over");

                $(this).parent().removeClass("over");

            })

        }

    })



 

});
