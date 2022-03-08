// LISTA DE FILMES
fetch(
  'https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=pt-BR&page=1',
  {
    method: 'GET'
  }
)
  .then(response => response.json())
  .then(function (json) {
    console.log(json);
    var container = document.querySelector('.container');
    json.results.map(function (val) {
      container.innerHTML += `
      
      <div style="cursor: pointer;" class="titleMovie">${val.original_title}
        <p style="display: none;" class="description">${val.overview}</p>
      </div>
      <hr />`
    });

    let titles = document.querySelectorAll('.titleMovie');
    for (let i = 0; i < titles.length; i++) {
      titles[i].addEventListener('click', t => {
        let descriptionMovie = t.target.querySelector('.description');
        if (descriptionMovie.style.display == 'none') {
          t.target.querySelector('.description').style.display = 'block';
        } else {
          t.target.querySelector('.description').style.display = 'none';
        }
      })
    }
  })
