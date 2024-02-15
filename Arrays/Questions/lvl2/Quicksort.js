function quickSort(arr){
   if(arr.length<=1){
    return arr;
   }

   let pivotIndex=(arr.length/2)|0;
   let pivot=arr[pivotIndex];
   let left=[];
   let right=[];
    for(let i=0;i<arr.length;i++){
        if(i!==pivotIndex){
            if(arr[i]<pivot){
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}

let arr=[6,3,10,9,5,2,8];
console.log(quickSort(arr));