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

//Acessando recursos do import de alunos
console.log(alunos[1]);
console.log(alunos);



//loops
for(const aluno of alunos){
   console.log(alunos);
   
}


//Uso de um 'alias/apelido' para evitar conflito de nomes (arquivo dados.js)
import { pessoa, livro, alunos as marias} from './modulos-esm/dados.js';

separador();

// Acessando recursos do módulo 'dados.js'
console.log(pessoa.nome);
console.log(livro);
console.log(marias); // lembre-se: personagens é um apelido para alunos

separador();

// Exercícios
//1) Crie um arquivo chamdo "funcoes.js" dentro da pasta "modulos-esm"
//2) Dentro dele, programe 3 funções (USANDO ARROW FUNCTION):
     //- Converter caracteres para MAIÚSCULO
     //- Converter caracteres para MINÚSCULO
     //- Formatar valor em moeda brasileira (real)

//3) Exporte-as como módulos
//4) No arquivo 05, importe e utilize estas funções passando textos e valores para testes.

separador();

//4) importando as funções do arquivo 'funcoes.js'

import { converterLetraMaiuscula, converterLetraMinusculo, formatarvalorMoeda } from './modulos-esm/funcoes.js';

// Acessando recursos do módulo 'funcoes.js'
console.log(converterLetraMaiuscula("amazonas"));
console.log(converterLetraMinusculo("ESTADOS UNIDOS"));
console.log(formatarvalorMoeda(58996.89));

//exemplo de import * as recursos from "./modulos-esm/funcoes.js";
// console.log(recursos.converterMaiuscula("tiago"));









