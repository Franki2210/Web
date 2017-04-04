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