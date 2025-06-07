//check if the x is perfect square or not
//eg: x = 4, output = true

//optimal approach using Binary search

function find_sq_root(x){
    let low = 1, high = x
    let ans = 0
    while(low <= high){
        let mid =Math.floor((low+high)/2);

        if(mid*mid === x) return true
        else if(mid*mid < x) {
            low = mid+1
        }
        else high = mid - 1

    }
    return false
}

console.log(find_sq_root(36))