var numPok = document.querySelector('input[name=number_pokemons]');
numPok.addEventListener('keyup', () => {
  getPokemons(numPok.value);
})

getPokemons(2);

function getPokemons (numberPokemons) {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${numberPokemons}`)
  .then(response => response.json())
  .then(allpokemon => {
    var pokemons = []
    allpokemon.results.map(val => {
      fetch(val.url)
        .then(response => response.json())
        .then(pokemonSIngle => {
          pokemons.push({
            name: val.name,
            image: pokemonSIngle.sprites.front_default
          })

          if (pokemons.length == numberPokemons) {
            var pokemonBoxes = document.querySelector('.pokemon-boxes')
            pokemonBoxes.innerHTML = ''
            pokemons.map(val => {
              pokemonBoxes.innerHTML += `<div class="pokemon-box">
              <img
                src="${val.image}"
                alt=""
              />
              <p>${val.name}</p>
            </div>`
            })
          }
        })
    })
  })

}