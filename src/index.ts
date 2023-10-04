import { Assalariado } from "./model/Assalariado";

const a1 = new Assalariado('Miroslav Klose', '8368725635', 1500);

a1.setNome('washington');
a1.setCpf('6666666');
a1.setSalario(2222);
console.log(`nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

