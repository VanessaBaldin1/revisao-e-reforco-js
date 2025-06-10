'use strict';

// Sobre o operador rest ...
//Usamos o rest para mesclar uma relação de parâmetros/argumentos para uma função
//Na prática, os parâmetros se comportam como um array podendo receber iterações via loop.

function somar(...valores) {
   //Variável acumuladora
   let total = 0;

   //Iteração para somar e aguardar o total
   for(const valor of valores){
       total += valor;
   }

   return total;
   
}

let resultado1 = somar(10, 20);
let resultado2 = somar(20, 60, 80, 90);

console.log(resultado1);
console.log(resultado2);


