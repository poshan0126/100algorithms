function adjacentElementsProduct(inputArray: number[]): number {

    let product = 0;

    for(let i = 0; i < inputArray.length - 1; i++) {
        
             let loopProduct: number = inputArray[i] * inputArray[i+1];

             if (loopProduct > product) {
                 product = loopProduct
             }


        
    }

    return product;

}

console.log(adjacentElementsProduct([3, 8, -2, -5, 7, 3]));