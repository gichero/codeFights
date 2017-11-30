//palindromeRearranging
// Given a string, find out if its characters can be rearranged to form a palindrome.
// Example
// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.
// We can rearrange "aabb" to make "abba", which is a palindrome.
function palindromeRearranging(inputString) {
    var strObj = {};

    var shuffled = inputString.split('');

    for (var i = 0; i < shuffled.length; i++){
        if (!strObj.hasOwnProperty(shuffled[i])){
            strObj[shuffled[i]] = 1;
        }else{
            strObj[shuffled[i]]++;
        }
    }
    var oddCount = 0;

    for(item in strObj){
        if(strObj[item] % 2 !=0){
            oddCount++;
        }
    }
    if(oddCount > 1){
       return false;
       }else{
           return true;
       }

}
// solution b
palindromeRearranging = s => {
    return [...new Set(s)]
        .map(k => s.split(k).length - 1)
        .filter(n => n%2)
        .length
    < 2
}

//convert arabic to roman numbers
//edge test cases
function toRoman(arabic) {

    if(isNotNumber(arabic)) {
        throw new TypeError("not a number");
    }
    if(numberLessThanOne(arabic)){
        throw new TypeError("Number cannot be zero or less");
    }
    if(numberGreaterThan3999(arabic)){
        throw new TypeError("Number cannot be more than 3999");
    }

    var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V",   "IV", "I"];
    var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    var romanized = "";

    for (var i = 0; i < decimals.length; i++) {

        while (decimals[i] <= arabic){
            romanized += romanNumerals[i];
            arabic -= decimals[i];
        }
  }
  return romanized;
}

function isNotNumber(arabic) {
    return typeof arabic !== "number";
}

function numberLessThanOne(arabic) {
    return arabic <= 0;
}
function numberGreaterThan3999(arabic) {
    return arabic > 3999;
}

//areEquallyStrong
// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

// Example
// For yourLeft = 10, yourRight = 15, friendsLeft = 15 and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15 and friendsRight = 9, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var myStrongest = (yourLeft <= yourRight) ? yourLeft : yourRight;
    var myWeakest = (yourLeft >= yourRight) ? yourLeft : yourRight;
    var friendsStrongest = (friendsLeft <= friendsRight) ? friendsLeft : friendsRight;
    var friendsWeakest = (friendsLeft >= friendsRight) ? friendsLeft : friendsRight;

    return (myStrongest === friendsStrongest && myWeakest === friendsWeakest) ? true : false;
}
//solution b
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft === friendsLeft && yourRight === friendsRight || yourLeft ===
        friendsRight && friendsLeft === yourRight) {
        return true;
    }
    return false;
}

//ArrayMaximalAdjacentDifference
// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example
// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.
function arrayMaximalAdjacentDifference(inputArray) {
    var maxDiff = Math.abs(inputArray[0] - inputArray[1]);

    for(var i = 0; i < inputArray.length; i++){
        var currDiff = Math.abs(inputArray[i-1] - inputArray[i]);

        maxDiff = (maxDiff > currDiff) ? maxDiff : currDiff;
    }
    return maxDiff;
}

//isIPv4Address
// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
// IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1.
// Given a string, find out if it satisfies the IPv4 address naming rules.
// Example
// For inputString = "172.16.254.1", the output should be
// isIPv4Address(inputString) = true;
// For inputString = "172.316.254.1", the output should be
// isIPv4Address(inputString) = false.
// 316 is not in range [0, 255].
// For inputString = ".254.255.0", the output should be
// isIPv4Address(inputString) = false.
// There is no first number.
function isIPv4Address(inputString) {

    var block = inputString.split('.');

    if(block.length === 4){

        return block.every(function(i){
            if(i === ''){
                return false
            }
            return Number(i) >=0 && Number(i) <= 255
        });
    }
    return false;
}

//avoidObstacles
// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.
// Example
// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.
function avoidObstacles(inputArray) {
    inputArray = inputArray.sort((a,b) =>{
       return a - b;
    });

    for(var i = 1; i <= inputArray[inputArray.length-1] + 1; i++){
        if(inputArray.every((item)=>{
            return item % i !=0;
        })){
           return i;
           }
    }

}

//BoxBlur
// The algorithm works as follows: each pixel x in the resulting image has a value equal to the average value of the input image pixels' values from the 3 × 3 square with the center at x. All pixels at the edges are cropped.
// As pixel's value is an integer, all fractions should be rounded down
// Example
// For
// image = [[1, 1, 1],
//          [1, 7, 1],
//          [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].
// In the given example all boundary pixels were cropped, and the value of the pixel in the middle was obtained as (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) / 9 = 15 / 9 = ~rounded down~ = 1.
function boxBlur(image) {
    var pixeled = [];
    for(var i = 0; i < image.length - 2; i++){
        var newArr = [];
        for(var j = 0; j < image[i].length -2; j++){
            var sum = 0;
            var count = 9;
            for(var x = i; x < i + 3; x++){
                for(var y = j; y < j + 3; y++){
                    sum += image[x][y];
                }
            }
            newArr.push(Math.floor(sum / count));
        }
        pixeled.push(newArr);
    }
    return pixeled;

}

//Minesweeper
// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.
// Example
// For
// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be
// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]

