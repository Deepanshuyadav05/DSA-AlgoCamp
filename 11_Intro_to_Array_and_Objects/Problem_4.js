/*
//given an array of strings, print all the unique strings in the array

//Method-1
function uniqueStr(arr){
    let obj = {}

    for (let str of arr){
        if (!obj[str]){
            obj[str] = true
        }
    }

    for (let key in obj){
        console.log(key)
    }

}
let arr = ["deep", "a", "hello", "a", "v", "e", "v"]
uniqueStr(arr)


//Method-2
/!*
function uniqueStr(arr){
    let newArr = []

    for (let str of arr){
        if (!newArr.includes(str)){
            newArr.push(str)
        }
    }
    console.log(newArr)
}
let arr = ["deep", "a", "hello", "a", "v", "e", "v"]
uniqueStr(arr)*!/
*/
function firstUniqChar(s) {
    let obj = {}
    for(let char of s){
        if(obj[char]){
            obj[char]++
        }
        else{
            obj[char] = 1
        }
    }
    let count = 0
    for(let unique in obj){

        if(obj[unique] === 1){
            return count
        }
        count++
    }
    return -1

};

console.log(firstUniqChar("dddccdbba"))
