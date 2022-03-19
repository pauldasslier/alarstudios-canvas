(function() {
  const colors = [
    'rgb(255,0,0,255)',
    'rgb(0,0,255,255)',
    'rgb(0,255,0,255)',
    'rgb(255,255,0,255)',
    'rgb(0,0,0,255)',
  ];
  const r = 50;

  const smallCanvas = document.getElementById('small');
  const smallCtx = smallCanvas.getContext('2d');

  const bigCanvas = document.getElementById('big');
  const bigCtx = bigCanvas.getContext('2d');

  bigCanvas.addEventListener('click', (e) => {
    const x = e.offsetX || e.originalEvent.layerX || e.layerX;
    const y = e.offsetY || e.originalEvent.layerY || e.layerY;
    const pixel = bigCtx.getImageData(x, y, 1, 1);
    const color = `rgb(${pixel.data[0]},${pixel.data[1]},${pixel.data[2]},${pixel.data[3]})`;

    smallCtx.fillStyle = colors.includes(color) ? color : 'rgb(255, 255, 255)';
    smallCtx.fillRect(0, 0, 600, 50);
  });

  function drawColorStar(color, translate) {
    bigCtx.save();
    bigCtx.beginPath();
    bigCtx.translate(translate, translate);
    bigCtx.rotate(-Math.PI / 10);
    bigCtx.scale(r, r);
    bigCtx.moveTo(1, 0);
    bigCtx.lineWidth = bigCtx.lineWidth / r;
    for (var i = 0; i < 9; i++) {
      bigCtx.rotate(Math.PI / 5);
      if (i % 2 == 0) {
        bigCtx.lineTo(0.3819653016466596, 0);
      } else {
        bigCtx.lineTo(1, 0);
      }  }
    bigCtx.closePath();
    bigCtx.fillStyle = color;
    bigCtx.strokeStyle = color;
    bigCtx.fill();
    bigCtx.stroke();
    bigCtx.restore();
  }

  colors.forEach((color, idx) => {
    drawColorStar(color, 100 * (idx + 1));
  });
})();