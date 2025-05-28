//Print a pyramid pattern
//this pattern is similar to Pattern we made in problem_3 the only difference is we change the condition of inner loop 2 from col <= row to col <= 2*row-1 as we have to print full pyramid

let n = 5
for (let row = 1; row <= n; row++) {
    //so let's build the spaces first
    let space = n-row;
    let str = ""
    //loop using which we will concatenate (n-row) spaces
    for (let j = 1; j<= space; j++) {
        str += " "
    }

    //after the above loop ends, will be having (n-row) spaces

    let stars = ((2*row) - 1)
    //loop to concatenate stars
    for (let col = 1; col <= stars; col++){
        str += "*"
    }
    console.log(str)
}
