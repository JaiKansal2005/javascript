// Executes a provided function once for each array element.
// syntax - arrayName.forEach(Function)

function square(x){
    console.log(x*x);
}

let arr=[1,2,3];

arr.forEach(square);  // Output: 1 4 9