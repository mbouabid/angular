import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './create-employe.component.html',
  styleUrls: ['./create-employe.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employee : Employee = new Employee("","","",0,0)
  constructor(private _employeService : EmployeeService,
    private router : Router) { }
  ngOnInit(): void {
  }
  add(){
    //this._employeService.save(this.employee)
    this._employeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.router.navigate(['/employees']);

    },
      error => console.log(error));
      this.employee=new Employee("","","",0,0)
  }

}
