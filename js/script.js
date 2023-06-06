var toggleButton = document.getElementById('darkmode-toggle');
var counter = 0;
let toggle = false;
console.log(toggle);

function toggleValue() {
	toggle = !toggle;
	console.log(toggle);

	function animateInLight(callback) {
		var svg = document.getElementById('light-mode-svg');
		svg.style.transform = 'rotate(2deg) translateX(1px)';
		svg.style.transition = 'all 0.2s';
		setTimeout(callback, 100);
	}

	function animateOutLight() {
		var svg = document.getElementById('light-mode-svg');
		svg.style.transform = 'rotate(-2deg)';
		svg.style.transition = 'all 0.2s';
	}

	function animateInDark(callback) {
		var svg = document.getElementById('dark-mode-svg');
		svg.style.transform = 'rotate(-2deg) translateX(-1px)';
		svg.style.transition = 'all 0.2s';
		setTimeout(callback, 100);
	}

	function animateOutDark() {
		var svg = document.getElementById('dark-mode-svg');
		svg.style.transform = 'rotate(2deg)';
		svg.style.transition = 'all 0.2s';
	}

	function checkState() {
		if (toggle) {
			animateInLight(animateOutLight);
		} else {
			animateInDark(animateOutDark);
		}
	}

	checkState();
}
