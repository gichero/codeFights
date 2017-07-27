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
