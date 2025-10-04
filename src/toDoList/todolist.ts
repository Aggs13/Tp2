// @ts-ignore
import {input,close} from "../lib/nodeImperativo"
import { Menu,verTareas,agregarTarea,BuscTarea,editarTarea } from "./funciones"
import {Tarea} from "./tipos"

async function Main(){

let op:string = ""
let tareas:Tarea[] = []

do{
    //Menu()

    console.log("\n¡Hola!");
    console.log("¿Qué deseas hacer?");
    console.log("[1] Ver Mis Tareas.");
    console.log("[2] Buscar una Tarea.");
    console.log("[3] Agregar una Tarea.");
    console.log("[4] Editar.");
    console.log("[0] Salir.");
    op = await input("> ")
    switch(op){
        case "1":
            console.clear()
            verTareas(tareas)
        break;

        case "2":
            console.clear()
            await BuscTarea(tareas)
        break;

        case "3":
            console.clear()
            let newTarea:Tarea = await agregarTarea()
            newTarea.id = tareas.length
            tareas.push(newTarea)
        break;

        case "4":
            console.clear()
            await editarTarea(tareas)
            
        break;

        case "0":
            console.log("Programa cerrado. . .")
        break;
    }

}while(op != "0")


close()
}
Main()
