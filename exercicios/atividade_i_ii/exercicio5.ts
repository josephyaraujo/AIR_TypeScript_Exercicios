// Exercício 5 - Criar uma função que receba um array de números e retorne um novo array contendo apenas os números pares.
export function filtrarNumerosPares(numeros: number[]): number[] {
    return numeros.filter((numero) => numero % 2 === 0);
}