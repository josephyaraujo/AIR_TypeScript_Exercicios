// Exercício 3 - Criar uma função que receba um array de strings e retorne um novo array com as palavras ordenadas em ordem decrescente.
export function ordenarDecrescente(palavras: string[]): string[] {
    return palavras.sort((a, b) => b.localeCompare(a)); // usei o localeCompare para comparar as strings (encontrei esse método que faz essa comparação e já organiza em ordem crescente).
}                                                       // só para atender o requisito do enunciado, inverti a ordem dos parâmetros da função de comparação, para que o resultado seja decrescente.