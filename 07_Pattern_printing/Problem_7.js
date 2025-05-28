//Print a patter of 'A' alphabet

function alphabetPattern(n){
    for(let row = 1; row <= n; row++){
        let star = ""
        for(let col = 1; col <= n; col++){
            if(row === 1 || row === (Math.ceil(n/2)) || col === 1 || col === n){
                star += "*"
            }
            else{
                star += " "
            }
        }
        console.log(star)
    }
}
alphabetPattern(10)