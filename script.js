// Constantes
const container = document.querySelector('.container');
const input = document.querySelector('input');
const confBtn = document.querySelector('#confirm');

// Cria um grid de 16x16
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'green';
    });
    container.appendChild(square);
}

// Função para criar um novo grid
function createGrid() {
    console.log('createGrid');
    container.innerHTML = '';
    for (let i = 0; i < input.value * input.value; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'green';
        });
        container.appendChild(square);
    }
    container.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
}

// Evento para criar um novo grid
confBtn.addEventListener('click', ()=>{
    console.log('createGrid');
    container.innerHTML = '';
    for (let i = 0; i < input.value * input.value; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'green';
        });
        container.appendChild(square);
    }
    container.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
});


