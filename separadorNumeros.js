function separadorNumeros(array, opcao) {
  let arrayImpar = [];
  let arrayPar = [];

  switch (opcao) {
    case 1:
      arrayImpar = array.filter(function (numero) {
        return numero % 2 === 1; //retorna somente impares
      });
      return console.log(arrayImpar);
    case 2:
      arrayPar = array.filter(function (numero) {
        return numero % 2 === 0; //retorna somente impares
      });
      return console.log(arrayPar);
    case 3:
      arrayImpar = array.filter(function (numero) {
        return numero % 2 === 1; //retorna somente impares
      });
      arrayPar = array.filter(function (numero) {
        return numero % 2 === 0; //retorna somente pares
      });
      return console.log("Impares: " + arrayImpar + "Pares: " + arrayPar);
  }
}

module.exports = { separadorNumeros };
