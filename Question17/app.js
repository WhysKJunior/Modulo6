const readline = require('readline');
const { drawEvenNumberTriangle } = require('./drawEvenNumberTriangle');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número de linhas do triângulo: ', (input) => {
    const n = parseInt(input);
    if (!isNaN(n) && n > 0) {
        drawEvenNumberTriangle(n);
    } else {
        console.log('Por favor, insira um número válido.');
    }
    rl.close();
});
