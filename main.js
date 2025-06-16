const audio = document.getElementById('audio');
const seek = document.getElementById('seek');
const current = document.getElementById('current');
const duration = document.getElementById('duration');

function togglePlay() {
  if (audio.paused) audio.play();
  else audio.pause();
}

function skip(seconds) {
  audio.currentTime += seconds;
}

audio.addEventListener('loadedmetadata', () => {
  duration.textContent = format(audio.duration);
  seek.max = audio.duration;
});

audio.addEventListener('timeupdate', () => {
  seek.value = audio.currentTime;
  current.textContent = format(audio.currentTime);
});

seek.addEventListener('input', () => {
  audio.currentTime = seek.value;
});

function format(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(Math.floor(sec % 60)).padStart(2, '0');
  return `${m}:${s}`;
}