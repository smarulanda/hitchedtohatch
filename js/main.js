$(function() {
	$(window).scroll(function(e) {
		 if ($(window).scrollTop() > 0) {
			$("header").addClass("scrolled");
		}
		else if ($(window).scrollTop() < 1) {
			$("header").removeClass("scrolled");
		}
	});
});

function rsvp_accept() {
	$("#decline-form").hide();
	$("#accept-form").show();
}

function rsvp_decline() {
	$("#accept-form").hide();
	$("#decline-form").show();
}