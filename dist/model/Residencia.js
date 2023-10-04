"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residencia = void 0;
class Residencia {
    //método construtor
    constructor(_tipo, _quantComodos, _garagem) {
        this.tipo = _tipo;
        this.quantComodos = _quantComodos;
        this.garagem = _garagem;
    }
    //métodos GETTERS and SETTERS
    getTipo() {
        return this.tipo;
    }
    setTipo(_tipo) {
        this.tipo = _tipo;
    }
    getQuantComodos() {
        return this.quantComodos;
    }
    setQuantComodos(_quantComodos) {
        this.quantComodos = _quantComodos;
    }
    getGaragem() {
        return this.garagem;
    }
    setGaragem(_garagem) {
        this.garagem = _garagem;
    }
}
exports.Residencia = Residencia;
//# sourceMappingURL=Residencia.js.map