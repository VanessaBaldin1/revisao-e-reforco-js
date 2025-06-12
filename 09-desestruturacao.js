"use strict";

//Desestruturação

import { separador } from "./modulos-esm/exemplos.js";

//Desestruturando arrays
const clientes = ["Robson1", "Robson2", "Robson3"];

const [cliente1, cliente2, cliente3] = clientes;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

separador();

const capitais = [
  "João Pessoa",
  "Manaus",
  "Curitiba",
  "Salvador",
  "Belo Horizonte",
];

//Desestruturando alguns valores(omitmos Curitiba e Belo Horizonte)
const [paraiba, amazonas, , bahia] = capitais;
console.log(paraiba);
console.log(amazonas);
console.log(bahia);

separador();

const linguagens = [
  ["HTML", "CSS", "JS"],
  ["PHP", "Node.js", "SQL", "Python", "ASP.NET"],
];

console.log(linguagens);

//console.log(linguagens[0][2]); //acessando JS
//console.log(linguagens[1][3]); //acessando Python

const [frontEnd, backEnd] = linguagens;

console.log(frontEnd[2]);
console.log(backEnd[3]);

separador();

//Desestruturação aninhada
const [[html, css, js], [php, node, sql, python, asp]] = linguagens;
console.log(js);
console.log(python);

separador();

// Mini-exercício

const diversos = [
  "JavaSript - Reforço",
  ["Teclado", "Monitor", "Mouse"],
  2112,
  (texto) => texto.toUpperCase(),
];

// Exemplo abaixo, errado:
// const [ [JavaSript - Reforço], [teclado, monitor, mouse], [2112], [(texto) => texto.toUpperCase()] ] = diversos;

//Faça a desestruturação dos elementos deste array

const [linguagem, [teclado], numero, convertertexto] = diversos;

console.log(linguagem);
console.log(teclado);
console.log(numero);
console.log(convertertexto("ana"));

separador();

const guloseimas = [
  "brigadeiro",
  "brownie",
  "torta de limão",
  "coxinha",
  "pastel",
  "pizza",
  "esfiha",
];

//Desestruturação com operador rest

const [brigadeiro, brownie, torta, ...salgados] = guloseimas;
console.log(brigadeiro);
console.log(salgados); //virou um array

separador();

//Desestruturação objetos

const musico = {
  nome: "David Gilmour",
  instrumento: "Guitarra",
  idade: 77,
  banda: "Pink Floyd",
};

//Acessando propriedade através do objeto(sem desestruturação)
//console.log(musico.nome);
//console.log(musico.idade);

const { nome, instrumento, idade, banda } = musico;
console.log(nome);
console.log(instrumento);
console.log(idade);
console.log(banda);

separador();

const aluno = {
  nome: "Ozzy",
  cidade: "São Paulo",
  estado: "SP",
};

//Desestruturação com alias/apelido em propriedade
const { nome: nomeDoAluno, cidade, estado } = aluno;
console.log(nomeDoAluno);
console.log(cidade);
console.log(estado);

separador();

//Mini-exercício

const paciente = {
  nome: "Gabriel Viana",
  idade: 19,
  contato: ["gabriel@gmail.com", "11-98765-4321"],
  sintomas: "Sonolência permanente, coriza, tosse, bronquite...",
  mensalidade: 568.74,
  endereco: {
    localidade: "Rua Francisco Coimbra",
    numero: "403",
    bairro: "Penha",
  },
  atendimento: () => (paciente.idade >= 60 ? "prioritário" : "normal"),
};

//Desestruture todos os elementos deste objeto paciente, tornando-os novas constantes

//Use o console.log para testar o acesso a cada nova constantes desestruturada

//console.log(paciente.contato[0]);

const {
  nome: nomeDoPaciente,
  idade: idadePaciente,
  contato: [email, telefone],
  sintomas,
  mensalidade: valorDaMensalidade,
  atendimento,
  endereco: { localidade, numero: nomeDosPosto, bairro },
} = paciente;

console.log(
  nomeDoPaciente,
  idadePaciente,
  email,
  telefone,
  sintomas,
  valorDaMensalidade,
  atendimento(),
  localidade,
  nomeDosPosto,
  bairro
);

separador();

//Desestruturação de parâmetros de função

//function processarPedido(dadosPedido) {
//console.log("Produto: " + dadosPedido[0]);
//console.log("Preço:  " + dadosPedido[1]);
//}

//Refatoração do array

function processarPedido([produto, preco, marca = "não informado"]) {
  console.log("Produto: " + produto);
  console.log("Preço:  " + preco);
  console.log("Marca:  " + marca);
}

const pedidoA = ["TV", 1500, "Sony"];
processarPedido(pedidoA);

const pedidoB = ["Notebook", 2500];
processarPedido(pedidoB);

separador();
//pode ter qualquer nome entre () parametro
const exibirDados = (filme) => {
  console.log(`Filme: ${filme.titulo} - Ano: ${filme.ano} \n`);
};

const filme1 = {
  titulo: "o Hobbit",
  ano: 2012,
};

const filme2 = {
  titulo: "O Senhor dos Anéis",
  ano: 2001,
};

exibirDados(filme1);
exibirDados(filme2);
