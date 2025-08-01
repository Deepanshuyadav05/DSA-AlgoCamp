//Leetcode: 344
//Reverse a given array
//condition => don't use internal function and don't create a new array

//here we write a function to swap low and high values
function swap(arr, low, high){
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
}

function reverseArray(arr) {
    //here we take a variable low which starts from index 0 and variable high which starts from last index
    let low = 0;
    let high = arr.length - 1;

    //here we run a while loop until all the values are swapped
    while (low < high) {
        // here we swap the values
        swap(arr,low,high)
        //now after swapping we increase low by 1 and decrease high by 1
        low++
        high--

    }
    console.log(arr)
}
let arr = [5, 9, 1, 8, 2, 3]
reverseArray(arr)