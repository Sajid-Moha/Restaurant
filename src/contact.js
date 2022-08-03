function contact_item(label, content) {
    let contact = document.createElement('li');
    let contactLabel = document.createElement('b');
    contactLabel.textContent = label;
    contact.appendChild(contactLabel);
    let contactInfo = document.createElement('span');
    contactInfo.textContent = content;
    contact.appendChild(contactInfo);
    
    return contact;
}

function create_contact() {
    let main = document.createElement('main');
    let title = document.createElement('h1');
    title.textContent = 'Contact Us!';
    main.appendChild(title);

    let contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-info');

    let contactList = document.createElement('ul');
    contactList.classList.add('contact-list');
    
    contactList.appendChild(contact_item('Name: ', 'First Last'));
    contactList.appendChild(contact_item('Phone Number: ', '123-456-7890'));
    contactList.appendChild(contact_item('Email: ', 'user@gmail.com'));

    contactContainer.appendChild(contactList);
    main.appendChild(contactContainer);
    return main;
}

function load_contact() {
    let site = document.querySelector('#content');
    site.appendChild(create_contact());
}

export default load_contact;