$(function() {
	$("#tag-area input").keydown(function(e) {
		if (e.which == 13) {
			tag = $(this).val().trim().toLowerCase();

			$("<li>", {
				html: tag + " <span title='Remove' class='remove-tag'>&times;</span>"
			}).appendTo("#tag-list").hide().fadeIn();

			$(this).val("");
			$("#tag-list").show();

			return false;
		}
	});
	$("#tag-area input").focus(function() {
		$(".enter-key").show();
	});
	$("#tag-area input").blur(function() {
		$(".enter-key").hide();
	});

	$(".remove-tag").live("click", function() {
		$(this).parent().fadeOut(function() {
			$(this).remove();
		});
	});
});

