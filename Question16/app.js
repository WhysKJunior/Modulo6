const readline = require('readline');
const drawTriangle = require('./drawTriangle');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a altura do triângulo: ', (answer) => {
    const n = parseInt(answer);

    if (!isNaN(n) && n > 0) {
        drawTriangle(n);
    } else {
        console.log('Por favor, insira um número válido maior que 0.');
    }

    rl.close();
});
