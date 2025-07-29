// MapVs forEach

// 1.definition
// syntax

// 2.Returing values

// let array1=[1,2,3,4,5];

// result = array1.forEach((ele)=>{
// return ele*ele;
// })
// console.log(result);
// //modify the original array

// let array2=[1,2,3,4,5];

// result =array2.map((element)=>{
//     return element*element;
// })
// console.log(result);
// //not modify the original array
// return new array


// 3.chaining of Methods

// let array=[2,3,4,5];
// console.log(array.map(x=>x*x).reverse());

// 4.perfprmace Check
let array=[2,3,4,5];
console.time(array.map(x=>x*x)*100);