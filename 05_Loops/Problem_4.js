//Reverse a string using while loop

let str = "Hello"
let reversed = ""

let index = str.length - 1

while (index >= 0){
    reversed += str[index]
    index--
}
console.log(reversed)