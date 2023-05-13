//lógica para gerar senha aleatória
function geradorSenha(tamanho) {
  const senha = [];
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < tamanho; i++) {
    senha.push(
      caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    );
  }
  return senha.join("");
}

module.exports = { geradorSenha };
