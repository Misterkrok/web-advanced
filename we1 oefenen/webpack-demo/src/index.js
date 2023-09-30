'use strict';



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


let date = new Cleave('#date', {
    date: true,
    datePattern: ['d', 'm','Y' ]
});
let tel  = new Cleave('#tel', {
    phone: true,
    phoneRegionCode: 'BE'
});
let name = new Cleave('#name', {
    blocks: [6, 3, 3],
    prefix: 'STUDENT-'
});
let age = new Cleave('#age', {
    numeral: true,
    numeralPositiveOnly: true
});
let rk = new Cleave('#rk', {
    blocks: [2,2,2, 3, 2],
    delimiters: ['.', '.', '-', '.']
});


window.onload = function() {
    console.log(document.body);
    function component() {
        const element = document.createElement('div');
      
    // Lodash, now imported by this script    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    console.log(element);
      
        return element;
      }
      
      document.body.appendChild(component());
}