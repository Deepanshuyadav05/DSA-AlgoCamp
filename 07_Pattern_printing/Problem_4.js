//print a inverted half pyramid

/*
Method-1
let n = 5
for (let row = 1; row <= n; row++) {
    let str = ""
    for (let col = 1; row+col <= n+1; col++) {
        str += "*"
    }
    console.log(str)
}*/

// Method-2
let n = 5
for (let row = 1; row <= n; row++) {
    let str = ""
    for (let col = 1; col <= n - row + 1; col++) {
        str += "*"
    }
    console.log(str)
}