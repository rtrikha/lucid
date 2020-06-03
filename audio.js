function initSlider(id, eventValue) {
	$(id).slider({
		min: 0,
		max: 100,
		value: 50,
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

initSlider('#wave-volume', setVolumeWave);
initSlider('#rain-volume', setVolumeRain);
initSlider('#thunder-volume', setVolumeThunder);
initSlider('#birds-volume', setVolumeBirds);
initSlider('#chorus-volume', setVolumeChorus);
initSlider('#morning-volume', setVolumeMorning);

setterAudio('#wave-player', 'waveSound');
setterAudio('#rain-player', 'rainSound');
setterAudio('#thunder-player', 'thunderSound');
setterAudio('#birds-player', 'birdsSound');
setterAudio('#chorus-player', 'chorusSound');
setterAudio('#morning-player', 'morningSound');

function playAllAudio() {
	playAudio(waveSound, '/resources/audio/waves.mp3', 0.5, setVolumeWave);
	playAudio(rainSound, '/resources/audio/rain.mp3', 0.5, setVolumeRain);
	playAudio(thunderSound, '/resources/audio/thunder.mp3', 0.5, setVolumeRain);
	playAudio(birdsSound, '/resources/audio/birds.mp3', 0.5, setVolumeBirds);
	playAudio(chorusSound, '/resources/audio/chorus.mp3', 0.5, setVolumeChorus);
	playAudio(morningSound, '/resources/audio/morning.mp3', 0.5, setVolumeMorning);

}

function playAudio(id, fileName, myVolume, volumeControl) {
	id.src = fileName;
	id.setAttribute('loop', 'loop');
	volumeControl(myVolume);
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

function setVolumeChorus(myVolume) {
	var chorusSound = document.getElementById('chorusSound');
	chorusSound.volume = myVolume;
}

function setVolumeMorning(myVolume) {
	var morningSound = document.getElementById('morningSound');
	morningSound.volume = myVolume;
}
