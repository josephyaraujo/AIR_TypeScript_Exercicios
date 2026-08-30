// Exercício 1: Criar um programa que receba um array de números e retorne um novo array contendo o quadrado de cada número. 
// Implementar a função utilizando tanto o loop for quanto o método forEach.

export function quadradosComFor(numeros: number[]): number[] { //usando o um loop for convecional
    const resultado: number[] = [];

    for (let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] ** 2);
    }

    return resultado;
}

export function quadradosComForEach(numeros: number[]): number[] { //usando o método forEach
    const resultado: number[] = [];

    numeros.forEach((numero) => { //usei arrow function para simplificar a sintaxe, como demonstrado no exemplo em sala de aula
        resultado.push(numero ** 2);
    });

    return resultado;
}

// trabalhei com o export para poder rodar os testes no arquivo de teste, visto que foi solicitado que fosse feito um teste unitário para cada função criada.
// no mais, como orientado, observou-se a aba "Actions" do GitHub para verificar se os testes foram executados corretamente.  