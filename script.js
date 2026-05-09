const playlist = document.getElementById('playlist');
const songs = [

{
  title: "첫 만남은 계획대로 되지 않아",
  artist: "TWS",
  mood: "기분좋음",
  file: "music/tws_plot_twist.mp3",
  cover: "covers/tws_plot_twist.jpg"
},

{
  title: "HAPPY",
  artist: "DAY6",
  mood: "기분좋음",
  file: "music/DAY6_HAPPY.mp3",
  cover: "covers/DAY6_HAPPY.jpg"
},

{
  title: "CONGRATULATIONS",
  artist: "DAY6",
  mood: "새벽감성",
  file: "music/DAY6_CONGRATULATIONS.mp3",
  cover: "covers/DAY6_CONGRATULATIONS.jpg"
},

{
  title: "ILOVEDYOU",
  artist: "DAY6",
  mood: "새벽감성",
  file: "music/DAY6_ILOVEDYOU.mp3",
  cover: "covers/DAY6_ILOVEDYOU.jpg"
},

{
  title: "좋아합니다",
  artist: "DAY6",
  mood: "새벽감성",
  file: "music/DAY6_LOVE.mp3",
  cover: "covers/DAY6_LOVE.jpg"
},


{
  title: "놓아 놓아 놓아",
  artist: "DAY6",
  mood: "새벽감성",
  file: "music/DAY6_LETTINGGO.mp3",
  cover: "covers/DAY6_LETTINGGO.jpg"
},

{
  title: "그렇더라고요",
  artist: "DAY6",
  mood: "새벽감성",
  file: "music/DAY6_WHEN.mp3",
  cover: "covers/DAY6_WHEN.jpg"
},
{
  title: "Afraid",
  artist: "DAY6",
  mood: "새벽감성",
  file: "music/DAY6_AFRAID.mp3",
  cover: "covers/DAY6_AFRAID.jpg"
},

{
  title: "예뻤어",
  artist: "DAY6",
  mood: "다화",
  file: "music/DAY6_PRETTY.mp3",
  cover: "covers/DAY6_PRETTY.jpg"
}

];

const audio = document.getElementById('audio');

audio.src = songs[0].file;

audio.play();

function loadSong(index) {

  const song = filteredSongs[index];

  title.innerText = song.title;

  artist.innerText = song.artist;

  cover.src = song.cover;

  audio.src = song.file;
}

function playSong() {

  audio.play();

  playBtn.innerText = '⏸';
}

function selectSong(index) {
  currentSong = index;
  loadSong(index);
  playSong();
}

function selectSong(index) {

  currentSong = index;

  loadSong(currentSong);

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

const shuffleBtn = document.getElementById('shuffle-btn');

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

function renderPlaylist(list) {

  playlist.innerHTML = '';

  list.forEach((song, index) => {

    playlist.innerHTML += `

      <div class="song-card">

        <div class="song-card-left">
          <img src="${song.cover}">

          <div>
            <h4>${song.title}</h4>
            <p>${song.artist} · ${song.mood}</p>
          </div>
        </div>

        <button onclick="selectSong(${index})">▶</button>

      </div>

    `;
  });
}

autoMoodRecommend();
renderPlaylist(filteredSongs);
loadSong(currentSong);
