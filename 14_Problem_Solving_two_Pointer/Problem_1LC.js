/*
LEETCODE-1

TWO SUM
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target.
you may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

//Method-1
//Brute force
//here time and space complexity is high
/*
function twoSum(arr, target){
    for (let i = 0; i < arr.length-1; i++){
        for (let j = i+1; j < arr.length; j++){
            if( arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }
    }
}
let arr = [2,9,13,6,8,7,5]
let target = 13
console.log(twoSum(arr, target))*/

//Method-2

//sort function to arrange array in ascending order
function sortArr(x, y){
    return x[0] - y[0]
}

function two_sum(arr, target){

    //here we convert element to an array of element value and its index to remember the index even after sorting it
    for (let i = 0; i < arr.length; i++) {

        // [2,9,13,6,8,7,5]  ==> [[2,0],[9,1],[13,2],[6,3],[8,4],[7,5],[5,6]]
        arr[i] = [arr[i], i];
    }

    //calling sort function
    arr.sort(sortArr)

    //making 2 variable start which starts from index 0 and end which start from last index
    let start = 0
    let end = arr.length - 1;

    //we run a loop until start<end we don't use <= because we don't want to get target by adding single element
    while (start < end) {

        if(arr[start][0] + arr[end][0] === target ){
            // If a match is found, return the indices as an array.
            return [arr[start][1], arr[end][1]];
        }

        /*If the current sum is greater than the target,
        move the 'end' pointer one position to the left to decrease the sum.*/
        else if(arr[start][0] + arr[end][0] > target ){
            end--
        }

        /*If the current sum is less than the target,
        move the 'start' pointer one position to the right to increase the sum.*/
        else{
            //condition: arr[start][0] + arr[end][0] < target
            start++
        }
    }
    //if no sum is found
    return null
}
let arr = [2,9,13,3,8,7,5]
let target = 13
console.log(two_sum(arr, target))
