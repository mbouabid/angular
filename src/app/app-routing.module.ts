import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrivateSpaceComponent } from './private-space/private-space.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { CreateEmployeeComponent } from './create-employe/create-employe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'edit-employe/:id', component: EditEmployeComponent},
  { path: 'home', component:HomeComponent },
  { path: 'news', component: NewsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'private-space', component: PrivateSpaceComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
