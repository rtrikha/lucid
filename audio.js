function initSlider(id, eventValue) {
	$(id).slider({
		min: 0,
		max: 100,
		value: 50,
		range: 'min',
		slide: function (event, ui) {
			eventValue(ui.value / 100);
		},
	});
}

initSlider('#wave-volume', setVolumeWave);
initSlider('#rain-volume', setVolumeRain);
initSlider('#thunder-volume', setVolumeThunder);
initSlider('#birds-volume', setVolumeBirds);

var waveSound = document.createElement('audio');
$('#wave-player').append(waveSound);

var rainSound = document.createElement('audio');
$('#rain-player').append(rainSound);

var thunderSound = document.createElement('audio');
$('#thunder-player').append(thunderSound);

var birdsSound = document.createElement('audio');
$('#birds-player').append(birdsSound);

waveSound.id = 'waveSound';
rainSound.id = 'rainSound';
thunderSound.id = 'thunderSound';
birdsSound.id = 'birdsSound';

// playAudio(waveSound, '/resources/audio/waves.mp3', 0.5, setVolumeWave);
// playAudio(rainSound, '/resources/audio/rain.mp3', 0.5, setVolumeRain);
// playAudio(thunderSound, '/resources/audio/thunder.mp3', 0.5, setVolumeRain);
// playAudio(birdsSound, '/resources/audio/birds.mp3', 0.5, setVolumeBirds);

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
