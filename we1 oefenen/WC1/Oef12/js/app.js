'use strict';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();

let month = months[d.getMonth()];

console.log(d.getDate() + ' ' + month + ' ' + d.getFullYear());
