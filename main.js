leftwristx = 0;
rightwristx = 0; 
difference = 0;

function setup(){

   canvas = createCanvas(500,500);
   canvas.position(1060,200);

   video = createCapture(VIDEO);
   video.size(600,500);
   video.position(400,200);

   poseNet = ml5.poseNet(video,modelloaded);
   poseNet.on('pose',gotPoses);
}

function modelloaded(){
   console.log("PoseNet is Initialised");
}

function gotPoses(results){
      console.log(results);

   leftwristx = results[0].pose.leftWrist.x;
   rightwristx = results[0].pose.rightWrist.x;
   difference = floor(leftwristx - rightwristx);

   console.log("LeftWristX = " + leftwristx + "RightWristX = " + rightwristx + "; Difference = " + difference );
} 

function draw(){
   background("gray");
   fill("blue");
   console.log("results", difference);
   document.getElementById("square_side").innerHTML = "Font size of the text will be " + difference + "px";
   textSize(difference);
   text("Peter", 50, 400);
}