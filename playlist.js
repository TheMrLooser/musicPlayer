let songitem = Array.from(document.getElementsByClassName('song'))
let songitemplay = Array.from(document.getElementsByClassName('fas'));
let masterPlay = document.getElementById("playicon");
let song_name = document.getElementById("songText");
let coverImage = document.getElementById("coverImage");
let myprogressBarr = document.getElementById("myProgressBar")
let audioElement = new Audio('2.mp3');
let song_duration = document.getElementById("song_length")
let songIndex = 0;


let song  = [{songname:'Feeling',filepath:'Feelings.mp3' , image : 'image.jpg'},
            {songname:'Mohabbat',filepath:'Mohabbat.mp3' , image : 'image3.jpg'},
            {songname:'Nach meri rani',filepath:'Nach_meri_Rani.mp3' , image : 'image2.jpg'},
            {songname:'Feelings',filepath:'Feelings.mp3' , image : 'image.jpg'},
            {songname:'Ve dola',filepath:'Ve_dola.mp3' , image : 'image.jpg'},
            {songname:'Mohabbat',filepath:'Mohabbat.mp3' , image : 'image2.jpg'},
            {songname:'Ve dola',filepath:'Ve_dola.mp3' , image : 'image.jpg'},
            {songname:'Mohabbat',filepath:'Mohabbat.mp3' , image : 'image3.jpg'},
            {songname:'Nach Meri Rani',filepath:'Nach_meri_Rani.mp3' , image : 'image2.jpg'},
            {songname:'Feelings',filepath:'Feelings.mp3' , image : 'image.jpg'},
            {songname:'Mohabbat',filepath:'Mohabbat.mp3' , image : 'image3.jpg'},

        ]
songitem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = song[i].image;
    element.getElementsByClassName("songName")[0].innerText = song[i].songname;

});

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100) // v=(ct\d)*100
    myprogressBarr.value = progress
    console.log(progress)
});
myprogressBarr.addEventListener('change',()=>{
    audioElement.currentTime  = parseInt(parseInt(myprogressBarr.value*audioElement.duration)/100); // ct = (v*d)/100
    console.log(audioElement.currentTime)
});

const makeAllPlay = ()=>{
    songitemplay.forEach((element)=>{
        element.classList.add('fa-play')
    })
}


clickCount_1 = 0;
masterPlay.addEventListener('click',()=>{
    clickCount_1 +=1;
    if(clickCount_1%2!=0){
            masterPlay.src = 'pause.png'
            audioElement.play()
            
        }
    if (clickCount_1%2==0){
        masterPlay.src = 'play.png'
        audioElement.pause()
     
    }
    
    // masterPlay.src = 'pause.png'
     
})
clickCount = 0;
songitemplay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        clickCount +=1
        if(clickCount%2!=0){
            makeAllPlay()
            console.log("clicked songitem");
            songIndex = parseInt(e.target.id);
            makeAllPlay()
            e.target.classList.remove("fa-play")
            e.target.classList.add("fa-pause");
            songpath = song[songIndex].filepath
            audioElement.src = songpath
            s_name  = song[songIndex].songname;
            song_name.innerText = s_name;
            s_cover = song[songIndex].image
            coverImage.src = s_cover
            s_duration = song[songIndex].filepath.duration
            song_duration.innerText = s_duration
            console.log(s_duration)
            console.log(typeof(s_duration))
            audioElement.play()
            masterPlay.src = 'pause.png';
        }
        else{
            makeAllPlay()
            songIndex = parseInt(e.target.id);
            e.target.classList.remove("fa-pause")
            e.target.classList.add("fa-play");
            masterPlay.src = 'play.png';
            audioElement.pause()
        }
               
    })
});








// test

// let srring = [
//     {name: 'hello ankush' ,kam: 'dfghj'},
//     {name: 'hello ankush' ,kam: 'dfghj'},
//     {name: 'hello ankush' ,kam: 'dfghj'},
//     {name: 'hello ankush' ,kam: 'dfghj'},
//     {name: 'hello ankush' ,kam: 'dfghj'},
//     {name: 'hello ankush' ,kam: 'dfghj'},
//     {name: 'hello ankush' ,kam: 'dfghj'},
 


// ]

// srring.forEach((i)=>{
//     ss = srring[i].name;
//     sr = ss.replace(" ","_");
//     console.log(sr)
// })