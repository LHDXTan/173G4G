
// 购物车

$(document).ready(function () {

//根据您挑选的商品，蔚蓝为您推荐

    var index = 1;

    $(".shopping_commend_left").click(function () {

        $("#shopping_commend_sort").toggle();

        if (index % 2 != 0) {

            $("#shopping_commend_arrow").attr("src", "images/shopping_arrow_down.gif");

        } else {

            $("#shopping_commend_arrow").attr("src", "images/shopping_arrow_up.gif");

        }

        index++;

    });

 

//删除按钮

    $(".blue").bind("click", function () {

        var del = confirm("您确认要删除商品么?");

        if (del) {

            //父级parent()    同辈元素siblings()

            $(this).parent().siblings().parent().remove();

        }

       if($(".shopping_product_list").length==0){//判断是否

           dell(); //清空

       }

        Count();//计算价钱

    })

 

 

    //清空

    function dell() {

        $(".shopping_list_border").children(".shopping_list_end", "#myTableProduct").empty();//清空

        var $img = ("<img src='images/emptyShopping.jpg'>");

        $("#myTableProduct").replaceWith($img, "你还没有挑选商品.去挑选看看>>>");//替换节点

        $(".shopping_list_end").css("background", "#FFFFFF");

    }

    //清空所有按钮

    $("#removeAllProduct").click(function () {

        dell(); //清空

    });

 

    $(".shopping_product_list_5 input").focus(function () {//数量得到光标

        Count();

        $(this).blur(function () {//数量失去光标

            Count();//计算价钱

        });

    });

 

    Count();//计算价钱

    //增加或者减少商品的数量时各数值的变化

    function Count() {

        var $table = $("#myTableProduct tr");

        var integral = 0;//商品总积分

        var total = 0.0;//金额总计

        var save = 0.0;//节省金额

        $table.each(function () {

            //获取当前数量；找到当前的元素的所有的子元素

            var count = parseInt($(this).children(".shopping_product_list_5").find("input").val());

            //获取当前价格

            var money = parseFloat($(this).children(".shopping_product_list_3").find("label").html());

            //获取折扣价

            var discount = parseFloat($(this).children(".shopping_product_list_4").find("label").html());

            //获得当前积分

            var integralScore = parseInt($(this).children(".shopping_product_list_2").find("label").html());

            //总价 = 数量 * 价格

            total += count * money;

            //总共节省的金额 = 当前价格 - 折扣价

            save += money - discount;

            //商品总积分 = 数量 * 当前所购买商品的所得积分

            integral += count * integralScore;

 

        });

        $("#product_total").html(total.toFixed(2));//商品金额总计

        $("#product_save").html(save.toFixed(2));//您共节省金额

        $("#product_integral").html(integral.toFixed(2));//积分

    }

 

});
