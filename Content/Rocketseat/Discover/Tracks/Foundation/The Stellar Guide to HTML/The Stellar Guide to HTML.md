# O Guia Estelar de HTML

## Atributos Globais

```html
- class
- contentedditable
- data-*
- hidden
- id
- style
- tabindex
- title
```

## Caracteres Reservados

```html
&nbsp;
&lt; - <
&gt; - >
&amp; - &
&quot; - "
&apos; - '
```

```html
<!-- ABREVIAÇÃO -->
<p>Usamos <abbr title="Hypertext Markup Language">HTML</abbr>  para estruturar nossos documentos da web.</p>
```

```html
<address>
    <p>Mayk Brito <br>
    <strong>Campo Grande, MS</strong>
    </p>
</address>
```

```html
<h2>Glossário</h2>
<dl>
    <dt>Hypertext</dt>
    <dd>É um hiper texto com possibilidades...</dd>

    <dt>Markup</dt>
    <dd>Marcação do texto</dd>

    <dt>Languague</dt>
    <dd>Linguagem com sua semântica e sintaxe....</dd>
</dl>
```

```html
<pre>
    <code>
        &lt;
    </code>
</pre>
```

```html
<table>
    <caption>Produzidos x Vendidos por Loja</caption>
 
    <colgroup>
        <col>
        <col span="2" style="background-color: red">
        <col span="2" style="background-color: blue;">
    </colgroup>
    
    <thead>
        <tr>
            <th rowspan="2"></th>
            <th colspan="2" scope="colgroup">Afonso Pena</th>
            <th colspan="2" scope="colgroup">Antônia Pereira</th>
        </tr>
        <tr>
            <th scope="col">Produzidos</th>
            <th scope="col">Vendidos</th>
            <th scope="col">Produzidos</th>
            <th scope="col">Vendidos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Vassouras</th>
            <td>50</td>
            <td>30</td>
            <td>20</td>
            <td>20</td>
        </tr>
        <tr>
            <th scope="row">Baldes</th>
            <td>10</td>
            <td>10</td>
            <td>30</td>
            <td>25</td>
        </tr>
    </tbody>
</table>
```

```html
<meta name="robots" content="index, follow">
```

```html
<head>
    <!-- Open Graph: facebook -->
    <meta property="og:image" content="https://cdn-images-1.medium.com/max/92/1*TkXVfLTwsHdwpUEjGzdi9w@2x.jpeg">
    <meta property="og:description" content="Aqui vem um texto para ser mostrado ao compartilhar no facebook">
    <meta property="og:title" content="Um site da Rocketseat">

    <!-- twitter -->
    <meta name="twitter:title" content="Rocketseat">
</head>
```