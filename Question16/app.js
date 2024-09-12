const prompt = require('prompt-sync')();
const drawTriangle = require('./drawTriangle');

const n = parseInt(prompt('Digite a altura do triângulo: '));

if (!isNaN(n) && n > 0) {
    drawTriangle(n);
} else {
    console.log('Por favor, insira um número válido maior que 0.');
}
