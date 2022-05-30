beliver ="";
harry_poter = "";
function preload()
{
  beliver =  loadSound("song1.mp3");
   harry_poter =  loadSound("song2.mp3");
}


function setup(){
    canvas = createCanvas(600,500);
  canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
 function draw(){
image(video,0,0,600,)
}


function beliver1(){
    beliver.play();
    document.getElementById("song_name").innerHTML = "Beliver";
}

function harry()
{

   
    harry_poter.play();
    document.getElementById("song_name").innerHTML ="Harry poter them song ";
}