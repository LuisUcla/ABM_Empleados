import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmpleadoComponent } from './add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './list-empleado/list-empleado.component';


@NgModule({
  declarations: [
    ListEmpleadoComponent,
    AddEditEmpleadoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ListEmpleadoComponent,
    AddEditEmpleadoComponent
  ]
})
export class ComponentsRoutesModule { }
