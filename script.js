document.addEventListener('DOMContentLoaded', () => {
    const quotesList = document.getElementById('quotes-list');
    const authorsList = document.getElementById('authors-list');
    const categoriesList = document.getElementById('categories-list');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const submitForm = document.getElementById('submit-form');

    // Citações e autores de exemplo
    const quotes = [
        { text: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.", author: "John Lennon", category: "Vida" },
        { text: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", author: "Winston Churchill", category: "Sucesso" },
        { text: "A melhor maneira de prever o futuro é inventá-lo.", author: "Alan Kay", category: "Futuro" },
        { text: "Você perde 100% dos tiros que não dá.", author: "Wayne Gretzky", category: "Motivação" },
        { text: "O único limite para a nossa realização de amanhã são as nossas dúvidas de hoje.", author: "Franklin D. Roosevelt", category: "Motivação" },
        { text: "Não pare quando estiver cansado. Pare quando tiver terminado.", author: "Desconhecido", category: "Motivação" },
        { text: "O fracasso é apenas a oportunidade de começar de novo, desta vez de forma mais inteligente.", author: "Henry Ford", category: "Sucesso" },
        { text: "Acredite em si próprio e todo o resto se encaixará.", author: "Walt Disney", category: "Motivação" }
    ];

    const authors = [
        { name: "John Lennon" },
        { name: "Winston Churchill" },
        { name: "Alan Kay" },
        { name: "Wayne Gretzky" },
        { name: "Franklin D. Roosevelt" },
        { name: "Desconhecido" },
        { name: "Henry Ford" },
        { name: "Walt Disney" }
    ];

    const categories = [
        { name: "Vida" },
        { name: "Sucesso" },
        { name: "Futuro" },
        { name: "Motivação" }
    ];

    // Exibir citações na página inicial
    function displayQuotes(quotes) {
        quotesList.innerHTML = '';
        quotes.forEach(quote => {
            const quoteElement = document.createElement('div');
            quoteElement.classList.add('quote');
            quoteElement.innerHTML = `
                <p>"${quote.text}"</p>
                <p class="author">- ${quote.author}</p>
                <p class="category">${quote.category}</p>
            `;
            quotesList.appendChild(quoteElement);
        });
    }

    // Exibir autores na página de autores
    function displayAuthors(authors) {
        if (authorsList) {
            authorsList.innerHTML = '';
            authors.forEach(author => {
                const authorElement = document.createElement('div');
                authorElement.classList.add('author');
                authorElement.innerHTML = `<p>${author.name}</p>`;
                authorsList.appendChild(authorElement);
            });
        }
    }

    // Exibir categorias na página de categorias
    function displayCategories(categories) {
        if (categoriesList) {
            categoriesList.innerHTML = '';
            categories.forEach(category => {
                const categoryElement = document.createElement('div');
                categoryElement.classList.add('category');
                categoryElement.innerHTML = `<p>${category.name}</p>`;
                categoriesList.appendChild(categoryElement);
            });
        }
    }

    // Buscar citações
    function searchQuotes(query) {
        const filteredQuotes = quotes.filter(quote => 
            quote.text.toLowerCase().includes(query.toLowerCase()) ||
            quote.author.toLowerCase().includes(query.toLowerCase())
        );
        displayQuotes(filteredQuotes);
    }

    // Adicionar nova citação
    function addQuote(quote, author, category) {
        quotes.push({ text: quote, author: author, category: category });
        displayQuotes(quotes);
    }

    // Inicialização
    displayQuotes(quotes);
    displayAuthors(authors);
    displayCategories(categories);

    // Evento de busca
    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        searchQuotes(query);
    });

    // Evento de submissão de nova frase
    if (submitForm) {
        submitForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const quote = document.getElementById('quote').value;
            const author = document.getElementById('author').value;
            const category = document.getElementById('category').value;
            addQuote(quote, author, category);
            submitForm.reset();
            alert("Frase submetida com sucesso!");
        });
    }
});
