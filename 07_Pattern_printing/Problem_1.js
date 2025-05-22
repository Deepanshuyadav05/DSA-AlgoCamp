//Printing normal nxn pattern


function pattern(n){
    for(let row = 1; row <= n; row++) {

        let star = ""
        for (let col = 1; col <= n; col++) {
            star += "* "
        }
        console.log(star)
    }
}

pattern(5)