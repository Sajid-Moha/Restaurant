import Logo from './burger.png';

let page = document.querySelector('body');
let site = document.querySelector('#content');

function create_branding () {
    let header = document.createElement('header');

    let logoImage = new Image();
    logoImage.setAttribute('id', 'logo');
    logoImage.src = Logo;
    
    let logoHolder = document.createElement('div');
    logoHolder.classList.add('brand-name');
    let logoText = document.createElement('H1');
    logoText.textContent = "Sajid's Savoury Burgers";
    logoHolder.appendChild(logoText)

    header.appendChild(logoImage);
    header.appendChild(logoHolder);
    page.prepend(header);
}

function add_nav () {
    let nav = document.createElement('nav');

    let button1 = document.createElement('button');
    button1.classList.add('nav-button');
    button1.setAttribute('id', 'about');
    button1.textContent = 'About';

    let button2 = document.createElement('button');
    button2.classList.add('nav-button');
    button2.setAttribute('id', 'menu');
    button2.textContent = 'Menu';

    let button3 = document.createElement('button');
    button3.classList.add('nav-button');
    button3.setAttribute('id', 'contact');
    button3.textContent = 'Contact Us';

    nav.appendChild(button1);
    nav.appendChild(button2);
    nav.appendChild(button3);

    page.prepend(nav);
}

function create_header () {
    // use prepend to insert elements and since we want header above nav
    //  we have to insert nav first
    add_nav();
    create_branding();
}

export default create_header;