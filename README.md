1.Palindrome
// Take input from the user and convert to lowercase
let str = "pop"
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr =reversedStr+ str[i]; 
}

// Compare with original
if (str === reversedStr) {
  console.log(`${str} is a palindrome!`);
} else {
  console.log(`${str} is not a palindrome.`);
}
