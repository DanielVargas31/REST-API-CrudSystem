//Modulo express para crear servidor
import express, { Application } from 'express';
//Modulo para ver peticiones a mi API por consola
import morgan from 'morgan';
//Modulo para comunicar mi servidor con el servidor de Angular
import cors from 'cors';
//Importando Enrutadores
import indexRoutes from './routes/indexRoutes';
import employeeRoutes from './routes/employeeRoutes';

//Clase Servidor
class Server{

    //Propiedad "app" de tipo "Application"
    public app : Application;

    constructor(){
        //inicializacion de express
        this.app = express();
        //Configuracion propiedad "app"
        this.config();
        //Configuracion 
        this.routes();
    }
    //Metodo para configurar el Servidor
    config(): void{
        //Asignado un puesto para nuestro Servidor
        this.app.set('port', process.env.PORT || 3000);
        //Usando morgan para ver las peticiones a nustra API por consola
        this.app.use(morgan('dev'));
        //Usando cors para que angular pueda hacer peticiones a mi API
        this.app.use(cors());
        //Usando configuracion de express para poder aceptar formatos json de las Aplicaciones cliente
        this.app.use(express.json());
        
        //this.app.use(express.urlencoded({ extended: false }));

    }
    //Metodo urar los enrutadores
    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/employees',employeeRoutes);

    }
    //Metodo para inicializar Servidor
    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port', this.app.get('port'))

        })
    }

}

//Instanciando Clase Servidor
const server = new Server();
server.start();