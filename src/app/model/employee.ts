import { first } from 'rxjs';

export class Employee {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  salary: number;
  experience: number;
  constructor(
    firstname: string,lastname: string,email: string,
    salary: number,experience: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.salary = salary;
    this.experience = experience;
  }
}
