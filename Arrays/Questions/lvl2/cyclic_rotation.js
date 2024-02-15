// Reversing whole array
function reverseWholeArray(arr,l){
    for(let i=0;i<arr.length/2;i++){
        let temp=arr[i];
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
// Reversing first k elements
function reverseFirstKElements(arr,k){
    for(let i=0;i<k/2;i++){
        let temp=arr[i];
        arr[i]=arr[k-1];
        arr[k-1]=temp;
    }
    return arr;
}
// Reversing elements from index k
function reverseElementsAfterK(arr,k){
    for(let i=k;i<arr.length/2;i++) { 
        let temp=arr[i];
        arr[i]=arr[arr.length-i+k-1]
        arr[arr.length-i+k-1]=temp;
    }
    return arr;
}

// Cyclically rotating the array
function cyclicRotation(arr,k){
    k%=arr.length;
    arr=reverseWholeArray(arr);
    arr=reverseFirstKElements(arr,k)
    arr=reverseElementsAfterK(arr,k)
    return arr;
}
// Implementation
let arr=[1, 2, 3, 4, 5];
console.log(cyclicRotation(arr,77));