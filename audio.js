var waveVolume = 0;
var rainVolume = 0;
var thunderVolume = 0;
var birdsVolume = 0;
var windVolume = 0;
var chorusVolume = 0;

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
	// id.onloadeddata= () => {
	// 	console.log('loaded ' + fileName);
	// }
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
