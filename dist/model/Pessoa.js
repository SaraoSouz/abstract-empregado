"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    // método construtor
    constructor(_nome, _anoNascimento) {
        this.nome = _nome;
        this.anoNascimento = _anoNascimento;
    }
    setIdade(_anoNascimento) {
        this.anoNascimento = _anoNascimento;
    }
    getIdade() {
        return this.anoNascimento;
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map