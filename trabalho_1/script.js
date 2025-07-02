// Mensagem ao clicar
document.getElementById("mostrarMensagem").addEventListener("click", function () {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Você está indo muito bem! Continue focado!";
});

// Tema escuro
document.getElementById("temaEscuro").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Alternar tema escuro com toggle deslizante
document.getElementById("temaToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

