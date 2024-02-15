function occurance(arr,x){
    let count = 0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==x){
                count++;
            }
        }
        console.log("The number of times "+x+" is repeated is= "+count);
}

let arr=[1, 1, 2, 2, 2, 2, 3];
occurance(arr,2);