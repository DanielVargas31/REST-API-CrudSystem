import {Request ,Response} from 'express'

//Iportando la BD con el metodo de conexion
import pool from "../database"

class EmployeeController{
    //Metodo para obtener todos los empleados de la BD
    public async list (req: Request, res: Response){

        const employees = await pool.query('SELECT * FROM employee')
        res.json(employees)

    }
    //Metodo para obtener un empleado de la BD
    public async getOne (req: Request, res: Response):Promise <any>{
        //definiendo parametros
        const { id } = req.params;
        const employees = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
        //Validacion para saber si hay empleados
        if (employees.length > 0){
            return res.json(employees[0]);
        }
        res.status(404).json({text: 'Not Founded Employee'});
        
    }
    //Metodo para insertar empleado a la DB
    public async create (req: Request, res: Response): Promise <void> {
        //"[req.body]" para enviar y recibir datos en formato de json
        await pool.query('INSERT INTO employee set ?', [req.body])
        res.json({message: 'Created Employee'});

    }
    //Metodo para eliminar un empleado de la DB
    public async delete (req: Request, res: Response): Promise <void>{

        const { id }  = req.params;
        await pool.query('DELETE FROM employee WHERE id = ?', [id]);
        res.json({message: 'Eliminated Employee'});

    }
    //Metodo para actualizar un empleado de la DB
    public async update (req: Request, res: Response): Promise <void>{
        
        const { id }  = req.params;
        await pool.query('UPDATE employee set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Updated Employee'});

    }

}
//Instanciando la clase en una constante
const employeeController = new EmployeeController();
//Exportando Controlador
export default employeeController;