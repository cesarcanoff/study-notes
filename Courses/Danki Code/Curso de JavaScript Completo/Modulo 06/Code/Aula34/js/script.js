let frutas = ['Uva', 'Maçã', 'Limão', 'Laranja', 'Kiwi', 'Melão'];

const [a, b, ...c] = frutas;
console.log(c);
/*
C[0] = LIMÃO
C[1] = LARANJA
C[2] = KIWI
C[3] = MELÃO
*/