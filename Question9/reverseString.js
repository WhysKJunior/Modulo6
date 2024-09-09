
function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => reverseString(word));
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

module.exports = {
    reverseString,
    reverseWordsInSentence
};
