$(document).ready(function(){
    var headImg=new Array("head01.jpg","head02.jpg","head03.jpg");
    var uName=new Array("时尚伊人","六月奇迹","松松");
    $("#send").click(function(){
        if($(".chatText").val().length>0){  //判断当前输入框中是否有内容
            var str=$(".chatBody").html();      //获取当前聊天内容
            var iNum=Math.floor(Math.random()*3);  //随机获取头像和昵称
            var headStr="<div><img src=images/"+headImg[iNum]+"></div>";   //设置头像
            var userName="<p>"+uName[iNum]+"</p>";                           //设置昵称
            var chatStr="<div>"+$(".chatText").val()+"</div>";    //获取并设置当前输入的内容
            var currentStr="<section>"+headStr+userName+chatStr+"</section>"; //当前聊天的头像、昵称和内容
            $(".chatBody").html(str+currentStr);
            $(".chatBody section div:last").addClass("chatContent");
            $(".chatText").val("");//清除文本框中的内容
        }
    });
})