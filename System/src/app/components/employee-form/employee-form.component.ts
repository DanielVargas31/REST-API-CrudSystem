import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeesService } from '../../services/employees.service'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee = {
    id: 0,
    tipoId: '',
    nroId: '',
    nombres: '',
    apellidos: '',
    area: '',
    image: ''
  }
 
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
  }

  saveEmployee(){

    delete this.employee.id;
    
    this.employeesService.saveEmployee(this.employee).subscribe(
    res => {
      console.log(res)
    },
    err => console.error(err)
    );
  }

}
