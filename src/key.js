class Key {
  constructor() {
    this._ritht = false;
    this._left = false;
    this._up = false;
    this._down = false;
    this._space = false;
    document.addEventListener("keidown", KeyDownHandler, false);
    document.addEventListener("keyup", KeyUpHandler, false);
  }

  right() {
    return this._right;
  }

  left() {
    return this._left;
  }

  up() {
    return this._up;
  }

  down() {
    return this._down;
  }
}

function KeyDownHandler(e) {
  if(e.keyCode === 37) {
    keys._left = true;
  }
  if(e.keyCode === 38) {
    keys._up = true;
  }
  if(e.keyCode === 39) {
    keys._right = true;
  }
  if(e.keyCode === 40) {
    keys._down = true;
  }
  if(e.keyCode === 32) {
    keys._space = true;
  }
}

function KeyUpHandler(e) {
  if(e.keyCode === 37) {
    keys._left = false;
  }
  if(e.keyCode === 38) {
    keys._up = false;
  }
  if(e.keyCode === 39) {
    keys._right = false;
  }
  if(e.keyCode === 40) {
    keys._down = false;
  }
  if(e.keyCode === 32) {
    keys._space = false;
  }
}
