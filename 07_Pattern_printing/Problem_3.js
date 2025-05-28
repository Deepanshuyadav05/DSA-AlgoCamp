//WAP to print left half pyramid

/*
Method-1
let n = 4
for (let col = 1; col <= n; col++){
    let stars = ""
    for (let row = 1; row <= n; row++){
        if (row <= n-col){
            stars += " "
        }
        else{
            stars += "*"
        }
    }
    console.log(stars)
}*/

/*
Method-2
let n = 10
for (let col = 1; col <= n; col++){
    let stars = ""
    for (let row = 1; row <= n; row++){
        if (row+col >= n+1){
            stars += "*"
        }
        else{
            stars += " "
        }
    }
    console.log(stars)
}*/

// Method-3
let n = 5
for (let row = 1; row <= n; row++) {
    //inside this loop of row, we will do the task for each row
    //eg: n = 4, row = 3, " ***" -> this string will be printed for this
    //so let's build the spaces first
    let space = n-row;
    let str = ""
    //loop using which we will concatenate (n-row) spaces
    for (let j = 1; j<= space; j++) {
        str += " "
    }

    //after the above loop ends, will be having (n-row) spaces
    //eg: n= 4, row = 3, str = "   "
    let stars = row
    //loop to concatenate stars
    for (let col = 1; col <= stars; col++){
        str += "*"
    }
    //after the end of above loop we have both spaces and stars in the string
    console.log(str)
}
