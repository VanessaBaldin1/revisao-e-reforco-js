'use strict';

// Módulos ESM: EcmaScript Modules(sistema atual, moderno)
function saudacao(nome) {
    console.log("Olá "+nome+"!"); 
}

const clientes = ["Maycon", "Gabriel", "Júlia"];

//exporta como objeto por isso utiliza {}
export { saudacao, clientes };