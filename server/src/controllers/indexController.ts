//Importando los tipos de datos Request y Response dede el modulo express
import {Request ,Response} from 'express'

class IndexController{
    
    public index (req: Request, res: Response){
        res.send('Mensaje Bienvenida Sistema Empleados')
    }
}

//Exportando Controlador
export const indexController = new IndexController();