const fs = require("fs");

const caminhoUserFile = "./usuarios.json";

function carregarUsuarios() {
  //verifica se o arquivo existe
  if (!fs.existsSync(caminhoUserFile)) {
    return [];
  }
  const dados = fs.readFileSync(caminhoUserFile, "utf8");
  return JSON.parse(dados);
}

//Cadastro de usuário para armazenar no arquivo users.json
function cadastraUsuario(nome, email, senha) {
  const usuarios = carregarUsuarios();
  const usuarioExistente = usuarios.find((usuario) => usuario.email === email);
  if (usuarioExistente) {
    return "Usuario já cadastrado";
  } else {
    usuarios.push({ nome, email, senha });
    fs.writeFileSync(caminhoUserFile, JSON.stringify(usuarios));
    return "Usuario cadastrado com sucesso!";
  }
}

function fazerLogin(email, senha) {
  const usuarios = carregarUsuarios();
  const usuario = usuarios.find((usuario) => usuario.email === email);
  if (!usuario || usuario.senha !== senha) {
    return "Email ou senha inválidos";
  }
  return "Login efetuado com sucesso!";
}

function excluirUsuario(email, senha) {
  let usuarios = carregarUsuarios();
  const usuarioIndex = usuarios.findIndex(
    (usuario) => usuario.email === email && usuario.senha === senha
  );
  if (usuarioIndex === -1) {
    return "Email ou senha inválidos";
  }
  usuarios.splice(usuarioIndex, 1);
  cadastraUsuario(usuarios);
  return "Usuário excluído com sucesso!";
}

module.exports = {
  carregarUsuarios,
  cadastraUsuario,
  fazerLogin,
  excluirUsuario,
};
