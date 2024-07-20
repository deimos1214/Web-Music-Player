export let songs=[
  {
    id:1,
    songCover:"images/covers/1.jpg",
    songName:"Warriyo - Mortals",
    songSource:"songs/1.mp3"
  },
  {
    id:2,
    songCover:"images/covers/2.jpg",
    songName:"OVERDOSE",
    songSource:"songs/2.mp3"
  },
  {
    id:3,
    songCover:"images/covers/3.jpg",
    songName:"Diviners - Savannah",
    songSource:"songs/3.mp3"
  },
  {
    id:4,
    songCover:"images/covers/4.jpg",
    songName:"Electronomia - Energy",
    songSource:"songs/4.mp3"
  },
  {
    id:5,
    songCover:"images/covers/5.jpg",
    songName:"Firefly Pt-II",
    songSource:"songs/5.mp3"
  },
  {
    id:6,
    songCover:"images/covers/6.jpg",
    songName:"Janji - Heroes Tonight",
    songSource:"songs/6.mp3"
  },
  {
    id:7,
    songCover:"images/covers/7.jpg",
    songName:"Different Heaven - Nekozilla",
    songSource:"songs/7.mp3"
  },
  {
    id:8,
    songCover:"images/covers/8.jpg",
    songName:"Light It Up",
    songSource:"songs/8.mp3"
  },
  {
    id:9,
    songCover:"images/covers/9.jpg",
    songName:"Syncole - Feel Good",
    songSource:"songs/9.mp3"
  },
  {
    id:10,
    songCover:"images/covers/10.jpg",
    songName:"Different Heaven - My Heart",
    songSource:"songs/10.mp3"
  }
]
let songInfoList=document.querySelector('.song-list')
let songInfoListHTML=''
songs.forEach((song) => {
  songInfoListHTML+=`
  <div class="song-card">
   <img src=${song.songCover} />
   <div class="seek">${song.songName}</div>
   <div class="song-duration">  <i class="fa-solid fa-play song-list-element songNo${song.id}"></i></div>
  </div>
  `
});

songInfoList.innerHTML=songInfoListHTML