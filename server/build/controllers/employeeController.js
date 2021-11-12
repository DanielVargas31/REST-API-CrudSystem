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
//IMPORTANDO LA BD
const database_1 = __importDefault(require("../database"));
class EmployeeController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json('list Employes');
            const employes = yield database_1.default.query('SELECT * FROM employes');
            res.json(employes);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const employes = yield database_1.default.query('SELECT * FROM employes WHERE id = ?', [id]);
            if (employes.length > 0) {
                return res.json(employes[0]);
            }
            res.status(404).json({ text: 'Not Founded Employee' });
            //res.json('One Employes this ' + req.params.id);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO employes set ?', [req.body]);
            res.json({ message: 'Created Employee' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM employes WHERE id = ?', [id]);
            res.json({ message: 'Eliminated Employee' });
            //res.json('Delete Employes' + req.params.id);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.send('List Employes')
            //pool.query('Describe employes');
            //res.json({text : 'Update Employes' + req.params.id});
            const { id } = req.params;
            yield database_1.default.query('UPDATE employes set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Updated Employee' });
        });
    }
}
const employeeController = new EmployeeController();
exports.default = employeeController;
