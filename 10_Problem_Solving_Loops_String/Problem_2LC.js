//LEETCODE:9

//check if the given input is palindrome or not
//palindrome is a number or string which is same when we read it from starting or ending
//Eg: 1441, deed , etc

function checkPalindrome(num){

    //first we convert the 'num' to string as .length property is not applied to number
    let str = String(num)

    //now we declare two variable i and j, i starts from the starting and j starts from the ending of the string
    let i = 0;
    let j = str.length-1

    //now we start a while loop with condition i<= j
    while(i<=j){

        //here we check if str at that index is same or not
        if( str[i] === str[j] ){

            //if the value at both these indexes are same then we increase i by 1 as i starts from starting and decrease j by 1 as j starts from ending
            i++;
            j--;
        }
        else{
            
            //if the str at those index are not equal then we return false
            return false;
        }
    }
    return true;
}
                             
let num = 11411
console.log( checkPalindrome(num))