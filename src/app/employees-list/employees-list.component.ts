import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  emp1 = {
    firstname : "Mohamed",
    lastname : "Ali",
    email : "mohamed@gmail.com",
    salary : 1500,
    experience : 0
  }
  emp2 = {
    firstname : "Mohamed",
    lastname : "Salah",
    email : "salah@gmail.com",
    salary : 3000,
    experience : 3
  }
  employees = [this.emp1,this.emp2]

  constructor() { }

  ngOnInit(): void {
    this.employees.push({
      firstname : "Mohamed",
      lastname : "Amine",
      email : "Amine@gmail.com",
      salary : 4000,
      experience : 6
    })
    console.log(this.employees)
  }

}
