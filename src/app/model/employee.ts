import { first } from 'rxjs';

export class Employee {
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  salary!: number;
  experience!: number;
  photo !: string
  profession!: string
}
export interface PageOfEmployees{
  employees : Employee[]
  page : number
  size : number
  totalPages : number
}
