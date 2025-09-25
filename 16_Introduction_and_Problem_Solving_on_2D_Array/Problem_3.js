//given a 2d array print it in a column wave form
//output: 1 4 7 8 5 2 3 6 9
function columnWave(arr){
    let str = ""
    for (let j = 0; j < arr.length; j++) {
       if(j%2 === 0){
           for(let i=0;i<arr[j].length;i++){
               str += `${arr[i][j]} `;
           }
       }
       else{
           for(let i=arr.length-1 ;i>= 0 ;i--){
               str += `${arr[i][j]} `;
           }
       }
    }
    console.log(str)
}
let arr = [[1,2,3], [4,5,6], [7,8,9]]
columnWave(arr);

