

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// Esta funcion dibuja un circulo en la posicion x, y

context.beginPath();
context.arc(240, 160, 80,0, Math.PI*2, true);
context.fillStyle = "#0095DD";
context.fill();
context.closePath();

context.beginPath();
context.arc(190, 100, 40,0, Math.PI*2, true);
context.fillStyle = "#00BCD4";
context.fill();
context.closePath();

context.beginPath();
context.arc(285, 100, 40,0, Math.PI*2, true);
context.fillStyle = "#00BCD4";
context.fill();
context.closePath();

context.beginPath();
context.arc(215, 160, 20,0, Math.PI*2, true);
context.fillStyle = "#1e272e";
context.fill();
context.closePath();

context.beginPath();
context.arc(265, 160, 20,0, Math.PI*2, true);
context.fillStyle = "#1e272e";
context.fill();
context.closePath();

context.beginPath();
context.arc(265, 160, 10,0, Math.PI*2, true);
context.fillStyle = "#d2dae2";
context.fill();
context.closePath();

context.beginPath();
context.arc(215, 160, 10,0, Math.PI*2, true);
context.fillStyle = "#d2dae2";
context.fill();
context.closePath();

context.beginPath();
context.arc(242, 195, 10,0, Math.PI*2, true);
context.fillStyle = "#1e272e";
context.fill();
context.closePath();
