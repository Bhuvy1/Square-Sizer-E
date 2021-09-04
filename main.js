noseX = 0;
noseY = 0;
difference = 0;
LwristX = 0;
RwristX = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#ff99ff");
    fill("#ccccff");
    stroke("#3399ff");
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log("Posenet is Initialized!");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(" noseX =" +noseX + "noseY =" + noseY);

        LwristX = results[0].pose.leftWrist.x;
        RwristX = results[0].pose.rightWrist.x;

        difference = floor(LwristX - RwristX);

        console.log(" LwristX = " + LwristX + " RwristX = " + RwristX + "difference =" + difference);
    }
}