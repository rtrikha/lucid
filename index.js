function dom(id) {
	return document.getElementById(id);
}
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
	if (dom('play-audio').innerHTML == 'START LISTENING') {
		dom('play-audio').innerHTML = 'STOP LISTENING';
		dom('noise-wrapper').style.opacity = '1';
		dom('noise-wrapper').style.transition = 'opacity 0.7s';
		dom('noise').style.display = 'flex';

		dom('breathe').style.display = 'block';
		dom('breathe-wrapper').style.opacity = '1';
		dom('breathe-wrapper').style.transition = 'opacity 3s';

		timeout1 = changeColorofBreathe('#4C4C4E', '#282828', 0);
		timeout2 = changeColorofBreathe('#50635F', '#303F40', 12000);
		timeout3 = changeColorofBreathe('#53796E', '#385658', 24000);
		timeout4 = changeColorofBreathe('#589080', '#416D70', 36000);
		timeout5 = changeColorofBreathe('#5CA791', '#498488', 48000);
		timeout6 = changeColorofBreathe('#61BEA2', '#529CA0', 60000);
	} else {
		dom('play-audio').innerHTML = 'START LISTENING';

		clearTimeout(timeout1);
		clearTimeout(timeout2);
		clearTimeout(timeout3);
		clearTimeout(timeout4);
		clearTimeout(timeout5);
		clearTimeout(timeout6);

		dom('noise-wrapper').style.opacity = '0';
		dom('noise-wrapper').style.transition = 'opacity 0.7s';
		setTimeout(function () {
			dom('noise').style.display = 'none';
		}, 700);

		dom('breathe-wrapper').style.opacity = '0';
		dom('breathe-wrapper').style.transition = 'opacity 3s';
		setTimeout(function () {
			dom('breathe').style.display = 'none';
		}, 700);
	}
}

window.smoothScroll = function (target) {
	var scrollContainer = target;
	do {
		//find scroll container
		scrollContainer = scrollContainer.parentNode;
		if (!scrollContainer) return;
		scrollContainer.scrollTop += 1;
	} while (scrollContainer.scrollTop == 0);

	var targetY = 0;
	do {
		//find the top of target relatively to the container
		if (target == scrollContainer) break;
		targetY += target.offsetTop;
	} while ((target = target.offsetParent));

	scroll = function (c, a, b, i) {
		i++;
		if (i > 30) return;
		c.scrollTop = a + ((b - a) / 30) * i;
		setTimeout(function () {
			scroll(c, a, b, i);
		}, 20);
	};
	// start scrolling
	scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

dom('typed-strings').style.display = 'none';


var screenWidth = screen.width;


if(screenWidth<720){
	dom('subheading').innerHTML = "lucid is a mindful implication of brown noise for better concentration and 	relaxation. lucid uses the baseline of how our brains respond as we complete tasks in different environments by changing background noises."
}
else{
	dom('subheading').innerHTML = "Cognitive processing is easily affected by environmental stimulation that distracts attention. lucid is a mindful implication of brown noise for better concentration and 	relaxation. lucid uses the baseline of how our brains respond as we complete tasks in different environments by changing background noises."
}


// switch (screenWidth) {
// 	case screenWidth<900: dom("subheading").innerHTML="hello";

// 		break;

// 	default:console.log('error');
// 		break;
// }
