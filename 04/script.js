function salvarUsuario () {
    const usuarioInput =  document.getElementById("usuario").value;
    const senhaInput = document.getElementById("senha").value;

    const dadosUsuario = {
        nome: usuarioInput,
        senha: senhaInput
    };

    localStorage.setItem("usuarioObjeto", JSON.stringify(dadosUsuario));

    alert("Usuário salvo com sucesso");
}
