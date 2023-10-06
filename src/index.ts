import { Assalariado } from "./model/Assalariado";
import { comissionado } from "./model/Comissionado";

const a1 = new Assalariado('Miroslav Klose', '8368725635', 1500);

a1.setNome('washington');
a1.setCpf('6666666');
a1.setSalario(2222);
console.log(`nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 = new comissionado ('maaaaa','39302940',3949,0.10)
c1.setNome('luciano');
c1.setCpf('0000000000000000000');
c1.setTotalVendas(3333);
c1.setTaxaComissao(0.00);
console.log(`Nome: ${c1.getNome()}, CPF: ${c1.getCpf()}`);
console.log(`Comissao: ${c1.getTaxaComissao()} Total Vendas: ${c1.getTotalVendas()}`);
console.log(`Vencimento: ${c1.vencimento()}`);
