# Crop images

Mini app que e capaz de importar images, cortar-las e exporta-las permitindo fazer o doawnload pra uma pasta local.

---
### Ajustes iniciais (molezinha)

* [x] Ajustar os arquivos base da aplicacao
* [x] Criar o elemneto `button#select-image>input#photo-file[type=file]` para selecionar imagem
* [x] Estilizar botao de upload para esconder o campo de arquivo


### Select & Preview image ( tranquilidade )

* [x] Criar o arquivo scritps.js
* [x] Adicionar evento 'click' no elemento `#select-image`, que ira executar a funcionalidade de clicar no elemento `#photo-file`
* [x] Ao terminar o evento de carregar a DOM
* [x] Adicionar evento 'change' no elemento `#photo-file`
* [x] Criar um novo `FileReader()`
* [x] Usar a funcionalidade  `.readAsDataUrl()` para leitura do arquivo
* [x] Ao terminar de ler o arquivo, adicionar ao src do elemento `img#photo-preview` (criar no html)


### Selection tool

* [x] Criar elemento #selection-tool no html
* [x] Estilizar o elemento
* [x] No JS, criar eventos do mouse
  * [x] mouseouver, mousedown, mousemove, mouseup
* [x] Registrar eventos
* [x] Adiocionar funcionalidade aos eventos
  * [x] mouseouver: crosshair no cursor
  * [x] mouse:
    * [x] Registrar posicionamento iniciais de X e Y (absolutos e relativos)
    * [x] Adicionar flag de inicio de selecao
  * [x] mouseover:
    * [x] registrar posicionamentos finais de X e Y
    * [x] atualizar estilos visuais da selecao
  * [x] mouseup:
    * [x] Registra posicionamento final (relativo) do X e Y
    * [x] Remover flag de inicio de selecao


### Utilizando o canvas ao inves da imagem

* [x] Criar o elemento canvas
* [x] Criar o contexto do elemento
* [x] Ao terminar de carregar a imagem
  * [x] Ajustar a largura a altura do canvas
  * [x] Limpar o contexto
  * [x] Desenhar a imagem no contexto
  * [x] Atualizar o preview dw imagem, agora, com o conteudo ao inves da imagem

