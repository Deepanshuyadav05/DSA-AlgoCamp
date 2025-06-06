//Reverse a given number

function reverseNumber(num) {
    //we create a variable to store the reversed number
    let reverseNumber = 0

    //we run a loop to n>0
    while(num > 0){
        //here we get the last digit of the number
        let lastDigit = num % 10;
        //as here we don't have to add the digits, so we can't do "revNum += " so we use the following formula
        //it will always add a '0' at the last of the reverseNum and add the new last digit from 'num'
        reverseNumber = (reverseNumber * 10 )+ lastDigit;

        //now we remove last digit from the 'num'
        num = Math.floor(num / 10) ;

    }
    console.log(reverseNumber)

    //OR
    /*let str = String(num);
let reversedStr = '';
for( let i = str.length - 1; i>=0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr)*/
}
reverseNumber(1204)