const readline = require('readline');
const { encryptSentenceWithCaesarCipher } = require('./cesarCipher');

function createReadlineInterface() {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

function runCaesarCipherProgram() {
    const rl = createReadlineInterface();
    rl.question('Digite a frase que deseja cifrar: ', (sentence) => {
        rl.question('Digite o valor de deslocamento: ', (shift) => {
            let encryptedSentence = encryptSentenceWithCaesarCipher(sentence, parseInt(shift));
            console.log('Frase cifrada: ' + encryptedSentence);
            rl.close();
        });
    });
}

// Executa o programa
runCaesarCipherProgram();
