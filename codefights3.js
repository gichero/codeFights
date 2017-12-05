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

//depositProfit
// You have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth rate. Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.
//
// Example
//
// For deposit = 100, rate = 20 and threshold = 170, the output should be
// depositProfit(deposit, rate, threshold) = 3.
//
// Each year the amount of money on your account increases by 20%. It means that throughout the years your balance would be:
//
// year 0: 100;
// year 1: 120;
// year 2: 144;
// year 3: 172,8.
// Thus, it will take 3 years for your balance to pass the threshold, which is the answer.

function depositProfit(deposit, rate, threshold) {
    var yr = 0;

    while(deposit < threshold){
        deposit += deposit * (rate/100);
        yr ++;
    }
    return yr;
}

//solution b
function depositProfit(deposit, rate, threshold) {
    let x = threshold/deposit;
    let y = (rate/100)+1;

    return Math.ceil(Math.log(x)/Math.log(y));
};
