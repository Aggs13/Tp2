"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suma = Suma;
exports.Resta = Resta;
exports.Mult = Mult;
exports.Div = Div;
exports.Menu = Menu;
function Suma(num1, num2) {
    console.log("---------");
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    console.log("---------");
}
function Resta(num1, num2) {
    console.log("---------");
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    console.log("---------");
}
function Mult(num1, num2) {
    console.log("---------");
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    console.log("---------");
}
function Div(num1, num2) {
    console.log("---------");
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
    console.log("---------");
}
function Menu() {
    console.log("Ingrese la operacion");
    console.log("1-Suma");
    console.log("2-Resta");
    console.log("3-Multiplicacion");
    console.log("4-Division");
    console.log("0-Salir");
}
