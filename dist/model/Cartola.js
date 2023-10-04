"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cartola = void 0;
class Cartola {
    //método construtor
    constructor(_formato, _cor, _peso) {
        this.formato = _formato;
        this.cor = _cor;
        this.peso = _peso;
    }
    //métodos GETTERS and SETTERS
    getFormato() {
        return this.formato;
    }
    setFormato(_formato) {
        this.formato = _formato;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
}
exports.Cartola = Cartola;
//# sourceMappingURL=Cartola.js.map