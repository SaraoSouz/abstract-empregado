"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    //método construtor
    constructor(_marca, _modelo, _cor) {
        this.marca = _marca;
        this.modelo = _marca;
        this.cor = _cor;
    }
    //métodos GETTERS and SETTERS
    getMarca() {
        return this.marca;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(_modelo) {
        this.modelo = _modelo;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map