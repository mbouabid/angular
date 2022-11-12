import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { CreateEmployeeComponent } from './create-employe/create-employe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'edit-employe/:id', component: EditEmployeComponent},
  { path: '', component: EmployeesListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
