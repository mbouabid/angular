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

  getAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}`);
  }

  createEmployee(employee: Employee): Observable<object>{
    return this.http.post(`${this.url}`, employee);
  }

  getEmployeeById(id: number) : Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

  updateEmploye(id: number, employee: Employee): Observable<Object>{
    return this.http.put(`${this.url}/${id}`, employee);
  }

  deleteEmploye(id: number): Observable<Object>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
