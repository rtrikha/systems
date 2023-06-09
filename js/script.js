var toggleButton = document.getElementById('darkmode-toggle');
var counter = 0;
let toggle = false;
console.log(toggle);

function toggleValue() {
	toggle = !toggle;
	console.log(toggle);

	function animateInLight(callback) {
		var svg = document.getElementById('light-mode-svg');
		svg.style.transform = 'rotate(1deg) translateX(1px)';
		svg.style.transition = 'all 0.4s';
		setTimeout(callback, 100);
	}

	function animateOutLight() {
		var svg = document.getElementById('light-mode-svg');
		svg.style.transform = 'rotate(-1deg)';
		svg.style.transition = 'all 0.4s';
	}

	function animateInDark(callback) {
		var svg = document.getElementById('dark-mode-svg');
		svg.style.transform = 'rotate(-1deg) translateX(-1px)';
		svg.style.transition = 'all 0.4s';
		setTimeout(callback, 100);
	}

	function animateOutDark() {
		var svg = document.getElementById('dark-mode-svg');
		svg.style.transform = 'rotate(1deg)';
		svg.style.transition = 'all 0.4s';
	}

	function checkState() {
		if (toggle) {
			animateInLight(animateOutLight);
			applyColourTheme('stockDark');
			document.getElementById('light-mode-svg').style.filter = 'invert(1)';
			document.getElementById('light-mode-svg').style.opacity = '0.6';
			document.getElementById('systemArchitecture').src = './resources/content_images/systemArchitecture-Dark.png';
			document.getElementById('themeProvider').src = './resources/content_images/themeProvider-Dark.png';
			document.getElementById('experimentation').src = './resources/content_images/experimentation-Dark.png';
			document.getElementById('DLSAudit').src = './resources/content_images/DLSAudit-Dark.png';
		} else {
			animateInDark(animateOutDark);
			applyColourTheme('stockLight');
			document.getElementById('light-mode-svg').style.filter = 'invert(0)';
			document.getElementById('light-mode-svg').style.opacity = '1';
			document.getElementById('systemArchitecture').src = './resources/content_images/systemArchitecture-Light.png';
			document.getElementById('themeProvider').src = './resources/content_images/themeProvider-Light.png';
			document.getElementById('experimentation').src = './resources/content_images/experimentation-Light.png';
			document.getElementById('DLSAudit').src = './resources/content_images/DLSAudit-Light.png';
		}
	}

	checkState();
}
