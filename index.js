// var timeout;
// document.onmousemove = function () {
// 	clearTimeout(timeout);
// 	timeout = setTimeout(function () {
// 		//document.getElementById('header-nav').style.opacity = 0.2;
// 		//document.getElementById('header-nav').style.transition = 'opacity 0.3s';
// 	}, 2000);
// };

function drawCircle(circleID, color) {
	document.getElementById(circleID).style.background = color;
}
function changeColorofBreathe(oddColor, evenColor, time) {
	var timeout = setTimeout(function () {
		drawCircle('c1', oddColor);
		drawCircle('c2', evenColor);
		drawCircle('c3', oddColor);
		drawCircle('c4', evenColor);
		drawCircle('c5', oddColor);
		drawCircle('c6', evenColor);
	}, time);
	return timeout;
}

var timeout1, timeout2, timeout3, timeout4, timeout5, timeout6;

function revealBreathe() {
	if (document.getElementById('play-audio').innerHTML == 'START LISTENING') {
		document.getElementById('play-audio').innerHTML = 'STOP LISTENING';

		document.getElementById('noise-wrapper').style.opacity = '1';
		document.getElementById('noise-wrapper').style.transition = 'opacity 0.7s';
		document.getElementById('breathe').style.display = 'block';
		document.getElementById('breathe-wrapper').style.opacity = '1';
		document.getElementById('breathe-wrapper').style.transition = 'opacity 6s';
		document.getElementById('noise').style.display = 'flex';

		timeout1 = changeColorofBreathe('#4C4C4E', '#282828', 0);
		timeout2 = changeColorofBreathe('#50635F', '#303F40', 12000);
		timeout3 = changeColorofBreathe('#53796E', '#385658', 24000);
		timeout4 = changeColorofBreathe('#589080', '#416D70', 36000);
		timeout5 = changeColorofBreathe('#5CA791', '#498488', 48000);
		timeout6 = changeColorofBreathe('#61BEA2', '#529CA0', 60000);
	} else {
		document.getElementById('play-audio').innerHTML = 'START LISTENING';

		clearTimeout(timeout1);
		clearTimeout(timeout2);
		clearTimeout(timeout3);
		clearTimeout(timeout4);
		clearTimeout(timeout5);
		clearTimeout(timeout6);

		document.getElementById('noise-wrapper').style.opacity = '0';
		document.getElementById('noise-wrapper').style.transition = 'opacity 0.7s';
		document.getElementById('breathe').style.display = 'none';
		document.getElementById('breathe-wrapper').style.opacity = '0';
		document.getElementById('breathe-wrapper').style.transition = 'opacity 3s';
		document.getElementById('noise').style.display = 'none';
	}
}
