/*
given 3 numbers a,b and c which represent coefficient of a quadratic equation
a*x^2 + b*x + c
find roots of the quadratic equation
(assume real roots b^2 > 4ac)
Formula for real roots is => (-b + sqrt(b^2 - 4ac)) / 2a   &   (-b - sqrt(b^2 - 4ac)) / 2a
*/

function quadraticEquation(a,b,c){
    let sqrtValue = Math.sqrt(b*b- 4*a*c);
    let root1 = (-b + sqrtValue) / (2*a);
    let root2 = (-b - sqrtValue) / (2*a);

    console.log(root1 ,root2);
}

quadraticEquation(2,5,3);