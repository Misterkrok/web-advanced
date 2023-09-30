'use strict';
//Oefeningen 1-3

console.log('script 1 linked!');

let color = {
    nR: 0,
    nG: 0,
    nB: 0,
    showColor: function () {
        console.log(`rgb(${this.nR},${this.nG},${this.nB})`);
    },
    setColor: function (r, g, b) {
        if(r <= 255 && r >= 0){
            console.log('SUCCES: correct data');

            this.nR = r;
            this.nG = g;
            this.nB = b;
        }else{
            console.log('ERROR: Wrong data');
        }

    }
};

let red = prompt('Red-value');
let green = prompt('Green-value');
let blue = prompt('Blue-value');


color.setColor(red,green,blue);
color.showColor();

