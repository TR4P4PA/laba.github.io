// Массив с треками
const tracks = [
    { src: "audio/1.mp3", artist: "Artist 1", name: "Track 1", image: "images/1.jpg" },
    { src: "audio/2.mp3", artist: "Artist 2", name: "Track 2", image: "images/2.jpg" },
    { src: "audio/3.mp3", artist: "Artist 3", name: "Track 3", image: "images/3.jpg" },
    { src: "audio/4.mp3", artist: "Artist 4", name: "Track 4", image: "images/4.jpg" }
];

let currentTrackIndex = 0;
let audio = new Audio(tracks[currentTrackIndex].src);

const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const trackImage = document.getElementById("track-image");
const artistName = document.getElementById("artist-name");
const trackName = document.getElementById("track-name");
const trackDuration = document.getElementById("track-duration");

// Функция для обновления информации о текущем треке
function updateTrackInfo() {
    artistName.textContent = tracks[currentTrackIndex].artist;
    trackName.textContent = tracks[currentTrackIndex].name;
    trackImage.src = tracks[currentTrackIndex].image;
    audio.src = tracks[currentTrackIndex].src;
    audio.load();
    trackDuration.textContent = formatTime(audio.duration);
}

// Форматирование времени
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Кнопка Play/Pause
playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "❚❚";  // Изменить на паузу
    } else {
        audio.pause();
        playButton.textContent = "►";   // Изменить на play
    }
});

// Кнопка "Следующий трек"
nextButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updateTrackInfo();
    audio.play();
    playButton.textContent = "❚❚";  // Изменить на паузу
});

// Кнопка "Предыдущий трек"
prevButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    updateTrackInfo();
    audio.play();
    playButton.textContent = "❚❚";  // Изменить на паузу
});

// Обновить информацию при загрузке страницы
updateTrackInfo();
