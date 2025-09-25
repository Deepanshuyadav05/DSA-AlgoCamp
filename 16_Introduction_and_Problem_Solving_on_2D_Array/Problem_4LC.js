//LEETCODE:867
//Given a 2D integer array matrix, return the transpose of matrix.
// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.


//Method-1
//here matrix can be of any type square or rectangle
function transposeMatrix(matrix) {
    // Create an array to hold the transposed matrix with dimensions swapped
    let result = Array(matrix[0].length);


    // Initialize each row in the result array
    for (let i = 0; i < matrix[0].length; i++) {
        let arr = Array(matrix.length); // Each row in the transposed matrix has the same number of elements as the original matrix's row count
        result[i] = arr;
    }

    // Iterate through the original matrix to swap rows with columns
    for (let row = 0; row < matrix[0].length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            result[row][col] = matrix[col][row]; // Swap elements to transpose
        }
    }

    // Print the transposed matrix
    console.log(result);
}

// Define a sample matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

// Call the function with the sample matrix
transposeMatrix(matrix);

//Method 2
//if it is square matrix

/*
function transposeMatrix(matrix){
    for (let row = 0; row < matrix.length; row++) {
        for (let col = row; col < matrix[row].length; col++) {
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp
        }
    }
    console.log(matrix)
}
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
transposeMatrix(matrix);*/


