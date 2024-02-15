// Var is the original keyword used for variable declaration in javascript.
// Varianle declaered with 'var' is function - scoped or gloabally scoped
// Scope- Variables declared with 'var' are function scoped, meaning they are accessible within the function they are declared in 

var x= 10;
console.log(x);// 10

function myFunction(){
    var y=20;
}
console.log(y); // ReferenceError: y is not defined