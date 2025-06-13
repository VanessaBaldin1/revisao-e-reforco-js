"use strict";
import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

// filter (filtrar)
// Passa por elementos de um array e executa uma função callback visando retornar valores de acordo com uma ou mais condições, gerando um novo array

// Exemplo 1: filtrar vendas que tenham batido uma meta
const vendas = [1500, 3000, 500, 1000, 750, 5000, 100];
//VALOR FIXO META
const META = 1000;

const vendasQueBateramMeta = vendas.filter((venda) => {
  return venda >= META;
});

console.log(vendasQueBateramMeta);

//EXEMPLO SE FOSSE FAZER SEM FILTER

//const bateramMeta = [];
//for (const venda of vendas) {
//if (venda >= META) {
// bateramMeta.push(venda);
//}
//}
//console.log(bateramMeta);
