var music = document.getElementById('music');
var duritation = music.duration;
var pButton = document.getElementById('pButton');
var nptime = document.getElementById('nptime');

pButton.addEventListener("click", play);

function play() {
    nptime.innerText = duritation;
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}