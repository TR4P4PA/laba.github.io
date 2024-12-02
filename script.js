let audio = new Audio();
let currentTrackIndex = 0;

const tracks = [
    { src: '1.mp3', name: 'Track 1', artist: 'Artist 1', img: '1.jpg' },
    { src: '2.mp3', name: 'Track 2', artist: 'Artist 2', img: '2.jpg' },
    { src: '3.mp3', name: 'Track 3', artist: 'Artist 3', img: '3.jpg' }
];

function loadTrack(index) {
    audio.src = tracks[index].src;
    document.getElementById('track-image').src = tracks[index].img;
    document.getElementById('track-name').textContent = tracks[index].name;
    document.getElementById('artist-name').textContent = tracks[index].artist;
    audio.load();
}

document.getElementById('play').addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById('next').addEventListener('click', function() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
});

document.getElementById('prev').addEventListener('click', function() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
});

// Initialize the first track
loadTrack(currentTrackIndex);
