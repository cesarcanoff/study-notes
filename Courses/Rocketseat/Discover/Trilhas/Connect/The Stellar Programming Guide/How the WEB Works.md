# Como funciona a Web?

# Caminho Simples

- Você quer entrar em um site, então abre o seu navegador
- Acesso o site desejado

---

# Caminho Avançado

- Você digita a URL: “https://rocketseat.com.br”
    - HTTP
        - Hypertext Transfer Protocol
            - Função: Trocar mensagens entre computadores
            - Mensagem
                - Mensagem quebrada em vários pedaços [chunks]
    - URL
        - Uniform Resource Locator
            - Localizador e identificador de um recurso
            - Recurso, nesse caso, é o site
- É iniciada uma linha de comunicação, através do protocolo TCP, entre o seu computador [cliente] até o computador que tem a página [servidor]
    - Cliente
        - O computador, dispositivo ou aplicativo que faz o pedido
        - Browser
    - Servidor
        - Computador configurado para receber os pedidos e enviar respostas aos pedidos
    - TCP
        - Transmission Control Protocol
        - Função Garantir que os pacotes cheguem corretamente ao destino
- O endereço é convertido em um IP [76.76.21.21] através do DNS
    - IP
        - Internet Protocol
        - Função: Endereçamento dos computadores
    - DNS
        - Domain Name Servers
        - Função: Converter um domínio em um endereço de IP
- Seu pedido está percorrendo diversos Proxies
    - Proxy
        - Qualquer dispositivo no mio do caminho
        - Modem, roteador, outros computadores
        - Função: Encaminhamento dos pacotes
- Seu pedido chega até o servidor
- Servidor analisa se pedido e te dá uma resposta, neste caso, positiva
- O caminho de volta é semelhante ao de ida, passando pela linha de comunicação que foi criada
- O browser recebe os pedaços e monta a tela do site para você
- Esse processo acontece muitas vezes, pois para cada recurso [HTML, CSS, Javascript, imagem e etc] é feita uma nova conexão