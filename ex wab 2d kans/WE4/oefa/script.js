'use strict'

let randnmr = Math.floor(Math.random()*20)+1;

    document.getElementById('form').addEventListener('submit', (form) => {
    form.preventDefault();

let inputnr = document.getElementById('number').value;
compareNumber(inputnr)
.then((result) => {
    alert(result);
}
)
.catch((error) => {
    alert(error);
}
)
});

let compareNumber = (inputnr) => {
        return new Promise((resolve, reject) => {
        if (inputnr == randnmr) {
            resolve('Je hebt het mysterieuze nummer geraden!');
        } else if ( inputnr < randnmr && inputnr > 0 && inputnr <= 20) {
            resolve('Het mysterieuze getal is hoger. Raad nog eens!');
        } else if (inputnr > randnmr && inputnr > 0 && inputnr <= 20) {
            resolve('Het mysterieuze getal is lager. Raad nog eens!');
        } else {
            reject('Dat is geen geldig nummer ');
        }
    })
}