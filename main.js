var status=""
var img=""
object=[]


function preload(){
    //img = loadImage("NY.webp")
}

function setup(){
  canvas=createCanvas(380,380);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
  objectDetector=ml5.objectDetector("cocossd",modelloaded)
document.getElementById("status").innerHTML="status detectando objetos"
}

function modelloaded(){
  console.log("Modelo si funciono")
status=true;

}

function gotResult(error,results){
  if(error){
    console.log(error)

}
console.log(results);
object=results
}

function draw(){
    image(video,0,0,380,380);
    if(status!=""){
      r=random(255)
      g=random(255)
      b=random(255)
      objectDetector.detect(video,gotResult)       
      for(var i=0;i<object.length;i++){
      document.getElementById("status").innerHTML="Objetos detectados"
      document.getElementById("objetos").innerHTML="numeros detectados"+object.length
    fill(r,g,b)
    porcentaje=floor(object[i].confidence*100)
    text(object[i].label+" "+porcentaje+" %",object[i].x,object[i].y)
    noFill()
    stroke(r,g,b)
    rect(object[i].x,object[i].y,object[i].width,object[i].height)
      }
    }

}



