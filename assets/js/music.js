const audioControl = document.getElementById('audio-control');
const backgroundMusic = document.getElementById('background-music');

audioControl.addEventListener('click', toggleMusic);

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
    
    audioControl.classList.toggle('played');
    audioControl.classList.toggle('paused');
}
