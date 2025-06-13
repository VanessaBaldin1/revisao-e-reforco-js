"use strict";
import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

// filter (filtrar)
// Passa por elementos de um array e executa uma função callback visando retornar valores de acordo com uma ou mais condições, gerando um novo array

// Exemplo 1: filtrar vendas que tenham batido uma meta
const vendas = [1500, 3000, 500, 1000, 750, 5000, 100];
//VALOR FIXO META
const META = 1000;

const vendasQueBateramMeta = vendas.filter((venda) => {
  return venda >= META;
});

console.log(vendasQueBateramMeta);

//EXEMPLO SE FOSSE FAZER SEM FILTER

//const bateramMeta = [];
//for (const venda of vendas) {
//if (venda >= META) {
// bateramMeta.push(venda);
//}
//}
//console.log(bateramMeta);

separador();

// Exemplo 2: filtrar serviços pendentes
const servicos = [
  { codigo: 1, tipo: "Limpeza", status: "Concluído" },
  { codigo: 2, tipo: "Manutenção", status: "Pendente" },
  { codigo: 3, tipo: "Reparo", status: "Pendente" },
  { codigo: 4, tipo: "Consultoria", status: "Concluído" },
  { codigo: 5, tipo: "Instalação", status: "Concluído" },
];

//faça o exercicio

const servicosPendentes = servicos.filter(
  (servico) => servico.status == "Pendente"
);
console.log(servicosPendentes);

//REFATURAÇÃO DO FILTER

const servicosPendentess = servicos.filter(
  ({ status }) => status == "Pendente"
);
console.log(servicosPendentess);

separador();

//Exemplo 3:

const cursosDesign = cursos.filter((curso) => {
  return curso.categoria === "Design";
});
console.log(cursosDesign);

//Exemplo 4:
const cursosExcetoDesign = cursos.filter((curso) => {
  return curso.categoria !== "Design";
});
console.log(cursosExcetoDesign);

//VERSÃO SIMPLIFICADA

const cursosExcetoDesignn = cursos.filter(
  (curso) => curso.categoria !== "Design"
);
console.log(cursosExcetoDesignn);

separador();

//Exercicio
//Gere um novo array com os cursos que atendam os seguintes critérios:
// - categoria Front-End OU Mobile
// - Preços acima de 600

const cursosNovos = cursos.filter(
  (curso) =>
    (curso.categoria === "Front-End" || curso.categoria === "Mobile") &&
    curso.preco > 600
);
console.log(cursosNovos);

separador();

//Desafio
//Gerar um novo array com os cursos da categoria Back-End e COM O PREÇO atualizado com 10% de desconto. Para esta atividade você deverá combinar filter com map

//const cursosCategoria = cursos
//.filter((curso) => {
// return curso.categoria === "Back-End";
//})
// .map((curso) => {
// return {
// ...curso,
//preco: curso.preco - curso.preco * 0.1,
//};
//});

//console.log(cursosCategoria);

//VERSÃO DESETRUTURADA SIMPLIFICADA

const cursosCategoria = cursos
  .filter(({ categoria }) => categoria === "Back-End")
  .map((curso) => ({ ...curso, preco: curso.preco - curso.preco * 0.1 }));

console.log(cursosCategoria);
