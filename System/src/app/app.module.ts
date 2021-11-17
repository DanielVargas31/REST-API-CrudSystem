import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { HelloComponent } from './components/hello/hello.component';
import { ListComponent } from './components/list/list.component';
import { EmployeesService } from './services/employees.service';
import { PruebaComponent } from './components/prueba/prueba.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    ControlPanelComponent,
    HelloComponent,
    ListComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
