//setup runs one time

let furby

function preload(){
  furby = loadImage('furby.png')
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  imageMode(CENTER)
}



//draw runs in a loop
function draw() {

  

  print(mouseIsPressed)
  background(174, 66, 201);
  
  //ellipse styles
  fill(68, 201, 66)
  noStroke()
  ellipse(300, 200, 300, 100)
  fill(0)
  ellipse(300, 200, 50, 50)
  
  //triangle styles
  fill(200, 88, 100)
  strokeWeight(20)
  stroke(217, 86, 26)
  noFill()
  triangle(800, 200, 850, 450, 650, 100)
  
  //rect styles
  fill(200, 200, 0)
  stroke(100, 86, 200)
  rect(width/2, height/2, 100, 200)
  
  
  line(100, 500, 200, 600)


  image(furby, windowWidth/2, windowHeight/2)


  
}


