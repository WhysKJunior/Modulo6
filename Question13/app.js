
const readline = require('readline');
const countVowels = require('./countVowels');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma string: ', (inputString) => {
    const vowelCount = countVowels(inputString);
    console.log(`O número de vogais em "${inputString}" é: ${vowelCount}`);
    rl.close();
});
