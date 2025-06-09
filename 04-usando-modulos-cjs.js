'use strict';

// ter acesso aos modulos que exportei
// forma de importar usando "require" 
// no caminho do arquivo precisa colocar o final .js - LEMBRETE


// 'Importando' os módulos usando CJS require
const modulosExemplos = require('./modulos-cjs/exemplos.js');

// Chamando a função existente no módulo
modulosExemplos.minhaFuncao();

//Acessando o array através do módulo
console.log(modulosExemplos.clientes);
