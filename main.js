const temas = {
    objetos: [
        ["lápis","Escola"],["caneta","Assinatura"],["borracha","Correção"],["caderno","Anotações"],
        ["mochila","Transporte"],["sapato","Caminhada"],["chinelo","Verão"],["camisa","Visual"],
        ["calça","Pernas"],["boné","Estilo"],["relógio","Pontualidade"],["celular","Conexão"],
        ["computador","Processamento"],["teclado","Digitação"],["mouse","Navegação"],["monitor","Imagem"],
        ["televisão","Entretenimento"],["controle","Distância"],["fone","Privacidade"],["carregador","Energia"],
        ["garrafa","Hidratação"],["copo","Bebida"],["prato","Refeição"],["garfo","Jantar"],
        ["faca","Corte"],["colher","Sopa"],["panela","Cozinha"],["frigideira","Fritura"],
        ["geladeira","Conservação"],["fogão","Chama"],["micro-ondas","Rapidez"],["liquidificador","Mistura"],
        ["vassoura","Limpeza"],["rodo","Chuva"],["balde","Volume"],["esponja","Espuma"],
        ["sabão","Higiene"],["toalha","Secagem"],["espelho","Reflexo"],["escova","Cerdas"],
        ["pente","Aparência"],["travesseiro","Descanso"],["cobertor","Inverno"],["cama","Sono"],
        ["sofá","Conforto"],["cadeira","Assento"],["mesa","Superfície"],["armário","Organização"],
        ["gaveta","Compartimento"],["chave","Acesso"],["cadeado","Segurança"],["guarda-chuva","Temporal"],
        ["óculos","Visão"],["cinto","Ajuste"],["carteira","Documentos"],["dinheiro","Valor"],
        ["moeda","Troco"],["cartão","Pagamento"],["tesoura","Recorte"],["cola","União"],
        ["régua","Precisão"],["calculadora","Operação"],["livro","Leitura"],["revista","Atualidade"],
        ["jornal","Notícia"],["envelope","Correspondência"],["carta","Mensagem"],["caixa","Armazenamento"],
        ["sacola","Compras"],["guarda-roupa","Vestimenta"],["ventilador","Brisa"],["ar-condicionado","Temperatura"],
        ["lâmpada","Claridade"],["lanterna","Escuridão"],["vela","Chama"],["isqueiro","Faísca"],
        ["martelo","Construção"],["chave de fenda","Manutenção"],["alicate","Pressão"],["furadeira","Perfuração"],
        ["serrote","Madeira"],["escada","Altura"],["bicicleta","Equilíbrio"],["skate","Manobra"],
        ["bola","Esporte"],["raquete","Rebatida"],["capacete","Proteção"],["carro","Viagem"],
        ["moto","Velocidade"],["ônibus","Coletivo"],["avião","Altitude"],["barco","Navegação"],
        ["guarda-sol","Praia"],["câmera","Registro"],["microfone","Voz"],["alto-falante","Volume"],
        ["impressora","Papel"],["pendrive","Arquivos"],["HD","Memória"],["tomada","Eletricidade"]
    ],
    esportes: [
        ["futebol","Estádio"],["basquete","Quadra"],["vôlei","Rede"],["tênis","Dupla"],
        ["natação","Piscina"],["boxe","Ringue"],["judô","Tatame"],["surfe","Onda"],
        ["skate","Manobra"],["ciclismo","Pedal"],["atletismo","Pista"],["ginástica","Acrobacia"],
        ["handebol","Gol"],["beisebol","Rebatida"],["golfe","Buraco"],["esgrima","Toque"],
        ["remo","Travessia"],["hipismo","Montaria"],["fórmula 1","Pit stop"],["xadrez","Estratégia"],
        ["badminton","Peteca"],["rúgbi","Contato"],["críquete","Taco"],["taekwondo","Chute"]
    ],
    paises: [
        ["Brasil","Carnaval"],["Argentina","Tango"],["Chile","Cordilheira"],["Peru","Altitude"],
        ["México","Mariachi"],["Canadá","Geada"],["Estados Unidos","Cinema"],["Japão","Arquipélago"],
        ["China","Muralha"],["Coreia do Sul","K-pop"],["Índia","Especiarias"],["Egito","Deserto"],
        ["França","Gastronomia"],["Itália","Arquitetura"],["Espanha","Flamenco"],["Portugal","Azulejos"],
        ["Inglaterra","Monarquia"],["Austrália","Outback"],["Alemanha","Engenharia"],["Grécia","Mitologia"],
        ["Turquia","Bósforo"],["Marrocos","Medina"],["Noruega","Fiordes"],["Suíça","Alpes"]
    ],
    comidas: [
        ["pizza","Forno"],["hambúrguer","Lanche"],["lasanha","Camadas"],["sushi","Hashi"],
        ["coxinha","Festa"],["brigadeiro","Granulado"],["feijoada","Panela"],["acarajé","Azeite"],
        ["tapioca","Goma"],["pastel","Feira"],["churrasco","Brasa"],["macarrão","Massa"],
        ["pão de queijo","Minas"],["açaí","Tigela"],["cachorro-quente","Molhos"],["panqueca","Recheio"],
        ["risoto","Arroz"],["taco","Tortilha"],["sorvete","Gelado"],["pipoca","Cinema"],
        ["moqueca","Panela"],["escondidinho","Camadas"],["nhoque","Domingo"],["waffle","Grade"]
    ],
    filmes: [
        ["Titanic","Navio"],["Avatar","Pandora"],["Matrix","Escolha"],["Interestelar","Relatividade"],
        ["Toy Story","Brinquedos"],["Shrek","Pântano"],["O Rei Leão","Savanna"],["Harry Potter","Magia"],
        ["Homem-Aranha","Teia"],["Batman","Gotham"],["Vingadores","Equipe"],["Coringa","Gotham"],
        ["Jurassic Park","Ilha"],["De Volta para o Futuro","Tempo"],["Forrest Gump","Corrida"],
        ["Gladiador","Arena"],["O Poderoso Chefão","Família"],["Rocky","Treino"],["Barbie","Rosa"],
        ["Oppenheimer","Ciência"],["Pantera Negra","Wakanda"],["Frozen","Gelo"],["Os Incríveis","Família"],
        ["Piratas do Caribe","Mar"],["Procurando Nemo","Oceano"],["Mad Max","Deserto"]
    ],
    musicas: [
        ["Bohemian Rhapsody","Coro"],["Billie Jean","Passos"],["Thriller","Dança"],["Imagine","Piano"],
        ["Shape of You","Violão"],["Blinding Lights","Noite"],["Despacito","Verão"],["Evidências","Sertanejo"],
        ["Faroeste Caboclo","Narrativa"],["Tempo Perdido","Juventude"],["Pais e Filhos","Família"],
        ["Asa Branca","Sertão"],["Garota de Ipanema","Praia"],["Cheia de Manias","Pagode"],
        ["Ai Se Eu Te Pego","Dança"],["Meteoro","Romance"],["Anna Júlia","Banda"],["Meu Abrigo","Afeto"],
        ["Velha Infância","Memória"],["Aquarela","Infância"],["Halo","Voz"],["Bad Guy","Sussurro"],
        ["Uptown Funk","Groove"],["Perfect","Casamento"],["Smells Like Teen Spirit","Grunge"]
    ],
    empregos: [
        ["médico","Plantão"],["professor","Sala"],["engenheiro","Projeto"],["programador","Código"],
        ["designer","Criação"],["fotógrafo","Enquadramento"],["jornalista","Apuração"],["advogado","Processo"],
        ["arquiteto","Planta"],["chef","Cozinha"],["garçom","Atendimento"],["motorista","Trajeto"],
        ["piloto","Cabine"],["mecânico","Oficina"],["eletricista","Fiação"],["encanador","Tubulação"],
        ["bombeiro","Emergência"],["policial","Patrulha"],["dentista","Consultório"],["veterinário","Animais"],
        ["agricultor","Colheita"],["padeiro","Madrugada"],["barbeiro","Navalha"],["ator","Palco"],
        ["músico","Ensaio"],["cientista","Laboratório"],["fotógrafo","Lente"],["bibliotecário","Acervo"]
    ],
    marcas: [
        ["Toyota","Estrada"],["Ferrari","Velocidade"],["Lamborghini","Exótico"],["Porsche","Curvas"],
        ["BMW","Sedã"],["Mercedes-Benz","Luxo"],["Ford","Picape"],["Chevrolet","Garagem"],
        ["Volkswagen","Hatch"],["Honda","Motor"],["Yamaha","Duas rodas"],["Jeep","Trilha"],
        ["Nike","Quadra"],["Adidas","Três listras"],["Puma","Salto"],["Vans","Skate"],
        ["Lacoste","Polo"],["Levi's","Jeans"],["Gucci","Passarela"],["Zara","Vitrine"],
        ["Apple","Ecossistema"],["Samsung","Tela"],["Sony","PlayStation"],["Microsoft","Windows"],
        ["Google","Busca"],["Nintendo","Controle"],["Netflix","Maratona"],["Coca-Cola","Refresco"],
        ["McDonald's","Drive-thru"],["Nescau","Café da manhã"],["Lego","Blocos"],["Ray-Ban","Armação"]
    ]
};

