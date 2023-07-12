import { Agendamento } from "../caso-de-uso/criar-agendamento.ts";

export interface IAgendamentoRepository {
    buscarPorData(data: string): Agendamento | undefined;
    buscarAtivoPorNome(nome: string): Agendamento | undefined;
    criar(agendamento: Agendamento): Agendamento;
}