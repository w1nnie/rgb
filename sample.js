"use strict";
var W,H,S = 20;
var snake = [], foods = [];
var keyCode = 0;
var point = 0;
var timer = NaN;
var ctx;
// point object
function Point(x,y){
  this.x = x;
  this.y = y;
}
// initialize function
function init(){
  var canvas = document.getElementById("field");
  W = canvas.width / S;
  H = canvas.height / S;
  ctx = canvas.getContext("2d");
  ctx.font = "20px sans-serif";
  // initialize snake
  snake.push(new Point(W/2, H/2));
  for (var i=0;i<10;i++){
    addFood();
  }
  timer = setInterval("tick()", 200);
  window.onkeydown = keydown;
}
// add food
function addFood(){
  while(true){
    var x = Math.floor(Math.random()*W);
    var y = Math.floor(Math.random()*H);
    if (isHit(foods,x,y) || isHit(snake,x,y)){
      continue;
    }
    foods.push(new Point(x,y));
    break;
  }
}
//judge collision
function isHit(data,x,y){
  for (var i=0;i<data.length;i++){
    if (data[i].x == x && data[i].y == y) {
      return true;
    }
  }
  return false;
}
function moveFood(x,y){
  foods = foods.filter(function(p){
    return(p.x != x || p.y != y);
  });
  addFood();
}
function tick(){
  var x = snake[0].x;
  var y = snake[0].y;
  switch (keyCode){
    case 37: x--; break; //left
    case 38: y--; break; //up
    case 39: x++; break; //right
    case 40: y++; break; //down
    default: paint(); return;
  }
  // me or collide wall?
  if (isHit(snake,x,y) || x<0 || x>=W || y<0 || y>=H){
    clearInterval(timer);
    paint();
    return;
  }
  //add head to lead
  snake.unshift(new Point(x,y));
  if(isHit(foods,x,y)){
    point += 10;
    moveFood(x,y);
  } else {
    snake.pop();
  }
  paint();
}
function paint(){
  ctx.clearRect(0,0,W*S,H*S);
  ctx.fillStyle = "rgb(256,0,0)";
  ctx.fillText(point,S,S*2);
  ctx.fillStyle = "rgb(0,0,255)";
  foods.forEach(function (p){
    ctx.fillText("+",p.x*S,(p.y+1)*S);
  });
  snake.forEach(function (p){
    ctx.fillText("*",p.x*S,(p.y+1)*S);
  });
}
function keydown(event){
  keyCode = event.keyCode;
}
