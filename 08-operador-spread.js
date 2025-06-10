'use strict';

import { classificar } from "./modulos-esm/funcoes.js";

// Sobre o operador spread ...
// Usamos o spread para "espalhar" dados de arrays e objetos,
//o que pode ser útil na chamada de funções e também na mesclagem destas estruturas

// Spread em Arrays
const bandas = ["Yes", "Rush", "Pink Floyd"];
const maisBandas = ["Dream Theater", "Savatage", ...bandas];

console.log(bandas);
console.log(maisBandas);

