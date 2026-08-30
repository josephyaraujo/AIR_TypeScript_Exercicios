import { describe, expect, test } from 'vitest';
import { quadradosComFor, quadradosComForEach } from './exercicio1'; // importando com chaves porque não fiz export default no arquivo exercicio1.ts

describe('Exercício 1 - Elevar elementos ao quadrado', () => {

    test('1.1 - elevar os elementos ao quadrado usando for', () => {
        const numeros = [3, 5, 7, 3, 8, 9, 1];

        const resultado = quadradosComFor(numeros);

        expect(resultado).toEqual([9, 25, 49, 9, 64, 81, 1]);
    });

    test('1.2 - elevar os elementos ao quadrado usando forEach', () => {
        const numeros = [3, 5, 7, 3, 8, 9, 1];

        const resultado = quadradosComForEach(numeros);

        expect(resultado).toEqual([9, 25, 49, 9, 64, 81, 1]);
    });

});