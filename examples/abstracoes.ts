namespace Abstracoes {
    abstract class BancoDeDados {
        abstract salvar(nome: string): void;
        abstract alterar(): void;
        abstract excluir(): void;
        abstract listar(): void;
    }

    class UsuarioBancoDeDadosEmMemoria extends BancoDeDados {
        alterar(): void {
            throw new Error("Method not implemented.");
        }
        excluir(): void {
            throw new Error("Method not implemented.");
        }
        listar(): void {
            throw new Error("Method not implemented.");
        }

        salvar(nome: string){
            console.log('salvando usuario no banco de dados')
        }
    }

    class UsuarioBancoDeDadosSLQ extends BancoDeDados {
        alterar(): void {
            throw new Error("Method not implemented.");
        }
        excluir(): void {
            throw new Error("Method not implemented.");
        }
        listar(): void {
            throw new Error("Method not implemented.");
        }

        salvar(nome: string){
            console.log('salvando usuario no banco de dados com SQL')
        }
    }

    class CriarUsuario {
        executar(usuarioBancoDeDadosEmMemoria: BancoDeDados){
            usuarioBancoDeDadosEmMemoria.salvar('Luiz');
        }
    }
    

    new CriarUsuario().executar(new UsuarioBancoDeDadosSLQ());



}