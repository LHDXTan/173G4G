$(document).ready(function(){
	//点击复选框全选或全不选效果
    $("#allCheckBox").click(function(){
        var checked=$(this).is(":checked");
        $(".cart_td_1").children().attr("checked",checked);
    });
    //判断是否全选
    function ifAllChecked(){
        var checkedBoxs=$(".cart_td_1").children();
        var sum=checkedBoxs.size();
        var k=0;
        checkedBoxs.each(function(index,dom){
            if($(dom).is(":checked")) k++;
        });
        if(k==sum){
            $("#allCheckBox").attr("checked",true);
        }else{
            $("#allCheckBox").attr("checked",false);
        }
    }
    ifAllChecked();//页面加载完后运行
    //单选判断
    $(".cart_td_1").children().click(function(){
        ifAllChecked();
    });
    
	//计算总价与小计
    function productCount(){
        var $tr=$("#shopping").find("tr[id]");
        var summer=0;
        var integral=0;
        $tr.each(function(i,dom){
            var num=$(dom).children(".cart_td_6").find("input").val();//商品数量
            var price=num*$(dom).children(".cart_td_5").text();//商品小计
            $(dom).children(".cart_td_7").html(price);//显示商品小计
            summer+=price;//总价
            integral+=$(dom).children(".cart_td_4").text()*num;//积分
        });
        $("#total").text(summer);
        $("#integral").text(integral);
    }
    productCount();//页面加载完后运行
	
    //商品增加减少，flag为true时增加，flag为false时减少
    function changeNumber(dom,flag){
        var $input = $(dom).parent().find("input");
        var value = $input.val();
        if(flag){
            value++;
        }else{
            value--;
            if(value<=0){
                value=1;
                alert("宝贝数量必须大于0");
            }
        }
        $input.val(value);
        productCount();
    };
    //点击增加
    $(".cart_td_6").find("img[alt='minus']").click(function(){changeNumber(this,false);});
    //点击减少
    $(".cart_td_6").find("img[alt='add']").click(function(){changeNumber(this,true);});
    
    //点击删除
    $(".cart_td_8").find("a").click(function(){
        $(this).parent().parent().prev().remove();//删除前一tr
        $(this).parent().parent().remove();//删除当前tr
        productCount();
    });
    //点击删除所选
    $("#deleteAll").click(function(){
        $("#shopping").find("tr[id]").each(function(i,e){
            var $tr=$(e);
            var checked=$tr.children(".cart_td_1").children().is(":checked");
            if(checked){
                $tr.prev().remove();
                $tr.remove();
            }
        });
        productCount();
    });
});