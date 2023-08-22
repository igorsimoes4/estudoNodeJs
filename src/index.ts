// let nome: string = "Igor";
// let idade: number = 23;

// console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

// Import / Export CommonJS

// const Matematica = require('./matematica');

let n1: number = 10;
let n2: number = 2;

// console.log(`Soma: ${Matematica.somar(n1, n2)}`);
// console.log(`Subtrair: ${Matematica.subtrair(n1, n2)}`);
// console.log(`Multiplicar: ${Matematica.multiplicar(n1, n2)}`);

// Import / Export Es6

import {  somar, subtrair, multiplicar  } from './matematica';

console.log(`Soma: ${somar(n1, n2)}`);
console.log(`Subtrair: ${subtrair(n1, n2)}`);