"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cobra = void 0;
class Cobra {
    //método construtor
    constructor(_tamanho, _especie, _cor) {
        this.tamanho = _tamanho;
        this.especie = _especie;
        this.cor = _cor;
    }
    //métodos GETTERS and SETTERS
    getTamanho() {
        return this.tamanho;
    }
    setComprimento(_tamanho) {
        this.tamanho = _tamanho;
    }
    getEspecie() {
        return this.especie;
    }
    setEspecie(_especie) {
        this.especie = _especie;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
}
exports.Cobra = Cobra;
//# sourceMappingURL=Cobra.js.map