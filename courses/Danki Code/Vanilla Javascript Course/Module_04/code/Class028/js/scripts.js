let elementClass = document.getElementsByClassName('box');
let elements = [];

for (let i = 0; i < elementClass.length; i++) {
  elements.push(elementClass[i]);
}

elements.forEach((key, index) => {
  elements[index].style.width = '100px';
  elements[index].style.height = '100px';
  elements[index].style.marginBottom = '10px';
  elements[index].style.backgroundColor = 'cyan';
});