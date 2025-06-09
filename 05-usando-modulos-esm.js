'use strict';

//Importações sempre no começo do arquivo - boas práticas

//Consegui completar por que usamos um recursos padrão - default
import alunos from './modulos-esm/alunos.js';



// Importação de múltiplos recursos/módulos usando ESM
// como é um objeto só chamar direto 
import { saudacao, clientes, separador } from './modulos-esm/exemplos.js';

saudacao("Fulano de Tal");
console.log(clientes);

separador();



