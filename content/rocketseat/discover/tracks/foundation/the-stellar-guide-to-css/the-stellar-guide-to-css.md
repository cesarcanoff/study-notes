# O Guia Estelar de CSS

```html
<div id="container" class="m-40">
	<h1>Título</h1>
	<h2>Subtitulo</h2>
</div>
```

```css
CSS
/* ID selector */
#container {
	width: 200px;
}

/* Class selector */
.m-40 {
	margin: 40px;
}

/* Element/Type selector + Agrupamento de seletores */
h1, h2 {
	color: blue;
	font-size: 60px;
	background: gray;
}
```

```html
<h1 style="color: blue;">Título
	<strong style="color: red;">alo</strong>
</h1>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
	<style>
	h1 {
			color: blue;
			}
	
	strong {
			color: red;
			}
	</style>
</head>
```

```css
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand*/
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */ 
    font: bold italic .8em/1.2 Arial, sans-serif;
}
```

```css
p {
	-webkit-background-clip: text; /*Chrome, Safari, iOS e Android*/
	-moz-background-clip: text; /* Mozilla (Firefox) */
	-ms-background-clip: text; /* Internet Explorer ou Edge*/
	-o-background-clip: text; /* Opera */
```