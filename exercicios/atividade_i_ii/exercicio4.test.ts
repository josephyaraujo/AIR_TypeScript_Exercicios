import { describe, expect, test } from 'vitest';
import { selecionarPrimeirosDois } from './exercicio4';

describe('Exercício 4 - Extração dos dois primeiros elementos', () => {

    test('4.1 - retornar os dois primeiros elementos', () => {
        const numeros = [2, 4, 6, 2, 8, 9, 5];

        const resultado = selecionarPrimeirosDois(numeros);

        expect(resultado).toEqual([2, 4]);
    });

});