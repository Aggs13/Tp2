export function Suma(num1:number,num2:number){
    console.log("---------")
    console.log(`${num1} + ${num2} = ${num1+num2}`)
    console.log("---------")
}

export function Resta(num1:number,num2:number){
    console.log("---------")
    console.log(`${num1} - ${num2} = ${num1-num2}`)
    console.log("---------")
}

export function Mult(num1:number, num2:number){
    console.log("---------")
    console.log(`${num1} * ${num2} = ${num1* num2}`)
    console.log("---------")
}

export function Div(num1:number, num2:number){
    console.log("---------")
    console.log(`${num1} / ${num2} = ${num1 / num2}`)
    console.log("---------")
}

export function Menu(){
console.log("Ingrese la operacion")
console.log("1-Suma")
console.log("2-Resta")
console.log("3-Multiplicacion")
console.log("4-Division")
console.log("0-Salir")
}