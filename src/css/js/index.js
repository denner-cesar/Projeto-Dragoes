/*objetivo - quando clicamos no botao temos que mostra a imagem de fundo correspondente
1- passo 1da um jeito de pegar o elemento HTML dos botoes
2- da um jeito de indentificar o clique do usuario no botao
3- desmarca o botao selecionado anterior
4- marca o botao clicando como se estivesse selecionado
5- esconder a imagem anteriormente selecionada
6- fazer aparecer a imagem correspondente ao botao clicado
7- esconder a informaçao do dragao anteriormente selecionado
8- mostra a informaçao do dragao referente ao botao clicado
*/

// passo 1 dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagem = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
//2- da um jeito de indentificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
  console.log(botao);
  botao.addEventListener("click", () => {
    //3- desmarca o botao selecionado anterior
    desativarBotaoSelecionado();

    //4- marca o botao clicado como se estivesse selecionado
    marcaBotaoSelecionado(botao);
    //5- esconder a imagem anteriormente selecionada
    esconderImagemAtiva();
    //6- fazer aparecer a imagem correspondente ao botao clicado
    mostraImagemcorrespondenteaobotao(indice);
    //7- esconder a informaçao do dragao anteriormente selecionado
    const informacoesAtiva = escondendoInformacoesAtiva();
    informacoesAtiva.classList.remove("ativa");
    //8- mostra a informaçao do dragao referente ao botao clicado

    mostrarInformacoes(indice);

    function escondendoInformacoesAtiva() {
      return document.querySelector(".informacoes.ativa");
    }
  });
});

function marcaBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
  informacoes[indice].classList.add("ativa");
}

function mostraImagemcorrespondenteaobotao(indice) {
  imagem[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
