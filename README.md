# Atividades de revisão e reforço de JavaScript

## Sobre escopo de variáveis e constantes

- `var`: escopo GLOBAL
- `let`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada
- `const`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada. Obs.:
  **obrigatório** inicializar com algum valor.

## Módulos no JavaScript

Existem duas formas de uso:

- Módulos CJS: mecanismo mais antigo, usa `module.exports` e `require` associado à uma constante.
- Módulos ESM: Mecanismo atual, usa `export` e `import`.

**Obs.:** recomendável criar na raíz o `package.json` contendo:

```json
{
  "type": "module"
}
```

---

## Sobre os operadores REST e SPREAD (...)

## Operador REST

Objetivo do Operador REST (...)
Capturar múltiplos argumentos ou elementos e agrupá-los em um único array.
É útil para funções com número variável de parâmetros ou para extrair partes de arrays/objetos.

## Operador Spread

Objetivo do Operador SPREAD (...)
Desempacotar elementos de arrays ou objetos em partes individuais.
É usado para copiar, combinar ou passar dados de forma mais flexível e legível.

## Desestruturação

A desestruturação em JavaScript é uma forma de extrair valores de arrays ou propriedades de objetos e atribuí-los diretamente a variáveis. Ela serve para tornar o código mais limpo, legível e eficiente, evitando a repetição de acessos a estruturas de dados. Com isso, é possível trabalhar com os dados de forma mais prática, especialmente em situações onde há muitos valores ou propriedades sendo manipulados.
