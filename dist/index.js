"use strict";
// let nome: string = "Igor";
// let idade: number = 23;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
// Import / Export CommonJS
// const Matematica = require('./matematica');
let n1 = 10;
let n2 = 2;
const validator_1 = __importDefault(require("validator"));
// console.log(`Soma: ${somar(n1, n2)}`);
// console.log(`Subtrair: ${subtrair(n1, n2)}`);
console.log(validator_1.default.isEmail('fo@bar.com'));
