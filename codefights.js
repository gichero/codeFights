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
