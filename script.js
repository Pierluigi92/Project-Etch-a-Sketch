const containerGrid = document.querySelector('#container-grid');
const quadratiPerRiga = 16;
const totalQuadrati = quadratiPerRiga * quadratiPerRiga;

for (let i = 0; i < totalQuadrati; i++) {
    const quadrati = document.createElement('div');
    quadrati.classList.add('quadrati');
    containerGrid.appendChild(quadrati);
}
