"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    //método construtor
    constructor(_titulo, _editora, _autor) {
        this.titulo = _titulo;
        this.editora = _editora;
        this.autor = _autor;
    }
    //métodos GETTERS and SETTERS
    getTitulo() {
        return this.titulo;
    }
    setTitulo(_titulo) {
        this.titulo = _titulo;
    }
    getEditora() {
        return this.editora;
    }
    setEditora(_editora) {
        this.editora = _editora;
    }
    getAutor() {
        return this.autor;
    }
    setAutor(_autor) {
        this.autor = _autor;
    }
}
exports.Livro = Livro;
//# sourceMappingURL=Livro.js.map