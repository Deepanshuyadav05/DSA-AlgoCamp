//Print a complex 'A' pattern

function complexAlphabet(n){
    for (let row = 1; row <= n; row++) {
        let star = ""
        //row 1 pe 1,2,3,4,..,n column pe kaya aayega
        for (let col = 1; col <= n; col++) {

            if((row === 1 && col > 1 && (col < Math.ceil(n/2))) || ((col === 1 || col === Math.ceil(n/2)) && row > 1) ||
                (row === Math.ceil(n/2) && col <= Math.ceil(n/2)) ){
                star += "* "
            }
            else{
                star += "  "
            }
        }
        console.log(star)
    }
}
complexAlphabet(8)