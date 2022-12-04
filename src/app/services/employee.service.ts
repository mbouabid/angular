import { Employee, PageOfEmployees } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { isNullishCoalesce } from 'typescript';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = 'http://localhost:3000/employees';
  nbEmployee : number = 0
  employees : Employee []=[]
  constructor(private http: HttpClient) {}

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}`);
  }
  getEmployeeByPage(page: number, size: number): Observable<PageOfEmployees> {
    let index = page * size;
    let totalPages = ~~(this.nbEmployee / size);
        if (this.nbEmployee % size !== 0) totalPages++;
        let pageOfEmployee = this.employees.slice(index, index + size);
        return of({
          page: page,
          size: size,
          totalPages: totalPages,
          employees: pageOfEmployee
        });
  }

  createEmployee(employee: Employee): Observable<object> {
    return this.http.post(`${this.url}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

  updateEmploye(id: number, employee: Employee): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, employee);
  }

  deleteEmploye(id: number): Observable<Object> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
