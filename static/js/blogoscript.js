var bCanvas = document.getElementById("bLogo");
var bLogoCtx = bCanvas.getContext("2d");

bLogoCtx.translate(-25.5, -25.5);

var cW = 450;
var cH = 450;

//checkerboard
bLogoCtx.beginPath();
bLogoCtx.lineWidth = 0.006 * cW;
bLogoCtx.strokeStyle = "#bdbdbd";
for (let i = 0.2 * cH; i <= 0.8 * cH; i += 0.2 * cH) {
  for (let j = 0.2 * cW; j <= 0.8 * cW; j += 0.2 * cW) {
    bLogoCtx.moveTo(i - 0.03 * cW, j);
    bLogoCtx.lineTo(i + 0.03 * cW, j);
    bLogoCtx.moveTo(j, i - 0.03 * cH);
    bLogoCtx.lineTo(j, i + 0.03 * cH);
  }
}
bLogoCtx.stroke();
bLogoCtx.closePath();

//OUTER
bLogoCtx.beginPath();
bLogoCtx.moveTo(0.3 * cW, 0.3 * cH);
//top
bLogoCtx.lineTo(0.63 * cW, 0.3 * cH);
//top curve
bLogoCtx.bezierCurveTo(
  0.75 * cW,
  0.3 * cH,
  0.74 * cW,
  0.5 * cH,
  0.67 * cW,
  0.49 * cH
);
//bottom curve
bLogoCtx.bezierCurveTo(
  0.8 * cW,
  0.5 * cH,
  0.79 * cW,
  0.7 * cH,
  0.66 * cW,
  0.7 * cH
);
//bottom
bLogoCtx.lineTo(0.3 * cW, 0.7 * cH);
//back
bLogoCtx.lineTo(0.3 * cW, 0.3 * cH);

//TOP INNER
bLogoCtx.moveTo(0.38 * cW, 0.38 * cH);
//back
bLogoCtx.lineTo(0.38 * cW, 0.46 * cH);
//bottom
bLogoCtx.lineTo(0.6 * cW, 0.46 * cH);
//curve
bLogoCtx.bezierCurveTo(
  0.66 * cW,
  0.46 * cH,
  0.66 * cW,
  0.38 * cH,
  0.6 * cW,
  0.38 * cH
);
//top
bLogoCtx.lineTo(0.38 * cW, 0.38 * cH);

//BOTTOM INNER
bLogoCtx.moveTo(0.38 * cW, 0.54 * cH);
//back
bLogoCtx.lineTo(0.38 * cW, 0.62 * cH);
//bottom
bLogoCtx.lineTo(0.63 * cW, 0.62 * cH);
//curve
bLogoCtx.bezierCurveTo(
  0.69 * cW,
  0.62 * cH,
  0.69 * cW,
  0.54 * cH,
  0.63 * cW,
  0.54 * cH
);
//top
bLogoCtx.lineTo(0.38 * cW, 0.54 * cH);

//gradient
const bLogoGrd = bLogoCtx.createLinearGradient(
  0.4 * cW,
  0.6 * cW,
  0.6 * cW,
  0.4 * cW
);
bLogoGrd.addColorStop(0, "#ff0000");
bLogoGrd.addColorStop(1, "#ff8800");
bLogoCtx.fillStyle = bLogoGrd;
bLogoCtx.fill();
bLogoCtx.closePath();
