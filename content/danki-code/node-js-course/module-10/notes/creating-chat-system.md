# Criando Sistema de Chat

```jsx
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
var users = []
var socketIds = []

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
  socket.on('new user', function (data) {
    if (usuarios.indexOf(data) != -1) {
      socket.emit('new user', { success: false })
    } else {
      usuarios.push(data)
      socketIds.push(socket.id)
      socket.emit('new user', { success: true })
    }
  })

  socket.on('chat message', obj => {
    if (
      usuarios.indexOf(obj.nome) != -1 &&
      usuarios.indexOf(obj.nome) == socketIds.indexOf(socket.id)
    ) {
      io.emit('chat message', obj)
    } else {
      console.log('Erro: Você não tem permissão para executar a ação.')
    }
  })

  socket.on('disconnect', () => {
    let id = socketIds.indexOf(socket.id)
    socketIds.splice(id, 1)
    usuarios.splice(id, 1)
    console.log(socketIds)
    console.log(usuarios)
    console.log('user disconnected')
  })
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})
```

```html
<!DOCTYPE html>

<html>
  <head>
    <title>Socket.IO chat</title>

    <style>
      body {
        margin: 0;
        padding-bottom: 3rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif;
      }

      #form {
        background: rgba(0, 0, 0, 0.15);
        padding: 0.25rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        height: 3rem;
        box-sizing: border-box;
        backdrop-filter: blur(10px);
      }

      #input {
        border: none;
        padding: 0 1rem;
        flex-grow: 1;
        border-radius: 2rem;
        margin: 0.25rem;
      }

      #input:focus {
        outline: none;
      }

      #form > button {
        background: #333;
        border: none;
        padding: 0 1rem;
        margin: 0.25rem;
        border-radius: 3px;
        outline: none;
        color: #fff;
      }

      #messages {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      #messages > li {
        padding: 0.5rem 1rem;
      }

      #messages > li {
        background-color: white;
      }
    </style>
  </head>

  <body>
    <ul id="messages"></ul>

    <form id="form" action="">
      <input id="input" autocomplete="off" /><button>Send</button>
    </form>

    <script src="/socket.io/socket.io.js"></script>

    <script>
      var socket = io()

      var nome = prompt('Qual seu nome?')

      socket.emit('new user', nome)

      socket.on('new user', function (data) {
        if (data.success) {
          alert('Bem-vindo ao Danki Chat ' + nome)
        } else {
          alert('Já existe usuário com este nome....')

          window.location.href = '/'
        }
      })

      var messages = document.getElementById('messages')

      var form = document.getElementById('form')

      var input = document.getElementById('input')

      form.addEventListener('submit', e => {
        e.preventDefault()

        if (input.value) {
          socket.emit('chat message', { msg: input.value, nome: nome })

          input.value = ''
        }
      })

      socket.on('chat message', function (obj) {
        if (obj.nome == nome) {
          //coloco a mensagem com uma cor.

          var item = document.createElement('li')

          item.style.backgroundColor = 'gray'

          item.textContent = obj.nome + ' disse: ' + obj.msg

          messages.appendChild(item)

          window.scrollTo(0, document.body.scrollHeight)
        } else {
          //coloco com outra.

          var item = document.createElement('li')

          item.textContent = obj.nome + ' disse: ' + obj.msg

          messages.appendChild(item)

          window.scrollTo(0, document.body.scrollHeight)
        }
      })
    </script>
  </body>
</html>
```