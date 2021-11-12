import {Request ,Response} from 'express'

//IMPORTANDO LA BD
import pool from "../database"

class EmployeeController{
    
    
    public async list (req: Request, res: Response){
        
        //res.json('list Employes');
        const employes = await pool.query('SELECT * FROM employes')
        res.json(employes)

    }
    public async getOne (req: Request, res: Response):Promise <any>{

        const {id} = req.params;
        const employes = await pool.query('SELECT * FROM employes WHERE id = ?', [id]);
        if (employes.length > 0){
            return res.json(employes[0]);
        }
        res.status(404).json({text: 'Not Founded Employee'});
        //res.json('One Employes this ' + req.params.id);
    }

    public async create (req: Request, res: Response): Promise <void> {
        await pool.query('INSERT INTO employes set ?', [req.body])
        res.json({message: 'Created Employee'});

    }
    public async delete (req: Request, res: Response): Promise <void>{
        const { id}  = req.params;
        await pool.query('DELETE FROM employes WHERE id = ?', [id]);
        res.json({message: 'Eliminated Employee'});
    
        //res.json('Delete Employes' + req.params.id);

    }
    public async update (req: Request, res: Response): Promise <void>{
        //res.send('List Employes')
        //pool.query('Describe employes');
        //res.json({text : 'Update Employes' + req.params.id});
        const { id }  = req.params;
        await pool.query('UPDATE employes set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'Updated Employee'});

    }

}

const employeeController = new EmployeeController();
export default employeeController;