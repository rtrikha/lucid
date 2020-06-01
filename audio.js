$('#wave-volume').slider({
	min: 0,
	max: 100,
	value: 50,
	range: 'min',
	slide: function (event, ui) {
		setVolumeWave(ui.value / 100);
	},
});

$('#rain-volume').slider({
	min: 0,
	max: 100,
	value: 50,
	range: 'min',
	slide: function (event, ui) {
		setVolumeRain(ui.value / 100);
	},
});

var waveSound = document.createElement('audio');
$('#wave-player').append(waveSound);

var rainSound = document.createElement('audio');
$('#rain-player').append(rainSound);

waveSound.id = 'waveSound';
rainSound.id = 'rainSound';

playAudio(waveSound, '/resources/audio/waves.mp3', 0.5, setVolumeWave);
playAudio(rainSound, '/resources/audio/rain.mp3', 0.5, setVolumeRain);

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
