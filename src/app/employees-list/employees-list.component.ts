import { EmployeeService } from './../services/employee.service';
import { Employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
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

  updateEmploye(id: number) {
    this.router.navigate(['update-employe',id])
  }
  deleteEmploye(id: number) {
    this._employeService.deleteEmploye(id).subscribe(data => {
      this.router.navigate(['employees'])
    })
  }
  showEmploye(id: number) {
    this.router.navigate(['employee-details',id])

  }
  delete(id : any){

  }
  edit (employee : Employee){

  }

}
