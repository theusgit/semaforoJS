const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

const trafficLgth = (event) => {
    console.log(event.target.id)
}


buttons.addEventListener('click', trafficLgth);