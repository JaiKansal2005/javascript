function asc(arr){
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

let arr=[0, 1, 2, 0, 1, 2];
console.log(asc(arr)); // [0, 0, 1, 1, 2, 2]