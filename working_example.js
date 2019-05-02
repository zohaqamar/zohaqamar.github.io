function setup() {
	createCanvas(window.innerWidth,window.innerHeight); // make an HTML canvas element width x height pixels
	//now i have this width thing for the window, but it does not carry over if the size of the sindow changes once the page is already loaded
	frameRate(1)
	ranh=Math.random()
	ranm=Math.random()
	rans=Math.random()
	noStroke()

	
}

function draw() {
	background(0, 0, 0);
	

	for (var x = 0; x < hour(); x +=1) {

		let xhrec = x*700;
		fill(ranh*140,0, Math.random()*255);
		rect(50+x*(750/12), 50, 10, 100) 


	}	


for (var x = 0; x < minute(); x +=1) {

		let xmrec = x*700;
		fill(0, Math.random(.4,1)*255, 100);
		rect(50+x*(750/60), 300, 5, 50) 

	}	

for (var x = 0; x < second(); x +=1) {

		let xsrec = x*700;
		fill(255, Math.random(0.8,1)*255, 0);
		rect(50+x*(750/60), 500, 3, 30) 

	}	

}