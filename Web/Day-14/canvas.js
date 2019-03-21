function drawLine (ctx, start, end){
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.stroke();
}

function drawRect (ctx, start, dimension, color){
    ctx.fillStyle = color
    ctx.fillRect (start[0], start[1], dimension[0], dimension[1]);
}

function drawQuadraticCurve (ctx, start, cp, end){
    ctx.setLineDash ([]);
    ctx.strokeStyle = '#000000';
    ctx.beginPath ();
    ctx.moveTo (start[0],start[1]);
    ctx.quadraticCurveTo (cp[0], cp[1], end[0], end[1]);
    ctx.stroke();
}

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

//A
// drawRect(ctx, [20,20], [100,100], '#008000')


// //B
// drawLine(ctx, [20,20], [400,400]);

// //C
// drawLine(ctx, [20,20], [400,400]);
// drawLine(ctx, [20,400], [400,20]);


// //D
// drawLine (ctx, [150,200], [150,400]); //left line
// drawLine (ctx, [150,400], [400,400]); // bottom center line
// drawLine (ctx, [400,400], [400,200]); //right line
// drawQuadraticCurve (ctx, [150,200], [290,0], [400,200]); //CURVE