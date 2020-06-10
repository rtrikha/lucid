var waveVolume = 50;
var rainVolume = 40;
var thunderVolume = 70;
var birdsVolume = 10;
var windVolume = 60;
var chorusVolume = 50;

var forceLoaderTime = 3000;

function dom(id) {
	return document.getElementById(id);
}

function initSlider(id, eventValue, value) {
	$(id).slider({
		min: 0,
		max: 100,
		value: value,
		range: 'min',
		orientation: 'vertical',
		reversed: false,
		slide: function (event, ui) {
			eventValue(ui.value / 100);
		},
	});
}

function setterAudio(path, path2) {
	var x = document.createElement('audio');
	$(path).append(x);
	return (x.id = path2);
}

initSlider('#wave-volume', setVolumeWave, waveVolume);
initSlider('#rain-volume', setVolumeRain, rainVolume);
initSlider('#thunder-volume', setVolumeThunder, thunderVolume);
initSlider('#birds-volume', setVolumeBirds, birdsVolume);
initSlider('#wind-volume', setVolumeWind, windVolume);
initSlider('#chorus-volume', setVolumeChorus, chorusVolume);

setterAudio('#wave-player', 'waveSound');
setterAudio('#rain-player', 'rainSound');
setterAudio('#thunder-player', 'thunderSound');
setterAudio('#birds-player', 'birdsSound');
setterAudio('#wind-player', 'windSound');
setterAudio('#chorus-player', 'chorusSound');

function playAllAudio() {
	playAudio(waveSound, '/resources/audio/waves.mp3', waveVolume, setVolumeWave);
	playAudio(rainSound, '/resources/audio/rain.mp3', rainVolume, setVolumeRain);
	playAudio(thunderSound, '/resources/audio/thunder.mp3', thunderVolume, setVolumeThunder);
	playAudio(birdsSound, '/resources/audio/birds.mp3', birdsVolume, setVolumeBirds);
	playAudio(windSound, '/resources/audio/wind.mp3', windVolume, setVolumeWind);
	playAudio(chorusSound, '/resources/audio/chorus.mp3', chorusVolume, setVolumeChorus);
}

function audioToggle() {
	if (document.getElementById('play-audio').innerHTML == 'START LISTENING') {
		playAllAudio();
		initSlider('#wave-volume', setVolumeWave, waveVolume);
		initSlider('#rain-volume', setVolumeRain, rainVolume);
		initSlider('#thunder-volume', setVolumeThunder, thunderVolume);
		initSlider('#birds-volume', setVolumeBirds, birdsVolume);
		initSlider('#wind-volume', setVolumeWind, windVolume);
		initSlider('#chorus-volume', setVolumeChorus, chorusVolume);
	} else {
		pauseAllAudio();
	}
}

function pauseAllAudio() {
	pauseAudio(waveSound, '/resources/audio/waves.mp3', waveVolume, setVolumeWave);
	pauseAudio(rainSound, '/resources/audio/rain.mp3', rainVolume, setVolumeRain);
	pauseAudio(thunderSound, '/resources/audio/thunder.mp3', thunderVolume, setVolumeThunder);
	pauseAudio(birdsSound, '/resources/audio/birds.mp3', birdsVolume, setVolumeBirds);
	pauseAudio(windSound, '/resources/audio/wind.mp3', windVolume, setVolumeWind);
	pauseAudio(chorusSound, '/resources/audio/chorus.mp3', chorusVolume, setVolumeChorus);
}

function pauseAudio(id, fileName, myVolume, volumeControl) {
	id.src = fileName;
	id.setAttribute('loop', 'loop');
	volumeControl(myVolume / 100);
	id.pause();
}

function playAudio(id, fileName, myVolume, volumeControl) {
	id.src = fileName;
	id.setAttribute('loop', 'loop');
	volumeControl(myVolume / 100);
	id.play();
}

function setVolumeWave(myVolume) {
	var waveSound = document.getElementById('waveSound');
	waveSound.volume = myVolume;
}

function setVolumeRain(myVolume) {
	var rainSound = document.getElementById('rainSound');
	rainSound.volume = myVolume;
}

function setVolumeThunder(myVolume) {
	var thunderSound = document.getElementById('thunderSound');
	thunderSound.volume = myVolume;
}

function setVolumeBirds(myVolume) {
	var birdsSound = document.getElementById('birdsSound');
	birdsSound.volume = myVolume;
}

function setVolumeWind(myVolume) {
	var windSound = document.getElementById('windSound');
	windSound.volume = myVolume;
}

function setVolumeChorus(myVolume) {
	var chorusSound = document.getElementById('chorusSound');
	chorusSound.volume = myVolume;
}

function pauseWave() {
	initSlider('#wave-volume', setVolumeWave, 0);
	setVolumeWave(0);
}
function pauseRain() {
	initSlider('#rain-volume', setVolumeRain, 0);
	setVolumeRain(0);
}
function pauseThunder() {
	initSlider('#thunder-volume', setVolumeThunder, 0);
	setVolumeThunder(0);
}
function pauseBirds() {
	initSlider('#birds-volume', setVolumeBirds, 0);
	setVolumeBirds(0);
}
function pauseWind() {
	initSlider('#wind-volume', setVolumeWind, 0);
	setVolumeWind(0);
}
function pauseChorus() {
	initSlider('#chorus-volume', setVolumeChorus, 0);
	setVolumeChorus(0);
}

//handling loader

loaderDismiss();

function loadAudio(id, fileName) {
	id.src = fileName;
	id.onload;
	id.onloadeddata = () => {
		console.log('loaded ' + fileName);
	};
}

function loaderDismiss() {
	loadAudio(waveSound, '/resources/audio/waves.mp3');
	loadAudio(rainSound, '/resources/audio/rain.mp3');
	loadAudio(thunderSound, '/resources/audio/rain.mp3');
	loadAudio(birdsSound, '/resources/audio/birds.mp3');
	loadAudio(windSound, '/resources/audio/wind.mp3');
	loadAudio(chorusSound, '/resources/audio/chorus.mp3');

	setTimeout(function () {
		dom('loader').style.opacity = '0';
		dom('loader').style.transition = 'opacity 0.3s';
		setTimeout(function () {
			dom('loader').style.display = 'none';
		}, 300);

		dom('main-wrapper').style.display = 'block';
		setTimeout(function () {
			dom('main-wrapper').style.opacity = '1';
			dom('main-wrapper').style.transition = 'opacity 0.5s';
			callBlackBox();
		}, 500);
		dom('typed-strings').style.display = 'block';
	}, forceLoaderTime);
}
