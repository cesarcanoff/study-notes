var elementos = document.querySelectorAll('[type=radio]');
for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener('change', e => {
    let marcado = e.target.value;
    if (marcado == 'correta') {
      let parentNode = e.target.parentNode;
      parentNode.style.backgroundColor = 'green';

      let els = parentNode.parentNode.querySelectorAll('[type=radio]');

      for (let j = 0; j < els.length; j++) {
        els[j].disabled = true;
      }
    } else if (marcado == 'incorreta') {
      let parentNode = e.target.parentNode;
      parentNode.style.backgroundColor = 'red';

      let els = parentNode.parentNode.querySelectorAll('[type=radio]');

      for (let j = 0; j < els.length; j++) {
        els[j].disabled = true;
      }

      let correta = parentNode.parentNode.querySelector('[value=correta]');
      correta.parentNode.style.backgroundColor = 'green';
    }
  })
}
