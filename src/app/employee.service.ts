import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployeeById(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
