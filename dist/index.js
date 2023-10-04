"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bola_1 = require("./model/Bola");
const Cartola_1 = require("./model/Cartola");
const Cobra_1 = require("./model/Cobra");
const Espada_1 = require("./model/Espada");
const Livro_1 = require("./model/Livro");
const bl = new Bola_1.Bola('couro sintético', 'ADIDAS', '450g');
console.log(bl);
const ct = new Cartola_1.Cartola(' cilíndrica', 'beje', '120g');
console.log(ct);
const cb = new Cobra_1.Cobra('gigantesca', 'titanoboa', 'Verde escuro e marrom');
console.log(cb);
const es = new Espada_1.Espada('1,15 m', 'lâmina de metal', 'prata');
console.log(es);
const lv = new Livro_1.Livro('Medicina dos horrores', 'Intrínseca', 'Lindsey Fitzharris');
console.log(lv);
//# sourceMappingURL=index.js.map