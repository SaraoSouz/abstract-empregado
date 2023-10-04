"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espada = void 0;
class Espada {
    //método construtor
    constructor(_comprimento, _material, _cor) {
        this.comprimento = _comprimento;
        this.material = _material;
        this.cor = _cor;
    }
    //métodos GETTERS and SETTERS
    getComprimento() {
        return this.comprimento;
    }
    setComprimento(_comprimento) {
        this.comprimento = _comprimento;
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(_material) {
        this.material = _material;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
}
exports.Espada = Espada;
//# sourceMappingURL=Espada.js.map