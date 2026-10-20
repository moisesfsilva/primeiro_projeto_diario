// Selecionando os elementos
const form = document.getElementById('diary-form');
const textInput = document.getElementById('diary-text');
const moodInput = document.getElementById('mood');
const entriesList = document.getElementById('entries-list');
const btnPdf = document.getElementById('btn-pdf'); // O botão de PDF

// Lista para guardar os textos no navegador
let diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];

// 1. Função para renderizar (mostrar) as anotações
function renderEntries() {
    entriesList.innerHTML = '';
    
    diaryEntries.forEach(entry => {
        const li = document.createElement('li');
        li.className = 'entry-item';
        
        // Criando a área do texto (clicável para visualizar)
        const textDiv = document.createElement('div');
        textDiv.style.cursor = 'pointer'; // Muda a setinha do mouse para uma "mãozinha"
        textDiv.style.flexGrow = '1'; // Faz o texto ocupar o espaço máximo possível
        textDiv.innerHTML = `<strong>${entry.date} ${entry.mood}</strong><br>${entry.text.substring(0, 30)}...`;
        
        // VISUALIZAR: Quando clicar no texto, devolve pro editor
        textDiv.onclick = function() {
            visualizarEntrada(entry);
        };

        // Criando o botão de excluir
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '🗑️';
        deleteBtn.className = 'btn-delete';
        deleteBtn.title = "Excluir página";
        
        // EXCLUIR: Quando clicar na lixeira
        deleteBtn.onclick = function() {
            excluirEntrada(entry.id);
        };

        // Adiciona o texto e o botão dentro do item da lista
        li.appendChild(textDiv);
        li.appendChild(deleteBtn);
        entriesList.appendChild(li);
    });
}

// 2. Função de Visualizar
function visualizarEntrada(entry) {
    // Coloca o texto e o humor de volta na tela
    textInput.value = entry.text;
    moodInput.value = entry.mood;
    // DICA: Para BAIXAR, basta clicar no botão "Exportar para PDF" agora!
}

// 3. Função de Excluir
function excluirEntrada(id) {
    // Pede confirmação antes de apagar
    if(confirm("Tem certeza que deseja apagar esta página do diário?")) {
        // Filtra a lista deixando apenas as anotações que NÃO tem esse ID
        diaryEntries = diaryEntries.filter(entry => entry.id !== id);
        
        // Atualiza o navegador e a tela
        localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
        renderEntries();
        
        // Limpa a tela principal
        textInput.value = '';
    }
}

// 4. Salvar Nova Página
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const today = new Date().toLocaleDateString('pt-BR');
    
    // Cria o objeto com um ID único (usando os milissegundos atuais)
    const newEntry = {
        id: Date.now(), 
        date: today,
        mood: moodInput.value,
        text: textInput.value
    };
    
    diaryEntries.unshift(newEntry);
    localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
    
    textInput.value = '';
    renderEntries();
});

// Mostra as anotações antigas assim que a página carrega
renderEntries();

// 5. Sistema de PDF
if(btnPdf) {
    btnPdf.addEventListener('click', function() {
        const areaDoDiario = document.querySelector('.editor');
        const botoes = document.querySelectorAll('button');
        
        // Esconde botões para não sair na impressão
        botoes.forEach(botao => botao.style.display = 'none');

        const opcoes = {
            margin:       10,
            filename:     'pagina-diario.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opcoes).from(areaDoDiario).save().then(() => {
            // Mostra os botões de volta
            botoes.forEach(botao => botao.style.display = 'inline-block');
        });
    });
}