const nomesTemas = {
    objetos:"Objetos", esportes:"Esportes", paises:"Países", comidas:"Comidas",
    filmes:"Filmes", musicas:"Músicas", empregos:"Empregos", marcas:"Marcas"
};

for (const tema in temas) {
    temas[tema] = temas[tema].map(([nome, dica]) => ({ nome, dica }));
}

const setupScreen = document.getElementById("setup-screen");
const displayGame = document.getElementById("display-game");
const input = document.getElementById("input");
const inputError = document.getElementById("input-erro");
const listPlayers = document.getElementById("list-players");
const emptyState = document.getElementById("empty-state");
const playerCount = document.getElementById("player-count");
const playerForm = document.getElementById("player-form");
const playGame = document.getElementById("play-game");

let players = [];
let jogadorAtual = 0;
let objetoSorteado = null;
let impostor = -1;
let temaSelecionado = "objetos";
let temaDaPartida = "objetos";
let votoSelecionado = null;

function escaparHTML(texto) {
    return String(texto)
        .replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")
        .replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

function mostrarErro(mensagem="") {
    inputError.textContent = mensagem;
}

function atualizarContador() {
    const total = players.length;
    playerCount.textContent = `${total} ${total === 1 ? "jogador" : "jogadores"}`;
    emptyState.classList.toggle("hidden", total > 0);
    playGame.disabled = total < 4;
    playGame.style.opacity = total < 4 ? ".65" : "1";
}

function renderizarJogadores() {
    listPlayers.innerHTML = "";
    players.forEach((nome,index) => {
        const li = document.createElement("li");
        li.className = "player-item";
        li.style.animationDelay = `${index * 35}ms`;
        li.innerHTML = `
            <span class="player-number">${index + 1}</span>
            <span class="player-name">${escaparHTML(nome)}</span>
            <button class="remove-player" type="button" data-index="${index}" aria-label="Remover ${escaparHTML(nome)}">×</button>
        `;
        listPlayers.appendChild(li);
    });
    atualizarContador();
}

function trocarTela(html) {
    displayGame.innerHTML = html;
    displayGame.classList.remove("hidden");
    void displayGame.offsetWidth;
    displayGame.classList.add("game-screen");
    window.scrollTo({top:0,behavior:"smooth"});
}

function iniciarJogoVisual() {
    setupScreen.classList.add("hidden");
    displayGame.classList.remove("hidden");
}

document.getElementById("theme-grid").addEventListener("click",(event)=>{
    const option = event.target.closest(".theme-option");
    if (!option) return;

    temaSelecionado = option.dataset.theme;
    document.querySelectorAll(".theme-option").forEach(item=>{
        item.classList.toggle("selected",item === option);
    });

    document.getElementById("selected-theme").textContent =
        temaSelecionado === "aleatorio" ? "Surpresa 🎲" : nomesTemas[temaSelecionado];
});

playerForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nome = input.value.trim();

    if (!nome) return mostrarErro("Digite um nome antes de adicionar.");
    if (nome.length < 2) return mostrarErro("Use pelo menos 2 caracteres.");
    if (players.some(p=>p.toLowerCase() === nome.toLowerCase())) {
        mostrarErro("Esse jogador já está na partida.");
        input.select();
        return;
    }
    if (players.length >= 20) return mostrarErro("Limite de 20 jogadores atingido.");

    players.push(nome);
    input.value = "";
    mostrarErro("");
    renderizarJogadores();
    input.focus();
});

