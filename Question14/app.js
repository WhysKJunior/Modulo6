const prompt = require('prompt-sync')();
const removeDuplicates = require('./removeDuplicates');
const countVowels = require('./countVowels');

    const input = prompt('Digite uma string: ')
    const noDuplicates = removeDuplicates(input);
    const vowelCount = countVowels(noDuplicates);
    
    console.log(`Resultado: { Frase Sem Vogal Duplicada: '${noDuplicates}', Vogais Unicas: ${vowelCount} }`);
 
