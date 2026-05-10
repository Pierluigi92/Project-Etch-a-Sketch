const containerGrid = document.querySelector('#container-grid');

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
            quadrato.style.backgroundColor = 'black';
        });
        containerGrid.appendChild(quadrato);
    }
}

document.querySelector('#button-grid').addEventListener('click', () => {
    let risposta = prompt("Inserisci numero quadrati per lato, (max 100)", 16); 
    let nuovoLato = parseInt(risposta);
    if ( nuovoLato > 0 && nuovoLato <= 100) {
        creaGriglia(nuovoLato);
    } else {
        alert("Inserisci un numero valido tra 1 e 100");
    }
});

creaGriglia(16);





