var button = document.getElementById('acao');
var areaTasks = document.getElementsByClassName('tasksArea')[0];

button.addEventListener('click', () => {
  var input = document.getElementById('task');
  var el = document.createElement('p')
  el.innerHTML = `<input class="listTask" type="checkbox">${input.value}`;
  areaTasks.appendChild(el)
})

var boxes = document.getElementsByClassName(listTask)
console.log(boxes)
boxes.addEventListener('click', () => {
  for(let i = 0; i < boxes.length; i++) {
    boxes[i].style.color = 'red';
  }
})