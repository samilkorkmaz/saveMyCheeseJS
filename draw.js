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


drawGrid();
drawPolygon();

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