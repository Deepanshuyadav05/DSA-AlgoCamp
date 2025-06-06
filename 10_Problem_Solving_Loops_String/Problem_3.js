//LEETCODE:1017

//convert a given number to its binary form

function decimalToBinary(num){

    //here we create a variable to store binary form
    let ans = ""

    //now we run a loop till n>0
    while(num > 0){

        //now as we know if the number is even then its last digit of binary os '0'
        //we add this '0' before because without it, we get reversed of the binary
        if(num % 2 === 0){
            ans = "0" + ans;
        }
        //now as we know if the number is odd then its last digit of binary os '1'
        else{
            ans = "1" + ans;
        }

        //now as we know we have to repetitively find the floor value of num/2 to get the binary value
        num = Math.floor(num / 2);
    }
    return ans;
}

console.log(decimalToBinary(4));