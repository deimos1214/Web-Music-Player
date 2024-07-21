import { songs } from "./song-list.js";
let songIndex = 1;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("master-play");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let progressBar = document.getElementById("progress-bar");
let volumeBar = document.getElementById("volume-control-bar");
const nowPlaying = document.querySelector(".playing-song-title");
volumeBar.value = 100;
const songBanner = document.querySelector(".song-cover-image");

const songBannerFind = (index) => {
  songs.forEach((song) => {
    if (song.id === index + 1) {
      audioElement.src = song.songSource;
      setTimeout(()=>{songBanner.src = song.songCover},900);
      songBannerChange()
      songIndex = index + 1;
    }
  });
};

const masterPlayButtonPlay = () => {
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
};

const masterPlayButtonPause = () => {
  masterPlay.classList.remove("fa-pause");
  masterPlay.classList.add("fa-play");
};

const changeNowPlaying = (songIndex) => {
  let currentSong;
  songs.forEach((song) => {
    if (songIndex === song.id) {
      currentSong = song.songName;
    }
  });
  nowPlaying.innerHTML = currentSong;
};

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlayButtonPlay();
  } else {
    audioElement.pause();
    masterPlayButtonPause();
    togglePlayButtons();
  }
});

audioElement.addEventListener("timeupdate", () => {
  const progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 1000
  );
  progressBar.value = progress;
});
progressBar.addEventListener("change", () => {
  audioElement.currentTime = parseInt(
    (progressBar.value * audioElement.duration) / 1000
  );
});

volumeBar.addEventListener("change", () => {
  audioElement.volume = parseInt(volumeBar.value * 10) / 100;
});
volumeBar.addEventListener("wheel", (event) => {
  audioElement.volume = event.deltaY;
});

const togglePlayButtons = () => {
  songList.forEach((element) => {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  });
};

let songList = document.querySelectorAll(".song-list-element");

songList.forEach((songListElement, index) => {
  songListElement.addEventListener("click", (event) => {
    togglePlayButtons();
    event.target.classList.remove("fa-play");
    event.target.classList.add("fa-pause");

    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");

    songBannerFind(index);
    changeNowPlaying(index+1);
    audioElement.play();
    songBannerChange()
  });
});
forward.addEventListener("click", () => {
  songIndex += 1;
  console.log(songIndex);
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.play();
  setTimeout(()=>{
    songBanner.src = `images/covers/${songIndex}.jpg`;
  },1000);
  masterPlayButtonPlay();
  changeNowPlaying(songIndex);
  songBannerChange()
});
backward.addEventListener("click", () => {
  if (songIndex > 1) {
    songIndex -= 1;
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.play();
    setTimeout(()=>{
      songBanner.src = `images/covers/${songIndex}.jpg`;
    },1500);
    
    masterPlayButtonPlay();
    changeNowPlaying(songIndex);
    songBannerChange()
  }
});


const songBannerImage=document.querySelector('.song-cover-image')

const songBannerChange = ()=>{
  songBannerImage.classList.remove('song-cover-active');
  songBannerImage.classList.add('song-cover-active');
  const tempTimeOut=setTimeout(()=>{
    songBannerImage.classList.remove('song-cover-active');
  },1400)
  

}
