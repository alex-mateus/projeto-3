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
        { text: "Acredite em si próprio e todo o resto se encaixará.", author: "Walt Disney", category: "Motivação" },
        { text: "Só sei que nada sei.", author: "Sócrates", category: "Sabedoria" },
        { text: "A persistência é o caminho do êxito.", author: "Charles Chaplin", category: "Motivação" },
        { text: "Quem não luta pelo futuro que quer, deve aceitar o futuro que vier.", author: "Desconhecido", category: "Motivação" },
        { text: "O maior prazer da vida é fazer o que as pessoas dizem que você não pode fazer.", author: "Walter Bagehot", category: "Determinação" },
        { text: "Se você não pode fazer grandes coisas, faça pequenas coisas de maneira grandiosa.", author: "Napoleon Hill", category: "Sucesso" },
        { text: "Coragem é saber o que não temer.", author: "Platão", category: "Sabedoria" },
        { text: "A vida é maravilhosa se não se tem medo dela.", author: "Charles Chaplin", category: "Vida" },
        { text: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.", author: "Vidal Sassoon", category: "Trabalho" },
        { text: "Sorte é o que acontece quando a preparação encontra a oportunidade.", author: "Sêneca", category: "Sabedoria" },
        { text: "A verdadeira viagem de descoberta não consiste em procurar novas paisagens, mas em ter novos olhos.", author: "Marcel Proust", category: "Descoberta" },
        { text: "A felicidade não é algo pronto. Ela vem das suas próprias ações.", author: "Dalai Lama", category: "Felicidade" },
        { text: "O que quer que você possa fazer ou sonhar, comece. Ousadia tem genialidade, poder e magia em si.", author: "Johann Wolfgang von Goethe", category: "Inspiração" },
        { text: "O tempo que você gosta de perder não é tempo perdido.", author: "Marthe Troly-Curtin", category: "Vida" },
        { text: "A alegria evita mil males e prolonga a vida.", author: "William Shakespeare", category: "Felicidade" },
        { text: "A imaginação é mais importante que o conhecimento. O conhecimento é limitado. A imaginação circunda o mundo.", author: "Albert Einstein", category: "Criatividade" },
        { text: "Não espere. O tempo nunca será justo.", author: "Napoleon Hill", category: "Motivação" },
        { text: "A vida é 10% o que acontece comigo e 90% como eu reajo a isso.", author: "Charles Swindoll", category: "Vida" },
        { text: "Mantenha seus pensamentos positivos, porque seus pensamentos tornam-se suas palavras.", author: "Mahatma Gandhi", category: "Sabedoria" },
        { text: "A medida de quem somos é o que fazemos com o que temos.", author: "Vince Lombardi", category: "Motivação" },
        { text: "A vida é uma aventura ousada ou nada.", author: "Helen Keller", category: "Vida" },
        { text: "Não julgue cada dia pela colheita que você colhe, mas pelas sementes que você planta.", author: "Robert Louis Stevenson", category: "Inspiração" },
        { text: "Para cada minuto que você está com raiva, você perde sessenta segundos de felicidade.", author: "Ralph Waldo Emerson", category: "Felicidade" };
        { text: "A vida é uma estrada longa, com curvas, retas e desvios. Em cada passo, um desafio, em cada curva,um novo brilho.", author: "Alejandra Mateus" category:"Vida"};
        { text: "Os dias passam, rápidos ou lentos, e cada momento é um fragmento. De uma história, única e nossa, Feita de amor, de luta e glória.", author: "Alejandra Mateus" category: "Amor"};
        { text: "Há dias de sol, dias de chuva, e cada um traz sua lição. Na jornada, crescemos e aprendemos, em busca de realização.", author: "Alejandra Mateus" category: "Motivação"};
        { text: "Segue em frente, com esperança, o futuro é um mistério a desbravar. A vida é bela, uma dança, e cada instante, um despertar.", author: "Alejandra Mateus" category: "Inspiração"};
    ];
    
    const authors = [
        { name: "John Lennon" },
        { name: "Winston Churchill" },
        { name: "Alan Kay" },
        { name: "Wayne Gretzky" },
        { name: "Franklin D. Roosevelt" },
        { name: "Desconhecido" },
        { name: "Henry Ford" },
        { name: "Walt Disney" },
        { name: "Sócrates" },
        { name: "Charles Chaplin" },
        { name: "Walter Bagehot" },
        { name: "Napoleon Hill" },
        { name: "Platão" },
        { name: "Vidal Sassoon" },
        { name: "Sêneca" },
        { name: "Marcel Proust" },
        { name: "Dalai Lama" },
        { name: "Johann Wolfgang von Goethe" },
        { name: "Marthe Troly-Curtin" },
        { name: "William Shakespeare" },
        { name: "Albert Einstein" },
        { name: "Napoleon Hill" },
        { name: "Charles Swindoll" },
        { name: "Mahatma Gandhi" },
        { name: "Vince Lombardi" },
        { name: "Helen Keller" },
        { name: "Robert Louis Stevenson" },
        { name: "Ralph Waldo Emerson" }
        { name: "Alejandra Mateus" }
    ];
    
    const categories = [
        { name: "Vida" },
        { name: "Sucesso" },
        { name: "Futuro" },
        { name: "Motivação" },
        { name: "Sabedoria" },
        { name: "Determinação" },
        { name: "Trabalho" },
        { name: "Descoberta" },
        { name: "Felicidade" },
        { name: "Inspiração" },
        { name: "Criatividade" }
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

    document.addEventListener("DOMContentLoaded", function() {
        const container = document.getElementById("quotes-container");
    
        quotes.forEach(quote => {
            const quoteDiv = document.createElement("div");
            quoteDiv.classList.add("quote");
    
            const text = document.createElement("div");
            text.classList.add("text");
            text.innerHTML = `"${quote.text}"`;
            quoteDiv.appendChild(text);
    
            const author = document.createElement("div");
            author.classList.add("author");
            author.innerHTML = `- ${quote.author}`;
            quoteDiv.appendChild(author);
    
            const category = document.createElement("div");
            category.classList.add("category");
            category.innerHTML = quote.category;
            quoteDiv.appendChild(category);
    
            container.appendChild(quoteDiv);
        });
    });
    
});
    