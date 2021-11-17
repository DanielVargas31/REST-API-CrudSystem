"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modulo express para crear servidor
const express_1 = __importDefault(require("express"));
//Modulo para ver peticiones a mi API por consola
const morgan_1 = __importDefault(require("morgan"));
//Modulo para comunicar mi servidor con el servidor de Angular
const cors_1 = __importDefault(require("cors"));
//Importando Enrutadores
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const employeeRoutes_1 = __importDefault(require("./routes/employeeRoutes"));
//Clase Servidor
class Server {
    constructor() {
        //inicializacion de express
        this.app = (0, express_1.default)();
        //Configuracion propiedad "app"
        this.config();
        //Configuracion 
        this.routes();
    }
    //Metodo para configurar el Servidor
    config() {
        //Asignado un puesto para nuestro Servidor
        this.app.set('port', process.env.PORT || 3000);
        //Usando morgan para ver las peticiones a nustra API por consola
        this.app.use((0, morgan_1.default)('dev'));
        //Usando cors para que angular pueda hacer peticiones a mi API
        this.app.use((0, cors_1.default)());
        //Usando configuracion de express para poder aceptar formatos json de las Aplicaciones cliente
        this.app.use(express_1.default.json());
        //this.app.use(express.urlencoded({ extended: false }));
    }
    //Metodo urar los enrutadores
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/employees', employeeRoutes_1.default);
    }
    //Metodo para inicializar Servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
//Instanciando Clase Servidor
const server = new Server();
server.start();
