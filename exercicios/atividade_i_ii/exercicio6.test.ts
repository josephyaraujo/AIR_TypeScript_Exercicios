import { describe, expect, test } from 'vitest';
import { Livro, Filme } from './exercicio6';

describe('Exercício 6 - Orientação a Objetos e Interfaces', () => {

    test('6.5.1 - testar a classe Livro', () => {
        const livro = new Livro(
            'A correspondente',
            'Virginia Evans'
        );

        livro.titulo = 'O gosto da liberdade';
        livro.autor = 'Alejandro Puyana';

        expect(livro.descrever()).toBe(
            'Livro: O gosto da liberdade, escrito por Alejandro Puyana'
        );
    });

    test('6.5.2 - testar a classe Filme', () => {
        const filme = new Filme(
            'Hamnet: a vida antes de Hamlet',
            'Chloé Zhao'
        );

        filme.titulo = 'A Odisseia';
        filme.diretor = 'Christopher Nolan';

        expect(filme.descrever()).toBe(
            'Filme: A Odisseia, dirigido por Christopher Nolan'
        );
    });

});