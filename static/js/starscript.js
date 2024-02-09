var starCanvas = document.getElementById("star");
var starCtx = starCanvas.getContext("2d");

starCtx.translate(0.5, 0.5);
starCtx.strokeStyle = "#bdbdbd";

var cW = 200;
var cH = 133;

starCtx.lineWidth = Math.round(0.002 * cW);

//vertical
starCtx.beginPath();
var l = 0;
for (let k = 0.2 * cW; k <= 0.81 * cW; k += (0.6 * cW) / 10) {
  starCtx.moveTo(k, 0.2 * cH);
  starCtx.lineTo(l, 0.8 * cH);
  starCtx.stroke();
  l += cW / 10;
}
starCtx.closePath();

//horizontal
starCtx.beginPath();
var expansion = 0;
var curvature = 0;
var iter = 0;
for (let i = 0.2 * cH; i <= 0.81 * cH; i += (0.6 * cH) / 10) {
  starCtx.moveTo(0.2 * cW - expansion, i);
  //bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  starCtx.bezierCurveTo(
    0.33 * cW + curvature,
    i,
    0.375 * cW,
    i + curvature,
    0.5 * cW,
    i + curvature
  );
  starCtx.bezierCurveTo(
    0.625 * cW,
    i + curvature,
    0.66 * cW - curvature,
    i,
    0.8 * cW + expansion,
    i
  );
  expansion += (0.2 * cW) / 10;
  iter++;
  if (iter > 5) {
    curvature -= 0.034 * cH;
  } else {
    curvature += 0.034 * cH;
  }
  starCtx.stroke();
}
starCtx.closePath();

//circle
starCtx.beginPath();
const starGrd = starCtx.createLinearGradient(
  0.4 * cW,
  0.6 * cW,
  0.6 * cW,
  0.4 * cW
);
starGrd.addColorStop(0.2, "#ff0000");
starGrd.addColorStop(1, "#ff8800");
// starCtx.arc(x,y,r,start-angle,end-angle)
starCtx.arc(0.5 * cW, 0.5 * cH, 0.14 * cW, 0, 2 * Math.PI);
starCtx.fillStyle = starGrd;
starCtx.fill();
starCtx.closePath();
