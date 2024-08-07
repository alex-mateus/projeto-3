// Você pode adicionar dados em um arquivo separado para manter o script.js mais limpo
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
    { text: "Para cada minuto que você está com raiva, você perde sessenta segundos de felicidade.", author: "Ralph Waldo Emerson", category: "Felicidade" },
    { text: "O sucesso não é o final, o fracasso não é fatal: é a coragem para continuar que conta.", author: "Winston Churchill", category: "Determinação" },
    { text: "A vida é realmente simples, mas insistimos em torná-la complicada.", author: "Confúcio", category: "Sabedoria" },
    { text: "A única maneira de fazer um excelente trabalho é amar o que você faz.", author: "Steve Jobs", category: "Trabalho" },
    { text: "Se você quer viver uma vida feliz, amarre-se a um objetivo, não a pessoas ou coisas.", author: "Albert Einstein", category: "Vida" },
    { text: "A melhor maneira de começar é parar de falar e começar a fazer.", author: "Walt Disney", category: "Ação" },
    { text: "As dificuldades preparam pessoas comuns para destinos extraordinários.", author: "C.S. Lewis", category: "Motivação" },
    { text: "No meio do inverno, aprendi enfim que havia em mim um verão invencível.", author: "Albert Camus", category: "Esperança" },
    { text: "Não me pergunte quem sou e não me diga para permanecer o mesmo.", author: "Michel Foucault", category: "Identidade" },
    { text: "Ser feliz sem motivo é a mais autêntica forma de felicidade.", author: "Carlos Drummond de Andrade", category: "Felicidade" },
    { text: "Não existe um caminho para a felicidade. A felicidade é o caminho.", author: "Thich Nhat Hanh", category: "Felicidade" },
    { text: "A beleza está nos olhos de quem vê.", author: "Margaret Wolfe Hungerford", category: "Beleza" },
    { text: "O essencial é invisível aos olhos.", author: "Antoine de Saint-Exupéry", category: "Essência" },
    { text: "A poesia é a arte de dar sentido ao absurdo.", author: "Milan Kundera", category: "Poesia" },
    { text: "A poesia é o eco da melodia do universo no coração dos humanos.", author: "Rabindranath Tagore", category: "Poesia" },
    { text: "A poesia é quando uma emoção encontra seu pensamento e o pensamento encontra palavras.", author: "Robert Frost", category: "Poesia" },
    { text: "A poesia é a linguagem dos deuses.", author: "Píndaro", category: "Poesia" },
    { text: "A vida é poesia em movimento.", author: "Ralph Waldo Emerson", category: "Vida" },
    { text: "A poesia é uma janela para a alma.", author: "Walt Whitman", category: "Poesia" },
    { text: "Eu canto porque o instante existe e a minha vida está completa.", author: "Cecília Meireles", category: "Poesia" },
    { text: "Amar é mudar a alma de casa.", author: "Mário Quintana", category: "Amor" },
    { text: "A liberdade é a possibilidade do isolamento. Se te é impossível viver só, nasceste escravo.", author: "Fernando Pessoa", category: "Liberdade" },
    { text: "Tudo vale a pena quando a alma não é pequena.", author: "Fernando Pessoa", category: "Inspiração" },
    { text: "Não sou nada. Nunca serei nada. Não posso querer ser nada. À parte isso, tenho em mim todos os sonhos do mundo.", author: "Fernando Pessoa", category: "Sonhos" },
    { text: "Para viajar basta existir.", author: "Fernando Pessoa", category: "Viagem" },
    { text: "Tudo que é sólido desmancha no ar.", author: "Karl Marx", category: "Transitoriedade" },
    { text: "A minha pátria é a língua portuguesa.", author: "Fernando Pessoa", category: "Identidade" },
    { text: "Navegar é preciso; viver não é preciso.", author: "Fernando Pessoa", category: "Vida" }
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
    { name: "Charles Swindoll" },
    { name: "Mahatma Gandhi" },
    { name: "Vince Lombardi" },
    { name: "Helen Keller" },
    { name: "Robert Louis Stevenson" },
    { name: "Ralph Waldo Emerson" },
    { name: "Confúcio" },
    { name: "Steve Jobs" },
    { name: "C.S. Lewis" },
    { name: "Albert Camus" },
    { name: "Michel Foucault" },
    { name: "Carlos Drummond de Andrade" },
    { name: "Thich Nhat Hanh" },
    { name: "Margaret Wolfe Hungerford" },
    { name: "Antoine de Saint-Exupéry" },
    { name: "Milan Kundera" },
    { name: "Rabindranath Tagore" },
    { name: "Robert Frost" },
    { name: "Píndaro" },
    { name: "Walt Whitman" },
    { name: "Cecília Meireles" },
    { name: "Mário Quintana" },
    { name: "Fernando Pessoa" },
    { name: "Karl Marx" }
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
    { name: "Criatividade" },
    { name: "Ação" },
    { name: "Esperança" },
    { name: "Identidade" },
    { name: "Beleza" },
    { name: "Essência" },
    { name: "Poesia" },
    { name: "Amor" },
    { name: "Liberdade" },
    { name: "Sonhos" },
    { name: "Viagem" },
    { name: "Transitoriedade" }
];