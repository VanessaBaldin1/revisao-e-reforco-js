"use strict";

import { separador } from "./modulos-esm/exemplos.js";

// map (mapear, mapeamento - transformar/gerar em outra coisa)
//Passa por elementos de um array e realiza operações em cada um deles através de uma função callback, gerando um novo array de elementos transformados.

//map é uma funação sempre retorna um novo array
//revisa callback - uma função que chama outra função

//Exemplo 1
const numeros = [10, 20, 5, 12.5, 66, 50, 1000];
console.log(numeros);

//const numerosDobrados = numeros.map((numero) => {
//return numero * 2;
//});

const numerosDobrados = numeros.map((numero) => numero * 2);

console.log(numerosDobrados);

separador();

//Mini-exercício:
//1) Crie um array com 5 textos escritos em letras MAIUSCULAS
//2) Mostre no console este array
//3) Usando o map, acesse e transforme todos eles em letras minusculas(toLowerCase)
//4) Guarde o resultado do map em uma nova constante
//5)Mostre no console este novo array

//resolução

//1)
const frases = [
  "TEM PAÇOCA NA MESA DO PROFESSOR",
  "O MARCIO FALTA MUITO",
  "A HELOISA É ESPECIALISTA EM JS",
  "O JOÃO NÃO USA O CHATGPT",
  "O PAULO É CANTOR",
];
console.log(frases);

const frases1 = frases.map((frase) => {
  return frase.toLowerCase();
});

console.log(frases1);
