'use strict';

exemplo1(); //chamada da função

//Sintaxe tradicional, função nomeada
//A ordem de declaração da função NESTE NÃO IMPORTA
function exemplo1(){
   console.log("Função nomeada");
}

function separador() {
  console.log("\n************************************************\n");
}

separador();


// exemplo2(); chamada aqui dá erro, pois não pode ser feita antes da declaração

// Sintaxe tradicional , função anônima
// Nesta sintaxe, a ordem IMPORTA

const exemplo2 = function(){
    console.log("Função anônima");
    
};

// no caso da Anônima a chamada sempre é depois da declaração da função

exemplo2(); //chamada (sempre após declarar a função anônima)

separador();

// 1) Crie uma função (qualquer sintaxe) que receba dois valores numéricos como parâmetros, calcule a diferença entre estes valores e retorne o resultado calculado

function menos(a, b) {
   return a - b;  
}

//2) Chame essa função pelo menos duas vezes passando valores diferentes e guardando os resultados em variáveis de escopo global

let resultado1 = menos(40, 20);

let resultado2 = menos(50, 20);


// 3) Apresente os resultados no console.

let mensagem3 = `Os Resultados foram: ${resultado1} e ${resultado2}`;
console.log(mensagem3);