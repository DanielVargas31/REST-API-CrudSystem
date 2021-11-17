//Conexion a BD

//Modulo para conectarme a la BD
import mysql from 'promise-mysql';
//Importando Objeto de configuracion necesaria para la conexion a la BD
import  keys  from './keys';

//Iniciando conexion
const pool = mysql.createPool(keys.database);

//Metodo para enviar intrucciones
pool.getConnection()
    //Validacion de la conexion
    .then((connection: any) => {
        pool.releaseConnection(connection);
        console.log('DB is connected')
    });

//Exportando configuaracion de conexion a la BD
export default pool;
  