'use strict ';

const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

const datum = new Date();

let month = months[datum.getMonth()];

console.log(datum.getDate() +' '+ month +' '+ datum.getFullYear());
