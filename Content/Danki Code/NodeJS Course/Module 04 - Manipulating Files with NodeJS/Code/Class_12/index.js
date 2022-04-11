const fs = require('fs');

// CRIAR ARQUIVO
fs.writeFile('names.txt', 'CésarKKKKx', (err) => {
  if (err) throw err;
  console.log('Criado com sucesso!');
});

// DELETAR ARQUIVO
  fs.unlink('names.txt', (err) => {
    if (err) throw err;
    console.log('Deletado com Sucesso!');
});

// RENOMEAR ARQUIVO
fs.rename('names.txt', 'rename.txt', (err) => {
  if (err) throw err;
  console.log('Renomeado com sucesso!');
});