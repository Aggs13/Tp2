"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const funciones_1 = require("./funciones");
// @ts-ignore
const { input, close } = require("../lib/nodeImperativo");
let op = "";
let num1;
let num2;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        do {
            (0, funciones_1.Menu)();
            op = yield input("> ");
            switch (op) {
                case "1":
                    console.clear();
                    num1 = parseFloat(yield input("ingrese un numero: "));
                    num2 = parseFloat(yield input("ingrese un numero: "));
                    (0, funciones_1.Suma)(num1, num2);
                    break;
                case "2":
                    console.clear();
                    num1 = parseFloat(yield input("ingrese un numero: "));
                    (0, funciones_1.Resta)(num1, num2);
                    break;
                case "3":
                    console.clear();
                    num1 = parseFloat(yield input("ingrese un numero: "));
                    num2 = parseFloat(yield input("ingrese un numero: "));
                    (0, funciones_1.Mult)(num1, num2);
                    break;
                case "4":
                    console.clear();
                    num1 = parseFloat(yield input("ingrese un numero: "));
                    num2 = parseFloat(yield input("ingrese un numero: "));
                    (0, funciones_1.Div)(num1, num2);
                    break;
                default:
                    console.clear();
                    console.log("-Ingrese un numero valido");
                    break;
            }
        } while (op != "0");
        close();
    });
}
main();
