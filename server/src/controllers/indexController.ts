import {Request ,Response} from 'express'

class IndexController{
    
    
    public index (req: Request, res: Response){
        res.send('Mensaje Bienvenida Sistema Empleados')
    }
}

export const indexController = new IndexController();