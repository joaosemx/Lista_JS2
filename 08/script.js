document.getElementById("btnCadastrar").addEventListener("click", () => {
  const usuarioInput = document.getElementById("usuario").value;
  const senhaInput = document.getElementById("senha").value;

  if (!usuarioInput || !senhaInput) {
    alert("Preencha todos os campos!");
    return;
  }

  const dadosSalvos = localStorage.getItem("usuarios");
  const usuarios = dadosSalvos ? JSON.parse(dadosSalvos) : [];

  const usuarioExiste = usuarios.some(u => u.nome === usuarioInput);

  if (usuarioExiste) {
    alert("Erro: Este nome de usuário já está cadastrado!");
    return;
  }

  const novoUsuario = {
    nome: usuarioInput,
    senha: senhaInput
  };

  usuarios.push(novoUsuario);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";

  alert("Usuário cadastrado com sucesso!");
});