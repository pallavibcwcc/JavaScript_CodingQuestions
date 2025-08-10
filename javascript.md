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
2.Array destructuring
let toys = ["teddy", "car", "robot"];
let [firstToy, secondToy, thirdToy] = toys;

console.log(firstToy);  // "teddy"
console.log(secondToy); // "car"
console.log(thirdToy);  // "robot"
