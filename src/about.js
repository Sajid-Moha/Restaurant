function load_about() {
    let site = document.querySelector('#content');
    let main = document.createElement('main');

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    p1.textContent =  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt viverra leo, vitae congue velit imperdiet et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at suscipit libero, nec elementum felis. Suspendisse vestibulum neque ac elit vehicula, laoreet bibendum justo placerat. Nunc elit turpis, egestas eu euismod a, sodales et sapien. Ut euismod ultricies nisi, fermentum ornare enim facilisis nec. Etiam euismod aliquam urna vel faucibus. Duis consectetur tortor massa, ut faucibus augue gravida id. Praesent congue ipsum rutrum velit posuere condimentum rhoncus non massa. Pellentesque et vehicula augue. Ut nisi felis, placerat pellentesque sapien id, consequat posuere dolor. Aenean nec leo non odio efficitur condimentum eget eget arcu. Proin pellentesque elit nisl, non lobortis diam consequat eu.';
    p2.textContent = 'Etiam volutpat at magna eu imperdiet. Donec bibendum id purus quis cursus. Nam vulputate felis ac sapien iaculis, at molestie enim pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu luctus lacus, vitae ultrices elit. In odio nisl, consectetur vel varius vel, dignissim in ex. Donec varius augue ac magna ultrices imperdiet. Cras pulvinar ante vitae elit dignissim vestibulum. Nam eget mauris vel lorem condimentum interdum posuere tristique metus.';
    p3.textContent = '  Integer id porttitor lorem, eu consectetur nisl. Ut ut euismod est. Aliquam mi ligula, efficitur sed sapien id, venenatis gravida arcu. Suspendisse malesuada quam turpis, at dignissim magna commodo sed. Praesent cursus sollicitudin auctor. Nulla ullamcorper lectus eget ornare vehicula. Aenean malesuada convallis eros sit amet sollicitudin. Pellentesque placerat nulla nec mollis semper. Cras a blandit diam, nec fermentum purus. Quisque malesuada nisi tortor, id varius eros facilisis quis. Phasellus a maximus dui, eget ornare est. Sed sagittis, turpis eu efficitur ornare, tortor tortor vehicula augue, ac egestas lorem orci sit amet dolor. Vestibulum fermentum aliquam est quis imperdiet. Pellentesque tincidunt tortor eget justo iaculis malesuada.';

    main.appendChild(p1);
    main.appendChild(p2);
    main.appendChild(p3);

    site.appendChild(main);
}

export default load_about;