"use strict";

//Desestruturação

import { separador } from "./modulos-esm/exemplos.js";

//Desestruturando arrays
const clientes = ["Robson1", "Robson2", "Robson3"];

const [cliente1, cliente2, cliente3] = clientes;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

separador();

const capitais = [
  "João Pessoa",
  "Manaus",
  "Curitiba",
  "Salvador",
  "Belo Horizonte",
];

//Desestruturando alguns valores(omitmos Curitiba e Belo Horizonte)
const [paraiba, amazonas, , bahia] = capitais;
console.log(paraiba);
console.log(amazonas);
console.log(bahia);
