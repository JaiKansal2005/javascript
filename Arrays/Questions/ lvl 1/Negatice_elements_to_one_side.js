function ques(arr){
   let left=0;
   
     
        for(let i=0;i<arr.length;i++){
            if(arr[i]<0){
                let temp=arr[i];
                arr[i]=arr[left];
                arr[left]=temp;
                left++;
    }
}

        
        
        return arr;
}

let arr =[-12,11,-13,-5,6,-7,5,-3,-6];
console.log(ques(arr));