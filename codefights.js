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
