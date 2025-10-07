//given two, 2-d array a and b where the 'a' has dimension (m*n) and 'b' has (n*k). multiply both the 2-d arrays

function multiplyMatrix(a, m, n, b, n, k){
    let result = Array(m)
    for (let i = 0; i < m; i++) {
        result[i] = Array(k).fill(0)
    }

    //iterate over every cell of result
    for (let i = 0; i < m; i++) {
        //for each new row to every col of result
        for (let j = 0; j < k; j++) {
            // ith row of 'a' has n elements, jth col of 'b' has n elements
            for(let x = 0; x < n; x++) {
                result[i][j] += a[i][x] * b[x][j]
            }
        }
    }
    console.log(result)
}
let a = [[1,1], [2,2], [3,3]]
let b = [[1,1,1], [2,2,2]]
let n = a[0].length
let m = a.length
let k = b[0].length

multiplyMatrix(a,m,n,b,n,k)
