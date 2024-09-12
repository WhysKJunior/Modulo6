

const prompt = require('prompt-sync')();
const sortUniqueNumbers = require('./sortUniqueNumbers');


    const input = prompt('Por favor, insira uma lista de números separados por vírgula: ')
    const numbers = input.split(',').map(Number);
    const sortedUniqueNumbers = sortUniqueNumbers(numbers);
    console.log('Números únicos ordenados:', sortedUniqueNumbers);

