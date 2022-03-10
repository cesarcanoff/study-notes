var elementos = document.querySelectorAll('[type=radio]');
for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener('change', (e) => {
    let marcado = e.target.value;
    if (marcado == "correta") {
      let el = e.target.previousElementSibling.style.backgroundColor = 'green';
    } else if (marcado == "incorreta") {
      let el = e.target.previousElementSibling.style.backgroundColor = 'red';
      console.log('ERROU')
    }
  })
}