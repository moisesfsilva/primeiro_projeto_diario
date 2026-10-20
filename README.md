# 📖 Meu Diário Virtual

Um projeto web de um diário virtual pessoal, construído para praticar os fundamentos de desenvolvimento web (HTML, CSS e JavaScript). Ele permite escrever anotações diárias, registrar o humor do dia e exportar as páginas como PDF.

## ✨ Funcionalidades

- **📝 Escrita e Leitura:** Criação de novas páginas no diário e leitura de anotações antigas.
- **😊 Rastreador de Humor:** Seleção de emojis para registrar o sentimento do dia.
- **💾 Armazenamento Local:** Utilização do `localStorage` do navegador para salvar os dados (as anotações não são perdidas ao fechar a página).
- **🗑️ Gerenciamento (CRUD):** Capacidade de visualizar e excluir páginas antigas do histórico.
- **📄 Exportação para PDF:** Funcionalidade que permite baixar a página do dia em formato `.pdf` utilizando a biblioteca `html2pdf.js`.
- **📱 Responsividade:** O layout se adapta perfeitamente a computadores, tablets e celulares (graças ao uso de *Media Queries* no CSS).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização, layout (Flexbox) e design responsivo.
- **JavaScript (Vanilla):** Lógica de programação, manipulação do DOM e integração com o Local Storage.
- **Bibliotecas Externas:** [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) (via CDN).
