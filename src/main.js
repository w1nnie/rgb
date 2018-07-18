const WIDTH = 800;
const HEIGHT = 450;

const GAME_TITLE = 0;
const GAME_PLAY = 1;
const GAME_RESULT = 2;

window.onload = function(){
  rgbCanvas = document.getElementById("canvas");
  rgbCanvas.width = WIDTH;
  rgbCanvas.height = HEIGHT;

  ctx = rgbCanvas.getContext("2d");
  ctx.translate(200,20)
}
