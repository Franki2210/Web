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

