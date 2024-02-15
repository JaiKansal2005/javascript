// Creates a new array with elements that pass a certain condition.

function perfectSquare(x,y){
    if(x>=0)
    return x=parseInt(y*y);
}
let arr = [10, 25, 36, 49,-36];
console.log(arr.filter(perfectSquare));// [ 25, 36, 49 ]