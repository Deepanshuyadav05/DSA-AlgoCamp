 // LEETCODE: 74
 //search in a 2D array

/*
 You are given an m x n integer matrix with the following two properties:
   -Each row is sorted in non-decreasing order.
   -The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.
You must write a solution in O(log(m * n)) time complexity.*/

 function search_In_2D_matrix(matrixArr, target){
     //optimal approach using BS

     let m = matrixArr.length                               //no. of rows
     let n = matrixArr[0].length                            //no. of cols
     //apply binary search
     let low = 0, high = m*n-1

     while(low<= high){
         let mid = Math.floor((low + high) / 2)

         //it is a formula to find the element at the mid in 2D array
         let midElement = matrixArr[Math.floor(mid/n)][Math.floor(mid%n)]

         if(midElement === target) return true
         else if(midElement >= target) high = mid-1
         else low = mid+1
     }
     return false

     
     //brute force
     /*for (let i = 0; i < matrixArr.length; i++) {
         for (let j = 0; j < matrixArr[i].length; j++) {
             if (matrixArr[i][j] === target) return true
         }
     }
     return false;*/

     //better approach using BS
   /* let rowNo = 0
     for (let row = 0; row < m; row++) {
        if(matrixArr[row][n-1] === target) return true
         else if(matrixArr[row][n-1] >= target) {
             rowNo = row
            break
         }
     }
     //now apply binary search on that row
     let m = matrixArr.length
     let n = matrixArr[0].length
     let arr = matrixArr[rowNo]
     let low = 0, high = n-1
     while (low < high){
         let mid = Math.floor((low + high) / 2)
         if(arr[mid] === target) return true
         else if(arr[mid] > target) high = mid-1
         else low = mid+1
     }
     return false*/


 }

 let matrixArr = [[1,2,3,4], [5,6,7,8], [9,10,11,12]];
 let target = 6
 console.log((search_In_2D_matrix(matrixArr, target)))
