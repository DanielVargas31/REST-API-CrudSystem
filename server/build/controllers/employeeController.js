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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Iportando la BD con el metodo de conexion
const database_1 = __importDefault(require("../database"));
class EmployeeController {
    //Metodo para obtener todos los empleados de la BD
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield database_1.default.query('SELECT * FROM employee');
            res.json(employees);
        });
    }
    //Metodo para obtener un empleado de la BD
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //definiendo parametros
            const { id } = req.params;
            const employees = yield database_1.default.query('SELECT * FROM employee WHERE id = ?', [id]);
            //Validacion para saber si hay empleados
            if (employees.length > 0) {
                return res.json(employees[0]);
            }
            res.status(404).json({ text: 'Not Founded Employee' });
        });
    }
    //Metodo para insertar empleado a la DB
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //"[req.body]" para enviar y recibir datos en formato de json
            yield database_1.default.query('INSERT INTO employee set ?', [req.body]);
            res.json({ message: 'Created Employee' });
        });
    }
    //Metodo para eliminar un empleado de la DB
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM employee WHERE id = ?', [id]);
            res.json({ message: 'Eliminated Employee' });
        });
    }
    //Metodo para actualizar un empleado de la DB
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE employee set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Updated Employee' });
        });
    }
}
//Instanciando la clase en una constante
const employeeController = new EmployeeController();
//Exportando Controlador
exports.default = employeeController;
