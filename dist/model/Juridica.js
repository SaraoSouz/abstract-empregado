"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juridica = void 0;
class Juridica {
    //método construtor
    constructor(_propetario, _nomeFantasia, _cnpj) {
        this.propetario = _propetario;
        this.nomeFantasia = _nomeFantasia;
        this.cnpj = _cnpj;
    }
    //métodos GETTERS and SETTERS
    getPropetario() {
        return this.propetario;
    }
    setPropetario(_propetario) {
        this.propetario = _propetario;
    }
    getNomeFantasia() {
        return this.nomeFantasia;
    }
    setNomeFantasia(_nomeFantasia) {
        this.nomeFantasia = _nomeFantasia;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(_cnpj) {
        this.cnpj = _cnpj;
    }
}
exports.Juridica = Juridica;
//# sourceMappingURL=Juridica.js.map