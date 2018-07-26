const drawTitle = () => {
  ctx.drawImage(titleimg,0,0,WIDTH,HEIGHT)
  ctx.fillStyle="rgb(20,20,20)"
  ctx.font = "30px 'Arial'"
  ctx.fillText("Press Space Key",200,200)
}

const updateTitle = () => {
  if(keys._space == false) {
    spaceState = false;
  }
  if(keys._space && spaceState == false) {
    gameMode = GAME_PLAY;
    spaceState = true;
    initial(); //todo
  }
}
