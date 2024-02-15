// 'const' is also introduced in ES6 and is used when to declare constants.
// Constants must be assigned a value when declared and cannot be reassigned.
// Scope- Like 'let', varianles declared with 'const' are also block scoped.

const x=10;
console.log(x)// 10;

if (true){
    const y=20;
}
console.log(y)// ReferenceError: y is not defined.