const prompt = require('prompt-sync')();
const sumOfUniqueEvenNumbers = require('./sumOfUniqueEvenNumbers');

function readNumbers() {
    const input = prompt('Digite uma lista de números separados por vírgula: ');
    const numbers = input.split(',').map(numStr => parseInt(numStr.trim()));
    return numbers;
}

function main() {
    try {
        const numbers = readNumbers();
        const result = sumOfUniqueEvenNumbers(numbers);
        console.log(`A soma dos números pares únicos é: ${result}`);
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

main();
