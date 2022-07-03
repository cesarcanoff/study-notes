Criar projeto

```
npm init
```

Iniciação do Projeto

```
npx create-react NOME_DO_APP
```

Códigos Úteis para mim :)

```js
import React from "react";

function Button(props) {
  // Desestruturação do [props]
  const { name, onclick } = props; // Talvez seja útil essa linha futuramente.

  return <button onClick={onCLick}>{name}</button>;
}
```

## Configuração do Webpack

```
npm i -D webpack webpack-cli
```

```
"build": "webpack --mode production"
```

```
npm i @babel/core babel-loader @babel/present-env @babel/present-react --save-dev
```

Última parte da aula, foi a instalação do ESLint.