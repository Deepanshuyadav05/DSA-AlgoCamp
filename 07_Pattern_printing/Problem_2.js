//WAP to print a Right half pyramid pattern

function pattern(n){
    for(let row = 1; row <= n; row++) {

        let star = ""
        for (let col = 1; col <= row; col++) {
            star += "* "
        }
        console.log(star)
    }
}

pattern(5)