/*
// Ex1 - Calculadora
const funcao = require("./calculadora.js");

console.log(funcao.somar(1, 2));
console.log(funcao.subtracao(1, 2));
console.log(funcao.multiplicar(1, 2));
console.log(funcao.dividir(1, 2));

// Ex2 - Arrays
const funcao2 = require("./separadorNumeros.js");
const arr = [];
for (let i = 0; i < 9; i++) {
  arr.push(Math.floor(Math.random() * 100)); //Fazer Arrays aleatórios
}
console.log(funcao2.separadorNumeros(arr, 3));

//Ex3 - dddEstado
const funcao3 = require("./dddEstado.js");
console.log(funcao3.dddEstado(48));

//Ex4 - geradorSenha
const funcao4 = require("./geradorSenha.js");
console.log("Senha Aleatoria: " + funcao4.geradorSenha(10));

//Ex5 - consultaCep
const { consultaCEP } = require("./consultaCep.js");
(async () => {
  try {
    const endereco = await consultaCEP("88032400");
    console.log(endereco);
  } catch (err) {
    console.log(err.message);
  }
})();
*/

//Ex6 - gerenciaUser
const usuarios = require("./gerenciaUser.js");
//mostrar usuario
console.log(usuarios.carregarUsuarios());
//cadastrar usuario
console.log(usuarios.cadastraUsuario("Rico", "rico@rico.com", "123456"));
//fazer login
console.log(usuarios.fazerLogin("rico@rico.com", "123456"));
//excluir usuario
console.log(usuarios.excluirUsuario("joao@joao.com", "123456"));
