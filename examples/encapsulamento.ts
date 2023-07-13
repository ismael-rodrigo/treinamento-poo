
class Pessoa {
    nome: string;
    private idade: number;
    
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    ehMaiorDeIdade(): boolean {
        return this.idade >= 18;
    }

}

const pessoa = new Pessoa('Luiz', 30);
if(pessoa.ehMaiorDeIdade()){
    console.log(pessoa.nome + ' é maior de idade');
}
    
