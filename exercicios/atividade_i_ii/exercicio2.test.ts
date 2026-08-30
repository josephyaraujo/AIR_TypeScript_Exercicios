import { describe, expect, test } from 'vitest';
import { concatenarStrings } from './exercicio2';

describe('Exercício 2 - Concatenação de strings', () => {

    test('2.1 - concatenar as strings utilizando espaço', () => {
        const palavras = ['Arrays', 'com', 'TypeScript'];

        const resultado = concatenarStrings(palavras);

        expect(resultado).toBe('Arrays com TypeScript');
    });

});