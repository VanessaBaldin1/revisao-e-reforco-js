"use strict";

import { classificar } from "./modulos-esm/funcoes.js";
import { separador } from "./modulos-esm/exemplos.js";
// Sobre o operador spread ...
// Usamos o spread para "espalhar" dados de arrays e objetos,
//o que pode ser útil na chamada de funções e também na mesclagem destas estruturas

// Spread em Arrays
const bandas = ["Yes", "Rush", "Pink Floyd"];
const maisBandas = ["Dream Theater", "Savatage", ...bandas];

console.log(bandas);
console.log(maisBandas);

separador();

//Spread para "espalhar" parâmetros para uma função
console.log(classificar(...maisBandas));

separador();

//Spread em objetos
const cliente = {
  nome: "Ave",
  cidade: "Belem do Para",
  idade: 90,
};

const compra = {
  ...cliente, //copiando as propriedades de cliente para compra
  codigoPedido: "123xyz",
  produtos: ["velas", "colar", "livro"],
  total: 8566.97,
  nome: "Joel", //sobreescrevendo uma propriedade que veio com spread
};

console.log(compra);
