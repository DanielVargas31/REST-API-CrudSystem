import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/Employee'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get(`${this.API_URI}/employees`);
  }
  getEmployee(id : string){
     return this.http.get(`${this.API_URI}/employees/${id}`);
  }
  saveEmployee(employee : Employee){
    return this.http.post(`${this.API_URI}/employees`, employee);
  }
  updateEmployee(id : any, updatedEmployee: Employee): Observable<Employee>{
    return this.http.put( `${this.API_URI}/employees/${id}`, updatedEmployee)
  }
  deleteEmployee(id : string){
    return this.http.delete(`${this.API_URI}/employees/${id}`);
  }

}
