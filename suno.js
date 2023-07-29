console.log("Welcome to Sunoo");

// Initialise the variable
let songIndex=0;
let audioElement = new Audio('songs/Kesariya.mp3' );
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {    songname: "Kesariya", filepath: "songs/1.mp3",coverPath: "Images/1.jpg"},
    {    songname: "Juda Hokar bhi_Shasavat", filepath: "songs/2.mp3",coverPath: "Images/2.jpg"},
    {    songname: "Laal Ishq_Shasavat", filepath: "songs/3.mp3",coverPath: "Images/3.jpg"},
    {    songname: "O re piya_Shasavat", filepath: "songs/4.mp3",coverPath: "Images/4.jpg"},
    {    songname: "Tere Liye_Shasavat", filepath: "songs/5.mp3",coverPath: "Images/5"},
    {    songname: "Closer", filepath: "songs/6.mp3",coverPath: "Images/6.jpg"},
    {    songname: "Tum hi ho_Shasavat", filepath: "songs/7.mp3",coverPath: "Images/7.jpg"},
    {    songname: "Mann Mera", filepath: "songs/8.mp3",coverPath: "Images/8.jpg"},
    {    songname: "Khaamosiyan", filepath: "songs/9.mp3",coverPath: "Images/9.jpg"},
    {    songname: "Main Hoon Sath Tere", filepath: "songs/10.mp3",coverPath: "Images/10.jpg"},
    
]
    songItems.forEach((element, i)=>{ 
        element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
        element.getElementsByClassName("songName")[0].innerText = songs[i].songname; 
    })
     
    
    // Handle play/pause click
    masterPlay.addEventListener('click', ()=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
    // Listen to Events
    audioElement.addEventListener('timeupdate', ()=>{ 
        // Update Seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
        myprogressbar.value = progress;
    })
    
    myprogressbar.addEventListener('change', ()=>{
        audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
    })
    
    const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{ 
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songname;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        })
    })
    
    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=9){
            songIndex = 0
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    })
    
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex = 0
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

// // audioElement.play();

// // Handle play/pause click
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused||audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove(play);
//         masterPlay.classList.add();

//     }
// })

// //Listen to events
// myprogressbar.addEventListener('timeupdate', ()=>{
//     console.log('timeupdate');
//     // Update Seekbar 
// })