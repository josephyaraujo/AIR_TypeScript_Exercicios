// Exercício 6 - Criar uma interface, em seguida, criar duas classes que implementam a interface com pelo menos um método.
// Implementar o método em ambas as classes. Por fim, testar as classes criando instâncias e chamando o método implementado.
interface Obra {
    descrever(): string;
}

export class Livro implements Obra {
    titulo: string;
    autor: string;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }

    descrever(): string {
        return `Livro: ${this.titulo}, escrito por ${this.autor}`;
    }
}

export class Filme implements Obra {
    titulo: string;
    diretor: string;

    constructor(titulo: string, diretor: string) {
        this.titulo = titulo;
        this.diretor = diretor;
    }

    descrever(): string {
        return `Filme: ${this.titulo}, dirigido por ${this.diretor}`;
    }
}