import { makeUser } from './user.utils.js';
// import functions and grab DOM elements
const form = document.querySelector('form');
// initialize state

// set event listeners to update state and DOM
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const formData = new FormData(form);
    const user = makeUser(formData);

    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);

    window.location = './map';

});