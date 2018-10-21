$(document).ready(function(){
    $("#nav li span").mousemove(function(){
        $(this).css("background-color","#c81623");
        var index=$("#nav li span").index(this);
        $("#nav li:eq("+index+") span~p").show();
    })
    $("#nav li span").mouseout(function(){
        $(this).css("background-color","#7a6e6e");
        var index=$("#nav li span").index(this);
        $("#nav li:eq("+index+") span~p").hide();
    });
});