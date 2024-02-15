// 'let' is a new keyword introduced in ES6 for variable declaration.
// Vaperiables declared with 'let' are blocked scoped.
// Sco- Variables declared with 'let' are blocked scoped, meaning they are accessible only within the block they are declared in

let x=10;
console.log(x);// 10

if(true){
   let y=20;
}

console.log(y)// ReferenceError: y is not defined