var strength = {
	0: "Worst ☹",
	1: "Bad ☹",
	2: "Weak ☹",
	3: "Good 😀",
	4: "Strong 😀"
}

var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function ()
{
	var val = password.value;
	var result = zxcvbn(val);

	// Update the password strength meter
	meter.value = result.score;

	// Update the text indicator
	if (val !== "")
	{
		text.innerHTML = result.score+"Strength: " + "<strong>" + strength[result.score] + "</strong>" + "<span class='feedback'>" + result.feedback.warning + ". " + result.feedback.suggestions + " <br><br>Timing:<strong> It takes " + result.crack_times_display['online_no_throttling_10_per_second'] + " to crack.</strong>" + "</span";
	}
	else
	{
		text.innerHTML = "";
	}
});

function toggleDropdown (e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function(){
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
  .on('mouseenter mouseleave','.dropdown',toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);