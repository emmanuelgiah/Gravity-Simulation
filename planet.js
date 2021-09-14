function planet(size, posX, posY) {
	//instance variables
	this.sz = size;
	this.grav = this.sz / 10;
	this.x = posX;
	this.y = posY;
	//maths for rotation
	this.radians = Math.random() * Math.PI * 2;
	this.scale = 1;
	this.xdistance = Math.floor(Math.random() * (Math.pow(this.sz/3, this.scale))) + (Math.pow(this.sz/3, this.scale));
	this.ydistance = Math.floor(Math.random() * (Math.pow(this.sz/3, this.scale))) + (Math.pow(this.sz/3, this.scale));
	//saves original circumference
	this.origxdistance = this.xdistance;
	this.origydistance = this.ydistance;
	this.vel = this.grav/75;


	//planet color
	this.r = random(255) + 150;
	this.g = random(255) + 150;
	this.b = random(255) + 150;

	this.hover = function() {
		lastPoint = {x: this.x, y: this.y};
		//move points over time
		this.radians += this.vel
		this.x = (windowWidth/2 + Math.cos(this.radians) * this.xdistance);
		this.y = (windowHeight/2 + Math.sin(this.radians) * this.ydistance);
		this.draw();
	}

	this.orbit = function(planet) {
		lastPoint = {x: this.x, y: this.y};
		//move points over time
		this.radians += this.vel;
		this.x = (planet.x + Math.cos(this.radians) * this.xdistance);
		this.y = (planet.y + Math.sin(this.radians) * this.ydistance);
		this.draw();
	}

	this.draw = function() {
		fill(this.r, this.g, this.b);
		strokeWeight(this.sz);
		point(this.x, this.y);
	}
}