//Find the LCM of two number
//Hint: LCM = (a*b)/ Gcd(a,b)
//LCM is the lowest no. divided by both the 'a' and 'b'

function Gcd(num1, num2){
    let Gcd = 1
    for( let i = 2; i <= Math.min(num1, num2); i++ ){
        if( num1%i===0 && num2%i===0){
            Gcd = i
        }
    }
    console.log(Gcd)
    return Gcd;
}

function lcm(num1, num2){
    let G = Gcd(num1, num2);
    return (num1 * num2)/ G
}

console.log(lcm(12, 80))

