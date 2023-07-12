// @deno-types="npm:@types/express@4.17.15"
import express , { json } from "npm:express@4.18.2";
import { Agendamento, CriarAgendamento } from "./caso-de-uso/criar-agendamento.ts";
import { AgendamentoEmMemoriaImpl } from "./implementacoes/agendamento-em-memoria.ts";

const app = express();
app.use(json());


const agendamentosDB: Agendamento[] = []

app.post("/agendamento", (req, res) => {
  const { nome , idade , data_agendamento } = req.body;
  try {
    const agendamentoRepository = new AgendamentoEmMemoriaImpl(agendamentosDB);
    const criarAgendamento = new CriarAgendamento(agendamentoRepository);
    const resultado = criarAgendamento.executar({ nome , idade , data_agendamento });
    return res.status(201).json(resultado);
  }
  catch(error){
    return res.status(400).json({ error: error.message });
  }
});

app.listen(8000);
console.log("🚀 Listening on port 8000");
