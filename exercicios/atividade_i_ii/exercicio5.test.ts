import { describe, expect, test } from 'vitest';
import { filtrarNumerosPares } from './exercicio5';

describe('Exercício 5 - Filtragem de números pares', () => {

    test('5.1 - retornar apenas os números pares', () => {
        const numeros = [8, 3, 9, 5, 6, 12];

        const resultado = filtrarNumerosPares(numeros);

        expect(resultado).toEqual([8, 6, 12]);
    });

});