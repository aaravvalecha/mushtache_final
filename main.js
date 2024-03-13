noseX=0;
noseY=0;


function preload(){

img=loadImage(" https://i.postimg.cc/3x3QzSGq/m.png")

}
function setup(){

 canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
video.hide();

poseNet= ml5.poseNet(video,model_loaded);
poseNet.on('pose',got_poses);


}

function model_loaded(){

    console.log("model loaded");
}


function draw(){
image(video,0,0,300,300);
image(img,noseX,noseY,30,50);
}
function got_poses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
    }
}


function take_snapshot(){

    save("filter.png")
}
