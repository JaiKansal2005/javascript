// Program to sort the array in ascending order

// function ascending(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }}
//     }
//     return arr;
// }

// let arr=[2,4,1,5,3,6];
// console.log(ascending(arr));


// better way

function asc(Arr){
    let swapped;
    do{swapped=false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            swapped=true;
        }
    }
}while(swapped);// loop will continue till swapped==true;
return arr
}

let arr=[2,4,1,5,3,6];
console.log(asc(arr));
