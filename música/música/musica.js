const audioPlayer = document.getElementById('audio-player');
const playButton = document.querySelector('.play-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

playButton.addEventListener('click', togglePlay);
prevButton.addEventListener('click', playPrevious);
nextButton.addEventListener('click', playNext);

let currentTrackIndex = 0;

const playlist = [
    '01---i miss you much.mp3',
    '02---stereo Love.mp3',
    '03---dj rodrigo campus.mp3',
    '04---reggae remix.mp3',
    '05---só os loucos sabem.mp3',
    '06---pupila.mp3',
    '07---não olhe para trás.mp3',
    '08---dois rios.mp3',
    '09---céu azul.mp3',
    '10---pitty.mp3',
];

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pausar';
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    }
}

function playPrevious() {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
        currentTrackIndex = playlist.length - 1;
    }
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.play();
}

function playNext() {
    currentTrackIndex++;
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0;
    }
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.play();
}

audioPlayer.addEventListener('ended', playNext);