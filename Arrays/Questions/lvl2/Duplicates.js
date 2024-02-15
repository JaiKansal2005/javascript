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



function duplicates(arr){
    arr=sorting(arr);
    let duplicateArray=[];
   
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]==arr[i+1] && !duplicateArray.includes(arr[i])){
                duplicateArray.push(arr[i]);
                
            }
        }
    
    return duplicateArray;
    }

    let arr=[1, 2,2, 3, 6, 3, 6, 1];
    console.log(duplicates(arr));