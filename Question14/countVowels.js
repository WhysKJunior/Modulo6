
//Contador de Vogais

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

module.exports = countVowels;
