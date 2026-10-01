const listaUsuarios = [
    {nome: "joao", senha: 1234},
    {nome: "pedro", senha: 1234},
    {nome: "tiago", senha: 1234}
]

localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

const dadosSalvos = localStorage.getItem("usuarios");

const usuarios = JSON.parse(dadosSalvos);

const ul = document.getElementById("listaUsuarios");

usuarios.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `Usuário: ${item.nome} | Senha: ${item.senha}`;
    ul.appendChild(li);
})