function pattern(n){
    for(let row = 0; row < n; row++) {

        let star = ""
        console.log(star)
        for (let col = 0; col < n; col++) {
            if(((row>=col && col <= (n-1)/2) && row+col <= n-1 ) || (row+col >= n-1 && col >= (n-1)/2) && row<=col){
                star += "* "
            }

        else{
                star += "  "
            }
        }
        console.log(star)
    }
}

pattern(5)