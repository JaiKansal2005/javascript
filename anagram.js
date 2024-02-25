/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!=str2.length){
    return false;
  }
  let arr1=[];
  let arr2=[];
  for(let i=0;i<str1.length;i++){
    arr1[i]=str1[i];
    arr2[i]=str2[i];
  }
 
  let count=0;
  for(let i=0;i<str1.length;i++){
    for(let j=0;j<str2.length;j++){
      if(arr1[i]==arr2[j]){
        count++;
        arr2.splice(j,1);
      }
    }
  }
  if(count==str1.length){
    return true;
  }
  else{return false;}
}

module.exports = isAnagram;
console.log(isAnagram("cinemato","iceman"));
