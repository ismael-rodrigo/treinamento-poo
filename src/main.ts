// @deno-types="npm:@types/express@4.17.15"
import express , { json } from "npm:express@4.18.2";

const app = express();
app.use(json());

type Agendamento = {
  id: number;
  nome: string;
  idade: number;
  data_agendamento: string;
  ativo: boolean;
};

const agendamentosBancoDeDados: Agendamento[] = []

app.post("/agendamento", (req, res) => {
  const { nome , idade , data_agendamento } = req.body;

  if(idade < 18){
    return res.status(400).json({ error: "Idade não permitida" });
  }
  const agendamentoExistenteComMesmaData = agendamentosBancoDeDados.find(agendamentosBancoDeDados => agendamentosBancoDeDados.data_agendamento === data_agendamento)
  if (agendamentoExistenteComMesmaData) {
    return res.status(400).json({ error: "Já existe um agendamento para esta data" });
  }
  const agendamentoAtivoComMesmoNome = agendamentosBancoDeDados.find(agendamento => agendamento.nome === nome && agendamento.ativo) 
  if (agendamentoAtivoComMesmoNome) {
    return res.status(400).json({ error: "Já existe um agendamento ativo para este nome" });
  }

  const agendamento: Agendamento = {
    id: agendamentosBancoDeDados.length + 1,
    nome,
    idade,
    data_agendamento,
    ativo: true,
  };

  agendamentosBancoDeDados.push(agendamento);
  return res.status(201).json(agendamento);
});

app.listen(8000);
console.log("🚀 Listening on port 8000");
