const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;


const trafficLigth = (event) => {
    stopAutomatic();
    turnON[event.target.id]();
   
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;


const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnON[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnON = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 2000)
}

buttons.addEventListener('click', trafficLigth);