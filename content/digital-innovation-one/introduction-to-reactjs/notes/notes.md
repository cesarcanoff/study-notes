Criar projeto
~~~
npm init
~~~

Iniciação do Projeto
~~~
npx create-react NOME_DO_APP
~~~

Códigos Úteis para mim :)
```js
import React from 'react';

function Button(props) {

  // Desestruturação do [props]
  const { name, onclick } = props; // Talvez seja útil essa linha futuramente.

  return (
    <button onClick={onCLick}>{name}</button>
  );
}

```