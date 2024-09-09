

const readline = require('readline');
const sortUniqueNumbers = require('./sortUniqueNumbers');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira uma lista de números separados por vírgula: ', (input) => {
    const numbers = input.split(',').map(Number);
    const sortedUniqueNumbers = sortUniqueNumbers(numbers);
    console.log('Números únicos ordenados:', sortedUniqueNumbers);
    rl.close();
});
