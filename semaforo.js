const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;

const trafficLigth = (event) => {
    turnON[event.target.id]();
}

const changeColor = () =>{
    const colors = ['red','yellow','green']
    const color = colors[colorIndex];
    turnON[color]();
    nextIndex();
}



const turnON = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => setInterval(changeColor, 1000 )
}

buttons.addEventListener('click', trafficLigth);