var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
//VOITURE
c.beginPath();
c.moveTo(50, 150);
c.lineTo(250, 150);
c.lineTo(250, 200);
c.lineTo(300,200);
c.lineTo(300,250);
c.lineTo(0,250);
c.lineTo(0,200);
c.lineTo(50,200);
c.lineTo(50,200);
c.closePath();
c.fillStyle= '#149414';
c.fill();
//ROUE GAUCHE
c.beginPath();
c.arc(30,280,30,0,Math.PI*2,true);
c.strokeStyle = "black";
c.fillStyle = "#B3B191";
c.fill();
c.stroke();
//ROUE DROITE
c.beginPath();
c.arc(270,280,30,0,Math.PI*2,true);
c.strokeStyle = "black";
c.fillStyle = "#B3B191";
c.fill();
c.stroke();
