const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDdeTema = document.querySelector(".imagem-botao");
botaoAlterarTema.addEventListener("click", ()=>{
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    if(modoEscuroEstaAtivo){
        imagemBotaoTrocaDdeTema.setAttribute("src","./imagens/sun.png")
    }else{
        imagemBotaoTrocaDdeTema.setAttribute("src","./imagens/moon.png")
    };
});