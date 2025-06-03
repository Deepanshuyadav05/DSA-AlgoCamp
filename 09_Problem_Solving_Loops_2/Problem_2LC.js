//Leetcode:1979-
//find the GCD of the two given numbers using Euclid algorithm
//another way with best time complexity to solve the first problem

function findGcd(num1, num2){
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    while( min > 0){
        let remainder = max % min;
        max = min;
        min = remainder

    }
    console.log(max)
    console.log(min)

}
findGcd(3, 9)