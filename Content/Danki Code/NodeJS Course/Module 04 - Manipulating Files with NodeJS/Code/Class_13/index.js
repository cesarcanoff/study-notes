const readLine = require('readline');

// CRIANDO UMA INTERFACE
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

// PERGUNTADO PARA O USUÁRIO (INPUT)
rl.question("What's your name? ", (userName) => {
  console.log(`Your name is: ${userName}`);
  rl.question("What's your age? ", (userAge) => {
    console.log(`${userName} have ${userAge} years old.`);
  });
});

// ENCERRANDO O PROCESSO
rl.on('close', () => {
  console.log('Goodbye Sir!');
  process.exit(0);
})