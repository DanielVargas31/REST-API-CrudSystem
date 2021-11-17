"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    //Metodo para definir rutas dentro de la API en en router
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
//Instanciando clase del Enrutador
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
