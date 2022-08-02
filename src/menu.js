import smashBurger from './smash_burger.jpg';
import grilledCheese from './g_cheese.jpg';
import frenchFries from './loaded_fries.jpg';
import onionRings from './onion_rings.jpg';

class MenuItem {
    constructor (name, image, description, price) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
    } 
}

let burger = new MenuItem('Smash Burger', smashBurger, 'Yummy yummy yummy in my tummy!', '$6.99');
let gCheese = new MenuItem('Grilled Cheese', grilledCheese, 'Yummy yummy yummy in my tummy!', '$4.99');
let loadedFries = new MenuItem('Loaded Fries', frenchFries, 'Yummy yummy yummy in my tummy!', '$2.99');
let oRings = new MenuItem('Onion Rings', onionRings, 'Yummy yummy yummy in my tummy!', '$1.99');

let myMenu = [burger, gCheese, loadedFries, oRings]


function createItemCard(item) {
    let container = document.createElement('div');
    container.classList.add('food-card');

    /* add item name to container */
    let itemNameContainer = document.createElement('div');
    itemNameContainer.classList.add('item-name-container');

    let itemName = document.createElement('span');
    itemName.classList.add('item-name');
    itemName.textContent = item.name;

    itemNameContainer.appendChild(itemName);
    container.appendChild(itemNameContainer);

    /* add item image to container */
    let image = new Image;
    image.src = item.image;
    image.classList.add('item-photo');
    container.appendChild(image);

    /* add item price to container */
    let price = document.createElement('span');
    price.classList.add('price');
    price.textContent = item.price;
    container.appendChild(price);

    /* add item description to container */
    let description = document.createElement('div');
    description.classList.add('description');
    description.textContent = item.description;
    container.appendChild(description);

    return container;
}

function load_menu() {
    let main = document.createElement('main');

    myMenu.forEach((menuItem) => {
        main.appendChild(createItemCard(menuItem));
    })

    let site = document.querySelector('#content');
    site.appendChild(main);
}

export default load_menu