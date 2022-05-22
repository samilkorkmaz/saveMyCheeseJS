var canvas = document.getElementById("myCanvas");
//canvas.style="border:1px solid #000000;"
var ctx = canvas.getContext("2d");

const grid = {
    nRows: 30,
    nCols: 50,
    cell: {
        width: 20,
        height: 20
    }
 };

canvas.addEventListener("mousemove", updateDrawing);
drawGrid();
drawPolygon(0,0);

function updateDrawing(e) {
    drawGrid();
    var rect = canvas.getBoundingClientRect();
    drawPolygon(e.clientX - rect.left, e.clientY - rect.top);
}

function drawGrid() {
    canvas.width = grid.nCols * grid.cell.width;
    canvas.height = grid.nRows * grid.cell.height;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'lightgray';
    for (let iRows = 0; iRows <= grid.nRows; iRows++) {
        let y = iRows*grid.cell.height;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    for (let iCols = 0; iCols <= grid.nCols; iCols++) {
        let x = iCols*grid.cell.width;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
}

function drawPolygon(x0, y0) {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue';
    ctx.moveTo(x0, y0);
    ctx.lineTo(x0 + 220, y0 + 70);
    ctx.lineTo(x0 + 320, y0 + 170);
    ctx.lineTo(x0 + 320, y0 + 270);
    ctx.lineTo(x0, y0);
    ctx.stroke();
}