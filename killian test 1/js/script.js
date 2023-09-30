'use strict';
/*alert("Hello world");

let a = 10;
a += 5;
console.log(a);


let leeftijd = prompt("geef je leeftijd");

if (leeftijd >= 18) {
    console.log("welkom")
}
else{
    console.log("ga weg")
}
*/


/*let btn = document.getElementById('btn')
btn.addEventListener('click', (e)=>{
    e.preventDefault()
    let leeftijd = document.getElementById("leeftijd").value;
    if (leeftijd >= 18) {
    console.log("welkom")
}
else{
    console.log("ga weg")
}
})*/

function testThis(){
console.log(`Regular function this: ${this}`);
// Output: undefined
}
let testThis2 = () => {
console.log(`Arrow function this: ${this}`);
// Output: window object
}
testThis();
testThis2();
/*
let connectMulti = ([player1,player2]) => {
    //Do more than a single thing
    return `${player1} and ${player2} are connected!`;
    }
    let list = ["Mike", "Peter"];
    connectMulti(list);
*/