//create a 5x6 2D array filled with all '0'(5x6 => rows x columns)

//'arr' is the outer array of 5 elements
let arr = Array(5)
//we run a loop to fill all element space in outer array with inner array
for (let i = 0; i < 5; i++) {
    //we create inner array and store it in a variable 'innerArr'
    //and we also fill all elements of inner array with '0' using .fill
    let innerArr = Array(6).fill(0)
    arr[i] = innerArr
}
console.log(arr)