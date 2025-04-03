const display = document.getElementById("display")
const history = document.getElementById("history")



let timer = null;
let startTime =0;
let elapsedTime = 0;
let isRunning = false;



function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;

        
    }
}

function stop(){
   if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;

    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 *60));
    let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milleSeconds = Math.floor(elapsedTime   % 1000 / 10);

    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milleSeconds = String(milleSeconds).padStart(2, "0")
    const h1 = document.createElement("h1");
    h1.textContent = `${hours}:${minutes}:${seconds}:${milleSeconds}`
    history.appendChild(h1);
    
    

   }
}
function restart(){
  if(isRunning){
    
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 *60));
    let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milleSeconds = Math.floor(elapsedTime   % 1000 / 10);

    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milleSeconds = String(milleSeconds).padStart(2, "0")
    const h1 = document.createElement("h1");
    h1.textContent = `${hours}:${minutes}:${seconds}:${milleSeconds}`
    history.appendChild(h1);
    
    display.textContent = "00:00:00:00"
    clearInterval(timer)
    isRunning = false;
    elapsedTime = 0
  }

}
function update(){
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 *60));
    let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milleSeconds = Math.floor(elapsedTime   % 1000 / 10);

    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milleSeconds = String(milleSeconds).padStart(2, "0")
    display.textContent = `${hours}:${minutes}:${seconds}:${milleSeconds}`



}
function clears(){
    // history.innerHTML = ""
    // while (history.firstChild) {
    //     history.removeChild(history.firstChild);
    //   }
    document.getElementById("history").replaceChildren();
    
}