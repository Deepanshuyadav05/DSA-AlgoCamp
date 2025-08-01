/*
LEETCODE-88
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function but instead be stored inside the array nums1.
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.
nums2 has a length of n.
*/

function mergeSortedArray(num1, m, num2, n){
    //to specify the length of an array we can do it like this and to fill it with some random value we can use .fill function
    let result = Array(m+n).fill(0)
    console.log(result)
    let i = 0;    //iterates on num1
    let j = 0;    //iterates on num2
    let k = 0;    //iterates on result

    //this loop will terminate if any one of the array exhausts
    while (i < m && j < n) {
        //if 'num1[i] < num2[j]' then we add num1[i] to result array and increment i and k
        if( num1[i] < num2[j]){
            result[k] = num1[i]
            k++;
            i++;
        }
        else{
            //if 'num1[i] > num2[j]' then we add num1[j] to result array and increment j and k
            result[k] = num2[j]
            k++;
            j++;
        }
    }
    //the below loop runs if num1 still got some element left
    while( i<m){
        result[k] = num1[i]
        k++;
        i++;
    }
    //the below loop runs if num2 still got some element left
    while( j<n){
        result[k] = num1[j]
        k++;
        j++;
    }
    /*
    on leetcode we cant do like this that is a strict platform
    num1 = result
    console.log(num1)
    */
    for (let x = 0; x < result.length; x++) {
        num1[x] = result[x]
    }
    console.log(num1)


//In-place solution
/*    var merge = function(nums1, m, nums2, n) {
        let i = m - 1;           // Pointer for end of initialized part of nums1
        let j = n - 1;           // Pointer for end of nums2
        let k = m + n - 1;       // Pointer for end of merged array (nums1)

        // Merge from the back
        while (j >= 0) {
        // Once i < 0, all initialized elements from nums1 have already been placed.
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[k] = nums1[i];
                i--;
            } else {
                nums1[k] = nums2[j];
                j--;
            }
            k--;
        }
        // nums1 is modified in-place, no return needed
    };*/



//Brute force
/*function mergeSortedArray(num1, m, num2, n) {
    for(let i = m; i<m+n; i++){
        num1[i] = num2[i-m]
    }
    for(let i = 0; i<m+n; i++){
        for(let j = i+1; j<m+n; j++){
            if(num1[i] > num1[j]){
                let temp = num1[i]
                num1[i] = num1[j]
                num1[j] = temp
            }
        }
    }
    console.log(num1)*/
}

let num1 = [1,3,4,8,9]
let m = 5
let num2 = [0,3,5]
let n = 3
mergeSortedArray(num1, m, num2, n)