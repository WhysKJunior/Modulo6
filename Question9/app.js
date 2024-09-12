const prompt = require('prompt-sync')();
const { reverseWordsInSentence } = require('./reverseString');

const answer = prompt('Digite uma frase para inverter as palavras: ');
const reversed = reverseWordsInSentence(answer);

console.log('Frase com palavras invertidas:', reversed);
