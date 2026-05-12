let modalitàCasuale = false;
let modalitàEraser = false;
let latoCorrente = 16;
const containerGrid = document.querySelector('#container-grid');
const buttonCasuale = document.querySelector('.colori-casuali');
const buttonEraser = document.querySelector('.eraser');

function creaGriglia(lato) {
    latoCorrente = lato;
    containerGrid.innerHTML = "";
    const dimensione = 100 / lato;
    const totalQuadrati = lato * lato;
    for (let i = 0; i < totalQuadrati; i++) {
        const quadrato = document.createElement('div');
        quadrato.classList.add('quadrati');
        quadrato.style.flex = `0 0 ${dimensione}%`
        quadrato.style.height = `${dimensione}%`;
        quadrato.dataset.alpha = '0';  
        quadrato.addEventListener('mouseenter', () => {
            if ( modalitàEraser) {
                quadrato.style.backgroundColor = 'white';
            } else if ( modalitàCasuale ) {
                const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                quadrato.style.backgroundColor = randomColor;
                quadrato.style.opacity = '1';
            } else {
                let alpha = parseFloat(quadrato.dataset.alpha);
                if ( alpha < 1 ) {
                    alpha = ( alpha + 0.1 );
                    quadrato.dataset.alpha = alpha;
                    quadrato.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
                }
            }
        });
        containerGrid.appendChild(quadrato);
    }
};

document.querySelector('.button-grid').addEventListener('click', () => {
    let risposta = prompt("Inserisci numero quadrati per lato, (max 100)", 16); 
    if ( risposta > 0 && risposta <= 100) {
        creaGriglia(risposta);
    } else {
        alert("Inserisci un numero valido tra 1 e 100");
    }
});

document.querySelector('.colori-casuali').addEventListener('click', () => {
    modalitàCasuale = !modalitàCasuale;
    if ( modalitàCasuale) {
        modalitàEraser = false;
        buttonCasuale.innerText = "Random colors: \nOn";
        buttonEraser.innerText = "Eraser: \nOff";
    } else {
        buttonCasuale.innerText = "Random colors: \nOff";
    }
});

document.querySelector('.eraser').addEventListener('click', () => {
    modalitàEraser = !modalitàEraser;
    if ( modalitàEraser ) {
        modalitàCasuale = false;
        buttonEraser.innerText = "Eraser: \nOn";
        buttonCasuale.innerText = "Random colors: \nOff";
        
    } else {
        buttonEraser.innerText = "Eraser: \nOff";
    }
});

document.querySelector('.clear').addEventListener('click', () => {
    creaGriglia(latoCorrente);
});

creaGriglia(16);





