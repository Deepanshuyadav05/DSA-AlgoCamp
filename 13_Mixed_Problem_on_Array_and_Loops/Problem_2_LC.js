/*
LEETCODE-448
Given an array nums of n integers where nums[i] is in the range [1, n],
return an array of all the integers in the range [1, n] that do not appear in nums.
*/

function findDisappeared(nums) {
    /*// First loop: Marking elements that are present
    for (let i = 0; i < nums.length; i++) {

        // Get the absolute value of the current element
        let indValue = Math.abs(nums[i]);

        // Convert it into an index (1-based index converted to 0-based)
        let idx = indValue - 1;

        // If the number at index 'idx' is positive, mark it as visited by making it negative
        if (nums[idx] > 0) {
            nums[idx] *= -1;
        }
    }

    let result = [];

    // Second loop: Identifying missing numbers
    for (let i = 0; i < nums.length; i++) {
        // If the value at index 'i' is still positive, it means 'i+1' was never marked (i.e., missing)
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    // Return the list of missing numbers
    return result;*/

    //Method-2
    //Using Cyclic sort
    let n = nums.length;
    for(let i = 0; i<n; i++){
        while(nums[i] !== nums[nums[i]-1]){
            //swap
            let targetIdx = nums[i]-1;
            [nums[i], nums[targetIdx]] = [nums[targetIdx], nums[i]];
        }
    }
    console.log(nums)
    const missing = []
    for(let i = 0; i<n; i++){
        if(nums[i] !== i+1){
            missing.push(i+1)
        }
    }
    return missing
}

let nums = [4,3,2,7,8,2,3,1];
console.log(findDisappeared(nums)); // Output: [5, 6]
