//given a string, try to print a number of occurrences of each unique character of the string

function strOccurrence(str){
    //here we use an object as it provides a key and value pair,
    //so first we take an empty object to store the character, and there values
    const freqMap = {};

    //we run a for-of loop to get each character of the 'str'
    for( const char of str){

        //if freqMap[char] is true mean freqMap already contain that character, so we increase that character count to 2
        //here as char is variable so at these situations we don't use freqMap.char here we use freqMap[char] because in .char it will not detect char as variable it will detect char as key
        //[ ] => Used when the property name is dynamic. (Comes from a variable or expression.)
        if ( freqMap[char] ) {
            //increasing that char count to 2
            freqMap[char]++;
        }
        //in else the condition is freqMap[char] === false
        else{
            //here we add that key value to the object
            freqMap[char] = 1;
        }
    }
    console.log(freqMap)
}
strOccurrence("javaScript")

/*//Method: 2
    function strOccurrence(str) {
        let obj = {};
        for (let i = 0; i < str.length; i++) {
            if (obj[str[i]]) {
                obj[str[i]]++;
            } else {
                obj[str[i]] = 1;
            }
            console.log(obj[str[i]]);
        }
        console.log(obj);
    }

    strOccurrence("javaScript");*/

