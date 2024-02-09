var topographyCanvas = document.getElementById("topography");
var topoCtx = topographyCanvas.getContext("2d");

topoCtx.translate(0.5, 0.5);

var topoCw = 325;
var topoCh = 325;

//gradient
const topoGrd = topoCtx.createLinearGradient(
  0.4 * topoCw,
  0.6 * topoCw,
  0.6 * topoCw,
  0.4 * topoCw
);
topoGrd.addColorStop(0, "#ff0000");
topoGrd.addColorStop(1, "#ff8800");
topoCtx.strokeStyle = topoGrd;
topoCtx.lineWidth = Math.round(0.0075 * topoCw);
topoCtx.fillStyle = "#fff";

for (let i = 0.17 * topoCh; i <= topoCh - 10; i += 0.05 * topoCh) {
  topoCtx.beginPath();
  topoCtx.moveTo(-0.083 * topoCw, i + 0.083 * topoCh);
  var prevNodeY;
  var iter = 0;
  var variability = 0.016 * topoCh;
  for (let j = 0.083 * topoCw; j <= topoCw; j += 0.083 * topoCw) {
    if (iter > 5) {
      variability -= 0.026 * topoCh;
    } else {
      variability += 0.026 * topoCh;
    }
    var nodeY = i - getRandomInt(variability);
    topoCtx.bezierCurveTo(
      j - 0.083 * topoCw + 0.0416 * topoCw,
      prevNodeY,
      j - 0.0416 * topoCw,
      nodeY,
      j,
      nodeY
    );
    prevNodeY = nodeY;
    iter++;
  }
  topoCtx.bezierCurveTo(
    topoCw + 0.083 * topoCw,
    prevNodeY,
    topoCw + 0.0416 * topoCw,
    prevNodeY,
    topoCw + 0.083 * topoCw,
    i + 0.083 * topoCh
  );
  topoCtx.lineTo(-0.083 * topoCw, i + 0.083 * topoCh);
  topoCtx.closePath();
  topoCtx.fill();
  topoCtx.stroke();
}
topoCtx.closePath();

//braces
topoCtx.beginPath();
topoCtx.strokeStyle = "#bdbdbd";
topoCtx.lineWidth = Math.round(0.02 * topoCw);
//top left
topoCtx.moveTo(0, 0.06 * topoCh);
topoCtx.lineTo(0, 0);
topoCtx.lineTo(0.06 * topoCw, 0);
//top right
topoCtx.moveTo(0.94 * topoCw, 0);
topoCtx.lineTo(topoCw, 0);
topoCtx.lineTo(topoCw, 0.06 * topoCh);
//bottom left
topoCtx.moveTo(0, 0.94 * topoCh);
topoCtx.lineTo(0, topoCh);
topoCtx.lineTo(0.06 * topoCw, topoCh);
//bottom right
topoCtx.moveTo(topoCw, 0.94 * topoCh);
topoCtx.lineTo(topoCw, topoCh);
topoCtx.lineTo(0.94 * topoCw, topoCh);
topoCtx.stroke();
topoCtx.closePath();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
