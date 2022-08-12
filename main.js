noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
    fill("black");
    textSize(difference);
    text('KRISHNA' ,noseX, noseY,);
    document.getElementById("text_size").innerHTML = "Font size be " + difference +"px"
}

function modelloaded(){
    console.log("PoseNet model is initialised");
}

function gotPoses(results) {
if(results.length >0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.leftWrist.y;
    difference = ceil(leftWristX - rightWristX);
    console.log("noseX = " + noseX + "noseY = " + noseY + "leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
}
}