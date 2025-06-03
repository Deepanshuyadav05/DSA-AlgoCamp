/*Given two numbers a,b find the greatest common divisor(gcd)
or we can say highest common factor(hcf) of a&b
(for best time complexity use Euclid algorithm we have used in Problem_2
*/

// Method-1
function findHCF(a,b){

    //first we create a variable to store the answer
    let hcf = ""

    //then we run a loop from i=1 to the min number out of a&b
    //as let a=5 and b=8, and we run loop then we know that no number can divide 'a' which is greater than 'a'
    //and increase the i every time
    for (let i = 1; i <= Math.min(a,b); i++){

        // here we check for the condition to find the HCF/GCD
        if( a % i === 0 && b % i === 0 ){

            //if the condition satisfy then we enter the 'if' block and update our 'hcf' variable with the value of 'i'
            hcf = i;
        }
    }
    console.log(hcf)
}
findHCF(8,16)

// Method-2
/*
function findHCF(a,b){
    for( let i = a; i <= a && i > 0; i--){
        if( a% i === 0 && b % i === 0 ){
            console.log(i)
            break;
        }
}
findHCF(24,28)*/
