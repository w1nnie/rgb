const WIDTH = 800;
const HEIGHT = 450;

const GAME_TITLE = 0;
const GAME_PLAY = 1;
const GAME_RESULT = 2;

let rgbCanvas;
let ctx;
let fps = 60;
let frequency = 1000/fps;
let score;
let run = true;
let gameMode = GAME_TITLE;
let spaceState = false;

let titleimg = new Image();
titleimg.addEventListener("load", drawImage, false);
titleimg.src = "../img/title.png";


window.onload = () =>{
  rgbCanvas = document.getElementById("canvas");
  rgbCanvas.width = WIDTH;
  rgbCanvas.height = HEIGHT;

  ctx = rgbCanvas.getContext("2d");
  ctx.translate(20,20)

  initial();
  if(run){
    setInterval(main,frequency);
  }
}

const main = () => {
  switch(gameMode){
    case GAME_TITLE:
      drawTitle();
      updateTitle();
      break;
    case GAME_PLAY:
      //update();  //todo
      //draw();  //todo
      break;
    case GAME_RESULT:
      //drawResult();  //todo
      //updateResult(); //todo
      break;
  }
}

const initial = () => {
  gameover = false;
  score = 0;
}
