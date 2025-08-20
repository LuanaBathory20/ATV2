// botao.js
function iniciarBotaoTemporizado(segundosIniciais = 5) {
  const botao = document.getElementById('botao');
  const mensagem = document.getElementById('mensagem');

  if (!botao) throw new Error('Elemento #botao não encontrado');
  if (!mensagem) throw new Error('Elemento #mensagem não encontrado');

  botao.disabled = true;

  const habilitar = () => {
    botao.textContent = 'Clique aqui!';
    botao.disabled = false;
    botao.classList.add('ativo');
  };

  // Listener de clique (mensagem do teste)
  botao.addEventListener('click', () => {
    mensagem.textContent = 'O botão foi clicado! 😏';
  });

  // Atalho para testes: se 0s, habilita na hora
  if (segundosIniciais <= 0) {
    habilitar();
    return;
  }

  let segundos = segundosIniciais;
  botao.textContent = `Clique em ${segundos}s`;

  const intervalo = setInterval(() => {
    segundos--;
    if (segundos <= 0) {
      clearInterval(intervalo);
      habilitar();
    } else {
      botao.textContent = `Clique em ${segundos}s`;
    }
  }, 1000);
}

module.exports = iniciarBotaoTemporizado;
