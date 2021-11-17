import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeesService } from '../../services/employees.service'
import { ActivatedRoute,Router } from '@angular/router'

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

  edit: boolean = false;



  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']){
      this.employeesService.getEmployee(params['id']).subscribe(
        res => {
          console.log(res)
          this.employee = res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveEmployee() {

    delete this.employee.id;

    this.employeesService.saveEmployee(this.employee).subscribe(
    res => {
      console.log(res)
      this.router.navigate(['/empleados'])
    },
    err => console.error(err)
    );
  }
  updateEmployee(){

    this.employeesService.updateEmployee(this.employee.id, this.employee).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/empleados'])
      },
      err => console.error(err)
    );
  }



}
