//Print a hollow square pattern

function hollowSquare(n){
    for(let row = 1; row <= n; row++){
        let star = ""
        for(let col = 1; col <= n; col++){
            if(col === 1 || col === n || row === 1 || row === n){
                star += "*"
            }
            else{
                star += " "
            }
        }
        console.log(star)
    }
}
hollowSquare(5)