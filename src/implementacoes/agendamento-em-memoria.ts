import { IAgendamentoRepository } from "../abstracoes/agendamento-repository.ts";
import { Agendamento } from "../caso-de-uso/criar-agendamento.ts";

export class AgendamentoEmMemoriaImpl implements IAgendamentoRepository {
    agendamentos: Agendamento[]
    constructor(referenciaDB: Agendamento[]) {
        this.agendamentos = referenciaDB;
    }
    buscarPorData(data: string) {
        return this.agendamentos.find(agendamento => agendamento.data_agendamento === data);
    }
    buscarAtivoPorNome(nome: string) {
        return this.agendamentos.find(agendamento => agendamento.nome === nome && agendamento.ativo);
    }
    criar(agendamento: Agendamento) {
        this.agendamentos.push(agendamento);
        return agendamento;
    }
}