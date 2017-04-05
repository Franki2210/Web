function Shape() {
	this.fillColor = "#AAAAAA";
	this.borderColor = "#AA0000";
}

Shape.prototype.setFillColor = function(value) {
	this.fillColor = value;
};

Shape.prototype.getFillColor = function() {
	return this.fillColor;
};

Shape.prototype.setBorderColor = function(value) {
	this.borderColor = value;
};

Shape.prototype.getBorderColor = function() {
	return this.borderColor;
};
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

var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

var circle = new Circle();
var rectangle = new Rectangle();
var triangle = new Triangle();

function draw(shape) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	shape;
	
	if (shape == "circle"){
		shape = circle;		
	}
	else if (shape == "rectangle"){
		shape = rectangle;
	}
	else if (shape == "triangle"){
		shape = triangle;
	}
	
	shape.draw(ctx);
	drawText(ctx, shape);	
}

function drawText(ctx, shape) {
	ctx.font = "italic 15pt Arial";
	ctx.fillStyle = "#000000";
	ctx.fillText("Периметр: " + shape.getPerimeter().toFixed(2), 100, 440);
	ctx.fillText("Площадь: " + shape.getArea().toFixed(2), 100, 470);
}

function changeFillColor(value){
	selectedShape = getSelectedShape();
	
	if (selectedShape == "circle"){
		circle.setFillColor(value);
	}
	else if (selectedShape == "rectangle"){
		rectangle.setFillColor(value);
	}
	else if (selectedShape == "triangle"){
		triangle.setFillColor(value);
	}
	
	draw(selectedShape);
}

function changeBorderColor(value){
	selectedShape = getSelectedShape();
	
	if (selectedShape === "circle"){
		circle.setBorderColor(value);
	}
	else if (selectedShape == "rectangle"){
		rectangle.setBorderColor(value);
	}
	else if (selectedShape == "triangle"){
		triangle.setBorderColor(value);
	}
	
	draw(selectedShape);
}

function changeCircleSettings(nameSetting, value){
	if (nameSetting == "radius"){
		circle.setRadius(value);
	}
	else if (nameSetting == "centerX"){
		circle.setCenterX(value);
	}
	else if (nameSetting == "centerY"){
		circle.setCenterY(value);
	}
	
	draw("circle");
}

function changeRectangleSettings(nameSetting, value){
	if (nameSetting == "x1"){
		rectangle.setX1(value);
	}
	else if (nameSetting == "y1"){
		rectangle.setY1(value);
	}
	else if (nameSetting == "x2"){
		rectangle.setX2(value);
	}
	else if (nameSetting == "y2"){
		rectangle.setY2(value);
	}

	draw("rectangle");
}

function changeTriangleSettings(nameSetting, value) {
	if (nameSetting == "x1"){
		triangle.setX1(value);
	}
	else if (nameSetting == "y1"){
		triangle.setY1(value);
	}
	else if (nameSetting == "x2"){
		triangle.setX2(value);
	}
	else if (nameSetting == "y2"){
		triangle.setY2(value);
	}
	else if (nameSetting == "x3"){
		triangle.setX3(value);
	}
	else if (nameSetting == "y3"){
		triangle.setY3(value);
	}
	
	draw("triangle");
}


listShapes = document.getElementById("select_object");

circleBlock = document.getElementById("circle_block");
rectangleBlock = document.getElementById("rectangle_block");
triangleBlock = document.getElementById("triangle_block");
colorBlock = document.getElementById("color_block");

fillColorField = document.getElementById("fill_color");
borderColorField = document.getElementById("border_color");

function selectObject() {
	selectedShape = listShapes.value;
	color_block.style.display = 'block';

	circleBlock.style.display = 'none';
	rectangleBlock.style.display = 'none';
	triangleBlock.style.display = 'none';
	
	if (selectedShape == "circle") {
		circleBlock.style.display = 'inline-block';
		fillColorField.value = circle.getFillColor();
		borderColorField.value = circle.getBorderColor();
	}
	else if (selectedShape == "rectangle") {
		rectangleBlock.style.display = 'inline-block';
		fillColorField.value = rectangle.getFillColor();
		borderColorField.value = rectangle.getBorderColor();
	}
	else if (selectedShape == "triangle") {
		triangleBlock.style.display = 'inline-block';
		fillColorField.value = triangle.getFillColor();
		borderColorField.value = triangle.getBorderColor();
	}
	
	draw(selectedShape);
}

function getSelectedShape() {
	return listShapes.value;
}