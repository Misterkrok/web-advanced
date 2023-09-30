'use strict'

import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.be');
/* get all the input data from the form (age,name,tel,rk,date) */
function getFormData() {
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;
    let tel = document.getElementById("tel").value;
    let rk = document.getElementById("rk").value;
    let date = document.getElementById("date").value;
    let data = [age, name, tel, rk, date];
    return data;
}
/* make the age only accept possible ages */


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault()
    let data = getFormData();
    let age = data[0];
    let name = data[1];
    let tel = data[2];
    let rk = data[3];
    let date = data[4];
    let result = document.getElementById("result");
    result.innerHTML = "age: " + age + "<br>" + "name: " + name + "<br>" + "tel: " + tel + "<br>" + "rk: " + rk + "<br>" + "date: " + date;
    console.log(data);
    console.log(result);
}
);

let tel  = new Cleave('#tel', {
    phone: true,
    phoneRegionCode: 'BE'
});
import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
// Lodash, now imported by this script    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());