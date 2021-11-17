import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  resEmployees: any = []

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employeesService.getEmployees().subscribe(
      res => {
        this.resEmployees = res;
      },
      err => console.error(err)
    );

  }
  deleteEmployee(id: string) {
    this.employeesService.deleteEmployee(id).subscribe(
      res=> {
      console.log(res);
      this.getEmployees();
    },
    err => console.error(err)
    );
  }
}
