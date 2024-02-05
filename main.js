
var playState = 0;

function videoPlayPause() {
    playState = playState + 1;

    var video = document.getElementById("video");
    var playIcon = document.getElementById("playIcon");

    if (playState % 2 == 1) {
        video.play();
        playIcon.src = "./icon/pause.png";
        
    } else {
        video.pause();
        playIcon.src = "./icon/play.png"
    }

}

var video = document.getElementById("video");

function forwerd() {
    var videoTime = video.currentTime;
    video.currentTime += 10; 
    video.play()
}

function backword() {
    var videoTime = video.currentTime;
    video.currentTime -= 10;
    video.play();
}
