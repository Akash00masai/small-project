
function findEvenNumbers(arr)
{
    return arr.filter(num => num % 2 === 0);
}

// Function to find odd numbers in an array
function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Pattern Printing
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
}


const numbers = [1, 2, 3, 4, 5, 6];
console.log("Even Numbers:", findEvenNumbers(numbers));
console.log("Odd Numbers:", findOddNumbers(numbers));
printPattern(5);