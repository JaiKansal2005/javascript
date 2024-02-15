//Applies a function against an accumulator and each element in the array to reduce it to a single value.

function first_last(arr){
    return arr[0]+arr[arr.length-1];
}

let arr=[1,2,3,4];
console.log(arr.reduce(first_last));