var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var buttonLower = document.getElementById('sub')
var buttonUpper = document.getElementById('add')

buttonLower.addEventListener('click', () => {
  if (currentNumber == 0) {
    currentNumberWrapper.style.color = 'red';
    buttonLower.disabled = true;
  } else {
    buttonLower.disabled = false;
    currentNumber--;
    currentNumberWrapper.style.color = 'black';
    currentNumberWrapper.innerHTML = currentNumber;
  }
})


buttonUpper.addEventListener('click', () => {
  if (currentNumber == 10) {
    currentNumberWrapper.style.color = 'red';
    buttonUpper.disabled = true;
  } else {
    buttonLower.disabled = false;
    currentNumber++;
    currentNumberWrapper.style.color = 'black';
    currentNumberWrapper.innerHTML = currentNumber;
  }
})