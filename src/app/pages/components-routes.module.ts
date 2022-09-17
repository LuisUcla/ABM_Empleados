import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmpleadoComponent } from './add-edit-empleado/add-edit-empleado.component';
import { ListEmpleadoComponent } from './list-empleado/list-empleado.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [
    ListEmpleadoComponent,
    AddEditEmpleadoComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  exports: [
    ListEmpleadoComponent,
    AddEditEmpleadoComponent,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ]
})
export class ComponentsRoutesModule { }
