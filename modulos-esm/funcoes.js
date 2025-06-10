'use strict';

export const converterLetraMaiuscula = texto => texto.toUpperCase();

export const converterLetraMinusculo = texto => texto.toLowerCase();

export const formatarvalorMoeda = valor => valor.toLocaleString('pt-br', {
  style: 'currency',
  currency: 'BRL'
});

//Para exportar as funções

//export { converterLetraMaiuscula, converterLetraMinusculo, formatarvalorMoeda }

//Usamos o rest operator para obter uma lista de parâmetros, não importando a quantidade
export function classificar(...texto) {
  return texto.sort();
}