listPlayers.addEventListener("click",(event)=>{
    const button = event.target.closest(".remove-player");
    if (!button) return;

    const index = Number(button.dataset.index);
    const item = button.closest(".player-item");
    item.style.transform = "translateX(25px) scale(.9)";
    item.style.opacity = "0";

    setTimeout(()=>{
        players.splice(index,1);
        renderizarJogadores();
    },180);
});

function prepararPartida() {
    const temasDisponiveis = Object.keys(nomesTemas);
    const temaFinal = temaSelecionado === "aleatorio"
        ? temasDisponiveis[Math.floor(Math.random()*temasDisponiveis.length)]
        : temaSelecionado;

    temaDaPartida = temaFinal;
    const banco = temas[temaFinal];
    objetoSorteado = banco[Math.floor(Math.random()*banco.length)];
    impostor = Math.floor(Math.random()*players.length);
    jogadorAtual = 0;
    votoSelecionado = null;
}

playGame.addEventListener("click",()=>{
    if (players.length < 4) {
        mostrarErro(`Adicione pelo menos 4 jogadores. Faltam ${4-players.length}.`);
        return;
    }
    prepararPartida();
    iniciarJogoVisual();
    mostrarJogador();
});

function mostrarJogador() {
    const nome = escaparHTML(players[jogadorAtual]);
    const progresso = (jogadorAtual / players.length) * 100;

    trocarTela(`
        <article class="game-card">
            <div class="progress" style="width:${progresso}%"></div>
            <span class="player-badge">JOGADOR ${jogadorAtual+1} DE ${players.length}</span>
            <h2 class="player-big-name">${nome}</h2>
            <p class="game-subtitle">Passe o celular para <strong>${nome}</strong>. Quando estiver sozinho, toque abaixo para revelar seu papel.</p>
            <button class="game-button" id="ver-palavra" type="button">👁️ Revelar minha informação</button>
            <p class="game-subtitle" style="margin-top:12px;font-size:.75rem">🔒 Não deixe ninguém olhar.</p>
        </article>
    `);
    document.getElementById("ver-palavra").addEventListener("click",mostrarInformacao);
}

