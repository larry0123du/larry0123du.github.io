$(function() {
	registerNavButtons();
	handleContactSubmission();
});

function registerNavButtons() {
	var sections = ['about'];

	sections.forEach(function(section) {
		clickAndScroll('#nav-' + section, '#' + section + '-section');
	});
}

function clickAndScroll(link, section) {
	var delay = 700;

	$(link).click(function() {
		$('html, body').animate({
			scrollTop: $(section).offset().top
		}, delay);

		return false;
	});
}

/*
function handleContactSubmission() {
	$('form').submit(function(e) {
		e.preventDefault();
		var first = $('input[name=first]').val();
		var last = $('input[name=last]').val();
		var subject = $('input[name=subject]').val();
		var message = $('textarea[name=message]').val();

		var url = 'mailto:du113@purdue.edu?&subject=' + first + ' ' + last + ': ' + subject
 		var win = window.open(url, '_blank');
 		win.focus();
 	});
}
*/
