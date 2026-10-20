# primeiro_projeto_diario
# 📖 Meu Diário Virtual  Um aplicativo web front-end responsivo desenvolvido para simular a experiência de um caderno físico no ambiente digital. O projeto permite a criação, visualização, exclusão e exportação de anotações diárias, armazenando os dados diretamente no navegador do usuário. 

## ✨ Funcionalidades
## * **Rastreador de Humor:** Seleção de emojis (Feliz, Tranquilo, Triste, Irritado) para representar o sentimento do dia.
## * **Armazenamento Local (Local Storage):** As entradas do diário são salvas automaticamente no navegador do usuário, garantindo que os dados não sejam perdidos ao fechar a página ou atualizar o site.
## * **Gerenciamento de Histórico (CRUD):** 
  ## * **Visualizar:** É possível recarregar páginas antigas clicando nos itens da barra lateral.
  ## * **Excluir:** Botão dedicado para apagar registros individuais permanentemente.
## * **Exportação para PDF:** Integração com a biblioteca `html2pdf.js` para baixar as entradas do diário formatadas em um documento PDF, ocultando automaticamente os botões da interface durante a impressão.
## * **Design Responsivo:** A interface utiliza *Media Queries* para se adaptar perfeitamente a telas de computadores, tablets e celulares (o layout empilha os elementos em telas menores para facilitar o uso).

## 🛠️ Tecnologias e Conceitos Utilizados

## * **HTML5:** Estruturação semântica e importação de fontes externas (Google Fonts - Caveat).
## * **CSS3:** Estilização visual com paleta de cores em tons pastéis (estética de caderno), variáveis nativas (`:root`), e layout utilizando *Flexbox*.
## * **JavaScript:** Manipulação do DOM, manipulação de eventos de formulários, geração de IDs únicos com `Date.now()` e lógica estrutural.
## * **Bibliotecas Externas (CDN):** Uso de scripts de terceiros (`html2pdf.js`) para estender as capacidades nativas do navegador.
## * **Controle de Versão:** Git e GitHub para versionamento de código e hospedagem.