function mostrarInformacao() {
    const nome = escaparHTML(players[jogadorAtual]);
    const ehImpostor = jogadorAtual === impostor;

    trocarTela(`
        <article class="game-card">
            <div class="progress" style="width:${((jogadorAtual+1)/players.length)*100}%"></div>
            <span class="player-badge">${nome}</span>
            <h2 class="role-title ${ehImpostor ? "impostor":"innocent"}">${ehImpostor ? "🚨 VOCÊ É O IMPOSTOR":"✅ VOCÊ É INOCENTE"}</h2>
            <p class="game-subtitle">${ehImpostor
                ? "Você não recebeu a palavra. Use a dica para descobrir o tema sem se entregar."
                : "Memorize sua palavra e não conte para ninguém."}</p>
            <div class="secret-box">
                <span class="secret-label">${ehImpostor ? "Sua dica":"Sua palavra"}</span>
                <strong class="secret-value">${escaparHTML(ehImpostor ? objetoSorteado.dica : objetoSorteado.nome)}</strong>
            </div>
            <button class="game-button" id="esconder" type="button">🔒 Esconder e passar</button>
        </article>
    `);
    document.getElementById("esconder").addEventListener("click",proximoJogador);
}

function proximoJogador() {
    jogadorAtual++;
    if (jogadorAtual < players.length) mostrarJogador();
    else finalizarDistribuicao();
}

function finalizarDistribuicao() {
    trocarTela(`
        <article class="game-card">
            <span class="player-badge">DISTRIBUIÇÃO CONCLUÍDA</span>
            <h2 class="role-title innocent">🎭 Tudo pronto!</h2>
            <p class="game-subtitle">Todos receberam sua informação. Agora começa a investigação.</p>
            <button class="game-button" id="comecar-rodada" type="button">🚀 Começar rodada</button>
        </article>
    `);
    document.getElementById("comecar-rodada").addEventListener("click",iniciarRodada);
}

function iniciarRodada() {
    trocarTela(`
        <article class="game-card">
            <span class="player-badge">RODADA ATIVA • ${escaparHTML(nomesTemas[temaDaPartida])}</span>
            <h2 class="role-title">🕵️ Hora da investigação</h2>
            <p class="game-subtitle">Façam perguntas, deem pistas sem entregar a palavra e tentem descobrir quem está escondendo a verdade.</p>
            <button class="game-button" id="votar" type="button">🗳️ Abrir votação</button>
            <button class="game-button secondary-button" id="mostrar-jogadores" type="button">👥 Ver jogadores</button>
            <button class="game-button secondary-button" id="revelar-impostor" type="button">🚨 Revelar impostor</button>
        </article>
    `);
    document.getElementById("votar").addEventListener("click",mostrarVotacao);
    document.getElementById("mostrar-jogadores").addEventListener("click",mostrarListaJogadores);
    document.getElementById("revelar-impostor").addEventListener("click",mostrarResultado);
}

