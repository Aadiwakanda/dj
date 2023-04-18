song1=""
song2=""
leftWristX=""
leftWristY=""
rightWristX=""
rightWristY=""

function setup(){
    canvas= createCanvas(600,450)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

     poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}

function draw(){
    image(video,0,0, 600 ,450)
}

 function preload(){
    song1=loadSound("song1.mp3")
    song1.rate(1)
    song1.setVolume(1)
 }

 function gotPoses(Result){
    if(Result.length>0){
        console.log(Result)
        leftWristY=Result[0].pose.leftWrist.y
        leftWristX=Result[0].pose.leftWrist.x
        console.log("leftWrist y axis is"+leftWristY+"leftWrist X axis is"+leftWristX)
        rightWristX=Result[0].pose.rightWrist.x
        rightWristY=Result[0].pose.rightWrist.y
        console.log("rightWrist y axis is"+rightWristY+"rightWrist x axis is"+rightWristX)
    }
 }
 function modelLoaded(){
    console.log("model is loaded!")
 }
 function play(){
    song1.play()
}
function pause(){
    song1.pause()
}