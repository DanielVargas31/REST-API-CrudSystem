CREATE DATABASE ng_employee_db;

USE ng_employee_db;

CREATE TABLE employee(

    id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nroId VARCHAR(11) NOT NULL,
    tipoId VARCHAR(5) NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    area VARCHAR(50),
    image VARCHAR(200)
)

DESCRIBE employee;