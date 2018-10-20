$(document).ready(function(){
    var headImg=new Array("head01.jpg","head02.jpg","head03.jpg");
    var uName=new Array("时尚伊人","六月奇迹","松松");
    $("#send").click(function(){
        if($(".chatText").val().length>0){
            var str=$(".chatBody").html();      
            var iNum=Math.floor(Math.random()*3);  
            var headStr="<div><img src=images/"+headImg[iNum]+"></div>";   
            var userName="<p>"+uName[iNum]+"</p>";
            var chatStr="<div>"+$(".chatText").val()+"</div>";
            var currentStr="<section>"+headStr+userName+chatStr+"</section>";
            $(".chatBody").html(str+currentStr);
            $(".chatBody section div:last").addClass("chatContent");
            $(".chatText").val("");
        }
    });
})

