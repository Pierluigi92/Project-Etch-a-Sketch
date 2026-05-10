const containerGrid = document.querySelector('#container-grid');
let modalitàCasuale = false;
const buttonCasuale = document.querySelector('#colori-casuali');

document.querySelector('#colori-casuali').addEventListener('click', () => {
    modalitàCasuale = !modalitàCasuale;
    if ( modalitàCasuale) {
        buttonCasuale.innerText = "Colori casuali: \nON";
    } else {
        buttonCasuale.innerText = "Colori casuali: \nOFF";
    }
});

function creaGriglia(lato) {
    containerGrid.innerHTML = "";
    const dimensione = 100 / lato;
    const totalQuadrati = lato * lato;
    for (let i = 0; i < totalQuadrati; i++) {
        const quadrato = document.createElement('div');
        quadrato.classList.add('quadrati');
        quadrato.style.flex = `1 1 ${dimensione}%`
        quadrato.style.height = `${dimensione}%`;    
        quadrato.addEventListener('mouseenter', () => {
            if ( modalitàCasuale ) {
                const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                quadrato.style.backgroundColor = randomColor;
            } else {
            quadrato.style.backgroundColor = 'black';
            }
        });
        containerGrid.appendChild(quadrato);
    }
};

document.querySelector('#button-grid').addEventListener('click', () => {
    let risposta = prompt("Inserisci numero quadrati per lato, (max 100)", 16); 
    if ( risposta > 0 && risposta <= 100) {
        creaGriglia(risposta);
    } else {
        alert("Inserisci un numero valido tra 1 e 100");
    }
});

creaGriglia(16);





