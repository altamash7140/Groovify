// Initializing the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');


let songs = [
    {songName: "Saadi Gali Aaja - Ayushmaan", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Rafta Rafta Wo Meri - Mehdi Hasssan", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tere Hawale - Arijit Singh", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Noormahal - Chani Nattan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Teri Deewani - Kailash Kher", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tera Mera Pyaar Amar-Lata Mangeshkar", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Akhiyon Ke Jharokhon Se-Hemlata", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Mann Mera-Gajendra Verma", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Aam Jahe Munde-Permish Verma", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Ye Dil Tum Bin Kahi Lagta Nahi", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItem.forEach((element, i) => {
        
        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handling play/pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
       
    // Update seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100; 
})



//    for each pause and play button 

const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-solid', 'fa-circle-pause');
        element.classList.add('fa-solid', 'fa-circle-play');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-solid', 'fa-circle-play');
        e.target.classList.add('fa-solid', 'fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    });
});
 // next button

 document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=9){
            songIndex = 0
        }
        else{
            songIndex += 1;
        }
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
 })

// previous button

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})