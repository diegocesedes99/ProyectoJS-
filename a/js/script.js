const formulario=document.querySelector('#formulario');
const boton=document.querySelector('#boton');

const filtrar=()=>{
  //console.log(formulario.value);
  const texto= formulario.value.toLowerCase();
}

boton.addEventListener('click', filtrar);
// Conexión al API usando fetch.
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c8497174')
  .then((response) => response.json())
  .then((data) => {
    // Add characters to list.
    insertpelis(data.results);
    // Save the next page URL.
    nextPage = data.info.next;
  });
/*//
// Ejemplo conexión a API.
//

// addCharacters(): Agrega los personajes a la lista.
function addCharacters(characters) {
  // Obtiene el elemento de la lista de personajes.
  const characterList = document.getElementById('character-list');
  // Itera sobre los personajes.
  for (let i = 0; i < characters.length; i += 1) {
    // Item de la lista.
    const listItem = document.createElement('li');
    characterList.appendChild(listItem);
    // Nombre del personaje.
    const characterName = document.createElement('h2');
    characterName.innerHTML = characters[i].name;
    listItem.appendChild(characterName);
    // Especie.
    const species = document.createElement('p');
    species.innerHTML = characters[i].species;
    listItem.appendChild(species);
    // Imagen.
    const picture = document.createElement('img');
    picture.setAttribute('src', characters[i].image);
    listItem.appendChild(picture);
  }
}

// URL a la próxima página.
let nextPage = '';

// Conexión al API usando fetch.
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c8497174')
  .then((response) => response.json())
  .then((data) => {
    // Add characters to list.
    addCharacters(data.results);
    // Save the next page URL.
    nextPage = data.info.next;
  });

// Botón para cargar más personajes.
const loadMore = document.getElementById('load-more');
loadMore.addEventListener('click', () => {
  fetch(nextPage)
    .then((response) => response.json())
    .then((data) => {
      // Add characters to list.
      addCharacters(data.results);
      // Save the next page URL.
      nextPage = data.info.next;
    });
});
*/