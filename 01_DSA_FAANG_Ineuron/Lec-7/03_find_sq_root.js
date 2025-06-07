//return the square root of 'x', where x is a +ve integer, calculate floor value
//eg: x = 4, output = 2

//optimal approach using Binary search

function find_sq_root(x){
    let low = 1, high = x
    let ans = 0
    while(low <= high){
            let mid =Math.floor(low+high)/2;

            if(mid*mid === x) return ans = mid
            else if(mid*mid < x) {
                ans = mid
                low = mid+1
            }
            else high = mid - 1

    }
    return ans
}

console.log(find_sq_root(8))