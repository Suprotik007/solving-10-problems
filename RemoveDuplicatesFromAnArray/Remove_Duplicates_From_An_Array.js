function removeDuplicate(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < newArray.length; j++) {
            if (array[i] === newArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(removeDuplicate([1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 10]));

