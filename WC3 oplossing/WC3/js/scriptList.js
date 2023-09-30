'use strict';
window.onload = function () {

    //get the list from the sessionStorage
    let list = JSON.parse(sessionStorage.getItem('list'));

    console.log(list);

    //Fancy extra: determine a random color for styling
    let classes = ['list-group-item-primary', 'list-group-item-secondary',
        'list-group-item-success', 'list-group-item-danger',
        'list-group-item-warning', 'list-group-item-info',
        'list-group-item-light', 'list-group-item-dark'];

    //Using a list for this example. Feel free to rework this with another styling for extra practice.
    let html = `<div class="list-group">`;

    for (let student of list) {
        //Get a random number between 0 and 7 for the style.
        let style = Math.floor(Math.random() * 7);
        //Add 1 listitem for each student.
        html += `<a href="#" class="list-group-item list-group-item-action ${classes[style]}">${student.name}</a>`;

        //Nice extra for selfstudy: The above list items are actual links (<a>).
        // Make them clickable and somehow show the rest of the student data.
        //Use another place on the page, modals, another page,.... You choose!

    }
    //Close the html correctly
    html += `</div>`;

    //Add it to the page
    document.getElementById('students').innerHTML = html;

};
