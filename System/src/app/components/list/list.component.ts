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
    this.employeesService.getEmployees().subscribe(
      res => {
        this.resEmployees = res;
      },
      err => console.error(err)
    );
  }
}
