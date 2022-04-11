nosex=0;
nosey=0;
function preload()
{
    clown_nose=loadImage('https://i.postimg.cc/P5BXMdh7/mustache.png');
}
function setup()
{ 
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotpose);

}
function draw()
{
    image(video,0,0,300,300);
    Fill(255,0,0);
    stroke(255,0,0);
    circle(nosex,nosey,20);
    image(clown_nose,nosex,nosey,30,30);
}
function take_snapshot()
{
    save('myfilter.png');
}
function modelloaded()
{
  console.log('posenet is initialized');
}
function gotpose(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nosex="+results[0].pose.nose-x);
        console.log("nosey="+results[0].pose.nose-y);
        console.log("nosex="+nosex);
        console.log("nosey="+nosey);
    }
}