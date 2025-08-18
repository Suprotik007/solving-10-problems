function capitalize(string){
    return string.split(' ').map(eachWord=>eachWord.charAt(0).toUpperCase()+eachWord.slice(1)).join(' ');
}
console.log(capitalize("hello world this is a test string"))
