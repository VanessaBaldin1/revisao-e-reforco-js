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



