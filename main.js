//Constant DOMs
const getBtn = document.getElementById("genButton");
const info = document.getElementById("advice");
const paragraph = document.getElementById("text");
const title = document.getElementById("title");

//Window Event on load
window.addEventListener("load", () => {
  init();
});

//Initialize
function init() {
  const data = GetAdvice();
}

//GetButton Click
getBtn.addEventListener("click", () => {
  const data = GetAdvice();
});

//Load Card title and paragraph
function LoadAdvice(data) {
  paragraph.innerHTML = `"${data.slip.advice}"`;
  title.innerHTML = `Advice # ${data.slip.id}`;
}

//Get Advice asynchronous function
async function GetAdvice() {
  fetch(`https://api.adviceslip.com/advice`)
  .then(response => response.json())
  .then(data => LoadAdvice(data));
}