import { assertEquals , assertNotEquals } from "https://deno.land/std@0.193.0/testing/asserts.ts";
import axiod from "https://deno.land/x/axiod@0.26.2/mod.ts";

Deno.test("Deve criar agendamento caso os dados sejam válidos", async () => {
    const response = await axiod.post("http://localhost:8000/agendamento", {
            nome: "João",
            idade: 20,
            data_agendamento: "2021-10-10",
        },
    );
    const agendamento = await response.data;
    assertEquals(response.status, 201);
    assertNotEquals(agendamento.id, undefined);
    assertEquals(agendamento.nome, "João");
    assertEquals(agendamento.idade, 20);
    assertEquals(agendamento.data_agendamento, "2021-10-10");
    assertEquals(agendamento.ativo, true);
});
