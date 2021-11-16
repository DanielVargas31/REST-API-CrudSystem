import { Router } from "express";
import  employeeController  from '../controllers/employeeController'





class EmployeesRoutes{

    public router: Router = Router();

    constructor(){
        this.config();

    }

    config(): void{
       this.router.get('/', employeeController.list)
       this.router.get('/employee/:id', employeeController.getOne)
       this.router.post('/', employeeController.create)
       this.router.put('/employee/:id', employeeController.update)
       this.router.delete('/employee/:id', employeeController.delete)

    }
}

const employeeRoutes = new EmployeesRoutes();
export default employeeRoutes.router;