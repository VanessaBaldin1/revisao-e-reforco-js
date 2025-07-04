"use strict";

import { separador } from "./modulos-esm/exemplos.js";
import cursos from "./modulos-esm/cursos.js";

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

separador();

console.log("== Lista Completa de Cursos ==");
console.log(cursos);
console.log("=================================");

separador();

//Exemplo 2: gerar um novo array contendo somente os títulos dos cursos
const titulos = cursos.map((curso) => curso.titulo);
console.log(titulos);

separador();

//Exercício
//Use o map para gerar um novo array contendo SOMENTE os preços dos cursos calculando com um desconto de 10%

const precoDescontado = cursos.map((curso) => {
  return curso.preco - curso.preco * 0.1;
});

console.log(precoDescontado);

separador();

//Exemplo 3: gerar um novo array COMPLETO (ou seja, com os objetos completos)mas com os preços atualizados com o desconto

const cursosComDesconto = cursos.map((curso) => {
  return {
    ...curso, //Spread das propriedades do curso (copiando as pra cá)
    preco: curso.preco - curso.preco * 0.1, // mas o preco é atualizado
  };
});

console.log(cursosComDesconto);

separador();

//Exercicio
// Gere uma nova de lista de cursos contendo apenas os titulos e as categorias

//VERSÃO 1
//const cursoslista = cursos.map((curso) => {
// return { titulo: curso.titulo, categoria: curso.categoria };
//});
//console.log(cursoslista);

//VERSÃO 2: COM RETORNO IMPLÍCITO -DESESTRUTURAÇÃO

//(ATENÇÃO: USE PARÊTENSES NO RETORNO DO OBJETO)

// tira o {} e a palavra return na arrow function,
// PARA ARRAYS TAMBEM USAR () E [ ARRAY DENTTRO]

//const cursoslista = cursos.map((curso) => ({
//titulo: curso.titulo,
//categoria: curso.categoria,
//}));
//console.log(cursoslista);

//VERSÃO 3: usando desestruturação nos parâmetros de função

//modifica somente o que esta () dentro do map tira curso e coloca map({ campos a serem acessados}), após isso tira o curso. deixando o acesso somente "titulo"
//QUAL A PROPRIEDADE TEM O MESMO VALOR DA CAMPO EXEMPLO TITULO: TITULO, NÃO PRECISA FICAR IGUAL TIRA O TITULO:

//Observação do professor: Note que podemos até mesmo deixar apenas o nome dos parâmetros como propriedades do objeto retornado. Ou seja, em vez de usar titulo: titulo, podemos deixar somente titulo, Em vez de usar categoria: categoria, basta categoria

const cursoslista = cursos.map(({ titulo, categoria }) => ({
  titulo,
  categoria,
}));
console.log(cursoslista);
