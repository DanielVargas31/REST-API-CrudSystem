"use strict";
//Conexion a BD
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modulo para conectarme a la BD
const promise_mysql_1 = __importDefault(require("promise-mysql"));
//Importando Objeto de configuracion necesaria para la conexion a la BD
const keys_1 = __importDefault(require("./keys"));
//Iniciando conexion
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
//Metodo para enviar intrucciones
pool.getConnection()
    //Validacion de la conexion
    .then((connection) => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});
//Exportando configuaracion de conexion a la BD
exports.default = pool;
