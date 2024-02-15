// Firstly sorting the arrays

function sorting(arr){
    let sorted;
    do{
        sorted=false;
            for(let i=0;i<arr.length-1;i++){
                if(arr[i]>arr[i+1]){
                    let temp=arr[i];
                    arr[i]=arr[i+1];
                    arr[i+1]=temp;
                    sorted=true;
                }
            }
    } while(sorted);
    return arr;
}

// Funtion for intersection of arrays

function findintersection(arr1,arr2){
    arr1 = sorting(arr1);
    arr2 = sorting(arr2);
    let intersection=[];
    
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                intersection.push(arr1[i]);
                            
            }
        }
    }
    return intersection;
}

let arr1=[1, 3, 4, 5, 7];
let arr2=[2, 3, 5, 6];
console.log(findintersection(arr1,arr2));

function findUnion(arr1,arr2){
    arr1 = sorting(arr1);
    arr2 = sorting(arr2);
    
    let union=[...arr1];
    for(let elements of arr2){
        if(!union.includes(elements)){
            union.push(elements);
        }
    }



    

return union;}

console.log(findUnion(arr1,arr2));