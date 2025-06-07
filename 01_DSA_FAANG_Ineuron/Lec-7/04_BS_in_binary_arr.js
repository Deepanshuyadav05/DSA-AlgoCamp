//you are given a binary array of 0 and 1 in sorted order. calculate the lower bound of 1

function find_lowerBound(array){
    let low = 0, high = array.length-1

    let ans = 0
    while(low <= high){
        let mid =Math.floor((low+high)/2);
        if(array[mid] === 1) {
            ans = mid
            high = mid-1
        }
        else if(array[mid] < 1) {
            low = mid+1
        }
    }
    return ans
}

let array = [0,0,0,0,1,1,1,1,1,1,1]
console.log(find_lowerBound(array))