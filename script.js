console.log("welcome to spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');

let masterplay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('Myprogressbar');
let mygif=document.getElementById('gif');
let MastersongName=document.getElementById('MastersongName');
let songItems=Array.from(document.getElementsByClassName('songdetail'));

let songs=[
    {songName:"Love me like you do -Ellie Goulding",filePath:"songs/1.mp3",coverPath:"covers/3.jpg"},
    {songName:"Aam Jahe Munde -Parmish Verma",filePath:"songs/2.mp3",coverPath:"covers/6.jpg"},
    {songName:"Baaton ko Teri -Arijit singh",filePath:"songs/3.mp3",coverPath:"covers/4.jpg"},
    {songName:"Born To Shine -Diljit Dosanjh",filePath:"songs/4.mp3",coverPath:"covers/1.png"},
    {songName:"Jaavedaan Hai -KK",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Selfmade-Sidhu ",filePath:"songs/6.mp3",coverPath:"covers/7.jpeg"},
    {songName:"Thodi Jagah -Arijit singh",filePath:"songs/7.mp3",coverPath:"covers/2.jpg"},
      
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText=songs[i].songName;
})



masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        mygif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        mygif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressbar.value=progress;

})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    // console.log(element);
    element.addEventListener('click',(e)=>{
         console.log(e.target);
         makeAllPlays();
         songIndex=parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src=`songs/${ songIndex+1}.mp3`;
         MastersongName.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
         mygif.style.opacity=1;
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${ songIndex+1}.mp3`;
    MastersongName.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${ songIndex+1}.mp3`;
    MastersongName.innerText=songs[songIndex].songName;
         audioElement.currentTime=0;
         audioElement.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
})