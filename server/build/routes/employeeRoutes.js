"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeeController_1 = __importDefault(require("../controllers/employeeController"));
class EmployeeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', employeeController_1.default.list);
        this.router.get('/:id', employeeController_1.default.getOne);
        this.router.post('/', employeeController_1.default.create);
        this.router.put('/:id', employeeController_1.default.update);
        this.router.delete('/:id', employeeController_1.default.delete);
    }
}
const employeeRoutes = new EmployeeRoutes();
exports.default = employeeRoutes.router;