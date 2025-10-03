import { Suma,Resta,Mult,Div } from "./funciones";

// @ts-ignore
const { input, close } = require("../lib/nodeImpertaivo.js");

let op:string = ""
let num1:number
let num2:number

async function main() {

    do{
console.log("Ingrese la operacion")
console.log("1-Suma")
console.log("2-Resta")
console.log("3-Multiplicacion")
console.log("4-Division")
console.log("0-Salir")
op = await input("> ")
switch(op){
    case "1":
        num1 = parseFloat(await input("ingrese un numero: "))
        num2 = parseFloat(await input("ingrese un numero: "))
        Suma(num1,num2)

    break;

    case "2":
    break;
    
    case "3":
    break;

    case "4":
    break;

    default:
    break;
}


}while(op != "0")


    close();
}

main();
