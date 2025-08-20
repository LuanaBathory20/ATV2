// botao.js
function iniciarBotaoTemporizado(segundosIniciais = 5) {
  const botao = document.getElementById('botao');
  const mensagem = document.getElementById('mensagem');

  if (!botao) throw new Error('Elemento #botao não encontrado');
  if (!mensagem) throw new Error('Elemento #mensagem não encontrado');

  const acaoClique = () => {
    mensagem.textContent = 'O botão foi clicado! 😏';
    botao.classList.add('ativo');
    botao.disabled = true;
    botao.textContent = 'Clique concluído!';
  };

  botao.addEventListener('click', acaoClique);

  if (segundosIniciais <= 0) {
    return; // no teste, ele só configura o evento, sem esperar
  }

  let segundos = segundosIniciais;
  botao.textContent = `Disponível em ${segundos}s`;

  const intervalo = setInterval(() => {
    segundos--;
    if (segundos <= 0) {
      clearInterval(intervalo);
      botao.disabled = false;
      botao.textContent = 'Agora pode clicar!';
    } else {
      botao.textContent = `Disponível em ${segundos}s`;
    }
  }, 1000);
}

module.exports = iniciarBotaoTemporizado;
