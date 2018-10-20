$(document).ready(function(){
    $(".bbs header span").click(function(){
        $(".bbs .post").show();
    });
    var tou=new Array("tou01.jpg","tou02.jpg","tou03.jpg","tou04.jpg");
    $(".post .btn").click(function(){
        var $newLi=$("<li></li>"); 
        var iNum=Math.floor(Math.random()*4);  
        var $touImg=$("<div><img src=images/"+tou[iNum]+"></div>");
        var $title=$("<h1>"+$(".title").val()+"</h1>"); 
        var newP=$("<p></p>"); 
        var myDate=new Date();
        var currentDate=myDate.getFullYear()+"-"+parseInt(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes();
        $(newP).append("<span>版块："+$(".post select").val()+"</span>");  
        $(newP).append("<span>发表时间："+currentDate+"</span>");    
        $($newLi).append($touImg);  
        $($newLi).append($title);   
        $($newLi).append(newP);   
        $(".bbs section ul").prepend($newLi);

        $(".post .content").val("");
        $(".post .title").val("");
        $(".post").hide();


    });
})