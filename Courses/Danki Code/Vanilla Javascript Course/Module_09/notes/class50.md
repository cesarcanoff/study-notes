# Aula 049 - Criando Pokedex 2/3

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Pokedex</title>
  </head>
  <body>
    <div class="main">
      <h2>Pokedex</h2>

      <div class="pokemon-boxes">
        <div class="pokemon-box">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            alt=""
          />
          <p>Dito</p>
        </div>
        <div class="pokemon-box">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            alt=""
          />
          <p>Dito</p>
        </div>
        <div class="pokemon-box">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            alt=""
          />
          <p>Dito</p>
        </div>
        <div class="pokemon-box">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            alt=""
          />
          <p>Dito</p>
        </div>
        <div class="pokemon-box">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            alt=""
          />
          <p>Dito</p>
        </div>
        <div class="pokemon-box">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
            alt=""
          />
          <p>Dito</p>
        </div>
      </div>
    </div>
    <script src="js/script.js"></script>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body {
  background-color: cyan;
}

.main {
  margin: 20px auto;
  padding: 30px 2%;
  max-width: 1100px;
  background-color: #fff;
}

.main h2 {
  font-size: 42px;
  color: #EF5350;
  text-align: center;
}

.pokemon-boxes {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
}

.pokemon-box {
  border-radius: 10px;
  width: 29%;
  margin: 20px 2%;
  background-color: rgb(230, 230, 230);
}

.pokemon-box img {
  width: 100%;
}

.pokemon-box p {
  color: black;
  font-size: 21px;
  text-align: center;
  padding: 10px 0;
}

@media screen and (max-width: 768px) {
  .pokemon-box {
    width: 100%;
    text-align: center;
  }

  .pokemon-box img { max-width: 300px;}
}
```

```jsx
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
```