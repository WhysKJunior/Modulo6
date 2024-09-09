const readline = require('readline');
const removeDuplicates = require('./removeDuplicates');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um array separado por vírgulas: ', (input) => {
    const array = input.split(',').map(item => item.trim());
    const result = removeDuplicates(array);
    console.log('Array sem duplicatas:', result);
    rl.close();
});
