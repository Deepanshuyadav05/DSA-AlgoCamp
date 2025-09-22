/*
LEETCODE-167
Two Sum-2
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
find two numbers such that they add up to a specific target number.
Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.
*/

//Caution: here we can't use brute force as it will exceed the time limit


//It is similar to two_sum problem just here we get sorted array already
function two_sum_2(arr, target){
    let start = 0
    let end = arr.length-1;
    while (start < end) {
        if(arr[start] + arr[end] === target ){
            return [start, end];
        }
        else if(arr[start] + arr[end] > target ){
            end--
        }
        else{
            //condition: arr[start] + arr[end] < target
            start++
        }
    }
}
let arr = [2,3,5,7,8,10,13]
let target = 13
console.log(two_sum_2(arr, target))