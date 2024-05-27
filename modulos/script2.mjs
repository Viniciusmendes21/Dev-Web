const mensagem = document.getElementById('mensagem2');
const estado = sessionStorage.getItem('estado');

if (estado === "logado") {
    mensagem.innerHTML = '<h1>ESCONDIDA!</h1>';
    document.getElementById("btn_deslogar").style.display = "inline";
    document.getElementById("btn_deslogar").onclick = () => {
        sessionStorage.removeItem('estado');
        window.location.href = "index.html";
    }
} else {
    mensagem.innerHTML = '';
}