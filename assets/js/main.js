document
  .getElementById("mostrarMensagem")
  .addEventListener("click", function () {
    document.getElementById("mensagem").textContent =
      "Você está indo muito bem! Continue focado!";
  });

  document.getElementById("temaToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark");
});

document.getElementById("abrirMenu").addEventListener("click", function () {
  document.getElementById("menuLinks").classList.toggle("ativo");
});
