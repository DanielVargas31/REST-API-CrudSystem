"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send('Mensaje Bienvenida Sistema Empleados');
    }
}
//Exportando Controlador
exports.indexController = new IndexController();
