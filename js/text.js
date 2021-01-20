document.addEventListener('DOMContentLoaded', function (event) {
	var dataText = ['a developer.', 'a student.', 'an innovator.', 'an ice skater.'];

	function typeWriter(text, i, fnCallback) {
		if (i < text.length) {
			document.querySelector('.animatedtext').innerHTML =
				text.substring(0, i + 1) + '<span class="cursor" aria-hidden="true"></span>';

			setTimeout(function () {
				typeWriter(text, i + 1, fnCallback);
			}, 130);
		}
		else if (typeof fnCallback == 'function') {
			setTimeout(fnCallback, 900);
		}
	}
	function startAnimate(i) {
		if (typeof dataText[i] == 'undefined') {
			setTimeout(function () {
				startAnimate(0);
			}, 20000);
		}
		if (i < dataText[i].length) {
			typeWriter(dataText[i], 0, function () {
				startAnimate(i + 1);
			});
		}
	}
	startAnimate(0);
});