function sumOfUniqueEvenNumbers(numbers) {
    let uniqueNumbers = {};
    
    numbers.forEach(num => {
        uniqueNumbers[num] = true;
    });

    let evenNumbers = [];

    for (let numStr in uniqueNumbers) {
        let num = parseInt(numStr); 
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }

    let sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

module.exports = sumOfUniqueEvenNumbers;
