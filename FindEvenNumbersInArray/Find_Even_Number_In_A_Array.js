function findEvenNumber(array){
const evenNum=[]
    for(let i=0; i<array.length;i++){
        if(array[i]%2===0){
            evenNum.push(array[i])
           
        }
        
    }
     return evenNum;
}
console.log(findEvenNumber([1, 2, 3, 4, 5, 6]))