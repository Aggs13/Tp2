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
                console.log("---------")
                console.log(`${num1} + ${num2} = ${Suma(num1,num2)}`)
                console.log("---------")
            break;

            case "2":
                console.clear()
                num1 = parseFloat(await input("ingrese un numero: "))
                num2 = parseFloat(await input("ingrese un numero: "))
                console.log("---------")
                console.log(`${num1} - ${num2} = ${ Resta(num1,num2)}`)
                console.log("---------")

            break;
            
            case "3":
                console.clear()
                num1 = parseFloat(await input("ingrese un numero: "))
                num2 = parseFloat(await input("ingrese un numero: "))
                console.log("---------")
                console.log(`${num1} * ${num2} = ${ Mult(num1,num2)}`)
                console.log("---------")

            break;

            case "4":
                console.clear()
                num1 = parseFloat(await input("ingrese un numero: "))
                num2 = parseFloat(await input("ingrese un numero: "))
                console.log("---------")
                console.log(`${num1} / ${num2} = ${ Div(num1,num2)}`)
                console.log("---------")

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
