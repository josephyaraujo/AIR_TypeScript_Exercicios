import { describe, expect, test } from 'vitest';
import { ordenarDecrescente } from './exercicio3';

describe('Exercício 3 - Ordenação decrescente', () => {

    test('3.1 - ordenar as palavras em ordem decrescente', () => {
        const palavras = ['carro', 'boneco', 'ave', 'lapis'];

        const resultado = ordenarDecrescente(palavras);

        expect(resultado).toEqual(['lapis', 'carro', 'boneco', 'ave']);
    });

});