//write a function that takes a string as input and return the number of words in the sentence that start with a vowel

function wordCount(word) {
    if (word.charAt(0) === 'a' || word.charAt(0) === 'e' ||
        word.charAt(0) === 'i' || word.charAt(0) === 'o' ||
        word.charAt(0) === 'u') {
        console.log(word.length);
    }
}

wordCount("elephant"); // Output: 8
wordCount("apple");    // Output: 5
wordCount("wlephant"); // No output (does not start with a vowel)


//OR

function wordCount(word) {
    if ('a,e,i,o,u'.includes(word.charAt(0))) {
        console.log(word.length);
    }
}

wordCount("elephant"); // Output: 8
wordCount("apple");    // Output: 5
wordCount("wlephant"); // No output
