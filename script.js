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
  title: "YOU+ME=7942",
  artist: "TWS",
  mood: "새벽감성",
  file: "music/7942.mp3",
  cover: "covers/7942.jpg"
},

{
  title: "Countdown",
  artist: "DAY6",
  mood: "새벽감성",
  file: "music/Countdown.mp3",
  cover: "covers/Countdown.jpg"
},

{
  title: "BFF",
  artist: "DAY6",
  mood: "새벽감성",
  file: "music/BFF.mp3",
  cover: "covers/BFF.jpg"
},


{
  title: "Oh Mymy",
  artist: "DAY6",
  mood: "새벽감성",
  file: "music/Oh.mp3",
  cover: "covers/Oh.jpg"
},

{
  title: "Fire Escape",
  artist: "TWS",
  mood: "새벽감성",
  file: "music/fire.mp3",
  cover: "covers/Fire.jpg"
},

{
  title: "한 페이지가 될 수 있게",
  artist: "DAY6",
  mood: "기분좋음",
  file: "music/DAY6_PAGE.mp3",
  cover: "covers/DAY6_PAGE.jpg"
},

{
  title: "내가 S면 넌 나의 N이 되어줘",
  artist: "TWS",
  mood: "기분좋음",
  file: "music/SN.mp3",
  cover: "covers/SN.jpg"
},


{
  title: "First hooky",
  artist: "TWS",
  mood: "기분좋음",
  file: "music/First.mp3",
  cover: "covers/First.jpg"
},


{
  title: "Double take",
  artist: "TWS",
  mood: "드라이브",
  file: "music/Double.mp3",
  cover: "covers/Double.jpg"
},


{
  title: "unplugged boy",
  artist: "TWS",
  mood: "드라이브",
  file: "music/Un.mp3",
  cover: "covers/Un.jpg"
},

{
  title: "마지막 축제",
  artist: "TWS",
  mood: "드라이브",
  file: "music/Last.mp3",
  cover: "covers/Last.jpg"
},

{
  title: "hey! hey!",
  artist: "TWS",
  mood: "기분좋음",
  file: "music/Hey.mp3",
  cover: "covers/Hey.jpg"
},

{
  title: "Best Part",
  artist: "DAY6",
  mood: "기분좋음",
  file: "music/DAY6_BEST.mp3",
  cover: "covers/BEST.jpg"
},

{
  title: "DANCE DANCE",
  artist: "DAY6",
  mood: "기분좋음",
  file: "music/DANCE.mp3",
  cover: "covers/Dance.jpg"
},


{
  title: "Freely",
  artist: "DAY6",
  mood: "기분좋음",
  file: "music/Freely.mp3",
  cover: "covers/Freely.jpg"
},

{
  title: "Welcome to the show",
  artist: "DAY6",
  mood: "드라이브",
  file: "music/Welcome.mp3",
  cover: "covers/Welcome.jpg"
},

{
  title: "Why You So Bad?",
  artist: "TWS",
  mood: "드라이브",
  file: "music/why.mp3",
  cover: "covers/why.jpg"
},

{
  title: "한 페이지가 될 수 있게",
  artist: "DAY6",
  mood: "기분좋음",
  file: "music/Time.mp3",
  cover: "covers/Time.jpg"
},


{
  title: "널 따라가",
  artist: "TWS",
  mood: "기분좋음",
  file: "music/you.mp3",
  cover: "covers/you.jpg"
},

{
  title: "Get It Now",
  artist: "TWS",
  mood: "기분좋음",
  file: "music/get.mp3",
  cover: "covers/get.jpg"
},

{
  title: "Shoot me",
  artist: "DAY6",
  mood: "기분좋음",
  file: "music/Shoot.mp3",
  cover: "covers/Shoot.jpg"
},

{
  title: "Sweet Chaos",
  artist: "DAY6",
  mood: "기분좋음",
  file: "music/Sweet.mp3",
  cover: "covers/Sweet.jpg"
},

{
  title: "Deep in love",
  artist: "DAY6",
  mood: "기분좋음",
  file: "music/Deep.mp3",
  cover: "covers/Deep.jpg"
},

{
  title: "Zombie",
  artist: "DAY6",
  mood: "우울",
  file: "music/Zombie.mp3",
  cover: "covers/Zombie.jpg"
},

{
  title: "I need somebody",
  artist: "DAY6",
  mood: "우울",
  file: "music/Need.mp3",
  cover: "covers/Need.jpg"
},

{
  title: "Colors",
  artist: "DAY6",
  mood: "우울",
  file: "music/Colors.mp3",
  cover: "covers/Colors.jpg"
},

{
  title: "Still",
  artist: "DAY6",
  mood: "우울",
  file: "music/Still.mp3",
  cover: "covers/Still.jpg"
},


{
  title: "BACK TO STRANGERS",
  artist: "DAY6",
  mood: "우울",
  file: "music/back.mp3",
  cover: "covers/back.jpg"
},

{
  title: "다화는 예뻤어",
  artist: "DAY6",
  mood: "다화",
  file: "music/DAY6_PRETTY.mp3",
  cover: "covers/DAY6_PRETTY.jpg"
}

,

{
  title: "다화의 모든 가능성이 되어줄게",
  artist: "TWS",
  mood: "다화",
  file: "music/all.mp3",
  cover: "covers/all.jpg"
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
