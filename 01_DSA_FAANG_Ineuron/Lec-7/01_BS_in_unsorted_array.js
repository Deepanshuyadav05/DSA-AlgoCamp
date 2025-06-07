//you are given a unsorted array of integer but there are many/some "Infinity"
//after all the integer's find the lower bound of "Infinity

function lowerBound(arr) {
    let low = 0, high = arr.length - 1;
    let ans = 0
    while (low <= high) {
        let mid = low + Math.floor((high-low)/2)
        if(arr[mid] === Infinity){
            //if we found Infinity store index of mid in ans and move to left half
            ans = mid
            high = mid-1

        }
        else{
            //if mid === Infinity
            low = mid+1
        }
    }
    return ans
}

let arr = [1,5,2,8,39,23,50,Infinity, Infinity,Infinity,Infinity,Infinity];
console.log(lowerBound(arr));