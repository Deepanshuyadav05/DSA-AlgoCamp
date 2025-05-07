//Given 3 integer a,b and c check if we can form a triangle with sides of the triangle having length a,b and c
let a = 2;
let b = 7;
let c = 5;

if (a+b > c && b+c > a && a+c > b) {
    console.log("a,b and c can form a triangle")
}
else{
    console.log("a,b and c cannot form a triangle")
}