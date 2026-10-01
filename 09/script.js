document.getElementById("btnLogin").addEventListener("click", () => {
  const usuarioInput = document.getElementById("usuario").value;
  const senhaInput = document.getElementById("senha").value;

  if (!usuarioInput || !senhaInput) {
    alert("Preencha todos os campos!");
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");
  const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

  const usuarioValido = usuarios.find(
    u => u.nome === usuarioInput && String(u.senha) === String(senhaInput)
  );

  if (usuarioValido) {
    alert("LOGIN REALIZADO COM SUCESSO!");
  } else {
    alert("USUÁRIO OU SENHA INEXISTENTE");
  }

  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";
});