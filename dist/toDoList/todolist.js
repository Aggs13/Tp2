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
// @ts-ignore
const nodeImperativo_1 = require("../lib/nodeImperativo");
const funciones_1 = require("./funciones");
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        let op = "";
        let tareas = [];
        do {
            //Menu()
            console.log("\n¡Hola!");
            console.log("¿Qué deseas hacer?");
            console.log("[1] Ver Mis Tareas.");
            console.log("[2] Buscar una Tarea.");
            console.log("[3] Agregar una Tarea.");
            console.log("[4] Editar.");
            console.log("[0] Salir.");
            op = yield (0, nodeImperativo_1.input)("> ");
            switch (op) {
                case "1":
                    console.clear();
                    (0, funciones_1.verTareas)(tareas);
                    break;
                case "2":
                    console.clear();
                    yield (0, funciones_1.BuscTarea)(tareas);
                    break;
                case "3":
                    console.clear();
                    let newTarea = yield (0, funciones_1.agregarTarea)();
                    newTarea.id = tareas.length;
                    tareas.push(newTarea);
                    break;
                case "4":
                    console.clear();
                    yield (0, funciones_1.editarTarea)(tareas);
                    break;
                case "0":
                    console.log("Programa cerrado. . .");
                    break;
            }
        } while (op != "0");
        (0, nodeImperativo_1.close)();
    });
}
Main();
