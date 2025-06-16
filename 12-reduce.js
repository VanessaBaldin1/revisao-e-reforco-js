"use strict";

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

// reduce (reduzir, redução, chegar a um resultado único)
// Passa por elementos de um array e reduz a um único valor, que pode ser uma soma, média, concatenação, etc

//A função callBack recebe dois parâmetros: o acumulador (valor que é acumulado até o momento), e o valor atual (elemento do array sendo processado)
// primeiro parametro do reduce =>  e o segundo parametro é o contador (inicia com 0)
// dentro do function (acumulador que inicia e seguida os valores)

// Exemplo 1:
const valores = [10, 5, 50, 200, 1000];
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(total);

separador();

//Exercício 1: realize a soma dos preços de todos os cursos
//Mostre no log

const totalprecos = cursos.reduce((total, curso) => total + curso.preco, 0);

console.log(totalprecos);

//Exercício 2: calcule a média dos preços de todos os cursos
//Mostre no log

const somaPrecoCursos =
  cursos.reduce((totalcursos, curso) => {
    return totalcursos + curso.preco;
  }, 0) / cursos.length;

console.log(somaPrecoCursos.toFixed(2));

//Exercício 3: calcule o preço total dos cursos de Front-End
//Mostre no log

const somaFrontEnd = cursos
  .filter(({ categoria }) => categoria === "Front-End")
  .reduce((total, { preco }) => total + preco, 0);
console.log(somaFrontEnd);
