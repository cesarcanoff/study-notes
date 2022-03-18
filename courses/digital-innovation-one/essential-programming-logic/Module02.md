# Módulo 02 - Introdução ao Portugol

## Entendendo o que é lógica

### Objetivos da Aula

1. Aprender o que é uma estrutura de repetição, e como usar;

---

### Definição

Dentro da lógica de programação é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador.

---

### Objetivos da Aula

1. Aprender o que são linguagens de programação;
2. Introdução ao Portugol.

---

### Definição

"Linguagem de Programação é uma linguagem escrita e formal que especifica um conjunto de instruções e regras usadas para gerar programas (software). Um software pode ser desenvolvido para rodar em um computador, dispositivo móvel ou em qualquer equipamento que permita sua execução"

---

### Baixo e Alto Nível

**Alto nível**
Essas são aquelas cuja sintaxe se aproxima mais da nossa linguagem e se distanciam mais da linguagem de máquina

**Baixo nível**
É aquela que se aproxima mais da linguagem de máquina. Essas são as que você precisa ter o conhecimento direto da arquitetura do computador para fazer alguma coisa.

---

### Compiladas ou Interpretadas

**Compiladas**
É uma linguagem de programação em que o código fonte, é executado diretamente pelo sistema operacional ou pelo processador, após ser traduzido por meio de um processo chamado compilação.

**Interpretadas**
É uma linguagem de programação em que o código fonte é executado por um programa de computador chamado interpretador, que em seguida é executado pelo sistema operacional ou processador.

---

### Portugol - Definição

"Portugol é uma pseudo-linguagem que permite ao leitor desenvolver algoritmos estruturados em português de forma simples e intuitiva, independentemente de linguagem de programação"

---

```html
programa {
	funcao Inicio () {
		escreva('Olá Mundo!')
	}
}
```

```html
programa {
	funcao Inicio () {
		real n1, n2, n3, n4, media
		cadeia nome
		escreva("Nome: ")
		leia(nome)
		escreva("Nota 01: ")
		leia(n1)
		escreva("Nota 02: ")
		leia(n2)
		escreva("Nota 03: ")
		leia(n3)
		escreva("Nota 04: ")
		leia(n4)
		media = ((n1 + n2 + n3 + n4) / 4)
		escreva('Olá' + nome + ' sua nota foi: ' + media)
	}
}
```

## Desvios Condicionais

### Objetivos da Aula

1. Aprender utilizar desvios condicionais;
2. Boas Práticas de Programação- Comentários.

---

### Utilização

“É utilizada a palavra reservada se, a condição a ser testada entre parênteses e as instruções que devem ser executadas entre chaves caso o desvio seja verdadeiro"

---

```html
programa {
	funcao Inicio () {
		real n1, n2, n3, n4, media
		cadeia nome
		escreva("Nome: ")
		leia(nome)
		escreva("Nota 01: ")
		leia(n1)
		escreva("Nota 02: ")
		leia(n2)
		escreva("Nota 03: ")
		leia(n3)
		escreva("Nota 04: ")
		leia(n4)
		media = ((n1 + n2 + n3 + n4) / 4)
		escreva('Olá' + nome + ' sua nota foi: ' + media)

		se (media >= 7.0) {
			escreva('ALUNO APROVADO')
		} senao {
			escreva('ALUNO REPROVADO')
		}
}
```