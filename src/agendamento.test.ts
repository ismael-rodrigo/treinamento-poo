import { assertEquals , assertNotEquals } from "https://deno.land/std@0.193.0/testing/asserts.ts";
import { CriarAgendamento } from "./caso-de-uso/criar-agendamento.ts";
import { AgendamentoEmMemoriaImpl } from "./implementacoes/agendamento-em-memoria.ts";

Deno.test("Deve criar agendamento caso os dados sejam válidos", () => {
    const agendamentoRepository = new AgendamentoEmMemoriaImpl([]);
    const criarAgendamento = new CriarAgendamento(agendamentoRepository);
    const agendamento = criarAgendamento.executar({
            nome: "João",
            idade: 20,
            data_agendamento: "2021-10-10",
        },
    );
    assertNotEquals(agendamento.id, undefined);
    assertEquals(agendamento.nome, "João");
    assertEquals(agendamento.idade, 20);
    assertEquals(agendamento.data_agendamento, "2021-10-10");
    assertEquals(agendamento.ativo, true);
});
