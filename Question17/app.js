const prompt = require('prompt-sync')();
const { drawEvenNumberTriangle } = require('./drawEvenNumberTriangle');

const n = parseInt(prompt('Digite o número de linhas do triângulo: '));

if (!isNaN(n) && n > 0) {
    drawEvenNumberTriangle(n);
} else {
    console.log('Por favor, insira um número válido.');
}
