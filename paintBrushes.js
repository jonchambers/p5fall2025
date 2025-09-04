
let furby
let ellipseBrushBool = false
let squareBrushBool = false
let furbyBrushBool = false


function preload(){
	furby = loadImage('furby.png')
}


function setup(){
	createCanvas(windowWidth, windowHeight)
	background(255)
	rectMode(CENTER)
	imageMode(CENTER)
}


function draw(){
	fill(0)
	textSize(20)
	text("Press e for ellipse brush, press s for square brush", 100, 100)

	if(squareBrushBool == true){
		if(mouseIsPressed == true){
			squareBrush()
		}
	}

	if(ellipseBrushBool == true){
		if(mouseIsPressed == true){
			ellipseBrush()
		}
	}


	if(furbyBrushBool == true){
		if(mouseIsPressed == true){
			furbyBrush()
		}
	}
	//furbyBrush()
	
	
}


function ellipseBrush(){
	fill(random(255), random(255), random(255))
	ellipse(mouseX, mouseY, 50, 50)
}

function squareBrush(){
	fill(random(255))
	rect(mouseX, mouseY, 100, 100)

}

function furbyBrush(){

	image(furby, mouseX, mouseY, 100, 100)

}


function keyPressed(){
	if(key === 'e'){
		ellipseBrushBool = true
		squareBrushBool = false
		furbyBrushBool = false
	}

	if(key === 's'){
		ellipseBrushBool = false
		squareBrushBool = true
		furbyBrushBool = false
	}

	if(key === 'i'){
		ellipseBrushBool = false
		squareBrushBool = false
		furbyBrushBool = true
	}


}


