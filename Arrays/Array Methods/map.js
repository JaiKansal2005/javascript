//Creates a new array by applying a function to each element of the original array.

function uppercase(str){
    return str.toUpperCase();
}

let arr=["s","as"];
console.log(arr.map(uppercase)); // [ 'S', 'AS' ]