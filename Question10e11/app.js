const prompt = require('prompt-sync')();
const { encryptSentenceWithCaesarCipher } = require('./cesarCipher');

function runCaesarCipherProgram() {
    const sentence = prompt('Digite a frase que deseja cifrar: ');
    const shift = prompt('Digite o valor de deslocamento: ');
    const encryptedSentence = encryptSentenceWithCaesarCipher(sentence, parseInt(shift));
    console.log('Frase cifrada: ' + encryptedSentence);
}

runCaesarCipherProgram();
