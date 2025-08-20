// test.js
const iniciarBotaoTemporizado = require('./botao');

beforeEach(() => {
  document.body.innerHTML = `
    <button id="botao">Não aperte</button>
    <p id="mensagem"></p>
  `;
  // Passa 0 segundos para não precisar esperar no teste
  iniciarBotaoTemporizado(0);
});

test('clicar no botão mostra a mensagem', () => {
  const botao = document.getElementById('botao');
  botao.click();
  expect(document.getElementById('mensagem').textContent)
    .toBe('O botão foi clicado! 😏');
});
