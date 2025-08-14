document.getElementById("meuBotao").addEventListener("click", function() {
    // Mensagem no console
    console.log("O botão foi clicado!");

    // Mensagem na tela
    document.getElementById("mensagem").textContent = "O botão foi clicado! 😏";

    // Pop-up de alerta
    alert("O botão foi clicado! 😏");

    // Aguarda 2 segundos e redireciona
    setTimeout(function() {
        window.location.href = "GG.html";
    }, 2000);
});
