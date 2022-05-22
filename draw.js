var canvas = document.getElementById("myCanvas");
//canvas.style="border:1px solid #000000;"
var ctx = canvas.getContext("2d");

const nRows = 30;
const nCols = 50;
const cellWidth = 20;
const cellHeight = 20;

drawGrid();
drawPolygon();

function drawGrid() {
    canvas.width = nCols * cellWidth;
    canvas.height = nRows * cellHeight;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'lightgray';
    for (let iRows = 0; iRows <= nRows; iRows++) {
        let y = iRows*cellHeight;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    for (let iCols = 0; iCols <= nCols; iCols++) {
        let x = iCols*cellWidth;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
}

function drawPolygon() {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue';
    ctx.moveTo(100, 50);
    ctx.lineTo(220, 70);
    ctx.lineTo(320, 170);
    ctx.lineTo(320, 270);
    ctx.lineTo(100, 50);
    ctx.stroke();
}