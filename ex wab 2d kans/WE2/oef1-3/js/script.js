'use strict';  

let color = {

    nR: 0,
    nG: 0,
    nB: 0,

    showcolor: function(){
        console.log(`rgb(${this.nR}, ${this.nG}, ${this.nB})`);
    },

    setcolor: function(r,g,b){
   
       if(r > 0 && r <= 255 && g > 0 && g <= 255 && b > 0 && b <= 255){
        this.nR = r;
        this.nG = g;
        this.nB = b;
        console.log(`succres`);
    }else{
        console.log(`error`);
    }
},
}

let red = prompt(`enter red`);
let green = prompt(`enter green`);
let blue = prompt(`enter blue`);

color.setcolor(red, green, blue);

console.log(color.showcolor())
