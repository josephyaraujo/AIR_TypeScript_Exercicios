// Exercício 2 - Criar uma função que receba um array de strings e retorne uma única string concatenando todas as palavras, separadas por espaço.
// Não entendi direito o enunciado dessa questão, porque ele pede para passar uma arrow function como parâmetro do join, mas o join não recebe uma 
// função como parâmetro, ele recebe um separador, que no caso é o espaço.
export function concatenarStrings(palavras: string[]): string {
    return palavras.join(' ');
}