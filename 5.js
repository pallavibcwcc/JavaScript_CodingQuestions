//reverse string
let str="hello";

function Reversestring(str){
    let val="";
    for(let i=str.length-1;i>=0;i--){
        val=val+str[i];
    }
    return val;
}
console.log(Reversestring(str));
