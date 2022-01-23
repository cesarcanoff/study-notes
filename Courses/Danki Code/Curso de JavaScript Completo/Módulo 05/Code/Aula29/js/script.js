var el = document.querySelectorAll('.box')[0];
// APÓS 1 SEGUNDO
setTimeout(() => {
   el.classList.add('animationLeft');
}, 1000)

// APÓS O CLIQUE NA TELA
el.addEventListener('click', () => {
  el.classList.add('animationLeft');
})