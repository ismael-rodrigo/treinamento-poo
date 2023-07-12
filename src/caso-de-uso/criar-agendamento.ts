import { IAgendamentoRepository } from "../abstracoes/agendamento-repository.ts";
import { Pessoa } from "../entidades/Pessoa.ts";
import * as uuid from "https://deno.land/std@0.192.0/uuid/mod.ts";

export type CriarAgendamentoInput = {
    nome: string;
    idade: number;
    data_agendamento: string;
}

export type Agendamento = {
    id: string;
    nome: string;
    idade: number;
    data_agendamento: string;
    ativo: boolean;
};

export class CriarAgendamento {
    constructor(
        private agendamentoRepository: IAgendamentoRepository
    ) { }

    executar({nome , idade , data_agendamento} : CriarAgendamentoInput){
        const pessoa = new Pessoa(nome, idade);
        if(pessoa.naoEhMaiorDeIdade()){
            throw new Error("Idade não permitida");
        }
        const agendamentoExistenteComMesmaData = this.agendamentoRepository.buscarPorData(data_agendamento)
        if (agendamentoExistenteComMesmaData) {
            throw new Error("Já existe um agendamento para esta data");
        }
        const agendamentoAtivoComMesmoNome = this.agendamentoRepository.buscarAtivoPorNome(nome)
        if (agendamentoAtivoComMesmoNome) {
            throw new Error("Já existe um agendamento ativo para esta pessoa");
        }
        const agendamento = this.agendamentoRepository.criar({
            id: uuid.v1.generate().toString() ,
            nome,
            idade,
            data_agendamento,
            ativo: true,
        });
        
        return agendamento;
    }
}