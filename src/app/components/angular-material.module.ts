import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTableModule } from '@angular/material/table'; 
import { NavbarComponent } from './navbar/navbar.component';
import { MensajeConfirmacionComponent } from './share/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'; 
@NgModule({
  declarations: [ 
    NavbarComponent,
    MensajeConfirmacionComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatTableModule,
    NavbarComponent,
    MensajeConfirmacionComponent,
    MatDialogModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
