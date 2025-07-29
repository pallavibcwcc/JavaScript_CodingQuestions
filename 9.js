//counting the duplicates

const array = [1, 2, 3, 2, 3, 4, 3, 2, 1, 2, 3, 4, 2, 1, 2, 3, 4];
// let countval={};
// array.forEach(val=>countval[val]=(countval[val]||0)+1);
// console.log("Element count",countval);

elementcount = array.reduce((i, val) => (i[val] = (i[val] || 0) + 1, i), {});
console.log("Element count", elementcount);
