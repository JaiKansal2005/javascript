// Sorting the array in ascending order
function sorting(arr){
    let isSwapped;
        do{
            isSwapped=false;
                for(let i=0;i<arr.length-1;i++){
                    if(arr[i]>arr[i+1]){
                        let temp=arr[i];
                        arr[i]=arr[i+1];
                        arr[i+1]=temp;
                        isSwapped=true;
                    }
                }
        }  while(isSwapped);    
        return arr;
}
// Finding missing inegers in the array
function findMissingInteger(arr){
    arr=sorting(arr);
    let missingIntegers=[];
        for(let i=0;i<arr.length-1;i++){
            if(arr[i+1]!=arr[i]+1 && arr[i+1]!=arr[i]){
                // Solving the case where there might be multiple missing integers between two consecutive elements
                for(let j=1;j<=arr[i+1]-arr[i]-1;j++){
                    missingIntegers.push(arr[i]+j);

                }
            }
        
        }
    return missingIntegers;
}

// Example
let arr=[1, 2, 6, 3, 7, 8];
console.log(findMissingInteger(arr));