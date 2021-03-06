import { Router } from "express";
import  employeeController  from '../controllers/employeeController'

class EmployeesRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }
     //Metodo para definir rutas y peticiones dentro de la API 
    config(): void{
       this.router.get('/', employeeController.list)
       this.router.get('/:id', employeeController.getOne)
       this.router.post('/', employeeController.create)
       this.router.put('/:id', employeeController.update)
       this.router.delete('/:id', employeeController.delete)
    }
}
//Inicializando Clase del Enrutador
const employeeRoutes = new EmployeesRoutes();
export default employeeRoutes.router;