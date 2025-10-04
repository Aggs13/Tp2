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
exports.Menu = Menu;
exports.verTareas = verTareas;
exports.agregarTarea = agregarTarea;
exports.BuscTarea = BuscTarea;
exports.editarTarea = editarTarea;
// @ts-ignore
const nodeImperativo_1 = require("../lib/nodeImperativo");
function Menu() {
    console.log("\n¡Hola!");
    console.log("¿Qué deseas hacer?");
    console.log("[1] Ver Mis Tareas.");
    console.log("[2] Buscar una Tarea.");
    console.log("[3] Agregar una Tarea.");
    console.log("[0] Salir.");
}
function verTareas(tareas) {
    tareas.forEach(tarea => {
        console.log(tarea);
    });
}
// Funciones para Agregar una tarea
function agregarTarea() {
    return __awaiter(this, void 0, void 0, function* () {
        let date = new Date;
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let aa = date.getFullYear();
        let id = 0;
        let titulo = yield (0, nodeImperativo_1.input)("Titulo: ");
        let descripcion = yield (0, nodeImperativo_1.input)("descripcion: ");
        let estado = yield Estados();
        let fecha = `${dd.toString}/${mm.toString} /${aa.toString}`;
        let vencimiento = yield FechaVencimiento();
        let edicion = "sin editar";
        let dificultad = yield Dificultad();
        let newTarea = {
            id,
            titulo,
            descripcion,
            estado,
            fecha,
            vencimiento,
            edicion,
            dificultad
        };
        return newTarea;
    });
}
function FechaVencimiento() {
    return __awaiter(this, void 0, void 0, function* () {
        let fechaVencimiento = "";
        console.log("Vencimiento");
        let dd = yield (0, nodeImperativo_1.input)("Dia: ");
        let mm = yield (0, nodeImperativo_1.input)("Mes: ");
        let aa = yield (0, nodeImperativo_1.input)("Año: ");
        return fechaVencimiento = `${dd}/${mm}/${aa}`;
    });
}
function Estados() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("[1]-Pendiente");
        console.log("[2]-En proceso");
        console.log("[3]-Terminada");
        console.log("[4]-Cancelada");
        let op = yield (0, nodeImperativo_1.input)("Ingrese el estado: ");
        let estado = "";
        if (op == "1")
            estado = "Pendiente";
        if (op == "2")
            estado = "En proceso";
        if (op == "3")
            estado = "Terminada";
        if (op == "4")
            estado = "Cancelada";
        else
            estado = "Pendiente";
        return estado;
    });
}
function Dificultad() {
    return __awaiter(this, void 0, void 0, function* () {
        let op = "";
        let dificultad = "";
        console.log("Dificultad");
        console.log("[1]-Facil | [2]-Normal | [3]-Dificil");
        op = yield (0, nodeImperativo_1.input)("> ");
        if (op == "1")
            dificultad = "Facil";
        if (op == "2")
            dificultad = "Normal";
        if (op == "3")
            dificultad = "Dificil";
        else
            dificultad = "Facil";
        return dificultad;
    });
}
// funcion para Buscar tarea 
function BuscTarea(tareas) {
    return __awaiter(this, void 0, void 0, function* () {
        let op = "";
        let id = "";
        let estado = "";
        let dificultad = "";
        console.log("Buscar tarea por -> [1]-ID | [2]-Estado | [3]-Dificultad");
        op = yield (0, nodeImperativo_1.input)("> ");
        if (op == "1") {
            id = yield (0, nodeImperativo_1.input)("Ingrese el ID: ");
            tareas.forEach(tarea => {
                if (tarea.id == parseInt(id)) {
                    console.log(tarea);
                }
            });
        }
        if (op == "2") {
            estado = yield (0, nodeImperativo_1.input)("[1]-Pendiente [2]-En Proceso [3]-Terminada [4]-Cancelada -> ");
            tareas.forEach(tarea => {
                if (tarea.estado == "Pendiente")
                    console.log(tarea);
                if (tarea.estado == "En proceso")
                    console.log(tarea);
                if (tarea.estado == "Terminada")
                    console.log(tarea);
                if (tarea.estado == "Cancelada")
                    console.log(tarea);
            });
        }
        if (op == "3") {
            dificultad = yield (0, nodeImperativo_1.input)("[1]-Facil [2]-Normal [3]-Dificil -> ");
            tareas.forEach(tarea => {
                if (tarea.dificultad == "Facil")
                    console.log(tarea);
                if (tarea.dificultad == "Normal")
                    console.log(tarea);
                if (tarea.dificultad == "Dificil")
                    console.log(tarea);
            });
        }
    });
}
// Editar tarea 
function editarTarea(tareas) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Editar");
        tareas.forEach(t => console.log(t));
        const idBusc = yield (0, nodeImperativo_1.input)("Ingrese el ID de la tarea: ");
        const editTarea = tareas.find(t => t.id === parseInt(idBusc));
        if (!editTarea) {
            console.log("Tarea no encontrada");
            return;
        }
        let date = new Date;
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let aa = date.getFullYear();
        let titulo = yield (0, nodeImperativo_1.input)("Titulo: ");
        let descripcion = yield (0, nodeImperativo_1.input)("descripcion: ");
        let estado = yield Estados();
        let vencimiento = yield FechaVencimiento();
        let dificultad = yield Dificultad();
        editTarea.titulo = titulo;
        editTarea.descripcion = descripcion;
        editTarea.estado = estado;
        editTarea.vencimiento = vencimiento;
        editTarea.edicion = `${dd.toString}/${mm.toString} /${aa.toString}`;
        editTarea.dificultad = dificultad;
        return;
    });
}
