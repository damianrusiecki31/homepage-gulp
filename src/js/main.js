"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))





const navigationSwitcher = document.querySelector('.navigation__switcher--js')

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});

const person = {
    name: 'Damian',
    age: 29
}

console.log(person);

const jsonPerson = JSON.stringify(person);

console.log(jsonPerson);

// localStorage.setItem('person', jsonPerson);

console.log(localStorage.getItem('person'));
