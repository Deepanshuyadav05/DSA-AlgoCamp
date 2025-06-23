/*given an array which only contains 0 and 1. the data is shuffled randomly
write a function that can rearrange the data such that all the '0' are present before all '1'
eg: arr = [1,0,0,1,1,1,0,1,0,0,1]
output = [0,0,0,0,0,1,1,1,1,1,1]
condition => Do the rearrangement by reading/traversing the array only once, don't create new array*/

//we create a function to swap the values of low and high
function swap(arr,low,high){
    let temp = arr[low];
    arr[low] = arr[high]
    arr[high] = temp
}


function separate(arr){

    //before 'low' everything is 0 and 'low' starts from index 0
    let low = 0;

    //after 'high' everything is 1 and 'high' starts from last index
    let high = arr.length - 1;

    //we run a while loop until low <= high
    while (low <= high){

        //if value at 'low' index is 1 then we replace it by high no matter what is present at high
        //and decrease the high by 1
        if(arr[low] === 1){

            //swap low and high
            swap(arr,low,high)

            high--
        }
        //here the condition is "arr[low] === 0"
        //here if low === 0 then we simply increase low by 1
        else{
            low++
        }
    }
    console.log(arr)
}

let arr = [1,0,0,1,1,1,0,1,0,0,1]
separate(arr)