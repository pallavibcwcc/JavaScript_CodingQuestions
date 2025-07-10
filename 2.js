//fibonnaci
//0 1 2 3 5 8
function fibonnaci(n){
    if(n<=1){
        return n;
    }else{
        return fibonnaci(n-1)+fibonnaci(n-2);
    }
}
console.log(fibonnaci(3));