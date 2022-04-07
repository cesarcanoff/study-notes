/*
  O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

    Crie uma função que recebe um array e um número
    Realize as seguintes validações
        Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
        Se o array não for do tipo 'object', lance um erro do tipo TypeError
        Se o número não for do tipo 'number', lance um erro do tipo TypeError
        Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    Utilize a declaração try...catch
    Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function functionVerified(arr, num) {
  try {
    if (!arr || !num) throw new ReferenceError('Envie os parâmetros');
    if (typeof arr !== 'object') throw new TypeError('O array precisa ser do tipo Object');
    if (typeof num !== 'number') throw new TypeError('O número precisa ser number');
    if (arr.length !== num) throw new RangeError('Tamanho inválido');
  
    return arr;

  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('É um ReferenceError');
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log('É um TypeError');
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log('É um RangeError');
      console.log(e.message);
    } else {
      console.log(`Tipo de erro inesperado ${e}`);
    }
  }
}


console.log(functionVerified([1, 2, 3, 4, 5], 5));