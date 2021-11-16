import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { HelloComponent } from './components/hello/hello.component';
import { ListComponent } from './components/list/list.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'/employees',
    pathMatch:'full',
    
  },

  {
    path:'home',
    component: HelloComponent
  },
  {
    path:'empleados',
    component: ListComponent
  },

  {
    path:'empleados/add',
    component: EmployeeFormComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
