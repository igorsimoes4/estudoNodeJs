"use strict";
// let nome: string = "Igor";
// let idade: number = 23;
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
// Import / Export CommonJS
// const Matematica = require('./matematica');
let n1 = 10;
let n2 = 2;
// console.log(`Soma: ${Matematica.somar(n1, n2)}`);
// console.log(`Subtrair: ${Matematica.subtrair(n1, n2)}`);
// console.log(`Multiplicar: ${Matematica.multiplicar(n1, n2)}`);
// Import / Export Es6
const matematica_1 = require("./matematica");
console.log(`Soma: ${(0, matematica_1.somar)(n1, n2)}`);
console.log(`Subtrair: ${(0, matematica_1.subtrair)(n1, n2)}`);
