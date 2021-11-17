import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/Employee'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  API_URI = environment.API_URI;

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
