
function subArrays(arr){
    let count=0;
    let tempArr=arr;
    let sum =0;
    while(tempArr.length>1){
    for(let i=0;i<tempArr.length;i++){
        sum+=tempArr[i];
        if(sum==(i+1)/2){
            count++;
            console.log(tempArr.slice(0,i+1));
        }
    }
    tempArr.shift();
    sum=0;
}
return count;
}

let arr=[1, 0, 0,1,1 ];
console.log(subArrays(arr));