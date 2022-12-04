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
  currentPage = 0
  pageSize : number =3
  totalPages : number =0

  constructor(private _employeService : EmployeeService,
    private router : Router) { }

  ngOnInit(): void {
    console.log(this.currentPage)
    //this.getEmployeesList()
    this._employeService.getAll().subscribe(data => {
      this._employeService.employees=data
      this._employeService.nbEmployee=data.length
      this.getOnePageOfEmployee(0)
    })
    //this.getOnePageOfEmployee()
  }

  private getEmployeesList() {
    this._employeService.getAll().subscribe(data => {
      this.employees = data;
      this._employeService.employees=data
      this._employeService.nbEmployee=data.length
    })
  }

  public getOnePageOfEmployee(page : number) {
    this.currentPage=page
    this._employeService.getEmployeeByPage(page,this.pageSize).subscribe(data => {
      this.employees = data.employees;
      this.totalPages=data.totalPages
      console.log(data)
    },
    error => console.log(error));
  }


  editEmploye(id: number) {
    this.router.navigate(['edit-employe',id])
  }
  deleteEmploye(id: number) {
    let  response = confirm("Voulez vous vraiment supprimer ce compte?");
    if (response){
      this._employeService.deleteEmploye(id).subscribe(data => {

        this.employees=this.employees.filter(item => item.id !== id)
      },
      error => console.log(error));

    }

  }
  showEmploye(id: number) {
    this.router.navigate(['employee-details',id])
  }
}
