// PEGAR TODAS AS TAG's <p> presentes no documento. 
let paragraphHTML = document.getElementsByTagName('p');

// Mostrando o valor contido na primeira TAG <p> do documento.
// console.log(paragraphHTML[0].innerHTML);
// console.log(paragraphHTML[1].innerHTML);
// console.log(paragraphHTML[2].innerHTML);
// console.log(paragraphHTML[3].innerHTML);
// console.log(paragraphHTML[4].innerHTML);
// console.log(paragraphHTML[5].innerHTML);

// TROCANDO O VALOR
paragraphHTML[0].innerHTML = 'Parágrafo manipulado via DOM!';
// console.log(paragraphHTML[0].innerHTML);

// for (let i = 0; i < paragraphHTML.length; i++) {
//   paragraphHTML[i].innerHTML = 'Parágrafo manipulado via DOM! - ' + i;
// }

for (let i = 0; i < 10; i++) {
  paragraphHTML[0].innerHTML += (' ' + i);
}