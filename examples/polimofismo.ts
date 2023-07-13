
class Pessoa {
    nome: string;
    idade: number;
    
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    falar(): void {
        console.log(this.nome + ' falou');
    }
}
class Aluno extends Pessoa {
    matricula: string;
    constructor(nome: string, idade: number, matricula: string) {
        super(nome, idade);
        this.matricula = matricula;
    }

    falar(): void {
        console.log(`O ${this.nome} tem a matricula ${this.matricula} `);
    }
}
