import create_header from './skeleton.js';
import load_about from './about.js';
import load_menu from './menu.js';
import load_contact from './contact.js';

import './normalize.css';
import './home.css';
import './menu_card.css';
import './contact.css';

function clearContent() {
    let content = document.querySelector('#content');
    
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

console.log("What're you doing in here? Go look at the awesome items on our menu!");

create_header();
load_about();

let aboutButton = document.querySelector('#about');
let menuButton = document.querySelector('#menu');
let contactButton = document.querySelector('#contact');

aboutButton.addEventListener('click', () => {
    clearContent();
    load_about();
});

menuButton.addEventListener('click', () => {
    clearContent();
    load_menu();
});

contactButton.addEventListener('click', () => {
    clearContent();
    load_contact();
});
