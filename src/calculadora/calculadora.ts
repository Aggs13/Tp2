import { Suma,Resta,Mult,Div,Menu } from "./funciones";

// @ts-ignore
const { input, close } = require("../lib/nodeImperativo");

let op:string = ""
let num1:number
let num2:number

async function main() {

    do{
        Menu()
        op = await input("> ")
        switch(op){
            case "1":
                console.clear()
                num1 = parseFloat(await input("ingrese un numero: "))
                num2 = parseFloat(await input("ingrese un numero: "))
                Suma(num1,num2)
            break;

            case "2":
                console.clear()
                num1 = parseFloat(await input("ingrese un numero: "))
                Resta(num1,num2)

            break;
            
            case "3":
                console.clear()
                num1 = parseFloat(await input("ingrese un numero: "))
                num2 = parseFloat(await input("ingrese un numero: "))
                Mult(num1,num2)
            break;

            case "4":
                console.clear()
                num1 = parseFloat(await input("ingrese un numero: "))
                num2 = parseFloat(await input("ingrese un numero: "))
                Div(num1,num2)

            break;

            default:
                console.clear()
                console.log("-Ingrese un numero valido")
            break;
        }
    }while(op != "0")
    close();
}
main();