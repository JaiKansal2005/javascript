function pairs(arr,k){
    let numberOfPairs=0;
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]+arr[j]==k){
                    numberOfPairs++;
                }
            }
        }
        return  numberOfPairs; 
}

let arr=[10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];
console.log(pairs(arr,11)); 