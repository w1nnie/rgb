var timerId;
function clik(){
  timerId = setTimeout(whattime, 3000);
}
function whattime(){
  document.getElementById("info").textContent = new Date();
}
