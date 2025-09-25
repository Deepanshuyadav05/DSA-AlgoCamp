//write a code to print all the elements of a 2D array row-wise
//output: 1 2 3 4 5 6 7 8 9
function rowWise(arr){
    let str ="";
    
    //no. of rows = arr.length
    for(let i=0;i<arr.length;i++){

        for(let j=0;j<arr[i].length;j++){
            str += `${arr[i][j]} `;
        }

    }
    console.log(str)
}
let arr = [[1,2,3], [4,5,6], [7,8,9]]
rowWise(arr);