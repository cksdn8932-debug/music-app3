const songs = [
 {
  title: "첫 만남은 계획대로 되지 않아",
  artist: "TWS",
  mood: "기분좋음",
  file: "music/tws_plot_twist.mp3",
  cover: "covers/tws_plot_twist.jpg"
}
];


function selectSong(index) {
  currentSong = index;
  loadSong(index);
  playSong();
}

function filterSongs(mood) {

  if (mood === '전체') {
    filteredSongs = songs;
  } else {
    filteredSongs = songs.filter(song => song.mood === mood);
  }

  currentSong = 0;

  renderPlaylist(filteredSongs);
  loadSong(currentSong);
}

shuffleBtn.addEventListener('click', () => {

  const randomIndex = Math.floor(
    Math.random() * filteredSongs.length
  );

  currentSong = randomIndex;

  loadSong(currentSong);
  playSong();
});

audio.addEventListener('ended', () => {

  currentSong++;

  if (currentSong >= filteredSongs.length) {
    currentSong = 0;
  }

  loadSong(currentSong);
  playSong();
});

function autoMoodRecommend() {

  const hour = new Date().getHours();

  if (hour >= 22 || hour <= 4) {
    filterSongs('새벽감성');
  }

  else if (hour >= 5 && hour <= 12) {
    filterSongs('기분좋음');
  }

  else {
    filterSongs('드라이브');
  }
}

autoMoodRecommend();
renderPlaylist(filteredSongs);
loadSong(currentSong);
