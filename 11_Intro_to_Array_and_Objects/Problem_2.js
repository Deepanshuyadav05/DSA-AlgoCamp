/*given an array which only contains 0, 1 and 2. the data is shuffled randomly
 write a function that can rearrange the data such that first all 0 then all 1 and then all 2
eg: arr = [1,2,0,1,1,2,0,1,0,2,2]
output = [0,0,0,1,1,1,1,2,2,2,2]
condition => Do the rearrangement by reading/traversing the array only once, don't create a new array*!*/

//HERE WE USE DNF (Dutch national flag) ALGORITHM TO SOLVE THIS QUESTION
function sort(arr){
    //before 'low' everything is 0 and 'low' starts from index 0
    let low = 0

    //mid represents the current element
    //everything between low and high will be 1
    let mid = 0

    //after 'high' everything is 2 and 'high' starts from the last index
    let high = arr.length-1

    while(mid <= high){
        if( arr[mid] === 0 ){
            //here we use array destructuring to swap values
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++
            mid++
        }
        else if (arr[mid] === 1){
            mid++
        }
        else{
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--
        }
    }
    console.log(arr)

    // Brute force(using bubble sort)
    /*function sortTrinaryArray(arr) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[i] > arr[j]) {
                    // Swap arr[i] and arr[j]
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    let arr = [2, 1, 0, 2, 1, 0, 1, 2, 0];
    console.log(sortTrinaryArray(arr)); // Output: [0,0,0,1,1,1,2,2,2]
*/
}
let arr = [1,0,1,2,1]
sort(arr)



