// Exercício 4 - Criar uma função que receba um array de números e retorne um novo array contendo apenas os dois primeiros elementos.
export function selecionarPrimeirosDois(numeros: number[]): number[] {
    return numeros.slice(0, 2); // o método slice usa como parâmetro o índice inicial e o índice final (não inclusivo)
}                               // isso explica o porquê de eu ter colocado 0 e 2
