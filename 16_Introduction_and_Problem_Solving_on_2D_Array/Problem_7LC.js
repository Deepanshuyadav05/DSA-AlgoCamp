//LEETCODE:566
/*
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted to be reshaped matrix.
The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
*/

function reshapeMatrix(matrix ,m ,n ,r ,c){
    let reshapedMatrix = Array(r)
    for (let i = 0; i < r; i++) {
        reshapedMatrix[i] = Array(c).fill(0)
    }

    if( m*n !== r*c) return matrix

    let row = 0;
    let col = 0;

    for(let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            reshapedMatrix[row][col] = matrix[i][j]
            col++
            if( col === c){
                row++
                col = 0
            }
        }
    }
    console.log(reshapedMatrix)
}

let matrix = [[1,2],[3,4]]
let r = 1
let c = 4
let m = 2; n = 2
reshapeMatrix(matrix, m, n, r, c)

let arr = [1,2,3]
let arr2 = arr
console.log(arr2)
arr2[0] = 0
console.log(arr)