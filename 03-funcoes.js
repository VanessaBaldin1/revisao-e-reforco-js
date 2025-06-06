'use strict';

exemplo1(); //chamada da função

//Sintaxe tradicional, função nomeada
//A ordem de declaração da função NESTE NÃO IMPORTA
function exemplo1(){
   console.log("Função nomeada");
}

console.log("************************************************");

// exemplo2(); chamada aqui dá erro, pois não pode ser feita antes da declaração

// Sintaxe tradicional , função anônima
// Nesta sintaxe, a ordem IMPORTA

const exemplo2 = function(){
    console.log("Função anônima");
    
};

// no caso da Anônima a chamada sempre é depois da declaração da função

exemplo2(); //chamada (sempre após declarar a função anônima)