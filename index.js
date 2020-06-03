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
function changeColorofBreathe(oddColor,evenColor,time){
    setTimeout(function () {
        drawCircle('c1', oddColor);
        drawCircle('c2', evenColor);
        drawCircle('c3', oddColor);
        drawCircle('c4', evenColor);
        drawCircle('c5', oddColor);
        drawCircle('c6', evenColor);
    }, time);
}

changeColorofBreathe('#4C4C4E','#282828',0);
changeColorofBreathe('#50635F','#303F40',12000);
changeColorofBreathe('#53796E','#385658',24000);
changeColorofBreathe('#589080','#416D70',36000);
changeColorofBreathe('#5CA791','#498488',48000);
changeColorofBreathe('#61BEA2','#529CA0',60000);



