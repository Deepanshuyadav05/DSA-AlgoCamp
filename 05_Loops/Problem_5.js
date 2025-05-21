//You are given a target number stop rolling the dice when the rolled number and target numbers are same

let targetNum = 5;
let rolls = 0
while (true){
    let roll = Math.floor(Math.random() * 6) + 1;
    rolls++
    console.log(`Roll # ${rolls} -> ${roll}\n`);
    if (roll === targetNum){
        console.log(roll)
        console.log("target number rolled")
        break;
    }
}