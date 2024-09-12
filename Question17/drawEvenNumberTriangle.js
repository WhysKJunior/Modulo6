function getEvenNumbers(n) {
    let evenNumbers = [];
    for (let i = 1; evenNumbers.length < n; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

function drawEvenNumberTriangle(n) {
    const evenNumbers = getEvenNumbers((n * (n + 1)) / 2); 
    let index = 0;
    for (let i = 1; i <= n; i++) {
        console.log(evenNumbers.slice(index, index + i).join(' '));
        index += i;  
    }
}

module.exports = { getEvenNumbers, drawEvenNumberTriangle };
