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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio'; 

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
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,

    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ListEmpleadoComponent,
    AddEditEmpleadoComponent,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,

    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

  ]
})
export class ComponentsRoutesModule { }
