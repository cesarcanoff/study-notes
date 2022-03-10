fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
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

          if (pokemons.length == 10) {
            console.log(pokemons)
          }
        })
    })
  })
