// DESTRUCTURE
const arr = ['Caio', 'Anna', 'Luis'];
// const [a, b, c] = arr;

// console.log(`A => ${a}
// B => ${b}
// C => ${c}`);

const names = ['Caio', 'Anna', 'Luis', 'João', 'Lais', 'Giovanna', 'Sophia'];
const [a, b, ...c] = names;
console.log(`A => ${a}
B => ${b}
C => ${c}`);