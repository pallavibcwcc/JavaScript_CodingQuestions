//closure
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)

function GetName(){
   var name="Pallavi"
    function DisplayName(){
        console.log(name);
    }
 DisplayName();
}
// const res = GetName();
console.log(GetName());