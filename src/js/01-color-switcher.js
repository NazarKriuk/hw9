
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const colorNumber = document.querySelector('.color');

let intervalId; // зберігає ідентифікатор інтервалу

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startChangingColors() {
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
    
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    colorNumber.textContent = randomColor;
  }, 1000);
}

function stopChangingColors() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}

startBtn.addEventListener('click', startChangingColors);
stopBtn.addEventListener('click', stopChangingColors);