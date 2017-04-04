function Circle() {
	this.centerX = 200;
	this.centerY = 200;
	this.radius = 50;
}

Circle.prototype = Object.create(new Shape());

Circle.prototype.setRadius = function(value) {
	this.radius = value;
};

Circle.prototype.setCenterX = function(value) {
	this.centerX = value;
};

Circle.prototype.setCenterY = function(value) {
	this.centerY = value;
};

Circle.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, true);
	ctx.lineWidth = 4;
	ctx.fillStyle = this.getFillColor();
	ctx.fill();
	ctx.strokeStyle = this.getBorderColor();
	ctx.stroke();
};

Circle.prototype.getArea = function() {
	return Math.pow(Math.PI * this.radius, 2);
};

Circle.prototype.getPerimeter = function() {
	return (2 * Math.PI * this.radius);
};
