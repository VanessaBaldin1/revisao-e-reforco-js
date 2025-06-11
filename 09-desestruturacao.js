"use strict";

//Desestruturação

import { separador } from "./modulos-esm/exemplos.js";

//Desestruturando arrays
const clientes = ["Robson1", "Robson2", "Robson3"];

const [cliente1, cliente2, cliente3] = clientes;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
