//removedor duplicadas dos numeros 


function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

module.exports = removeDuplicates;
