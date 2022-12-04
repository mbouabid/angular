import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees : Employee[] = []
  constructor(private _employeService : EmployeeService,
    private router : Router) { }

  ngOnInit(): void {
    this.getEmployeesList()
  }

  private getEmployeesList() {
    this._employeService.getAll().subscribe(data => {
      this.employees = data;
    })
  }
}
