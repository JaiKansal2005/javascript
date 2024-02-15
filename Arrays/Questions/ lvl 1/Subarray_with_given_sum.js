/*Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
Output: Sum found between indexes 2 and 4
Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33 */

function subrarray(arr,sum){
       let start = 0;
       let count=0;
       let temp_arr=arr;
       for(let i=0;i<arr.length;i++){
           start+=arr[i];
            while(start>sum && count<i){
                start-=arr[count];
                count++;
            }
            if(start==sum){
                return  `Sum found between indexes ${count} and ${i}`;
            }
       }
       
       return null;
}

let arr=[1, 4, 20, 4, 10, 5];
console.log(subrarray(arr,33));