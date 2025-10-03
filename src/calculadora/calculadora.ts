import { Suma,Resta,Mult,Div } from "./funciones";
let op:string = "1";

let num1:number = 7
let num2:number = 12

do{
console.log("Ingrese la operacion")
console.log("1-Suma")
console.log("2-Resta")
console.log("3-Multiplicacion")
console.log("4-Division")
console.log("0-Salir")

switch(op){
    case "1":
        console.log("Ingrese un numero")
        console.log("Ingrese otro numero")
        console.log(Suma(num1,num2))
        op = "0"
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