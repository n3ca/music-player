const audioElement = document.createElement('audio');
audioElement.src = 'your-audio-file.mp3';
audioElement.preload = 'auto';

const playBtn = document.querySelector('.play-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');

playBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

audioElement.addEventListener('timeupdate', updateProgress);
audioElement.addEventListener('loadedmetadata', setDuration);

function togglePlayPause() {
  if (audioElement.paused) {
    audioElement.play();
    playBtn.textContent = 'Pause';
  } else {
    audioElement.pause();
    playBtn.textContent = 'Play';
  }
}

function prevTrack() {
}

function nextTrack() {
}

function updateProgress() {
  const percent = (audioElement.currentTime / audioElement.duration) * 100;
  progress