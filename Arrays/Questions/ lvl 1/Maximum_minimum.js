// const prompt=require('prompt-sync')();

function Maximum(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;
}

arr=[1,2,4,3];
Maximum(arr);

function Minimum(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}

function max_min(arr){
   let max=Maximum(arr); 
   let min= Minimum(arr);
   return {max,min};
}

arr1=[1,2,4,3,,-3,5,-2];
console.log(max_min(arr1));

