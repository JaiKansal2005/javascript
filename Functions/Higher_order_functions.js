// Higher-order functions are functions that operate on other functions by taking them as arguments or returning them as results. They enable functional programming paradigms such as map, filter, and reduce.

// Higher-order function taking a callback function as an argument
function performOperation(operation, a, b) {
    return operation(a, b);
}

// Callback function passed to performOperation
function add(a, b) {
    return a + b;
}

let result = performOperation(add, 5, 3); // 8
console.log(result);