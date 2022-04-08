# Posso ver e ouvir o HTML

```html
<!--
<video>
- src
- controls
- se não funcionar?
  - fallback content
- source
 - src
 - type

- sobre serviços de terceiros
-->

<video controls width="500" heigth="500" muted autoplay poster="imagem de fundo">
  <source src="caminho da midia" type="video/mp4">
</video>
```

```html
<!--
<audio>
- src
- controls
- se não funcionar?
  - fallback content
- source
 - src
 - type
- sobre serviços de terceiros
-->

<audio controls muted autoplay>
  <source src="caminho da midia" type="video/mp4">
</audio>
```

```html
<!--
<iframe>
- atributos
  - src
  - height
	- width
	- title
	- allowfullscrean
	- frameborder
-->

<iframe
	width="560"
  height="315"
	src="https://www.youtube.com/embed/RsASSnjlna4"
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

```html
<!--
<image>
- src
- alt
- title
- width
- height
- adicionando link
-->

<img src="#" alt="#" title="Colocar um titulo na imagem [HOVER]" /> 
```