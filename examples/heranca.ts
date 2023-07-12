namespace Heranca {

    class Pessoa {
        nome: string;
        idade: number;
        
        constructor(nome: string, idade: number) {
            this.nome = nome;
            this.idade = idade;
        }
        andar(): void {
            console.log(this.nome + ' andou');
        }
    }

    class Aluno extends Pessoa {
        matricula: string;
        constructor(nome: string, idade: number, matricula: string) {
            super(nome, idade);
            this.matricula = matricula;
        }
        falarMatricula(): void {
            console.log(this.matricula);
        }
    }

    new Pessoa('Luiz', 30)
}


