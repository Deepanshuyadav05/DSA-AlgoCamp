// check if the given number is prime or not using functions

function isPrimeOrNot(num){

    if(num <= 1){
        return false
    }

    for(let i = 2; i < num; i++) {
        if (num%i === 0){
            // console.log("no. is not prime")
            return false;
        }

    }
    return true
}

if(isPrimeOrNot(1)){
    console.log("number is prime")
}
else{
    console.log("number is not prime")
}
