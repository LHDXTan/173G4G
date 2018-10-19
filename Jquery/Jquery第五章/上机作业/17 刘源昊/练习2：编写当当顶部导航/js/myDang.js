/**
 * Created by zongjuan.wang on 2016/6/7.
 */
$(document).ready(function(){
    $("#menu").mouseover(function(){
            $("#menu").css("border","1px solid #EE7304");
            $("#menu-ul").show();
        }). mouseout(function(){
            $("#menu").css("border","none");
            $("#menu-ul").hide();
        })
});