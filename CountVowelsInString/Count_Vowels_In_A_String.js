function countVowels(string){
    const vowels='aeiouAEIOU'
    return Array.from(string).filter(character => vowels.includes(character)).length;
}
console.log(countVowels("Hello World!"))