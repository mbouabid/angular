import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000/employees';
  constructor(private http : HttpClient) { }
  /*getAll(): Employee[]{
    return this.employees
  }
  save(employe : Employee): void{
    this.employees.push(employe)
  }*/

  getAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}`);
  }

  createEmployee(employee: Employee): Observable<object>{
    return this.http.post(`${this.url}`, employee);
  }
}
