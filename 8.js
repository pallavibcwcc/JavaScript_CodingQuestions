//iife

//An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined
//So the first thing we do is wrap our entire addTogether function in brackets,

// function sum(){
//     var x=10;
//     var y=10;
//     var res=x+y;
//     console.log(res);
// }
// sum();

//nce we’ve created an IIFE, we have no intention of calling the function again. So let’s get rid of the name:
// (
//         function sum(){
//     var x=10;
//     var y=10;
//     var res=x+y;
//     console.log(res);
// });

// we simply add a pair of brackets at the end of the function 
//but just before the semi-colon),


(
        function (){
    var x=10;
    var y=10;
    var res=x+y;
    console.log(res);
})();

//IIFE Syntax

// (function () {
   // Code to be executed
// })();