const song = document.querySelector('.song');
const singer = document.querySelector('.singer');
const thumbImg = document.querySelector('.thumbImg')
const thumb = document.querySelector('.thumb');

const audio = document.querySelector('audio');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.play');
const next = document.querySelector('.next')

const songList = [
    {
        song : 'You & I',
        singer : 'Diego Gonzalez',
        album : 'https://akamai.sscdn.co/uploadfile/letras/albuns/7/a/a/6/4859.jpg',
        path : '../song/Diego Gonzalez - You & I.mp3',
    },
    {
        song : 'Flowers',
        singer : 'Myley Cyrus',
        album : 'https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d',
        path : '../song/Miley Cyrus - Flowers.mp3',
    },  
    {
        song : 'Death bed (coffee for your head)',
        singer : 'Powfu',
        album : 'https://upload.wikimedia.org/wikipedia/en/3/3e/Powfu_-_Death_Bed.png',
        path : '../song/Powfu - death bed (coffee for your head) ft. beabadoobee.mp3',
    }
]

let song_playlist = false;

/* play song */
function playSong(){
    song_playlist = true;
    audio.play();
    playPause.innerHTML = `<i class='bx bx-pause'></i>`;
}

/* pause song */
function pauseSong(){
    song_playlist = false;
    audio.pause();
    playPause.innerHTML = `<i class='bx bx-play' ></i>`
   
}

/* play or pause song on click */
playPause.addEventListener("click", () => (song_playlist ? pauseSong() : playSong()));

/* load song */
function loadSong (songList){
    song.textContent = songList.song;
    singer.textContent = songList.singer;
    thumbImg.src = songList.album;
    audio.src = songList.path;
}

/* current Song */
let i = 0

/*  on load - select first  song from song list */
loadSong(songList[i])

/* prev Song */
function prevSong(){
    i--;
    if(i < 0){
        i = songList.length - 1;
    }
    loadSong(songList[i])
    playSong();
}
prev.addEventListener('click', prevSong);

/* next song */
function nextSong(){
    i++;
    if(i > songList.length - 1){
        i = songList.length + 1;
    }
    loadSong(songList[i])
    playSong();
}
next.addEventListener('click', nextSong);




/* _______________________________ DarkMode */

const btnDark = document.querySelector('.dark')
const player = document.querySelector('.app') 

    btnDark.addEventListener('click', () => {
        document.body.classList.toggle('modeDark');
        player.classList.toggle('appDark')
    })