const https = require("https");

//API CONSULTA CEP - https://viacep.com.br/
async function consultaCEP(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          const resultado = JSON.parse(data);
          if (resultado.erro) {
            reject(new Error("CEP inválido"));
          } else {
            resolve({
              cep: resultado.cep,
              logradouro: resultado.logradouro,
              bairro: resultado.bairro,
              localidade: resultado.localidade,
              uf: resultado.uf,
            });
          }
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

module.exports = { consultaCEP };
