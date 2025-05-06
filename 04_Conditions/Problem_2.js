//Consider 3 integer value, and find the minimum value among the input values

let x = 23;
let y = 23;
let z = 23;

if (x <= y && x <= z){
    if ( x === z && x=== y){
        console.log("X, Y & Z all are equal values are minimum values")
    }
    else if (x === z){
        console.log("X & Z both are minimum values")
    }
    else if (x === y){
        console.log("X & Y both are minimum values" )
    }
    else{
        console.log("X is minimum value")
    }
}

else if (y <= x && y <= z){
    if ( y === z && y=== x){
        console.log("X, Y & Z all are equal values are minimum values")
    }
    else if (y === z){
        console.log("Y & Z both are minimum values")
    }
    else if (y === x){
        console.log("X & Y both are minimum values" )
    }
    else{
        console.log("Y is minimum value")
    }
}

else if (z >= x && z <= y){
    if ( z === y && z=== x){
        console.log("X, Y & Z all are equal values are minimum values")
    }
    else if (z === y){
        console.log("Y & Z both are minimum values")
    }
    else if (z === x){
        console.log("X & Z both are minimum values" )
    }
    else{
        console.log("Z is minimum value")
    }
}