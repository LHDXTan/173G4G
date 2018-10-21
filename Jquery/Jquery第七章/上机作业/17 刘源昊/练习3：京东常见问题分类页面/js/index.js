$(document).ready(function(){
     $(".top-m .on").hover(function(){
			$(".topDown").show("slow");
		},
		function(){
			$(".topDown").hide("fast");
		}
	);

    $(".nav dt").toggle(
       function(){ $(this).siblings().slideDown("slow");},
      function(){$(this).siblings().slideUp("slow");}
    )
});