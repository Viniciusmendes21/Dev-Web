let dados;

const divPesquisa = document.createElement('div');
divPesquisa.style.textAlign = 'center';

const inputPesquisa = document.createElement('input');
inputPesquisa.type = 'text';

divPesquisa.appendChild(inputPesquisa);
document.body.appendChild(divPesquisa);

const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';
container.style.gap = '.5rem';


document.body.appendChild(container);

const handleClick = (evento) => {
    const dados = evento.target.closest('article').dataset;
    const params = new URLSearchParams();

    for(const propriedade in dados) {
        // cookie
        document.cookie = `${propriedade}=${dados[propriedade]}`;

        // localStorage item por item
        params.append(propriedade, dados[propriedade]);
        localStorage.setItem(propriedade, dados[propriedade]);

        // localStorage objeto
        localStorage.setItem('atleta', JSON.stringify(dados))
    }

    const queryString = params.toString();
    const novaURL = `outra.html?${queryString}`;

    window.location.href = novaURL;
}

const achaCookie = ( chave ) => {
    const arrayCookies = document.cookie.split("; ");
    const procurado = arrayCookies.find(
        ( e ) => e.startsWith(`${chave}=`)
    )
    return procurado?.split("=")[1];
}

const montaCard =  (entrada) => {
    const card = document.createElement('article');
    card.style.cssText = `
    width: 30rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
    "a1 a2"
    "a1 a3"
    "a4 a4"
    "a5 a5";
    border: solid black;
    padding: .3rem;
    margin: .5rem;
    `

    card.dataset.id = entrada.id;
    card.dataset.elenco = entrada.elenco;
    card.dataset.nome = entrada.nome;
    card.dataset.posicao = entrada.posicao;
    card.dataset.imagem = entrada.imagem;
    card.dataset.descricao = entrada.descricao;
    card.dataset.nomeCompleto = entrada.nome_completo;
    card.dataset.nascimento = entrada.nascimento;
    card.dataset.altura = entrada.altura;

    card.onclick = handleClick

    


    const divImagem = document.createElement('div');
    divImagem.className = 'imagem';
    divImagem.style.gridArea = 'a1';
    divImagem.style.display = 'flex';
    divImagem.style.alignItems = 'center';
    divImagem.style.justifyContent = 'center';

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `Foto de ${entrada.nome}`;
    imagem.style.width = '7rem';
    imagem.style.height = '7rem';
    imagem.style.borderRadius = '50%';
    imagem.style.objectFit = 'cover'
    imagem.style.objectPosition = '20% 20%'
    imagem.style.margin = '20px';


    const pPosicao = document.createElement('p');
    pPosicao.className = 'posicao';
    pPosicao.innerHTML = `Posição: ${entrada.posicao}`;
    pPosicao.style.gridArea = 'a2';
    pPosicao.style.display = 'flex';
    pPosicao.style.justifyContent = 'center';
    pPosicao.style.textTransform = 'uppercase';
    pPosicao.style.fontWeight = 'bold';

    const pNome = document.createElement('p');
    pNome.className = 'nome';
    pNome.innerHTML = `Nome: ${entrada.nome}`;
    pNome.style.gridArea = 'a3';
    pNome.style.display = 'flex';
    pNome.style.justifyContent = 'center';
    pNome.style.alignItems = 'center';
    pNome.style.textTransform = 'uppercase';
    pNome.style.fontWeight = 'bold';
    

    const pDescricao = document.createElement('p');
    pDescricao.className = 'descri';
    pDescricao.innerHTML = entrada.descricao;
    pDescricao.style.gridArea = 'a4';
    pDescricao.style.textTransform = 'uppercase';
    pDescricao.style.margin = '0.3rem';
    pDescricao.style.overflow  = 'hidden';
    pDescricao.style.whiteSpace = 'nowrap';
    pDescricao.style.textOverflow = 'ellipsis';

    const pNascimento = document.createElement('p');
    pNascimento.className = 'nascimento';
    pNascimento.innerHTML = entrada.nascimento;
    pNascimento.style.gridArea = 'a5';
    pNascimento.style.textTransform = 'uppercase';
    pNascimento.style.margin = '0.3rem';

    card.appendChild(divImagem);
    divImagem.appendChild(imagem);
    card.appendChild(pPosicao);
    card.appendChild(pNome);
    card.appendChild(pDescricao);
    card.appendChild(pNascimento);

    return card;

}


//dados.forEach(
    //(atleta) => {
        //container.appendChild(montaCard(atleta))
    //}
//);


inputPesquisa.onkeyup = ( ev ) => {
    if(ev.target.value.length > 2 || ev.target.value.length == 0) {
        const filtrado = dados.filter(
            (ele) => {
                const noNome = ele.nome.toLowerCase().includes(ev.target.value.toLowerCase())
                const naPosicao = ele.posicao.toLowerCase().includes(ev.target.value.toLowerCase())
                return noNome || naPosicao;
                
                
            }
        )

        container.innerHTML = '';

        filtrado.forEach(
            (atleta) => {
                container.appendChild(montaCard(atleta))
            }
        );
    }

}

const pegaDados = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pegaDados("https://botafogo-atletas.mange.li/feminino").then(
    (entrada) => {

        dados = entrada;
        entrada.forEach(
            (atleta) => {
                container.appendChild(montaCard(atleta));
            }
        )
    }
)




console.log('síncrono');





