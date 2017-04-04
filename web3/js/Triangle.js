function Triangle() {
	this.x1 = 200;
	this.y1 = 200;
	this.x2 = 300;
	this.y2 = 300;
	this.x3 = 300;
	this.y3 = 200;
}

Triangle.prototype = Object.create(new Shape());

Triangle.prototype.setX1 = function(value) {
	this.x1 = value;
};

Triangle.prototype.setY1 = function(value) {
	this.y1 = value;
};

Triangle.prototype.setX2 = function(value) {
	this.x2 = value;
};

Triangle.prototype.setY2 = function(value) {
	this.y2 = value;
};

Triangle.prototype.setX3 = function(value) {
	this.x3 = value;
};

Triangle.prototype.setY3 = function(value) {
	this.y3 = value;
};

Triangle.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.moveTo(this.x1, this.y1);
	ctx.lineTo(this.x2, this.y2);
	ctx.lineTo(this.x3, this.y3);
	ctx.lineTo(this.x1, this.y1);
	ctx.strokeStyle = this.getBorderColor();
	ctx.fillStyle = this.getFillColor();
	ctx.lineWidth = 4;
	ctx.stroke();
	ctx.fill();
};

Triangle.prototype.getArea = function() {
	firstRect = (this.x1 - this.x3) * (this.y2 - this.y3);
	secondRect = (this.x2 - this.x3) * (this.y1 - this.y3);
	areaSize = Math.abs(firstRect - secondRect) / 2;

	return areaSize;
};

Triangle.prototype.getPerimeter = function() {
	var side12 = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
	var side23 = Math.sqrt(Math.pow(this.x3 - this.x1, 2) + Math.pow(this.y3 - this.y1, 2));
	var side31 = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
	var perimeter = side12 + side23 + side31;

	return perimeter;
};
