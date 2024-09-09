const readline = require('readline');
const sumOfUniqueEvenNumbers = require('./sumOfUniqueEvenNumbers');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readNumbers() {
    return new Promise((resolve, reject) => {
        rl.question('Digite uma lista de números separados por vírgula: ', (input) => {
            const numbers = input.split(',').map(numStr => parseInt(numStr.trim()));
            resolve(numbers);
        });
    });
}

async function main() {
    try {
        const numbers = await readNumbers();

        const result = sumOfUniqueEvenNumbers(numbers);
        console.log(`A soma dos números pares únicos é: ${result}`);
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    } finally {
        rl.close();
    }
}

main();
