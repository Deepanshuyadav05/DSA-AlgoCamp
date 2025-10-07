//LEETCODE:54
//Given an m x n matrix, return all elements of the matrix in spiral order.

function spiralMatrix(matrix){
    let m = matrix.length;         //no. of rows
    let n = matrix[0].length;      //no. of cols
    let startRow = 0
    let startCol = 0;
    let lastRow = matrix.length - 1;     //we do -1 for 0 base indexing
    let lastCol = matrix[0].length - 1;  //we do -1 for 0 base indexing
    let count = 0; //how many elements from the matrix ar inserted/eliminated
    let result = [];  //to return the result

    while(count < n*m){     //as total no. of elements in matrix are n*m that's why we use this condition here
        //eliminate startRow
        for( let x = startCol; x <= lastCol; x++){
            result.push(matrix[startRow][x]);
            count++;  //because we added a new element
        }
        startRow += 1   //because we are done with row
        if(count === n*m) break;

        //eliminate lastCol
        for( let x = startRow; x <= lastRow; x++){
            result.push(matrix[x][lastCol]);
            count++;  //because we added a new element
        }
        lastCol -= 1   //because we are done with col
        if(count === n*m) break;

        //eliminate lastRow
        for( let x = lastCol; x >= startCol; x--){
            result.push(matrix[lastRow][x]);
            count++;  //because we added a new element
        }
        lastRow -= 1   //because we are done with row
        if(count === n*m) break;

        //eliminate startCol
        for( let x = lastRow; x >= startRow; x--){
            result.push(matrix[x][startCol]);
            count++;  //because we added a new element
        }
        startCol += 1   //because we are done with row
        if(count === n*m) break;

    }
    console.log(result)
}
let matrix = [[1,2,3,4], [5,6,7,8], [9,10,11,12]];
spiralMatrix(matrix);