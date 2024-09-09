// executor

const removeDuplicates = require('./removeDuplicates');
const countVowels = require('./countVowels');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma string: ', (input) => {
    const noDuplicates = removeDuplicates(input);
    const vowelCount = countVowels(noDuplicates);
    
    console.log(`Resultado: { Frase Sem Vogal Duplicada: '${noDuplicates}', Vogais Unicas: ${vowelCount} }`);
    
    rl.close();
});
