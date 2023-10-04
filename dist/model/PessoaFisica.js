"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaFisica = void 0;
class PessoaFisica {
    //método construtor
    constructor(_nome, _cpf) {
        this.nome = _nome;
        this.cpf = _cpf;
    }
    //métodos GETTERS and SETTERS
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(_cpf) {
        this.cpf = _cpf;
    }
}
exports.PessoaFisica = PessoaFisica;
//# sourceMappingURL=PessoaFisica.js.map