function mostrarVotacao() {
    votoSelecionado = null;
    const botoes = players.map((nome,index)=>`
        <button class="vote-button" type="button" data-index="${index}">
            ${index+1}. ${escaparHTML(nome)}
        </button>
    `).join("");

    trocarTela(`
        <article class="game-card">
            <span class="player-badge">VOTAÇÃO</span>
            <h2 class="role-title">🗳️ Quem é o impostor?</h2>
            <p class="game-subtitle">Escolha apenas um jogador. A identidade será revelada depois da confirmação.</p>
            <div class="vote-grid" id="vote-grid">${botoes}</div>
            <button class="game-button" id="confirmar-voto" type="button" disabled>🔎 Confirmar suspeito</button>
            <button class="game-button secondary-button" id="voltar-rodada" type="button">← Voltar</button>
        </article>
    `);

    document.getElementById("vote-grid").addEventListener("click",(event)=>{
        const button = event.target.closest(".vote-button");
        if (!button) return;
        votoSelecionado = Number(button.dataset.index);
        document.querySelectorAll(".vote-button").forEach(b=>b.classList.toggle("selected",b===button));
        document.getElementById("confirmar-voto").disabled = false;
        document.getElementById("confirmar-voto").style.opacity = "1";
    });

    document.getElementById("confirmar-voto").addEventListener("click",()=>{
        if (votoSelecionado === null) return;
        mostrarResultado(votoSelecionado);
    });
    document.getElementById("voltar-rodada").addEventListener("click",iniciarRodada);
}

function mostrarListaJogadores() {
    const lista = players.map((nome,index)=>`
        <li style="animation-delay:${index*45}ms"><strong>${index+1}.</strong> ${escaparHTML(nome)}</li>
    `).join("");

    trocarTela(`
        <article class="game-card">
            <span class="player-badge">PARTICIPANTES</span>
            <h2 class="role-title">👥 Quem está jogando?</h2>
            <ul class="final-list">${lista}</ul>
            <p class="game-subtitle">A discussão está liberada. Quem parece suspeito?</p>
            <div class="action-row">
                <button class="game-button secondary-button" id="votar-da-lista" type="button">🗳️ Votar</button>
                <button class="game-button" id="revelar-da-lista" type="button">🚨 Revelar</button>
            </div>
            <button class="game-button secondary-button" id="voltar-rodada" type="button">← Voltar</button>
        </article>
    `);

    document.getElementById("votar-da-lista").addEventListener("click",mostrarVotacao);
    document.getElementById("revelar-da-lista").addEventListener("click",()=>mostrarResultado());
    document.getElementById("voltar-rodada").addEventListener("click",iniciarRodada);
}

function mostrarResultado(voto = null) {
    const nomeImpostor = escaparHTML(players[impostor]);
    const palavra = escaparHTML(objetoSorteado.nome);
    const votouNoImpostor = voto !== null && voto === impostor;

    const avaliacao = voto === null
        ? "A identidade foi revelada."
        : votouNoImpostor
            ? `🎯 Acertaram! ${escaparHTML(players[voto])} era o impostor.`
            : `❌ O suspeito era ${escaparHTML(players[voto])}, mas o impostor era ${nomeImpostor}.`;

    trocarTela(`
        <article class="game-card result-card">
            <span class="player-badge">RESULTADO DA RODADA</span>
            <div class="result-icon">🚨</div>
            <h2 class="role-title impostor">O IMPOSTOR ERA...</h2>
            <div class="impostor-reveal">
                <span class="secret-label">IDENTIDADE REVELADA</span>
                <strong>${nomeImpostor}</strong>
            </div>
            <div class="secret-box">
                <span class="secret-label">A informação era</span>
                <strong class="secret-value">${palavra}</strong>
            </div>
            <p class="game-subtitle">${avaliacao}<br>Tema: <strong>${escaparHTML(nomesTemas[temaDaPartida])}</strong>.</p>
            <div class="action-row">
                <button class="game-button secondary-button" id="nova-partida" type="button">🔄 Nova rodada</button>
                <button class="game-button" id="reiniciar" type="button">🏠 Menu</button>
            </div>
        </article>
    `);

    document.getElementById("nova-partida").addEventListener("click",novaPartida);
    document.getElementById("reiniciar").addEventListener("click",reiniciarTudo);
}

function novaPartida() {
    prepararPartida();
    mostrarJogador();
}

function reiniciarTudo() {
    jogadorAtual = 0;
    objetoSorteado = null;
    impostor = -1;
    votoSelecionado = null;
    displayGame.classList.add("hidden");
    setupScreen.classList.remove("hidden");
    renderizarJogadores();
    window.scrollTo({top:0,behavior:"smooth"});
    input.focus();
}

renderizarJogadores();
