export class Pessoa {
    nome: string;
    idade: number;
    constructor(nome:string , idade: number){
        this.nome = nome;
        this.idade = idade;
    }
    naoEhMaiorDeIdade(): boolean {
        return this.idade < 18;
    }
}