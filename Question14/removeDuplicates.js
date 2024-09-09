//funçao para retirar as vogais duplicadas

function removeDuplicates(str) {
    let uniqueChars = '';
    for (let i = 0; i < str.length; i++) {
        if (uniqueChars.indexOf(str[i]) === -1) {
            uniqueChars += str[i];
        }
    }
    return uniqueChars;
}

module.exports = removeDuplicates;
