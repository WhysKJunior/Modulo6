

const removeDuplicates = require('./removeDuplicates');

function sortUniqueNumbers(numbers) {
    const uniqueNumbers = removeDuplicates(numbers);
    return uniqueNumbers.sort((a, b) => a - b);
}

module.exports = sortUniqueNumbers;
