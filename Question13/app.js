
// const readline = require('readline');
// const countVowels = require('./countVowels');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Digite uma string: ', (inputString) => {
//     const vowelCount = countVowels(inputString);
//     console.log(`O número de vogais em "${inputString}" é: ${vowelCount}`);
//     rl.close();
// });
const prompt = require('prompt-sync')();
const countVowels = require('./countVowels');

const inputString = prompt('Digite uma string: ');
const vowelCount = countVowels(inputString);

console.log(`O número de vogais em "${inputString}" é: ${vowelCount}`);
