"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    //método construtor
    constructor(_tipo, _modelo, _fabricante) {
        this.tipo = _tipo;
        this.modelo = _modelo;
        this.fabricante = _fabricante;
    }
    //métodos GETTERS and SETTERS
    getTipo() {
        return this.tipo;
    }
    setTipo(_tipo) {
        this.tipo = _tipo;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(_modelo) {
        this.modelo = _modelo;
    }
    getFabricante() {
        return this.fabricante;
    }
    setFabricante(_fabricante) {
        this.fabricante = _fabricante;
    }
}
exports.Veiculo = Veiculo;
//# sourceMappingURL=Veiculo.js.map