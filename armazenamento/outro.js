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

let obj = {}

// usando cookies
/*const arrayCookies = document.cookie.split("; ");

for (const par of arrayCookies) {
    const partes = par.split("=");
    obj[partes[0]] = partes[1];
}
*/

// localStorage item por item
/*let chave;
for (let i = 0; i < localStorage.length; i++) {
    chave = localStorage.key(i);
    obj[chave] = localStorage.getItem(chave);
}*/

// localStorage objeto
//obj = JSON.parse(localStorage.getItem('atleta'));

const params = new URLSearchParams(window.location.search);
const dados = {};

for (const [key, valor] of params.entries()) {
    dados[key] = valor;
    console.log(dados[key]);
}

document.body.appendChild(montaCard(dados));
