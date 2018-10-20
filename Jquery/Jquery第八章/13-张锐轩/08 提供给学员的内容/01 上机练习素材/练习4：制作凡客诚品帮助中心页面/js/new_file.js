$(document).ready(function() {
	$("input[name='search']").focus(function() {
		$(this).val("");
	});
	$("input[name='search']").blur(function() {
		$(this).val("请输入要查询的问题");
	});

	$("ul div.first").click(function() {
		$('.second').hide();
		$(this).siblings('ul').toggle();
	});

	$("#tab_bg > div").hover(function() {
		$(this).siblings('div').removeClass('tab_current').addClass('tab_common');
		$(this).removeClass('tab_common').addClass('tab_current');
		$(this).parents('#tab_bg').removeClass('tab_bg0 tab_bg1 tab_bg2 tab_bg3 tab_bg4').addClass('tab_bg' + $(this).index());
	});
	$("input[name='IsAvail']").click(function() {
		if($(this).val() == 0) {
			$('.wenti').show();
		} else {
			$('.wenti').hide();
		}
	});

});