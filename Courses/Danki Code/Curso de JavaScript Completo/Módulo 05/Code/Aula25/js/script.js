var p = document.getElementsByTagName('p'); // PEGAR ELEMENTO...
console.log(p.length);

// console.log(p[0].innerHTML);

// for (let i = 0; i < p.length; i++) {
//   p[i].innerHTML = 'Manipulado via JS! ' + i;
// }


for (let i = 0; i < 10; i++) {
  p[0].innerHTML += i;
}