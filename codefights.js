//adjacentElementsProduct
//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
function adjacentElementsProduct(inputArray) {

    var product = inputArray[0] * inputArray[1] ;

    for(var i = 0; i<inputArray.length; i++){
        //using a ternary operator
        // product = inputArray[i] * inputArray[i+1] >= product ?
        // inputArray[i] * inputArray[i+1] : product;

        if(inputArray[i] * inputArray[i+1] >= product){

            product = inputArray[i] * inputArray[i+1];
        }
    }
    return product;
}

//shapeArea
function shapeArea(n) {

    var shapeArea = 1;

    for (var i =1; i<n; i++){
        shapeArea += i*4;
    }
    return shapeArea;
}

 //Make Array consecutive 2
 //Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example
//
// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.
//
// Ratiorg needs statues of sizes 4, 5 and 7.

 function makeArrayConsecutive2(statues) {

    statues.sort((a, b)=>{
        return a-b;
    })

    var min = statues[0];
    var max =statues[statues.length-1];
    count = 0;
    for(var i=min; i<max; i++){
        if (statues.indexOf(i) === -1){
            count++;
        }
    }
    return count;

//almostIncreasingSequence
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
//
// Example
//
// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false;


    function almostIncreasingSequence(sequence) {

    var count = 0;

    for(var i = 0; i < sequence.length; i++){

        if(sequence[i] <= sequence[i-1]){

            count++;

            if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){

                return false;
            }
        }
    }
    return count <= 1;
}

//matrixElementsSum
// After becoming famous, CodeBots decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms, each cell containing an integer - the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots.
//
// Help the bots calculate the total price of all the rooms that are suitable for them.
//
// Example
//
// For
//
// matrix = [[0, 1, 1, 2],
//           [0, 5, 0, 0],
//           [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9.
//
// Here's the rooms matrix with unsuitable rooms marked with 'x':
//
// [[x, 1, 1, 2],
//  [x, 5, x, x],
//  [x, x, x, x]]
// Thus, the answer is 1 + 5 + 1 + 2 = 9.

function matrixElementsSum(matrix) {
   var totalPrice = 0;
   var hauntedRoom = [];

   for (var i = 0; i < matrix.length; i++){
      for (var j = 0; j < matrix[i].length; j++){
         if(matrix[i][j] === 0){
            hauntedRoom.push(j);
            }
         else if(hauntedRoom.indexOf(j)=== -1){
                     totalPrice += matrix[i][j];
         }
      }
   }
   return totalPrice;
}

//allLongestStrings
// Given an array of strings, return another array containing all of its longest strings.
// Example
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {

   var longestLength = inputArray[0].length;

   for(var i = 0; i<inputArray.length; i++){
      if(longestLength < inputArray[i].length){
         longestLength = inputArray[i].length;
         }
   }
   //filter the items that are less that longestLength
   inputArray = inputArray.filter((item)=>{
      return item.length === longestLength;
   });
   return inputArray;
}

//commonCharacterCount
//Given two strings, find the number of common characters between them.
// Example
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".
function commonCharacterCount(s1, s2) {
    s1 = s1.split("");
    s2 = s2.split("");

    let s1Object = {};
    let s2Object = {};

    for (let i = 0; i < s1.length; i++){
        if(s1Object.hasOwnProperty(s1[i]) === false){
           s1Object[s1[i]] = 1;
           }else{
               s1Object[s1[i]]++;
           }
    }
    for (let i = 0; i < s2.length; i++){
        if(s2Object.hasOwnProperty(s2[i]) === false){
           s2Object[s2[i]] = 1;
           }else{
               s2Object[s2[i]]++;
           }
    }
    let sum  = 0;

    for(let prop in s1Object){
        if(s2Object.hasOwnProperty(prop) === true){
           if(s2Object[prop] < s1Object[prop]){
              sum += s2Object[prop];
              }else{
                  sum += s1Object[prop];
              }
           }
    }
    return sum;
}

//isLucky
// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
//
// Given a ticket number n, determine if it's lucky or not.
//
// Example
//
// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.
function isLucky(n){
    //convert number to string and split to form an array
   n = n.toString();

   let half = n.length/2;
   //substring method returns a subset of a string between one index and another, or through the end of the string.
   //parseInt method coverts the string into a number
   let firstHalf = n.substring(0, half).split("").reduce((a,b)=>{
       return parseInt(a) + parseInt(b);
   });
   let secondHalf = n.substring(half, n.length).split("").reduce((a,b)=>{
       return parseInt(a) + parseInt(b);
    });
    return firstHalf === secondHalf;
}

//sortByHeight
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// Example
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {

    var arr = a;

    arr = arr.filter((item)=>{
        if(item != -1){
            return item;
        }
    }).sort((a,b)=>{
       return a - b;
    });
    var val = 0
    for(var i = 0; i<a.length; i++){
        if(a[i] != -1){
           a[i] = arr[val];
            val++
           }
    }
   return a;
}

//reverseParentheses (difficult)
// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.
// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.
// Example
// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".
function reverseParentheses(s) {
    if(s.includes('(')){
        return reverseParentheses(revRecur(s));
    }
    return s;
}
function revRecur(s){
    let regex = /\(([^()]*)\)/i;
    let subStr = regex.exec(s)[1];
    subStr = subStr.split("").reverse().join("");
    return s.replace(regex, subStr);
}
