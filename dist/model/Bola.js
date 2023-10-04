"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bola = void 0;
class Bola {
    //método construtor
    constructor(_material, _marca, _peso) {
        this.material = _material;
        this.marca = _marca;
        this.peso = _peso;
    }
    //métodos GETTERS and SETTERS
    getMaterial() {
        return this.material;
    }
    setMaterial(_material) {
        this.material = _material;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(_peso) {
        this.peso = _peso;
    }
}
exports.Bola = Bola;
//# sourceMappingURL=Bola.js.map