function checkPalindrome(string){
const isReversed=string.split('').reverse().join("")
return string===isReversed
}
console.log(checkPalindrome("home")); // 