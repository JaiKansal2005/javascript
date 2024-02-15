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

// function commonElements(arr1,arr2,arr3){
//     arr1=sorting(arr1);
//     arr2=sorting(arr2);
//     arr3=sorting(arr3);
//     let commonElementArray=[];
//         for(let i=0;i<arr1.length;i++){
//             for(let j=0;j<arr2.length;j++){
//                 for(let k=0;k<arr3.length;k++){
//                     if(arr1[i]==arr2[j]&&arr2[j]==arr3[k] && !commonElementArray.includes(arr1[i])){
//                         commonElementArray.push(arr1[i])
//                     }
//                 }
//             }
//         }
//         return commonElementArray;
// }


function commonElements(arr1,arr2,arr3){
    arr1=sorting(arr1);
    arr2=sorting(arr2);
    arr3=sorting(arr3);
    let combinedArray=[];
    let commonElementArray=[];
    let num;
        combinedArray.push(...arr1,...arr2,...arr3);
        sorting(combinedArray);

        for(let i=0; i<combinedArray.length;i++){
            if(combinedArray[i]==combinedArray[i+1] && !commonElementArray.includes(combinedArray[i])){
                commonElementArray.push(combinedArray[i]);
            }
        }
        
        
       
        return commonElementArray;
}
let arr1=[1, 5, 10, 20, 40, 80];
let arr2=[6, 7, 20, 80, 100];
let arr3=[3, 4, 15, 20, 30, 70, 80, 120];
console.log(commonElements(arr1,arr2,arr3));