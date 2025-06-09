'use strict';

function minhaFuncao() {
  console.log("Olá! Função criada em um moódulo");
  
}

const clientes = ['Maria', 'Olivia', 'Jessica']; 

// CJS: CommonJS (modulo mais antigo - mas também muito útil)

module.exports = { minhaFuncao, clientes };