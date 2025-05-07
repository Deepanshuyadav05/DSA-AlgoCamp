//Given the 3 side length of a triangle in the form of 3 integer. check if the triangle is equilateral, scalene or isosceles

let a = 8;
let b = 12;
let c = 8;

if (a === b && b === c && a === c) {
    console.log("it is a equilateral triangle")
}
else if (a !== b && b !== c && a !== c) {
    console.log("it is a scalene triangle")
}
else if (((a === b) !== c) && ((b === c) !== a) && ((c === a) !== b) ){
    console.log("it is a isosceles  triangle")
}
else{
    console.log("its not a equilateral, scalene or isosceles triangle")
}