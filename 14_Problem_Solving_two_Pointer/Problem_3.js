//Given an array arranged in ascending order and a target value, find the total numbers that sum up to the target value

function sum(arr, target) {
    let start = 0;  // Pointer at the beginning of the array
    let end = arr.length - 1; // Pointer at the end of the array
    let pair_count = 0; // Counter to store the number of valid pairs

    while (start < end) {
        if (arr[start] + arr[end] > target) {
            // If the sum is greater than the target, move the 'end' pointer left to reduce the sum
            end--;
        } else if (arr[start] + arr[end] < target) {
            // If the sum is less than the target, move the 'start' pointer right to increase the sum
            start++;
        } else {
            // If the sum matches the target
            if (arr[start] === arr[end]) {
                // If both pointers point to the same element (same number repeating)
                let freq = end - start + 1; // Count occurrences of the number
                // Calculate the number of ways to pick two numbers from 'freq' occurrences
                pair_count += Math.floor((freq * (freq - 1)) / 2);
                return pair_count; // Return result as no further pairs are possible
            } else {
                // If different numbers are forming the target sum
                let freq_x = 0, freq_y = 0; // To store frequency of arr[start] and arr[end]

                // Count frequency of arr[start]
                let temp_start = arr[start];
                while (temp_start === arr[start]) {
                    start++;
                    freq_x++;
                }

                // Count frequency of arr[end]
                let temp_end = arr[end];
                while (temp_end === arr[end]) {
                    end--;
                    freq_y++;
                }

                // Multiply frequencies to get the count of valid pairs
                pair_count += (freq_x * freq_y);
            }
        }
    }
    return pair_count; // Return the final count of valid pairs
}

let arr = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6];
let target = 8;
console.log(sum(arr, target)); // Output: Count of valid pairs
