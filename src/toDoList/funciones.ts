// @ts-ignore
import {input,close} from "../lib/nodeImperativo"
import {Tarea} from "./tipos"


export function Menu() {
  console.log("\n¡Hola!");
  console.log("¿Qué deseas hacer?");
  console.log("[1] Ver Mis Tareas.");
  console.log("[2] Buscar una Tarea.");
  console.log("[3] Agregar una Tarea.");
  console.log("[0] Salir.");
}


export function verTareas(tareas:Tarea[]){
    tareas.forEach(tarea => {
        console.log(tarea)
    });
}

// Funciones para Agregar una tarea

export async function agregarTarea(){

    let date:Date = new Date

    let dd:number = date.getDate() 
    let mm:number = date.getMonth() + 1
    let aa:number = date.getFullYear()


    let id:number = 0
    let titulo:string = await input("Titulo: ")
    let descripcion:string = await input("descripcion: ")
    let estado:string = await Estados()
    let fecha: string = `${dd.toString}/${mm.toString} /${aa.toString}`
    let vencimiento:string = await FechaVencimiento()
    let edicion:string = "sin editar"
    let dificultad:string = await Dificultad()

    let newTarea:Tarea =  {
    id,
    titulo,
    descripcion,
    estado,
    fecha,
    vencimiento,
    edicion,
    dificultad
    }

    return newTarea
}


async function FechaVencimiento(){
    let fechaVencimiento:string = ""
    console.log("Vencimiento")
    let dd:string = await input("Dia: ")
    let mm:string = await input("Mes: ")
    let aa:string = await input("Año: ")

    return fechaVencimiento = `${dd}/${mm}/${aa}` 

}


async function Estados(){
    console.log("[1]-Pendiente")
    console.log("[2]-En proceso")
    console.log("[3]-Terminada")
    console.log("[4]-Cancelada")

    let op = await input("Ingrese el estado: ")
    let estado:string = ""
    
    if(op == "1") estado = "Pendiente"
    if(op == "2") estado = "En proceso"
    if(op == "3") estado = "Terminada"
    if(op == "4") estado = "Cancelada"
    else estado = "Pendiente"

    return estado

}


async function Dificultad() {
    let op:string = ""
    let dificultad:string = ""
    console.log("Dificultad")
    console.log("[1]-Facil | [2]-Normal | [3]-Dificil")
    op = await input("> ")
    if(op == "1") dificultad = "Facil"
    if(op == "2") dificultad = "Normal"
    if(op == "3") dificultad = "Dificil"
    else dificultad = "Facil"

    return dificultad   
}


// funcion para Buscar tarea 


export async function BuscTarea(tareas:Tarea[]) {
    let op:string = ""
    let id:string = ""
    let estado:string = ""
    let dificultad:string = ""
    console.log("Buscar tarea por -> [1]-ID | [2]-Estado | [3]-Dificultad" )
    op = await input("> ")

    if(op == "1"){
        id = await input("Ingrese el ID: ")
        tareas.forEach(tarea => {
            if(tarea.id == parseInt(id)){
                console.log(tarea)
            }
        });
    }

    if(op == "2"){

        estado = await input("[1]-Pendiente [2]-En Proceso [3]-Terminada [4]-Cancelada -> ")


        tareas.forEach(tarea => {
            if(tarea.estado == "Pendiente") console.log(tarea)
            if(tarea.estado == "En proceso") console.log(tarea)
            if(tarea.estado == "Terminada") console.log(tarea)
            if(tarea.estado == "Cancelada") console.log(tarea)
            
        });
    }

    if(op == "3"){
        dificultad = await input("[1]-Facil [2]-Normal [3]-Dificil -> ")
        tareas.forEach(tarea => {
            if(tarea.dificultad == "Facil") console.log(tarea)
            if(tarea.dificultad == "Normal") console.log(tarea)
            if(tarea.dificultad == "Dificil") console.log(tarea)
        });
        
    }

}


// Editar tarea 

export async function editarTarea(tareas: Tarea[]) {
    console.log("Editar")

    tareas.forEach(t => console.log(t))

    const idBusc = await input("Ingrese el ID de la tarea: ")
    const editTarea = tareas.find(t => t.id === parseInt(idBusc))

    if (!editTarea) {
        console.log("Tarea no encontrada")
        return
    }

    let date:Date = new Date

    let dd:number = date.getDate() 
    let mm:number = date.getMonth() + 1
    let aa:number = date.getFullYear()

    let titulo:string = await input("Titulo: ")
    let descripcion:string = await input("descripcion: ")
    let estado:string = await Estados()
    let vencimiento:string = await FechaVencimiento()
    let dificultad:string = await Dificultad()

    editTarea.titulo = titulo
    editTarea.descripcion = descripcion
    editTarea.estado = estado
    editTarea.vencimiento = vencimiento
    editTarea.edicion = `${dd.toString}/${mm.toString} /${aa.toString}`
    editTarea.dificultad = dificultad
    
    return

}
