function Rectangle() {
	this.x1 = 200;
	this.y1 = 200;
	this.x2 = 300;
	this.y2 = 300;
}

Rectangle.prototype = Object.create(new Shape());

Rectangle.prototype.setX1 = function(value) {
	this.x1 = value;
};

Rectangle.prototype.setY1 = function(value) {
	this.y1 = value;
};

Rectangle.prototype.setX2 = function(value) {
	this.x2 = value;
};

Rectangle.prototype.setY2 = function(value) {
	this.y2 = value;
};

Rectangle.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.moveTo(this.x1, this.y1);
	ctx.lineTo(this.x2, this.y1);
	ctx.lineTo(this.x2, this.y2);
	ctx.lineTo(this.x1, this.y2);
	ctx.lineTo(this.x1, this.y1);
	ctx.strokeStyle = this.getBorderColor();
	ctx.fillStyle = this.getFillColor();
	ctx.lineWidth = 4;
	ctx.stroke();
	ctx.fill();
};

Rectangle.prototype.getArea = function() {
	areaSize = Math.abs(this.x1 - this.x2) * Math.abs(this.y1 - this.y2);
	return areaSize;
};

Rectangle.prototype.getPerimeter = function() {
	perimeter = (Math.abs(this.x1 - this.x2) + Math.abs(this.y1 - this.y2)) * 2;
	return perimeter;
};
