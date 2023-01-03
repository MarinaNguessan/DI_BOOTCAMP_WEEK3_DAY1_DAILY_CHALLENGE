/*Créez un tableau contenant les planètes du système solaire : */

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

/*Créons une div pour chaque planète en utilisant la méthode createElement et en lui attribuant la classe planet : */

let planetDivs = planets.map((planet) => {
    let div = document.createElement('div');
    div.classList.add('planet');
    return div;
});

/*Ajoutons une classe de couleur de fond différente à chaque div de planète : */

let planetColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown'];

planetDivs.forEach((div, i) => {
    div.classList.add(planetColors[i]);
});


/* Ajoutons chaque div de planète au <section> dans le HTML : */

let listPlanets = document.querySelector('.listPlanets');
planetDivs.forEach((div) => {
    listPlanets.appendChild(div);
});


