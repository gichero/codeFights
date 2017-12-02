// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).
//
// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
//
// Example
//
// For n = 10 and firstNumber = 2, the output should be
// circleOfNumbers(n, firstNumber) = 7.

function circleOfNumbers(n, firstNumber) {
let half = n/2;
let result = firstNumber + half;
    if(result > (n-1)){
        result = result - n;
    }
    return result;
}

//solution b
function circleOfNumbers(n, firstNumber) {
    var arr = [];
    for ( var i = 0; i < n; i++ ) {
        arr.push(i);
    }
    if ( arr.indexOf(firstNumber) < arr.length /2 ) {
        return arr.indexOf(firstNumber) + arr.length / 2;
    } else {
        return arr.indexOf(firstNumber) - arr.length / 2;
    }
}