function minesweeper(matrix) {

    var matrixArr = [];
    for(var i = 0; i < matrix.length; i++){
        matrixArr.push([]);
         for(var j = 0; j < matrix[i].length; j++){
             matrixArr[i][j] = 0;
             if(matrix[i][j-1] === true){
                 matrixArr[i][j]++;
             }
             if(matrix[i][j+1] != undefined){
                 if (matrix[i][j+1] === true){
                     matrixArr[i][j]++;
                 }
             }
             if(matrix[i-1] != undefined){
                 if (matrix[i-1][j] === true){
                     matrixArr[i][j]++;
                 }
             }
             if(matrix[i+1] != undefined){
                 if (matrix[i+1][j] === true){
                     matrixArr[i][j]++;
                 }
             }
             if(matrix[i+1] != undefined){
                 if (matrix[i+1] === true){
                     matrixArr[i][j]++;
                 }
             }
             if(matrix[i+1] != undefined){
                 if (matrix[i+1][j+1] === true){
                     matrixArr[i][j]++;
                 }
             }
             if(matrix[i+1] != undefined){
                 if (matrix[i+1][j-1] === true){
                     matrixArr[i][j]++;
                 }
             }
             if(matrix[i-1] != undefined){
                 if (matrix[i-1][j+1] === true){
                     matrixArr[i][j]++;
                 }
             }
             if(matrix[i-1] != undefined){
                 if (matrix[i-1][j-1] === true){
                     matrixArr[i][j]++;
                 }
             }

        }

    }

    return matrixArr;
}

// Write a function that combines two lists(or arrays) by alternatingly
// taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
var array1 = [1,2,3];
var array2 = ['a', 'b', 'c'];

var array3 = array1.map(function(element,i) {
  return [element, array2[i]]; })
  .reduce(function(a,b) {
    return a.concat(b); });
// solution using for loop
function zip(array1, array2){

  var array3 = [];

for(var i = 0; i < array1.length; i++){

   array3.push(array1[i]);
   array3.push(array2[i]);
  }
 return array3;
}
zip([1,2,3],['a', 'b', 'c']);

//arrayReplace
// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
// Example
// For inputArray = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3, the output should be
// arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
function arrayReplace(inputArray, elemToReplace, substitutionElem) {

    inputArray.forEach(function(item, index){
        if(item === elemToReplace){
            inputArray[index] = substitutionElem;
        }

    });
    return inputArray;
}
 //solution b
 function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    var arr2 = [];

    for(var i = 0 ; i < inputArray.length ; i++){

        if(inputArray[i] === elemToReplace) arr2[i] = substitutionElem;
        else arr2[i] = inputArray[i];
    }
    return arr2;
}

//EvenDigitsOnly
function evenDigitsOnly(n) {
    n = n.toString().split('');

        return n.every(function(i){
            return parseInt(i) % 2 === 0
        })

    }
//solution b
function evenDigitsOnly(n) {

    n = n.toString();
    for (var i = 0; i<n.length;i++){
        if (parseInt(n[i])%2===1){
            return false;
        }
    }
    return true;
}

//solution c
function evenDigitsOnly(n) {
    //make n a string
    //split n into an array
    //loop through the array and check if there is a odd value
    //if odd return false
    //return true
    n = n.toString().split('')
    for(var i = 0; i < n.length; i++){
        if(Number(n[i]) % 2 !== 0) return false;
    }
    return true;
}

//variableName
// Correct variable names consist only of Latin letters, digits and underscores and they can't start with a digit.
//
// Check if the given string is a correct variable name.
//
// Example
//
// For name = "var_1__Int", the output should be
// variableName(name) = true;
// For name = "qq-q", the output should be
// variableName(name) = false;
// For name = "2w2", the output should be
// variableName(name) = false.

function variableName(name) {
    return /^[a-z_]\w*$/i.test(name);

}
//solution b
function variableName(name){
    return(name.match(/^\d|\W/g)) ? false: true;
}
//alphabeticShift
//For inputString = "crazy", the output should be
//alphabeticShift(inputString) = "dsbaz".
function alphabeticShift(inputString) {
    var alphabet =       ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    inputString  = inputString.split('');

    for (var i = 0; i<inputString.length; i++){
        var indexValue = 0;
        if (inputString[i] != 'z'){
            indexValue = alphabet.indexOf(inputString[i]) + 1;
            }
        inputString[i] = alphabet[indexValue];
    }
    return inputString.join('');

}
//solution b
function alphabeticShift(inputString) {
    let arr = inputString.split('');
    arr = arr.map(char=>{
        if(char == 'z') {
            return 'a';
        }
        let charcode = char.charCodeAt()+1;
        return String.fromCharCode(charcode);
    })
    return arr.join('');
}
//solution c
function alphabeticShift(inputString) {
   return inputString.split("").map((a,i) => a === 'z' ? 'a' : String.fromCharCode((a.charCodeAt(0) +1))).join("");
}

//chessBoardCellColor
//Given two cells on the standard chess board, determine whether they have the same color or not.
function chessBoardCellColor(cell1, cell2) {
    let sum1 = Number.parseInt(cell1[1]) + (cell1.charCodeAt(0) - 64);
    let sum2 = Number.parseInt(cell2[1]) + (cell2.charCodeAt(0) - 64);

    return (sum1 % 2 === 0 && sum2 % 2 === 0) || (sum1 % 2 === 1 && sum2 % 2 === 1);
}
//solution b
function chessBoardCellColor(cell1, cell2) {
    var board = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8
    };
    var square1 = board[cell1[0]] + parseInt(cell1[1]);
    var square2 = board[cell2[0]] + parseInt(cell2[1]);

    return square1 % 2 === square2 % 2;

}
