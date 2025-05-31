function pattern(n){
    for(let row = 0; row < n; row++) {

        let star = ""
        // console.log(star)
        for (let col = 0; col < n; col++) {
            if(row+col >= Math.floor((n-1)/2) && col-row<= Math.floor((n-1)/2) && row-col <= (n-1)/2 && row+col <= (n-1)+((n-1)/2)) {
                star += "*"
            }

            else{
                star += " "
            }
        }
        // console.log(star)
    }
}

pattern(11)

//