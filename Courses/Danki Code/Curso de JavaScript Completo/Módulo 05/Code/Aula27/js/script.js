var elementos = document.getElementsByClassName('box')
// console.log(el);

var el = elementos[0]

el.style.width = 200
el.style.height = 200
el.style.backgroundColor = 'green'
el.style.marginLeft = 500

for (let i = 0; i < elementos.length; i++) {
  var el = elementos[i]

  el.style.width = 100
  el.style.height = 100
  el.style.backgroundColor = 'green'
  el.style.marginLeft = 500
  el.style.marginTop = 500
  el.style.borderWidth = 2;
  el.style.borderColor = 'blue';
  el.style.borderStyle = 'dotted';
}
