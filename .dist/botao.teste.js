/** @jest-environment jsdom */
const iniciarBotaoTemporizado = require('./botao');

test('clicar no botão mostra a mensagem', () => {
  document.body.innerHTML = `
    <button id="botao">Não aperte</button>
    <p id="mensagem"></p>
  `;

  // 0 segundos: habilita imediatamente (sem esperar timer)
  iniciarBotaoTemporizado(0);

  const botao = document.getElementById('botao');
  expect(botao.disabled).toBe(false);

  botao.click();
  expect(document.getElementById('mensagem').textContent)
    .toBe('O botão foi clicado! 😏');
});

test('habilita após 3s de contagem', () => {
  jest.useFakeTimers();

  document.body.innerHTML = `
    <button id="botao">Não aperte</button>
    <p id="mensagem"></p>
  `;

  iniciarBotaoTemporizado(3);

  const botao = document.getElementById('botao');
  expect(botao.disabled).toBe(true);

  // Avança o tempo do Jest (3 ticks de 1s)
  jest.advanceTimersByTime(3000);

  expect(botao.disabled).toBe(false);

  jest.useRealTimers();
});
