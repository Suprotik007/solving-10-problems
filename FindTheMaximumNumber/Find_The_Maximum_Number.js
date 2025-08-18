function checkForMaxNumber(array){
    let maxDigit=array[0]
    for (let i=1; i<array.length;i++){
        if(array[i]>maxDigit){
            maxDigit=array[i]
        }
    }
    return maxDigit;
    }
console.log(checkForMaxNumber([1, 2, 3, 4, 5]))
