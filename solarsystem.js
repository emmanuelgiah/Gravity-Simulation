var planets = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(10, 16, 26);
	if (planets.length == 1) {
		planets[0].hover();
	} else if (planets.length > 1) {
		for (var i = 0; i < planets.length; i++) {
			//get the current distance as a baseline
			var p1 = planets[i];
			var p2 = p1;
			var closestDistance = dist(p1.x, p1.y, p1.x, p1.y);
			console.log(closestDistance);
			//find the planets closest to our intended planet
			for (var q = i; q < planets.length-1; q++) {
				var currP = planets[q];
				// console.log(currP);
				var currentDistance = dist(p1.x, p1.y, currP.x, currP.y);
				// console.log(currentDistance);
				if (currentDistance < closestDistance) {
					closestDistance = currentDistance;
					p2 = currP;
				}
			}
			// make the smallest planet orbit around the biggest planet
			if (p1.sz > p2.sz) {
				p1.orbit(p2);
			} else {
				p2.orbit(p1);
			}
		}
	}
	
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);	
}

function mousePressed() {
	planets.push(new planet(Math.floor(random(36) + 16), 10, mouseX, mouseY));
}