// Função para cifrar uma palavra usando a Cifra de César
function caesarCipher(word, shift) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let code = char.charCodeAt(0);
        if (char >= 'a' && char <= 'z') {
            char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else if (char >= 'A' && char <= 'Z') {
            char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        result += char;
    }
    return result;
}

// Função para cifrar uma frase inteira
function encryptSentenceWithCaesarCipher(sentence, shift) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = caesarCipher(words[i], shift);
    }
    return words.join(' ');
}

// Exportando as funções para uso em outros arquivos
module.exports = {
    caesarCipher,
    encryptSentenceWithCaesarCipher
};
