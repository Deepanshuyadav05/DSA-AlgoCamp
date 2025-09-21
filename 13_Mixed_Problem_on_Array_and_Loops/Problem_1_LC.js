//LEETCODE 485
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

function maxConsecutive(arr){
    //we take two variable maxOneCount and currentOneCount
    //currentOneCount keep the track of current consecutive one
    //and if any 0 comes then we assign its value to maxCount after checking which one is bigger
    let maxOneCount = 0;
    let currentOneCount = 0;
    let i = 0
    while (i < arr.length){
        //if we hit 1 in array then we increase currentOneCount and i
        if(arr[i] === 1){
            currentOneCount++;
            i++
        }
        //if we hit 0 then we check which is bigger currentOneCount or maxOneCount
        //if maxOneCount is bigger then we keep it as it is
        //but if currentOneCount is bigger then we assign its value to maxOneCount
        //and again start currentOneCount from 0 for upcoming 1s
        else{
            if(currentOneCount > maxOneCount){
                maxOneCount = currentOneCount
            }
            currentOneCount = 0;
            i++
        }
    }
    //but if the array ends with a maxOneCount or if all elements are 1s (when the array end's with 1),
    //for that case we check max from maxOneCount and currentOneCount
    if(maxOneCount > currentOneCount){
        console.log(maxOneCount)
    }
    else{
        console.log(currentOneCount)
    }
}
let arr = [1,1,0,1,1,1]
maxConsecutive(arr)

//Method-2 
//using Math.max
/*
function maxConsecutive(arr) {
    let maxOneCount = 0;
    let currentOneCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentOneCount++;
        } else {
            maxOneCount = Math.max(maxOneCount, currentOneCount);
            currentOneCount = 0;
        }
    }

    // Final comparison to account for cases where the longest sequence is at the end
    maxOneCount = Math.max(maxOneCount, currentOneCount);

    console.log(maxOneCount);
}

// Example Test Case
let arr = [1, 1, 0, 1, 1, 1];
maxConsecutive(arr);
*/

// Method-3
/*Sliding window method (less optimized than above one)
let l = 0,r=0
while(r < arr.length){
    if(arr[r] === 1){
        r++
    }
    else{
        maxOneCount = Math.max(maxOneCount, r-l)
        r++
        l = r
    }
}
maxOneCount = Math.max(maxOneCount, r - l);
console.log(maxOneCount)*/
