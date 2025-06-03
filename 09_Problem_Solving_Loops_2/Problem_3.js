//print the sum of all the digits present in the number 'num'
//eg: num = 4233,  output --> 4+2+3+3 = 12

function sumOfDigits(num) {

    //we create a variable to store the sum of digits
    let sum = 0

    //we run a loop until the number become 0 when we do num/10 again and again
    while (num>0) {

        //here we get the last digit of the number using the modulus
        let lastDigit = num%10  // 123 % 10 --> 3 (last digit)

        //here as we get the last digit, so we remove it  and to avoid decimal we use Math.floor
        num = Math.floor(num/10)     // 123 / 10 --> 12.3 --> Math.floor(12.3)  --> 12

        //here we add the last digit to the sum variable
        sum += lastDigit
    }
    console.log(sum)
}
sumOfDigits(123)

//Method-2
/*function sumOfDigits(num) {
    let sum = 0
    let str = String(num)
    for (let i = 0; i < str.length; i++) {

        sum += Number(str[i])
    }
    console.log(sum)
}
sumOfDigits(123)*/






