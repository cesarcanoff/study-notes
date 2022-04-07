# Agora Sim, Cores

### Tipos

- background-color (para caixas)
- color (para textos)
- border-color (para caixas)
- outros

### Valores

Podemos definir valores por:

- palavra-chave (blue, transparent)
- hexadecimal (#990011)
- funções: rgb, rgba, hsl, hsla

```html
<div>
    <h1>Um texto aqui</h1>
    <p>Mais texto</p>
</div>
```

```css
div {
    color: blue;
}

h1 {
    color: red;
```

```css
/*<hex-color> values 0-9 e A-F*/
color: #090; /* RED, GREEN, BLUE */
color: #009900;
color: #090a;
color:#009900aa;
```

- RGB → Red, Green e Blue
- O alpha representa a transparência da cor

```css
/*<rgb()> values */
color: rgb(34, 12, 64, 0.6) /* 0-255 */
color: rgba(34, 12, 64, 0.6)
```

HSL → Hue - Saturation - Lightness

```css
color: hsl(180, 100%, 50%, 60%)
color: hsla(180, 100%, 50%, 60%)
```

```css
/* Global values */
color: inheritr; /* Herda a cor do elemento anterior */
color: initial; /* Volta a sua cor inicial */
color: unset; /* Pega a cor do contexto */
```

**Referência**

[- CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

## Background

---

- Define um fundo para nosso elemento
- Sua área de atuação é a caixa toda
- Por padrão, é transparente

### Exemplos

- Usar cores solidas
- Usar imagens
- Controlar
    - a posição das imagens
    - se elas se repetem ou não
    - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradiente

```html
<header>

</header>
<main>
    <h1>Evolua rápido com a tecnologia</h1>
    <p>Junte-se a milhares de devs e acelere
    na direção dos seus objetivos</p>
</main>
```

```css
* {
    margin: 0;
}

header {
    height: 100px;
    border: 7px dashed red;
    background-color: rgb(55, 100, 50);
}
```

- Para adicionar uma imagem como background podemos usar a propriedade `background-image`
- Por padrão a imagem vai se repetir e podemos modificar essa opção usando a propriedade `background-repeat`

```css
/* Values */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Podedmos usar 2 valores: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;
```

Com a propriedade `background-position` podemos mudar a posição da imagem do background.

```css
/* Pricipais valores */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;
```

Para mudar o tamanho da imagem do background usamos a propriedade `background-size`.

```css
/* Values */
background-size: cover;
background-size: contain;

/* Podemos usar 2 valores, o primeiro é para a largura da imagem e o segundo é para a altura */
background-size: 40% auto;
background-size: 2em 25%;
background-size: auto 8px;
background-size: auto auto;
```

- A propriedade `background-origin` é quem define o ponto de origem de uma imagem específica.

```css
/* Principais valores */
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;
```

- O `background-clip` define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.

```css
/* Principais valores */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;
```

A propriedade `background-attachment` determina se a posição da imagem vai ser fixa ou se vai rolar junto com o conteúdo.

```css
/* Principais valores */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;
```

Podemos usar o shorthand `background`para definir todos os valores do background

- `linear-gradient()` é a função usada para criar gradient linear com o CSS.

```css
background: linear-gradient(45deg, red, yellow)
```

- `radial-gradient()` é a função usada para criar gradient circular.

```css
background: radial-gradient(green, red, yellow)
background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 0, 0, 0.2))
```