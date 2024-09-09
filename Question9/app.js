const readline = require('readline');
const { reverseWordsInSentence } = require('./reverseString');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma frase para inverter as palavras: ', (answer) => {
    const reversed = reverseWordsInSentence(answer);
    console.log('Frase com palavras invertidas:', reversed);

    rl.close();
});
