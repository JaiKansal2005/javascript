// Firstly sorting the array in ascending order

function ascending(arr) {
    let swapped;
        do{
            swapped=false;
                for(let i=0;i<arr.length-1;i++){
                    if(arr[i]>arr[i+1]){
                        let temp=arr[i];
                        arr[i]=arr[i+1];
                        arr[i+1]=temp;
                        swapped=true;
                    }
                }
        }  while(swapped);    
        return arr;
}

function Kth_largest_and_Kth_smallest(arr,k){
     arr=ascending(arr)
    let Kth_largest_element=arr[arr.length - k];
    let Kth_smallest_element=arr[k-1];
    return {Kth_largest_element,Kth_smallest_element};
}

let arr= [10, 3, 8, 1, 6, 7];
console.log(ascending(arr));
console.log(Kth_largest_and_Kth_smallest(arr,2));