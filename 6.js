// checkNuber is plaindrome or not.
// ex of plaindrome noon


// let val ="pop"
function idPalindrome(str){
const reverse =str.split("").reverse().join('');
return str=== reverse;

}
console.log(idPalindrome("pop"));