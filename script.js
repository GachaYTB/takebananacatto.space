const musicpaths = [
  'https://takeb1nzyto.space/assets/music/Dunderpatrullen%20-%20To%20The%20Moon.mp3',
  'https://takeb1nzyto.space/assets/music/Big Giant Circles - Go For Distance.mp3',
  'https://takeb1nzyto.space/assets/music/Bag Raiders - Shooting Stars.mp3',
  'https://takeb1nzyto.space/assets/music/NOMA - Brain Power.mp3',
  'https://takeb1nzyto.space/assets/music/Hans Zimmer - Time (Aviators Remix).mp3',
  'https://takeb1nzyto.space/assets/music/Danny Baranowsky - Moonsong.mp3',
  'assets/musics/Big Weenie - Eminem (Lyrics).mp3',
  'assets/musics/GRIMACE - CG5 (Original Song) (1).mp3',
  'assets/musics/HATENA - MOVES.mp3',
  'assets/musics/Joey Trap - Sesame Street (Instrumental).mp3',
  'assets/musics/LMFAO ft. Lauren Bennett, GoonRock - Party Rock Anthem (Official Audio).mp3',
  'assets/musics/Los Del Rio - Macarena (Bayside Boys Remix).mp3',
  'assets/musics/Radiohead - No Surprises.mp3',
  'assets/musics/Shiloh Dynasty - Novacaine - [Speed up].mp3',
  "assets/musics/ODETARI - GMFU (w 6arelyhuman) [Official Audio].mp3",
  "assets/musics/ODETARI - GOOD LOYAL THOTS (Official Audio).mp3",
  "assets/musics/Odetari - I LOVE YOU HOE (w 9lives) [Official Music Video].mp3",
  "assets/musics/Your To Slow - Odetari.mp3"
];
const musicnames = [
  'Dunderpatrullen - To The Moon',
  'Big Giant Circles - Go For Distance.',
  'Bag Raiders - Shooting Stars.',
  'NOMA - Brain Power.',
  'Hans Zimmer - Time (Aviators Remix).',
  'Danny Baranowsky - Moonsong.',
  'Big Weenie - Eminem.',
  'GRIMACE - CG5.',
  'HATENA - MOVES.',
  'Joey Trap - Sesame Street (Instrumental).',
  'LMFAO ft. Lauren Bennett, GoonRock - Party Rock Anthem.',
  'Los Del Rio - Macarena (Bayside Boys Remix).',
  'Radiohead - No Surprises.',
  'Shiloh Dynasty - Novacaine - [Speed up].',
  "ODETARI - GMFU (w 6arelyhuman).",
  "ODETARI - GOOD LOYAL THOTS.",
  "Odetari - I LOVE YOU HOE (w 9lives).",
  "Your To Slow - Odetari"     
]
var musicrandomizer = Math.floor(Math.random() * musicpaths.length);
var audio = new Audio(musicpaths[musicrandomizer]);
var firsttime = true;
var musicButton = document.getElementById("startmusicbutton");
function changebuttononclick() {
  if (firsttime) {
    musicButton.innerText = "skip music";
    musicButton.onclick = skipmusic;
  } else {
    musicButton.innerText = "Click to start some music";
    musicButton.onclick = playrandomaudio;
  }
  console.log("[Music Button]: Successfully changed the button script & the button text!");
}
function playrandomaudio() {
  if (audio) {
    audio.pause();
    audio = null;
  }
  document.getElementById('startmusicbutton').innerText = "Skip Song";
  musicrandomizer = Math.floor(Math.random() * musicpaths.length);
  audio = new Audio(musicpaths[musicrandomizer]);
  audio.load();
  console.log("[Player]: Successfully created a new audio element!");
  audio.play();
  console.log("[Player]: Successfully played the song!");
  document.getElementById('musictext').innerText = "Playing: " + musicnames[musicrandomizer];
  console.log("[Music Text]: Successfully changed the music text!")
  audio.onended = playrandomaudio;
  firsttime = true;
}
function skipmusic() {
  audio.pause();
  audio.currentTime = 0;
  changebuttononclick();
  playrandomaudio()
}
document.addEventListener("keydown", function(event) {
  const keyPressed = event.key;
  if (keyPressed == "s") {
    skipmusic()
  }
});
document.getElementById('startmusicbutton').onclick = playrandomaudio;
document.getElementById('startmusicbutton').innerText = "Click to start some music";