import { Router } from "express";
import { indexController } from '../controllers/indexController'

class IndexRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
    //Metodo para definir rutas dentro de la API en en router
    config(): void{
       this.router.get('/', indexController.index)

    }
}
//Instanciando clase del Enrutador
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;