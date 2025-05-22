//check which numbers are even and which are odd between 1 to 50

function isEvenOrOdd(num){
    if (num % 2 === 0){
        return "Even"
    }
    else{
        return "odd"
    }
}
for (let i = 1; i <= 50; i++){
    console.log(i, "is", isEvenOrOdd(i))
}