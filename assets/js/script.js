$(function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  // Tête
  context.beginPath();
  context.fillStyle = '#976F0F';
  context.arc(200, 65, 55, 0, 2*Math.PI);
  context.closePath();
  context.fill();
    // Sourcil gauche
    context.beginPath();
    context.moveTo(170, 37);
    context.strokeStyle = "#FFFFFF";
    context.quadraticCurveTo(180, 27, 190, 37);
    context.stroke();
    // Oeil gauche
    context.beginPath();
    context.fillStyle = '#FFFFFF';
    context.arc(180, 55, 10, 0, 2*Math.PI);
    context.closePath();
    context.fill();

    // Sourcil droit
    context.beginPath();
    context.moveTo(210, 37);
    context.strokeStyle = "#FFFFFF";
    context.quadraticCurveTo(220, 27, 230, 37);
    context.stroke();
    // Oeil droit
    context.beginPath();
    context.fillStyle = '#FFFFFF';
    context.arc(220, 55, 10, 0, 2*Math.PI);
    context.closePath();
    context.fill();

    // Lèvre haut
    context.beginPath();
    context.moveTo(175, 85);
    context.lineWidth = '2'
    context.strokeStyle = "#DE2204";
    context.quadraticCurveTo(200, 97, 225, 85);
    context.stroke();
    // Lèvre bas
    context.beginPath();
    context.moveTo(175, 86);
    context.lineWidth = '2'
    context.strokeStyle = "#DE2204";
    context.quadraticCurveTo(200, 110, 225, 86);
    context.stroke();

  // Corps
  context.fillStyle = '#976F0F';
  context.fillRect(150, 100, 100, 200);
    // Boutton haut
    context.beginPath();
    context.fillStyle = '#7A2976';
    context.arc(200, 200, 10, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    // Boutton bas
    context.beginPath();
    context.fillStyle = '#7A2976';
    context.arc(200, 160, 10, 0, 2*Math.PI);
    context.closePath();
    context.fill();

  // Bras
  context.beginPath();
  context.moveTo(50, 115);
  context.lineTo(350, 115);
  context.lineCap = 'round';
  context.strokeStyle= '#976F0F';
  context.lineWidth= 30;
  context.stroke();

  // Pied gauche
  context.beginPath();
  context.moveTo(170, 300);
  context.lineTo(170, 340);
  context.lineCap = 'round';
  context.strokeStyle= '#976F0F';
  context.lineWidth= 40;
  context.stroke();
    // Entrejambe
    context.beginPath();
    context.fillStyle = '#F2F2F2';
    context.arc(200, 300, 10, 0, 2*Math.PI);
    context.closePath();
    context.fill();
  // Pied droit
  context.beginPath();
  context.moveTo(230, 300);
  context.lineTo(230, 340);
  context.lineCap = 'round';
  context.strokeStyle= '#976F0F';
  context.lineWidth= 40;
  context.stroke();
});
