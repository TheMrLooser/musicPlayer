let playIcon = document.getElementById('playicon');
let playmusic=  document.getElementById('playmusic')
let music = new Audio('Feelings.mp3');

clickCount= 0;
playIcon.addEventListener('click',()=>{
    console.log("clicked")
    music.play();
    playIcon.src = "pause.png"
    clickCount += 1;
    if (clickCount%2 == 0){
        music.pause();
        playIcon.src = "play.png"
    }
    

})




// playlist js
