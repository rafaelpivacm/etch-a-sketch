// Constantes
const container = document.querySelector('.container');
const input = document.querySelector('input');
const confBtn = document.querySelector('#confirm');

// Variáveis
let colorStatus = 'white';

// Cria um grid de 16x16
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.flex = "1 0 calc(100% / 16)";
    square.style.boxSizing = 'border-box';
    square.style.border = "1px solid #7e7e7e81";
    square.style.backgroundColor = 'black';
    square.addEventListener('mouseover', () => {
        if(square.style.backgroundColor === "black") {
            console.log(square.style.opacity);
            square.style.backgroundColor = `${colorStatus}`;
            square.style.opacity = "0.1";
        } else if (square.style.opacity === "1") {
            return;
        } else {
            square.style.opacity = Number(square.style.opacity) + 0.1;
        }
    });
    container.appendChild(square);
}

// Evento para criar um novo grid
confBtn.addEventListener('click', ()=>{
    if (input.value < 1 || input.value > 100 || !Number.isInteger(Number(input.value))) {
        mostrarAlerta();
        return;
    }
    container.innerHTML = '';
    for (let i = 0; i < input.value * input.value; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flex = `1 0 calc(100% / ${input.value})`;
        square.style.boxSizing = 'border-box';
        square.style.border = `calc(1px / ${input.value})solid  #7e7e7e81`;
        square.style.backgroundColor = 'black';
        square.addEventListener('mouseover', () => {
            if(square.style.backgroundColor === "black") {
                console.log(square.style.opacity);
                square.style.backgroundColor = `${colorStatus}`;
                square.style.opacity = "0.1";
            } else if (square.style.opacity === "1") {
                return;
            } else {
                square.style.opacity = Number(square.style.opacity) + 0.1;
            }
        });
        container.appendChild(square);
    }
    input.value = '';
    container.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
});

// Função alerta error
function mostrarAlerta() {
    // Defina a mensagem do alerta
    document.getElementById("mensagem").innerText = "Por favor, insira um valor inteiro entre 1 e 100";
    // Exibe o modal
    document.getElementById("alerta").style.display = "flex";
}

function fecharAlerta() {
    // Esconde o modal
    document.getElementById("alerta").style.display = "none";
}

